import React from 'react';
import PageHeading from '../components/PageHeading';

const Dashboard = ({
    className = "main-content styleguide",
    pageHeading = "Styleguide"
}) => (
    <main className={className}>
        <PageHeading heading={pageHeading} />
        <section className="styleguide__inner">

            <article className="widget">
                <div className="widget__inner">
                    <button className="btn">
                        <span>Continue</span>
                    </button>
                </div>
            </article>

            <article className="widget">
                <div className="widget__inner">
                </div>
            </article>

            <article className="widget">
                <div className="widget__inner">
                </div>
            </article>

            <article className="widget">
                <div className="widget__inner">
                </div>
            </article>

            <article className="widget">
                <div className="widget__inner">
                </div>
            </article>

            <article className="widget">
                <div className="widget__inner">
                </div>
            </article>

        </section>
    </main>
)

export default Dashboard;
