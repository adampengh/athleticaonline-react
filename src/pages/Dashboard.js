import React from 'react';
import PageHeading from '../components/PageHeading';

const Dashboard = ({
    className = "main-content dashboard",
    pageHeading = "Dashboard"
}) => (
    <main className={className}>
        <PageHeading heading={pageHeading} />
        <section className="quick-stats">
            <div className="quick-stats__container">
                <h3>Athletes</h3>
                <p>103</p>
            </div>
        </section>
        <section className="flex flex-wrap align-item--start justify-content--between flex-direction--row">
            <article className="widget flex">Widget</article>
            <article className="widget flex">Widget</article>
            <article className="widget flex">Widget</article>
            <article className="widget flex">Widget</article>
            <article className="widget flex">Widget</article>
            <article className="widget flex">Widget</article>
        </section>
    </main>
)

export default Dashboard;
