import React from 'react';
import PropTypes from 'prop-types';

const PageHeading = (props) => {
    return (
        <section className="page-heading">
            <h1 className="uppercase">{props.heading}</h1>
            {props.subheading ? <h3>{props.subheading}</h3> : null}
        </section>
    );
}

export default PageHeading;

PageHeading.propTypes = {
    heading: PropTypes.string,
    subheading: PropTypes.string
};
