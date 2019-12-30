import React from 'react';
import PropTypes from 'prop-types';
import PageHeading from '../components/PageHeading';
import EvaluationsList from '../components/EvaluationsList';

import { evaluations } from '../data/evaluations';

export default class Evaluations extends React.Component {
    render() {
        return(
            <main className="main-content">
                <PageHeading heading="Evaluations" />
                <EvaluationsList
                    evaluations={evaluations}
                    formatDate={this.props.formatDate} />
            </main>
        )
    }
}

Evaluations.propTypes = {
    formatDate: PropTypes.func.isRequired
}
