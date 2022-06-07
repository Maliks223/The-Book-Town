import React from 'react'
import '../components/footer.css'
import {SocialMediaIconsReact} from 'social-media-icons-react';

const Footer = () => {
  return (
    <footer className='Ftr'>
         <div className="socialsF">
                <SocialMediaIconsReact className='socialF' borderColor="var(--primary)" borderWidth="4" borderStyle="solid" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="var(--primary)" iconSize="7" roundness="50%"  size="60" />
                <SocialMediaIconsReact className='socialF' borderColor="var(--primary)" borderWidth="4" borderStyle="solid" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="var(--primary)" iconSize="7" roundness="50%"  size="60" />
                <SocialMediaIconsReact className='socialF' borderColor="var(--primary)" borderWidth="4" borderStyle="solid" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="var(--primary)" iconSize="7" roundness="50%"  size="60" />
                <SocialMediaIconsReact className='socialF' borderColor="var(--primary)" borderWidth="4" borderStyle="solid" icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="var(--primary)" iconSize="7" roundness="50%"  size="60" />
                </div>
    </footer>
  )
}

export default Footer