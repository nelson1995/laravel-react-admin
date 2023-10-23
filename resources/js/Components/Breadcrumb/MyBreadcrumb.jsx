import { Breadcrumb } from "react-bootstrap";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import BreadcrumbItem from "./BreadcrumbItem";

export default function MyBreadcrumb({ children }) {
    return (
        <Breadcrumb
            className="d-none d-md-inline-block"
            listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}
        >
            <BreadcrumbItem href={route("dashboard")}>
                <FontAwesomeIcon icon={faHome} />
            </BreadcrumbItem>
            {children}
        </Breadcrumb>
    );
}

MyBreadcrumb.propTypes = {
    children: PropTypes.object,
};
