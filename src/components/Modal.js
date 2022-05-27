import React from "react";
import "./Modal.css"
const Modal = () => {
    return ( 
        <div>


      <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalToggleLabel">Lend Book</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form action="">
            <label htmlFor="name"> &nbsp;
                <input placeholder="Name" type="text" id="name" />
            </label><br /><br />

            <label htmlFor="name"> &nbsp;
                <input placeholder="Email" type="email" id="email" />
            </label> <br /><br />

            <label htmlFor="phone"> &nbsp;
                <input placeholder="Phone " type="number" id="phone" />
            </label><br /><br />

            <label htmlFor="from"> &nbsp;From&nbsp;
                <input type="date" id="from" />   
            </label>

            <label htmlFor="name">&nbsp; To &nbsp;
                <input  type="date" id="to" />
            </label>
        </form>
      </div>
      <div class="modal-footer">
        <button type="submit" class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Submit</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalToggleLabel2">Thank you for your request.</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
         Kindly wait for a confirmation message
      </div>
      <div class="modal-footer">
        {/* <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back to first</button> */}
      </div>
    </div>
  </div>
</div>
{/* <a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Open first modal</a> */}
        </div>
     );
}
 
export default Modal;