import React from "react";
import { Head, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import BreadcrumbItem from "@/Components/Breadcrumb/BreadcrumbItem";
import UsersForm from "@/Pages/Admin/Users/UsersForm";

export default function Edit(props) {
    const { user, roles } = props;
    const rolesArray = user.roles.map((a) => ({ value: a.id, label: a.name }));

    const { data, setData, errors, post, processing } = useForm({
        name: user.name || "",
        email: user.email || "",
        password: "",
        roles: user.roles.map((a) => a.id),
        _method: "PUT",
    });

    function handleSubmit(e) {
        e.preventDefault();

        // NOTE: We are using POST method here, not PUT/PACH. See comment above.
        post(route("admin.users.update", user.id));
    }
    const handleChange = (value, actionMeta) => {
        const val = value.map((a) => a.value);

        setData("roles", val);
    };
    const BreadcrumbItems = (
        <>
            <BreadcrumbItem href={route("admin.users.index")}>
                Users
            </BreadcrumbItem>
            <BreadcrumbItem active>{data.email}</BreadcrumbItem>
        </>
    );
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            pageTitle="Edit User "
            pageDesc="Edit User Information"
            breadcrumb={BreadcrumbItems}
        >
            <Head title="Edit User" />
            <div>
                <UsersForm
                    submitAction={handleSubmit}
                    setData={setData}
                    data={data}
                    errors={errors}
                    processing={processing}
                    rolesDefaultValue={rolesArray}
                    rolesHandelChange={handleChange}
                    SelectOptions={roles}
                    submitText="Update"
                />
            </div>
        </AuthenticatedLayout>
    );
}
