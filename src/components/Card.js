import React from 'react';
import "./Card.css"
import Popup from 'reactjs-popup';


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
                

                    <Popup trigger={<button> Lend </button>} 
                    position="right center">
                        

                        <div className='lendForm'>

                                <input className='lendInput lendInput1'  type="text" placeholder="Name" required ></input>
                                <input className='lendInput lendInput2'  type="email" placeholder="Email " required ></input>
                                <input className='lendInput lendInput3'  type="tel"  placeholder="Phone Number" required ></input>
                                
                                <div className='dates'>
                                <label className='lendInput lendInput4'  for="start"> From: </label>
                                <input className='lendInput lendInput5'  type="date" name="begin"  placeholder="dd-mm-yyyy" value="" min="2021-06-01" max="2030-12-31" ></input>
                                <label className='lendInput lendInput6'  for="start"> To: </label>
                                <input className='lendInput lendInput7'  type="date" name="begin"  placeholder="dd-mm-yyyy" value="" min="2021-06-01" max="2030-12-31" ></input>
                                </div>

                                <button className='lendInput8'>Submit</button>
                                
                                
                        </div>
                        
                    </Popup>
                
        
            </div>
        </div>
    );
}
 
export default Card;