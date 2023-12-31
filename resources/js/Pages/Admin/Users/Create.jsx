import React from "react";
import { useForm, Head } from "@inertiajs/react";
import BreadcrumbItem from "@/Components/Breadcrumb/BreadcrumbItem";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import UsersForm from "@/Pages/Admin/Users/UsersForm";

export default function Create(props) {
    const { roles } = props;

    const { data, setData, errors, post, processing } = useForm({
        name: "",
        email: "",
        password: "",
        roles: [],
    });

    function handleSubmit(e) {
        e.preventDefault();
        if (data.roles.length < 1) {
            errors.roles = "The Role is Required";
            return;
        }
        post(route("admin.users.store"));
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
            <BreadcrumbItem active>Create User</BreadcrumbItem>
        </>
    );
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            pageTitle="Create New User"
            pageDesc="Create a new user in your system"
            breadcrumb={BreadcrumbItems}
        >
            <Head title="Create User" />
            <div>
                <UsersForm
                    submitAction={handleSubmit}
                    setData={setData}
                    data={data}
                    errors={errors}
                    processing={processing}
                    rolesDefaultValue={data.roles}
                    rolesHandelChange={handleChange}
                    SelectOptions={roles}
                    submitText="Create"
                />
            </div>
        </AuthenticatedLayout>
    );
}
