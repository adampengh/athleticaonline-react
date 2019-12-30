import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { sports } from '../data/sports';

const fallSports = sports.filter(sport => sport.seasonId === 1);
const winterSports = sports.filter(sport => sport.seasonId === 2);
const springSports = sports.filter(sport => sport.seasonId === 3);

class AthletesList extends Component {
    constructor(props) {
        super(props);
        this.filterAthletes = this.filterAthletes.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.state = {
            filters: {
                active: true,
                archived: false
            }
        }
    }

    filterAthletes = () => {
        let athletes = this.props.athletes;
        let filters = Object.keys(this.state.filters);
        filters.forEach((filter) => {
            let value = this.state.filters[filter];
            athletes = athletes.filter(athlete => athlete[filter] === value);
        });
        return athletes;
    }


    handleFilterChange = (event) => {
        let filters = document.querySelectorAll('[data-table-filter]');
        let filtersObj = {};
        filters.forEach((filter) => {
            let name = filter.name;
            let value = Boolean(parseInt(filter.value));
            filtersObj[name] = value;
        });
        this.setState({
            filters: filtersObj
        });
        this.filterAthletes();
    }

    render() {

        const styles = {
            width: '100%'
        }

        let athletes = this.filterAthletes();

        return(
            <section className="list athletes" style={styles}>
                <div className="filter">
                    <h3>Filters:</h3>
                    <div className="filter__container">
                        <select defaultValue="1" className="filter__select" name="active" data-table-filter="active" onChange={this.handleFilterChange}>
                            <option value="1">Active</option>
                            <option value="0">Inactive</option>
                        </select>
                    </div>
                    <div className="filter__container">
                        <select defaultValue="0" className="filter__select" name="archived" data-table-filter="archived" onChange={this.handleFilterChange}>
                            <option value="1">Archived</option>
                            <option value="0">Non-Archived</option>
                        </select>
                    </div>
                </div>
                <table className="table table-striped table-hover" cellPadding="0" cellSpacing="0">
                    <thead>
                        <tr>
                            <th width="5%"  align="left">ID</th>
                            <th width="15%" align="left">Name</th>
                            <th width="10%" align="left">Date of Birth</th>
                            <th width="10%" align="left">Gender</th>
                            <th width="5%"  align="left">Grade</th>
                            <th width="15%" align="left">Fall Sport</th>
                            <th width="15%" align="left">Winter Sport</th>
                            <th width="15%" align="left">Spring Sport</th>
                            <th width="5%">Active</th>
                            <th width="5%">Archived</th>
                        </tr>
                    </thead>
                    <tbody>
                        {athletes.map(athlete =>
                            <tr key={athlete.index}>
                                <td width="5%">{athlete.index}</td>
                                <td width="15%">
                                    <NavLink to={`/athletes/athlete/${athlete.index}`}>
                                        {athlete.firstName} {athlete.lastName}
                                    </NavLink>
                                </td>
                                <td width="10%">{athlete.dateOfBirth}</td>
                                <td width="10%">{athlete.gender}</td>
                                <td width="5%">{athlete.grade}</td>
                                <td width="15%">
                                    {fallSports.map(sport => {
                                        if (sport.sportId === athlete.fallSport) {
                                            return sport.sportName;
                                        }
                                        return null;
                                    })}</td>
                                <td width="15%">
                                    {winterSports.map(sport => {
                                        if (sport.sportId === athlete.winterSport) {
                                            return sport.sportName;
                                        }
                                        return null;
                                    })}</td>
                                <td width="15%">
                                    {springSports.map(sport => {
                                        if (sport.sportId === athlete.springSport) {
                                            return sport.sportName;
                                        }
                                        return null;
                                    })}</td>
                                <td width="5%" align="center">{athlete.active ? <span className="green"></span> : <span className="red"></span>}</td>
                                <td width="5%" align="center">{athlete.archived ? <span className="green"></span> : <span className="red"></span>}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </section>
        )
    }
}

export default AthletesList;
