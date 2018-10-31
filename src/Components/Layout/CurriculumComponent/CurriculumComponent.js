import React from 'react';
import './CurriculumComponent.css';
import Rex from './Rex.jpg';
import Kindergarden from './Kindergarden.jpg';
import Preschool from './prek.jpg';
import Infant from './infant3.jpg';

const curriculumcomponent = (props) => (
    <div className="corriculumComponent">
    <div className="corriculumHeader">
        <h1>Our Curriculum</h1>
    </div>
    <div className="corriculumWrapper">
        <div className="infant">
            <img className="programs-pictures" src={Infant} alt="logo"/>
            <p id="corriculumText">Infant</p>
        </div>
        <div className="toddler">
            <img className="programs-pictures" src={Rex} alt="logo" />
            <p id="corriculumText">Toddler</p>
        </div>
        <div className="preK">
            <img className="programs-pictures" src={Preschool} alt="logo"/>
            <p id="corriculumText">Preschool</p>
        </div>
        <div className="kindergardenPrep">
            <img className="programs-pictures" src={Kindergarden} alt="logo"/>
            <p id="corriculumText">Kindergarden Prep</p>
        </div>
        <div className="programButtonContainer">
            <a href='curriculum'><button>About Our Curriculum</button></a>
        </div>
    </div> 
</div>
);

export default curriculumcomponent;