import React from 'react';
import PageHeading from '../components/PageHeading';
import TreatmentsList from '../components/TreatmentsList';

import { treatments } from '../data/treatments';

const Treatments = (props) => {
    return (
        <main className="main-content">
            <PageHeading heading="Treatments" />
            <TreatmentsList
                treatments={treatments}
                formatDate={props.formatDate} />
        </main>
    );
}

export default Treatments;
