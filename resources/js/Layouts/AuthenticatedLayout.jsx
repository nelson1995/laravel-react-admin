import React, { useState } from "react";
import FlashMessage from "@/Components/FlashMessage";
import MyBreadcrumb from "@/Components/Breadcrumb/MyBreadcrumb";
import NavBar from "@/Components/NavBar/NavBar";
import Sidebar from "@/Components/Sidebar/Sidebar";

export default function AuthenticatedLayout({
    auth,
    flash,
    breadcrumb,
    pageDesc,
    pageTitle,
    pageHeaderChild,
    children,
}) {
    return (
        <div className="min-h-screen bg-gray-100">
            <Sidebar auth={auth} />
            <main className="content">
                <NavBar auth={auth} />
                <FlashMessage />
                <div className="d-xl-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                    <div className="d-block mb-4 mb-xl-0">
                        {breadcrumb.length < 1 ? (
                            ""
                        ) : (
                            <MyBreadcrumb>{breadcrumb}</MyBreadcrumb>
                        )}

                        {pageTitle && <h4>{pageTitle}</h4>}

                        {pageDesc && <p className="mb-0">{pageDesc}</p>}
                    </div>
                    {pageHeaderChild && pageHeaderChild}
                </div>
                {children}
            </main>
        </div>
    );
}
