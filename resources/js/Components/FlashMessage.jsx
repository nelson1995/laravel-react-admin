import React from "react";
import { usePage } from "@inertiajs/react";

export default function FlashMessage() {
    const { flash } = usePage().props;
    return (
        <div>
            {flash.error && <div className="alert">{flash.error}</div>}
            {flash.message && <div className="alert">{flash.message}</div>}
            {flash.success && <div className="alert">{flash.success}</div>}
        </div>
    );
}
