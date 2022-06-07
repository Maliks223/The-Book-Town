import React from 'react'
import '../components/AboutUsImage.css'
import aboutUsImage from '../assets/e-book.jpg'

const AboutUsImage = () => {
  return (
    <div className='aboutUsMain wrapper'>
            <div className='img-aboutUs'>
              <a href="#" ><img src='https://images.unsplash.com/photo-1614849963640-9cc74b2a826f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' alt=""/></a>

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