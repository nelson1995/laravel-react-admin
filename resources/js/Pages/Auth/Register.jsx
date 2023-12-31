import React, { useEffect, useState } from "react";

import GuestLayout from "@/Layouts/GuestLayout";

import { Link, useForm, Head } from "@inertiajs/react";
import { Button, Form } from "react-bootstrap";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(
        () => () => {
            reset("password", "password_confirmation");
        },
        []
    );

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("register"));
    };

    return (
        <GuestLayout title="Create an account">
            <Head title="Register" />

            <Form className="mt-4" onSubmit={submit}>
                <Form.Group id="name" className="mb-4">
                    <Form.Label>Name</Form.Label>

                    <Form.Control
                        autoFocus
                        required
                        name="name"
                        value={data.name}
                        onChange={onHandleChange}
                        type="text"
                        isInvalid={errors.name}
                        placeholder="Your Name"
                    />

                    {errors.name && (
                        <div className="invalid-feedback feedback-show">
                            {errors.name}
                        </div>
                    )}
                </Form.Group>

                <Form.Group id="email" className="mb-4">
                    <Form.Label>Email</Form.Label>

                    <Form.Control
                        autoFocus
                        required
                        name="email"
                        value={data.email}
                        onChange={onHandleChange}
                        type="email"
                        isInvalid={errors.email}
                        placeholder="example@mail.com"
                    />

                    {errors.email && (
                        <div className="invalid-feedback feedback-show">
                            {errors.email}
                        </div>
                    )}
                </Form.Group>

                <Form.Group id="password" className="mb-4">
                    <Form.Label>Your Password</Form.Label>

                    <Form.Control
                        required
                        type="password"
                        name="password"
                        value={data.password}
                        onChange={onHandleChange}
                        isInvalid={errors.password_confirmation}
                        isValid={
                            data.password_confirmation === data.password &&
                            data.password
                        }
                        placeholder="Password"
                    />

                    {errors.password && (
                        <div className="invalid-feedback feedback-show">
                            {errors.password}
                        </div>
                    )}
                </Form.Group>

                <Form.Group id="password_confirmation" className="mb-4">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        onChange={onHandleChange}
                        autoComplete="new-password"
                        isValid={
                            data.password_confirmation === data.password &&
                            data.password
                        }
                        isInvalid={
                            errors.password_confirmation ||
                            (data.password_confirmation !== data.password &&
                                data.password_confirmation)
                        }
                        placeholder=""
                    />
                    <Form.Control.Feedback type="invalid">
                        Confirm password must same password
                    </Form.Control.Feedback>

                    {errors.password_confirmation && (
                        <div className="invalid-feedback feedback-show">
                            {errors.password_confirmation}
                        </div>
                    )}
                </Form.Group>

                <Button
                    variant="primary"
                    type="submit"
                    className="w-100"
                    disabled={
                        processing ||
                        data.password_confirmation !== data.password
                    }
                >
                    Sign in
                </Button>
            </Form>
            <div className="d-flex justify-content-center align-items-center mt-4">
                <span className="fw-normal">
                    Already have an account?
                    <Link href={route("login")} className="fw-bold">
                        {" Login here "}
                    </Link>
                </span>
            </div>
        </GuestLayout>
    );
}
