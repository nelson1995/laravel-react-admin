import { Button, Spinner } from "react-bootstrap";
import PropTypes from "prop-types";

export default function SubmitButton({ processing, text }) {
    return (
        <Button disabled={processing} variant="primary" type="submit">
            {processing ? (
                <>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />{" "}
                    Loading...{" "}
                </>
            ) : (
                text
            )}
        </Button>
    );
}

SubmitButton.propTypes = {
    processing: PropTypes.boolean,
    text: PropTypes.string,
};
