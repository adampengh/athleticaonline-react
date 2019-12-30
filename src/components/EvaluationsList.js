import React from 'react';
import PropTypes from 'prop-types';

export default class EvaluationsList extends React.Component {
    render() {
        return(
            <table className="table table-striped table-hover" cellPadding="0" cellSpacing="0">
                <thead>
                    <tr>
                        <th width="10%" align="left">ID</th>
                        <th width="10%" align="left">Athlete ID</th>
                        <th width="20%" align="left">Created At</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.evaluations.map(evaluation =>
                        <tr key={evaluation.id}>
                            <td width="10%">{evaluation.id}</td>
                            <td width="10%">{evaluation.athleteId}</td>
                            <td width="20%">{this.props.formatDate(evaluation.createdAt, '.')}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }
}


EvaluationsList.propTypes = {
    evaluations: PropTypes.array.isRequired,
    formatDate: PropTypes.func.isRequired
}
