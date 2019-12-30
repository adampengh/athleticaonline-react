import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Breadcrumbs = (props) => {

    let url = props.url;
    let breadcrumb = url.split('/')[1];
    let link = `/${breadcrumb}`;

    return(
        <section className="breadcrumbs">
            <NavLink to={link}>&lt;&nbsp;Back to {breadcrumb}</NavLink>
        </section>
    );
}

export default Breadcrumbs;

Breadcrumbs.propTypes = {
    url: PropTypes.string.isRequired
}
