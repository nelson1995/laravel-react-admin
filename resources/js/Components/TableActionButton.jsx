import { InertiaLink } from "@inertiajs/inertia-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

export default function TableActionButton({
    customClass,
    onClick,
    isDelete = false,
    route,
}) {
    const className = `me-2${customClass}` ?? "";

    return (
        <InertiaLink className={className} href={route} onClick={onClick}>
            {isDelete && (
                <>
                    <FontAwesomeIcon
                        icon={faTrash}
                        className="text-danger me-2"
                    />
                    Delete
                </>
            )}
            {!isDelete && (
                <>
                    <FontAwesomeIcon icon={faPen} className="me-2" />
                    Edit{" "}
                </>
            )}
        </InertiaLink>
    );
}

TableActionButton.propTypes = {
    customClass: PropTypes.func,
    onClick: PropTypes.func,
    route: PropTypes.string,
    isDelete: PropTypes.bool,
};
