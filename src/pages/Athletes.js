import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PageHeading from '../components/PageHeading';

import { athletes } from '../data/athletes';

class Athletes extends Component {
    render() {
        console.log(athletes);
        return (
            <main className="main-content athletes">
                <PageHeading heading="Athletes" />
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th width="10%">ID</th>
                            <th width="20%">Name</th>
                            <th width="10%">Date of Birth</th>
                            <th width="10%">Gender</th>
                            <th width="20%">Fall Sport</th>
                            <th width="10%">Winter Sport</th>
                            <th width="20%">Spring Sport</th>
                        </tr>
                    </thead>
                    <tbody>
                        {athletes.map(athlete =>
                            <NavLink to={`/athletes/athlete/${athlete.id}`}>
                                <tr>
                                    <td width="10%">{athlete.id}</td>
                                    <td width="20%">{athlete.name}</td>
                                    <td width="10%">{athlete.dateOfBirth}</td>
                                    <td width="10%">{athlete.gender}</td>
                                    <td width="20%">{athlete.fallSport ? athlete.fallSport : ' '}</td>
                                    <td width="10%">{athlete.winterSport ? athlete.winterSport : ' '}</td>
                                    <td width="20%">{athlete.springSport ? athlete.springSport : ' '}</td>
                                </tr>
                            </NavLink>
                        )}
                    </tbody>
                </table>
            </main>
        );
    }
}

export default Athletes;
