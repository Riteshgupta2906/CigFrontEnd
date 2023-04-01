import React, { Fragment } from 'react'
import img from "../Component/images/eve.svg";
import Navbar from './header';
import './events.css';
import events from './events_data'
import Modal from "./Modal";
import useModal from "./useModal";

const Events = () => {
    const{isShowing,toggle}=useModal();
    return(
        <>
           <Navbar />
           <Fragment>
           <div className="h">Events</div>
      <div className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </div>
      <div className="image" >
        <img className ="imgWidth" src={img}></img>
      </div>
      <div className="timeline_head">Timeline for our events</div>
      <div className="timeline visible">
        <ul>
          {events.map(event =>(
            <li>
               <div className="text" key={event.id}>
                <div className="design visible">
                <div className="topic">{event.title}</div>
                    <div className="detail visible">{event.description} </div>
                    <div className="button"onClick={toggle}>read more</div>
                    <Modal 
                    isShowing={isShowing}
                    hide={toggle}
                     event={event} 
                    />
                    <div className="date">{event.time}</div>
                </div>
              </div> 
            </li>
          )
          )}
        </ul>
      </div>
           </Fragment>
        </>
    )
}
export default Events;