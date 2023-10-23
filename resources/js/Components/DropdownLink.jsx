import { InertiaLink } from "@inertiajs/inertia-react";
import PropTypes from "prop-types";

export default function DropdownLink({
    href,
    method = "post",
    as = "a",
    children,
}) {
    return (
        <InertiaLink
            href={href}
            method={method}
            as={as}
            className="fw-bold dropdown-item"
        >
            {children}
        </InertiaLink>
    );
}

DropdownLink.propTypes = {
    href: PropTypes.node.isRequired,
    method: PropTypes.node.isRequired,
    as: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
};
