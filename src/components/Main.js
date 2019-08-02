import React from 'react';
import PageHeading from './PageHeading';

const MainContent = () => {
    return (
        <main className="main-content">
            <PageHeading heading="Dashboard" />
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

export default MainContent;
