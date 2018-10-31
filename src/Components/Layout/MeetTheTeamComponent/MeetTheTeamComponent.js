import React from 'react';
import './MeetTheTeamComponent.css'
import Nancy from './NancyJohnson.jpg';
import Veneta from './veneta .jpg';

const meettheteamcomponent = (props) => (
    <div className='meetTheTeamComponent'>
    <div className="ownerWrapper">
    <br/>
    <div className="meetTheTeamHeader">
        <h1>Meet the Team</h1>
    </div>
    <br/>
    <div className="profileWrapper">
        <div className="profile">
            <img className="ownerPicture" src={Nancy} alt="logo" />
            <div className="ownerInfo">
                <h2>Nancy Johnson</h2>
                <p><b>Founder</b></p>
            </div>
            <p className="profileStory">Nancy is passionate about teaching the children through play and group learning activities. I enjoy teaching math, themed curriculum and Bible story's.</p>
        </div>
        <div className="profile">
            <img className="ownerPicture" src={Veneta} alt="logo" />
            <div className="ownerInfo">
                <h2>Veneta Kearns</h2>
                <p><b>Founder</b></p>
            </div>
            <p className="profileStory">Veneta loves to teach art, cooking, science and outdoor play. Seeing the excitement of children discovering and creating is a joy.</p>
        </div>
    </div>
    </div>
</div>
);

export default meettheteamcomponent;
