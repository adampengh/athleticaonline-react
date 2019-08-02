import React from 'react';

const PageHeading = (props) => {
    return (
        <section className="page-heading">
            <h1 className="uppercase">{props.heading}</h1>
        </section>
    );
}

export default PageHeading;
