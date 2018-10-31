import React from 'react';
import './InformationWrapper.css'
import HoursOfOperationWrapper from './HoursOfOperationWrapper/HoursOfOperationWrapper';
import LocationWrapper from './LocationWrapper/LocationWrapper';

const informationwrapper = (props) => (
    <div className="informationwrapper">
        <HoursOfOperationWrapper />
        <LocationWrapper />
    </div>
);

export default informationwrapper;