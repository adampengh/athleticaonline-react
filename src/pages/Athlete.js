import React, { Component } from 'react';
import PageHeading from '../components/PageHeading';
import Breadcrumbs from '../components/Breadcrumbs';

import { athletes } from '../data/athletes';
import { sports } from '../data/sports';

const fallSports = sports.filter(sport => sport.seasonId === 1);
const winterSports = sports.filter(sport => sport.seasonId === 2);
const sprintSports = sports.filter(sport => sport.seasonId === 3);

class Athlete extends Component {

    render() {

        let url = this.props.match.url;
        let id = parseInt(this.props.match.params.id);
        let athlete = athletes.filter((athlete) => athlete.index === id);
        athlete = athlete[0];

        let heading = `${athlete.firstName} ${athlete.lastName}`;
        let subheading = `Athlete ID: ${athlete.index}`;

        return(
            <main className="main-content athlete">
                <Breadcrumbs url={url} />
                <PageHeading heading={heading} subheading={subheading} />
                <table>
                    <tbody>
                        <tr>
                            <th align="left" width="200px">ID</th>
                            <td>{athlete.index}</td>
                        </tr>
                        <tr>
                            <th align="left">Date of Birth</th>
                            <td>{athlete.dateOfBirth}</td>
                        </tr>
                        <tr>
                            <th align="left">Fall Sport</th>
                            <td>
                                <select name="fallSport" defaultValue={athlete.fallSport}>
                                    <option value="DEFAULT"></option>
                                    {fallSports.map(sport =>
                                        <option key={sport.sportId} value={sport.sportId}>{sport.sportName}</option>
                                    )}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th align="left">Winter Sport</th>
                                <td>
                                    <select name="winterSport" defaultValue={athlete.winterSport}>
                                        <option value="DEFAULT"></option>
                                        {winterSports.map(sport =>
                                            <option key={sport.sportId} value={sport.sportId}>{sport.sportName}</option>
                                        )}
                                    </select>
                                </td>
                        </tr>
                        <tr>
                            <th align="left">Spring Sport</th>
                                <td>
                                    <select name="sprintSport" defaultValue={athlete.springSport}>
                                        <option value="DEFAULT"></option>
                                        {sprintSports.map(sport =>
                                            <option key={sport.sportId} value={sport.sportId}>{sport.sportName}</option>
                                        )}
                                    </select>
                                </td>
                        </tr>
                    </tbody>
                </table>
            </main>
        )
    }
}

export default Athlete;
