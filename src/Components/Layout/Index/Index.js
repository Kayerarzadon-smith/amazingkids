import React from 'react';
import './Index.css';
import FooterComponent from '../FooterComponent/FooterComponent';
import InformationComponent from '../InformationComponent/InformationComponent';
import MeetTheTeamComponent from '../MeetTheTeamComponent/MeetTheTeamComponent';
import AboutUsComponent from '../AboutUsComponent/AboutUsComponent';
import CurriculumComponent from '../CurriculumComponent/CurriculumComponent';
import TestimonialsComponent from '../TestimonialsComponent/TestimonialsComponent';


const index = (props) => (
    <div>
        <InformationComponent/>
        <AboutUsComponent/>
        <MeetTheTeamComponent/>
        <CurriculumComponent/>
        <TestimonialsComponent/>
        <FooterComponent/>
    </div>
);

export default index;