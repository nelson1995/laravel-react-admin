import { React, useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
// import { Head, InertiaLink } from "@inertiajs/inertia-react";
import { Head } from "@inertiajs/react";
import { Breadcrumb, Container, Col, Row } from "react-bootstrap";
import CardOne from "@/Components/CardOne";
import CardTwo from "@/Components/CardTwo";
import CardThree from "@/Components/CardThree";
import LineChart from "@/Components/LineChart";
import PieChart from "@/Components/PieChart";
import BarGraph from "@/Components/BarGraph";
import DoughnutChart from "@/Components/DoughnutChart";
import Table from "@/Components/Table";

export default function Dashboard(props) {
    const { user } = props.auth;
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    const getUsers = async (token) => {
        await axios
            .get("/api/v1/users", {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => setError(error));
    };

    const authUser = async () => {
        await axios
            .post(
                "/api/v1/login-with-api-token",
                {
                    api_token: user.api_token,
                },
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            )
            .then((response) => {
                getUsers(response.data.access_token);
            })
            .catch((error) => setError(error));
    };

    useEffect(() => {
        authUser();
    }, []);

    if (error) return `Error: ${error}`;
    if (users.length < 1) return [];

    console.log("users => ", users);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            flash={props.flash}
            pageTitle=""
            pageDesc=""
            breadcrumb=""
            pageHeaderChild=""
        >
            <Head title="Dashboard" />
            <Container fluid="md">
                <Row>
                    <Col>
                        <CardOne />
                    </Col>
                    <Col>
                        <CardTwo />
                    </Col>
                    <Col>
                        <CardThree />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <LineChart />
                    </Col>
                    <Col>
                        {/* <PieChart /> */}
                        <BarGraph />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table users={users} />
                    </Col>
                </Row>
            </Container>
        </AuthenticatedLayout>
    );
}
