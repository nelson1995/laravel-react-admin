import PropTypes from "prop-types";

export default function ValidationErrors({ errors }) {
    return (
        Object.keys(errors).length > 0 && (
            <div className="mb-4">
                <div className="font-medium text-red-600">
                    Whoops! Something went wrong.
                </div>
                <ul className="mt-3 list-disc list-inside text-sm text-red-600">
                    {Object.keys(errors).map((key, index) => (
                        <li key={index}>{errors[key]}</li>
                    ))}
                </ul>
            </div>
        )
    );
}

ValidationErrors.propTypes = {
    errors: PropTypes.object.isRequired,
};
