import React from "react";
import Select from "react-select";
import SubmitButton from "@/Components/SubmitButton";
import { Card, Col, Form, Row } from "react-bootstrap";

export default function UsersForm({
    submitAction,
    setData,
    data,
    errors,
    processing,
    rolesDefaultValue,
    rolesHandleChange,
    SelectOptions,
    submitText,
}) {
    return (
        <Card border="light" className="bg-white shadow-sm mb-4">
            <Card.Body>
                <Form name="EditForm" onSubmit={submitAction}>
                    <Row>
                        <Col md={6} className="mb-3">
                            <Form.Group id="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    value={data.name}
                                    placeHolder="Enter user name"
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />
                                {errors.name && (
                                    <div className="invalid-feedback feedback-show">
                                        {errors.name}
                                    </div>
                                )}
                            </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    required
                                    type="email"
                                    aria-autocomplete="none"
                                    name="email"
                                    value={data.email}
                                    placeHolder="Enter user email"
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />
                                {errors.email && (
                                    <div className="invalid-feedback feedback-show">
                                        {errors.email}
                                    </div>
                                )}
                            </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                            <Form.Group id="role">
                                <Form.Label>User Role</Form.Label>
                                <Select
                                    defaultValue={rolesDefaultValue}
                                    isMulti
                                    name="roles[]"
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                    onChange={rolesHandleChange}
                                    required
                                    options={SelectOptions}
                                />
                                {errors.roles && (
                                    <div className="invalid-feedback feedback-show">
                                        {errors.roles}
                                    </div>
                                )}
                            </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    required
                                    type="password"
                                    aria-autocomplete="none"
                                    name="password"
                                    value={data.password}
                                    placeHolder="Enter password"
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                />
                                {errors.password && (
                                    <div className="invalid-feedback feedback-show">
                                        {errors.password}
                                    </div>
                                )}
                            </Form.Group>
                        </Col>
                    </Row>
                    <div className="mt-3">
                        <SubmitButton
                            text={submitText}
                            processing={processing}
                        />
                    </div>
                </Form>
            </Card.Body>
        </Card>
    );
}
