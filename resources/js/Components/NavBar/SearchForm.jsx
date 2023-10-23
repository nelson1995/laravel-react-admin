import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

export default function SeachForm() {
    const [searchTerm, setSearchTerm] = useState();

    const updateSearchTerm = (event) => {
        setSearchTerm(event.target.value);
        console.log("Form Input => ", event.target);
        console.log("searchTerm => ", event.target.value);
    };

    return (
        <div className="d-flex align-items-center">
            <Form className="navbar-search">
                <Form.Group id="topbarSearch">
                    <InputGroup className="input-group-merge search-bar">
                        <InputGroup.Text>
                            <FontAwesomeIcon icon={faSearch} />
                        </InputGroup.Text>
                        <Form.Control
                            type="text"
                            placeholder="Type to search"
                            onChange={updateSearchTerm}
                            value={searchTerm}
                        />
                    </InputGroup>
                </Form.Group>
            </Form>
        </div>
    );
}

SeachForm.propTypes = {
    searchTerm: PropTypes.string,
};
