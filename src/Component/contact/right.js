import React from 'react';

export default function Right() {
    return (
      <>
        <form action="https://formsubmit.co/fc4c9e44a067229a2540350eaacd0b78" id='contactForm' method="POST">
            <input type="hidden" name="_template" value="table"></input>
            <div className='Row'>
                <div className='Col'>
                    <label>Name</label>
                    <input type='text' placeholder='Name' name='Name' required></input>
                </div>
                <div className='Col'>
                    <label>Email</label>
                    <input type='email' placeholder='Email' name='Email' required></input>
                </div>
            </div>
            <div className='row'>
                <label>Subject</label>
                <input type='text' placeholder='Subject' name='Subject' required></input>
            </div>
            <div className='row'>
                <label>Message</label>
                <textarea rows="7" placeholder='Write a message' name='Message' form="contactForm" required></textarea>
            </div>
            <div className='submitButton'>
                <button type="submit">Send</button>
            </div>
        </form>
      </>
    );
  }
  