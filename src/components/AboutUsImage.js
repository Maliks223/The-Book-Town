import React from 'react'
import '../components/AboutUsImage.css'
import aboutUsImage from '../assets/e-book.jpg'

const AboutUsImage = () => {
  return (
    <div className='aboutUsMain wrapper'>
            <div className='img-aboutUs'>
              <a href="#" ><img src={aboutUsImage} alt=""/></a>

            </div>
            <div className='content-aboutUs'>
              <h1>The Book Town.</h1>
              <h3> About us:</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non sequi molestiae reprehenderit, adipisci mollitia exercitationem qui ipsa ex voluptates incidunt fugit maiores illum commodi possimus quisquam voluptatibus sint suscipit molestias?.</p>
             </div>
      </div>
  )
}

export default AboutUsImage;