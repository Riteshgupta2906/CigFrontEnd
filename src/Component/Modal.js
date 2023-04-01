import React from 'react';
import ReactDOM from 'react-dom';


const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay" />
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">


        <div className="ModalContent">

          <div className="modalImage">img</div>

          <div className="modalText">
            <div className="modal-header">Challenges and Opportunities in Cloud Operations
              <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="x">
            <div className="date">
              06.07.2019
            </div>
            <div className="y">CIG in its segment of Corporate Lecture Series presented a lecture on Challenges & Opportunities in Cloud Operations by Mr. Raman Krishnaswami (Senior Director of Global Cloud Operations at SAP). In this lecture he showcased opportunities for students and experts to come up with innovative solutions and get full value from the transition to Cloud based computing.</div>

            </div>
           
          </div>
        </div>

      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;