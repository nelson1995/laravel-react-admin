import React from "react";
import RolesForm from "@/Pages/Admin/Roles/RolesForm";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, Head } from "@inertiajs/react";
import BreadcrumbItem from "@/Components/Breadcrumb/BreadcrumbItem";

export default function Create(props) {
    const { data, setData, errors, post, processing } = useForm({
        name: "",
        permissions: [],
    });

    const { permissions } = props.permissions;

    function handleSubmit(e) {
        e.preventDefault();
        post(route("admin.roles.store"));
    }
    const handleChange = (value, actionMeta) => {
        const val = value.map((a) => a.value);
        setData("permissions", val);
    };
    const BreadCrumbItems = (
        <>
            <BreadcrumbItem href={route("admin.roles.index")}>
                Roles
            </BreadcrumbItem>
            <BreadcrumbItem active>Create Role</BreadcrumbItem>
        </>
    );

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            flash={props.flash}
            pageTitle="Add New Role"
            pageDesc="Add a new role in your system"
            breadcrumb={BreadCrumbItems}
        >
            <Head title="Create Role" />
            <div>
                <RolesForm
                    submitAction={handleSubmit}
                    setData={setData}
                    data={data}
                    errors={errors}
                    processing={processing}
                    rolesDefaultValue={data.permissions}
                    rolesHandleChange={handleChange}
                    SelectOptions={permissions}
                    submitText="Create"
                />
            </div>
        </AuthenticatedLayout>
    );
}
