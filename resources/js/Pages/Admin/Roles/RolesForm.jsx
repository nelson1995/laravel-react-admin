import React from "react";
import Select from "react-select";
import SubmitButton from "@/Components/SubmitButton";
import { Card, Col, Form, Row } from "react-bootstrap";

export default function RolesForm({
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
                                    placeHolder="Enter role name"
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
                            <Form.Group id="role">
                                <Form.Label>Role</Form.Label>
                                <Select
                                    defaultValue={rolesDefaultValue}
                                    isMulti
                                    name="permissions[]"
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
