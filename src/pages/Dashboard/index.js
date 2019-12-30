import React from 'react';
import PageHeading from '../../components/PageHeading';
import LineGraph from '../../components/LineGraph';

import { athletes } from '../../data/athletes';
import { evaluations } from '../../data/evaluations';
import { treatments } from '../../data/treatments';

const active = athletes.filter(athlete => athlete.active === true);
const archived = athletes.filter(athlete => athlete.archived === true);

// Calculate Number of Evaluations
const filterEvaluations = (evaluations, days) => {
    const day = 60 * 60 * 24 * 1000;
    let now = new Date();
    return evaluations.filter((evaluation) => {
        let createdAt = new Date(evaluation.createdAt);
        createdAt = createdAt.getTime();
        return ( (createdAt > (now - (day * days))) && (createdAt < now) );
    });
};

// Calculate Number of Treatments
const filterTreatments = (treatments, days) => {
    const day = 60 * 60 * 24 * 1000;
    let now = new Date();
    return treatments.filter((treatment) => {
        let createdAt = new Date(treatment.createdAt);
        createdAt = createdAt.getTime();
        return ( (createdAt > (now - (day * days))) && (createdAt < now) );
    });
};

export default class Dashboard extends React.Component {
    render() {
        return(
            <main className="main-content dashboard">
                <PageHeading heading="Dashboard" />
                <div className="flex">
                    <section className="dashboard-stats">
                        <div className="dashboard-stats__heading">
                            <h3>Athletes</h3>
                        </div>
                        <div className="dashboard-stats__container">
                            <div className="dashboard-stats__item">
                                <h4>Athletes</h4>
                                <p>{athletes.length}</p>
                            </div>
                            <div className="dashboard-stats__item">
                                <h4>Active</h4>
                                <p>{active.length}</p>
                            </div>
                            <div className="dashboard-stats__item">
                                <h4>Inactive</h4>
                                <p>{athletes.length - active.length}</p>
                            </div>
                            <div className="dashboard-stats__item">
                                <h4>Archived</h4>
                                <p>{archived.length}</p>
                            </div>
                        </div>
                    </section>
                    <section className="dashboard-stats">
                        <div className="dashboard-stats__heading">
                            <h3>Evaluations</h3>
                        </div>
                        <div className="dashboard-stats__container">
                            <div className="dashboard-stats__item">
                                <h4>Last<br/>7 Days</h4>
                                <p>{filterEvaluations(evaluations, 7).length}</p>
                            </div>
                            <div className="dashboard-stats__item">
                                <h4>Last<br/>30 Days</h4>
                                <p>{filterEvaluations(evaluations, 30).length}</p>
                            </div>
                            <div className="dashboard-stats__item">
                                <h4>Last<br/>60 Days</h4>
                                <p>{filterEvaluations(evaluations, 60).length}</p>
                            </div>
                            <div className="dashboard-stats__item">
                                <h4>Last<br/>90 Days</h4>
                                <p>{filterEvaluations(evaluations, 90).length}</p>
                            </div>
                        </div>
                    </section>
                    <section className="dashboard-stats">
                        <div className="dashboard-stats__heading">
                            <h3>Treatments</h3>
                        </div>
                        <div className="dashboard-stats__container">
                            <div className="dashboard-stats__item">
                                <h4>Last<br/>7 Days</h4>
                                <p>{filterTreatments(treatments, 7).length}</p>
                            </div>
                            <div className="dashboard-stats__item">
                                <h4>Last<br/>30 Days</h4>
                                <p>{filterTreatments(treatments, 30).length}</p>
                            </div>
                            <div className="dashboard-stats__item">
                                <h4>Last<br/>60 Days</h4>
                                <p>{filterTreatments(treatments, 60).length}</p>
                            </div>
                            <div className="dashboard-stats__item">
                                <h4>Last<br/>90 Days</h4>
                                <p>{filterTreatments(treatments, 90).length}</p>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="flex">
                    <section className="dashboard-stats">
                        <div className="dashboard-stats__heading">
                            <h3>Evaluations vs Treatments</h3>
                        </div>
                        <div className="dashboard-stats__container">
                            <LineGraph
                                evaluations={evaluations}
                                filterEvaluations={filterEvaluations}
                                treatments={treatments}
                                filterTreatments={filterTreatments} />
                        </div>
                    </section>
                </div>

            </main>
        )
    }
}
