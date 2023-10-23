import { Card, Image } from "react-bootstrap";
import React, { useEffect, useState } from "react";

export default function Table({ users }) {
    console.log("Users => ", users);
    if (users === undefined) return [];
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
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
}
