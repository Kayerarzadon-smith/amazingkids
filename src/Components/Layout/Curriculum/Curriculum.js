import React from 'react';
import FooterComponent from '../FooterComponent/FooterComponent';
import InformationComponent from '../InformationComponent/InformationComponent';
import InfantComponent from './InfantComponent/InfantComponent';
import ToddlerComponent from './ToddlerComponent/ToddlerComponent';
import PreschoolComponent from './PreschoolComponent/PreschoolComponent';
import KindergradenPrepComponent from './KindergardenPrepComponent/KindergardenPrepComponent';


const curriculum = (props) => (
    <div>
        <InformationComponent/>
        <InfantComponent/>
        <ToddlerComponent/>
        <PreschoolComponent/>
        <KindergradenPrepComponent/>
        <FooterComponent/>
    </div>
);

export default curriculum;