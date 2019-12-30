import React, { Component } from 'react';

import AthletesList from '../components/AthletesList';
import PageHeading from '../components/PageHeading';

import { athletes } from '../data/athletes';

class Athletes extends Component {
    render() {
        return (
            <main className="main-content athletes">
                <PageHeading heading="Athletes" />
                <AthletesList athletes={athletes} />
            </main>
        );
    }
}

export default Athletes;
