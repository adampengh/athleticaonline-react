import React from 'react';

export default class TreatmentsList extends React.Component {
    render() {
        return(
            <table className="table table-striped table-hover" cellPadding="0" cellSpacing="0">
                <thead>
                    <tr>
                        <th width="10%" align="left">ID</th>
                        <th width="10%" align="left">Evaluation ID</th>
                        <th width="20%" align="left">Created At</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.treatments.map(treatment =>
                        <tr key={treatment.id}>
                            <td width="10%">{treatment.id}</td>
                            <td width="10%">{treatment.evaluationId}</td>
                            <td width="20%">{treatment.createdAt}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }
}
