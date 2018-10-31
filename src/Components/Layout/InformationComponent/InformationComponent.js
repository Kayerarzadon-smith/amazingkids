import React from 'react';
import './InformationComponent.css'

const informationcomponent = (props) => (
    <div className="informationComponent">
        <div className="informationWrapper">
            <div className="hoursOfOperationWrapper">
                <div className="hoursOfOperation">
                    <h1>Hours:</h1><br class="break"/>
                    <p>M-F 7:30 a.m. - 6 p.m</p>   
                </div>
            </div>
            <div className="locationWrapper">
                <div className="location">
                    <h1>Address:</h1><br class="break"/>
                    <p>
                        1245 N.E. 140th ST.
                        Seattle, WA 98125-3108
                    </p>
                </div>
            </div>
            <div className="phoneNumberWrapper">
                <div className="phoneNumber">
                    <h1>Phone Number:</h1><br class="break"/>
                    <p>(206) 364-7428  </p>
                </div>
            </div>
        </div>
    </div>
);

export default informationcomponent;