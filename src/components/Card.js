import React,{useState} from 'react';
import "./Card.css"

const Card = ({title,imageUrl,body}) => {
    const[modal,setModal] = useState(false);

    const handleToggle = () => {
        setModal(!modal);
    }
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
                    <a onClick={handleToggle} className="lend">
                        Lend
                    </a>
                </button>
            </div>
            {modal && (
                <div className="modal">
                    <div onClick={handleToggle} className="overlay"></div>
                    <div className="modal-content">
                        <form>
                            <h2>Lend Form</h2>
                            <label htmlFor="name">Name
                                <input id='name' type="text"/>
                            </label><br />

                            <label htmlFor="email">Email
                                <input id='email' type="email"/>
                            </label><br />

                            <label htmlFor="nb">Phone
                                <input id='nb' type="nummber"/>
                            </label><br />

                            <label htmlFor="from">From:</label>
                            <input type="date" id="from"/>

                            <label htmlFor="to">To:</label>
                            <input type="date" id="to"/>

                            <button className='submit-btn' type='submit'>Submit</button>&nbsp;
                            <button className='close-btn' onClick={handleToggle}>Close</button>
                        </form>
                    </div>
                </div>
            )}
            
        </div>
    );
}
 
export default Card;