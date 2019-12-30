import React, { Component } from 'react';

class Filters extends Component {

    let athletes = this.props.athletes;

    let activeValues = athletes.map(athlete => athlete.active);
    activeValues = [...new Set(activeValues)];
    console.log(activeValues);

    handleFilterChange = () => {

    }

    render() {
        return(

        )
    }
}

export default Filters;
