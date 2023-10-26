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
                        <Table user={user} />
                    </Col>
                </Row>
            </Container>
        </AuthenticatedLayout>
    );
}
