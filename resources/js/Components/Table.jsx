import { Card, Image } from "react-bootstrap";
import React, { useEffect, useState } from "react";

export default function Table(user) {
    const { api_token } = user.user;
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    console.log("user => ", user);
    console.log("apiToken => ", api_token);

    useEffect(() => {
        const authUser = async () => {
            await axios
                .post(
                    "/api/v1/login-with-api-token",
                    {
                        apiToken: `${api_token}`,
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

        authUser();
    }, []);

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

    if (error) return `Error: ${error}`;
    if (users.length === 0) return [];

    return (
        <Card className="shadow mb-4">
            <Card.Body className="pb-3">
                <Table>
                    <thead>
                        <tr>
                            <td className="border-0">Name</td>
                            <td className="border-0">Email</td>
                            <td className="border-0">Avatar</td>
                        </tr>
                    </thead>
                    <tbody>
                        {users.data.map(({ id, name, email, avatar }) => (
                            <tr key={id}>
                                <td className="border-0">{name}</td>
                                <td className="border-0">{email}</td>
                                <td className="border-0">
                                    {avatar === null ? (
                                        ""
                                    ) : (
                                        <Image
                                            src={avatar}
                                            className="user-avatar sm-avatar rounded-circle"
                                        />
                                    )}
                                </td>
                            </tr>
                        ))}
                        {users.data.length === 0 && (
                            <tr>
                                <td className="px-6 py-4 border-t" colSpan="4">
                                    Data not found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
}
