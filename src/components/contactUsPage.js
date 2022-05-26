import React from "react";
import "../components/contactUsPage.css";
import {SocialMediaIconsReact} from 'social-media-icons-react';


const contactUsPage = () => {
  return (
    <div className="wrapper">
        
        <div className="form">
      
            <input className="input1" type="text" placeholder="Enter your name" required ></input>
             <input className="input1" type="email" placeholder="Enter a valid email adress" required ></input>
               <input className="input1 input3" type="text" placeholder="Enter your message" required ></input>
                <input className="input1 input4" name="subject" type="submit" ></input>
        </div>

      <div>
            <div className="footer">
            <div className="footerTxt">
                <h1>GET IN TOUCH</h1>
                <h3>Hey! We are looking forward<br>
                </br> for your feedbak!</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero possimus sunt quidem necessitatibus incidunt cupiditate nisi, nemo facere qui cum.
                </p>
                <div className="socials">
                <SocialMediaIconsReact className='social' borderColor="rgba(243,243,243,0.25)" borderWidth="4" borderStyle="solid" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,166,233,1)" iconSize="7" roundness="50%" url="https://some-website.com/my-social-media-url" size="49" />
                <SocialMediaIconsReact className='social' borderColor="rgba(243,243,243,0.25)" borderWidth="4" borderStyle="solid" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,166,233,1)" iconSize="7" roundness="50%" url="https://some-website.com/my-social-media-url" size="49" />
                <SocialMediaIconsReact className='social' borderColor="rgba(243,243,243,0.25)" borderWidth="4" borderStyle="solid" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,166,233,1)" iconSize="7" roundness="50%" url="https://some-website.com/my-social-media-url" size="49" />
                <SocialMediaIconsReact className='social' borderColor="rgba(243,243,243,0.25)" borderWidth="4" borderStyle="solid" icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,166,233,1)" iconSize="7" roundness="50%" url="https://some-website.com/my-social-media-url" size="49" />

                </div>
            </div>
            </div>

            <div className="info">

                <div className="titles">

                    <div className="title">
                     <h2>CALL US</h2>
                        <p>
                        <a href="tel:+96171526244">+96171526244</a><br>
                         </br><a href="tel:+96171526244">+96171526244</a>  
                        </p>
                    </div>

                    <div className="title">
                        <h2>LOCATION</h2>
                        <p>
                         <a href="https://www.google.com/maps/@33.8839457,35.5103763,14z" target="_blank"> Lebanon, Beirut 2083-3054 </a>
                        </p>
                    </div>

                    <div className="title">
                     <h2>BUSINESS HOURS </h2>
                        <p>
                            Mon-Fri ..... 10am-8pm <br>
                            </br>Sat-Sun ..... Closed
                        </p>
                    </div>

                </div>


            </div>
     </div>
    </div>
  );
};

export default contactUsPage;
