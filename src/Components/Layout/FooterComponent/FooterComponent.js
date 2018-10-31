import React from 'react';
import './FooterComponent.css';
import yelp from "./yelp.png";

const footercomponent = (props) => (
    <div className="sun">
        <div className="block2">
            <div className='block1'>
                <div className="block1-content">
                    <div className="footerWrapper">
                        <div className ="footerLinks">
                            <p><b>Amazing Kids Christian Child Care</b></p><br/>
                            <ul>
                                <a href="/"><li>Home</li></a>
                                <a href="/curriculum"><li>Our Curriculum</li></a>
                                <a href="mailto:christiankidslearning@gmail.com?Subject=Hi,%20Amazing%20Kids!"><li>Contact</li></a>
                            </ul> 
                        </div>
                        <div className ="footerSocials">
                            <p><b>Socials</b></p><br/>
                            <ul>
                            {/* <!-- <a href="/"><li><img src="../static/amazingKidsApp/images/twitter.png" alt="logo">Follow Amazing Kids Care on Twitter</li></a>
                                <a href="/"><li><img src="../static/amazingKidsApp/images/facebook.png" alt="logo">Follow Amazing Kids Care on Facebook</li></a>
                                <a href="/"><li><img src="../static/amazingKidsApp/images/instagram.png" alt="logo">Follow Amazing Kids Care on Instagram</li></a> --> */}
                                <a href="https://www.yelp.com/biz/amazing-kids-christian-child-care-seattle"><li>Review Amazing Kids Care on Yelp<img src={yelp} alt="logo"/></li></a>
                            </ul>                            
                        </div>
                    <p className="watermark">© 2018 Amazing Kids Christian Child Care. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    </div>  
</div>
);

export default footercomponent;