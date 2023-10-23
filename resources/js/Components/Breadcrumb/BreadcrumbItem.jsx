import { Link } from "@inertiajs/react";
import PropTypes from "prop-types";

export default function BreadcrumbItem({ href, active, children }) {
    let ItemClass = "breadcrumb-item ";
    if (active) {
        ItemClass += "active";
    }

    return (
        <>
            {active ? (
                <span className={ItemClass}>{children}</span>
            ) : (
                <Link href={href} className={ItemClass}>
                    {children}
                </Link>
            )}
        </>
    );
}

BreadcrumbItem.propTypes = {
    href: PropTypes.string,
    active: PropTypes.bool,
};
