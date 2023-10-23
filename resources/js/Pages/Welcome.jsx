import { React, useState } from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { Link, Head } from "@inertiajs/react";

export default function Welcome(props) {
    const [show, setShow] = useState(false);
    const showClass = show ? "show" : "";
    const onCollapse = () => setShow(!show);
    return (
        <>
            <Head title="Home" />
            <Navbar
                collapseOnSelect
                className="d-flex justify-content-end align-items-end ps-0 pe-2 pb-4 navbar-theme-light"
            >
                <Navbar.Toggle
                    as={Button}
                    onClick={onCollapse}
                    aria-controls="main-navbar"
                >
                    <span className="navbar-toggler-icon" />
                </Navbar.Toggle>
                <Container fluid className="px-3 py-2">
                    <div className="d-flex justify-content-end w-100">
                        <Nav className="align-items-center">
                            {props.auth.user ? (
                                <div className="ms-2 text-dark align-items-center d-none d-lg-block">
                                    <Link
                                        href={route("dashboard")}
                                        className=""
                                    >
                                        Dashboard
                                    </Link>
                                </div>
                            ) : (
                                <div className="text-dark">
                                    <Link
                                        href={route("login")}
                                        className="mx-2"
                                    >
                                        <span className="mb-0 font-small fw-bold">
                                            Login
                                        </span>
                                    </Link>

                                    <Link href={route("register")}>
                                        <span className="mb-0 font-small fw-bold">
                                            Register
                                        </span>
                                    </Link>
                                </div>
                            )}
                        </Nav>
                    </div>
                </Container>
            </Navbar>
            <div className="d-flex justify-content-center py-10">
                <h3>Dashboard 1.0</h3>
            </div>
        </>
    );
}
