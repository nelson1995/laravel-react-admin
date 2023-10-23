import React from "react";
import { Head } from "@inertiajs/react";
import Inertia from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
import { Card, Table } from "react-bootstrap";
import TableActionButton from "@/Components/TableActionButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import BreadcrumbItem from "@/Components/Breadcrumb/BreadcrumbItem";

export default function Dashboard(props) {
    const data = props.users;

    const destroy = (id) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-danger m-1",
                cancelButton: "btn btn-success m-1",
            },
            buttonStyling: false,
        });
        swalWithBootstrapButtons
            .fire({
                title: "Are you sure?",
                text: "You wo'nt be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, delete it.",
                cancelButtonText: "No, cancel it",
                reverseButtons: true,
                didOpen: () => {},
            })
            .then((result) => {
                if (result.isConfirmed) {
                    Inertia.delete(route("admin.users.destroy", id));
                }
            });
    };
    const BreadcrumbItems = <BreadcrumbItem active>Users</BreadcrumbItem>;
    const { auth } = props;
    data.map(({ id, name, email, roles }) => console.log("data => ", roles));
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            flash={props.flash}
            pageTitle="Users List"
            pageDesc="Manage Your Users"
            breadcrumb={BreadcrumbItems}
            pageHeaderChild={
                auth.can.create_user && (
                    <InertiaLink
                        href={route("admin.users.create")}
                        className="btn btn-primary"
                    >
                        Create
                    </InertiaLink>
                )
            }
        >
            <Head title="Users" />
            <Card border="light" className="shadow-sm mb-4">
                <Card.Body className="pb-0">
                    <Table
                        responsive
                        className="table-centered table-nowrap rounded mb-9"
                    >
                        <thead className="thead-light">
                            <tr>
                                <th className="border-0">id</th>
                                <th className="border-0">name</th>
                                <th className="border-0">email</th>
                                <th className="border-0">roles</th>
                                <th className="border-0">deleted at</th>
                                <th className="border-0">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(({ id, name, email, roles }) => (
                                <tr key={id}>
                                    <td className="border-0">{id}</td>
                                    <td className="border-0">{name}</td>
                                    <td className="border-0">{email}</td>
                                    <td className="fw-bold border-0 break-spaces">
                                        {roles.map(({ id, name }) => (
                                            <span
                                                className="badge badge-primary me-2"
                                                key={id}
                                            >
                                                {name}
                                            </span>
                                        ))}
                                    </td>
                                    <td className="border-0">{}</td>
                                    <td className="border-0">
                                        <TableActionButton
                                            route={route(
                                                "admin.users.edit",
                                                id
                                            )}
                                        />
                                        <TableActionButton
                                            onClick={() => {
                                                destroy(id);
                                            }}
                                            isDelete
                                        />
                                    </td>
                                </tr>
                            ))}
                            {data.length === 0 && (
                                <tr>
                                    <td className="py-4 border-t">
                                        <div className="text-end">
                                            No Users found
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </AuthenticatedLayout>
    );
}
