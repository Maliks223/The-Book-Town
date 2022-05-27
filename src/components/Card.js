import React from 'react';
import "./Card.css"

const Card = ({title,imageUrl,body}) => {
    return (  
         <div className='card-container'>
            <div className="image-container">
                <img src={imageUrl} alt="card" />
            </div>

            <div className="card-content">
                <div className="card-title">
                    <h3>{title}</h3>
                </div>
                <div className="card-body">
                    <p>{body}</p>
                </div>
            </div>
            
            <div className="btnCard">
                <button>
                    <a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" className="lend">
                        Lend
                    </a>
                </button>
            </div>
        </div>
    );
}
 
export default Card;