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
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat vero saepe in et dolorum debitis cumque. Quibusdam hic recusandae fuga blanditiis architecto nam iure quam perferendis, nisi laudantium incidunt. Illo, id aspernatur quidem asperiores assumenda perferendis ducimus sapiente consequuntur temporibus quaerat in? Voluptatum, iste aspernatur. Atque quam, optio totam laborum dolorem deleniti voluptates ullam nobis nostrum iste deserunt quasi laboriosam officia nulla facere vitae a ipsa. Omnis, molestiae earum dignissimos autem in recusandae ipsam nobis et magnam aut quam totam, nisi repellendus vel? Magni sequi dicta molestiae delectus voluptate molestias nostrum totam porro et! Voluptas fugiat labore repudiandae at suscipit harum quos ullam unde rerum atque, cupiditate beatae. Eveniet accusantium exercitationem porro neque voluptate provident, optio non praesentium repellendus doloribus, rerum animi ratione blanditiis temporibus maiores dignissimos, illum dolore soluta! Dolorum asperiores dolorem natus quidem ipsa. Inventore perferendis possimus nemo, cupiditate nesciunt iste alias obcaecati expedita vero officiis error rerum ipsum labore voluptatem sunt officia ut praesentium molestias nulla quisquam dignissimos at commodi neque quidem? Quidem officia corrupti enim ducimus animi vitae cumque explicabo est et nam nesciunt voluptatem adipisci quo, consequuntur tenetur recusandae dolore eos? Suscipit dolore molestiae ex, quaerat consectetur voluptate quo nihil obcaecati, vero eum voluptatibus ullam.</p>
             </div>
      </div>
  )
}

export default AboutUsImage;