import React from 'react';
import PageHeading from '../components/PageHeading';

const Treatments = () => {
    return (
        <main className="main-content">
            <PageHeading heading="Treatments" />
            <section className="flex flex-wrap align-item--start justify-content--between flex-direction--row">
                <article className="widget flex">Widget</article>
                <article className="widget flex">Widget</article>
                <article className="widget flex">Widget</article>
                <article className="widget flex">Widget</article>
                <article className="widget flex">Widget</article>
                <article className="widget flex">Widget</article>
            </section>
        </main>
    );
}

export default Treatments;
