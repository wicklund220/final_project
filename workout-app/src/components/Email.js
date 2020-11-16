import React from 'react';

import emailjs from 'emailjs-com';

import {Button} from 'evergreen-ui';

const Email = () => {

    function sendEmail(event) {
      event.preventDefault();
        console.log('working')
      emailjs.sendForm('service_4wuvvba', 'template_7b1au14', event.target, 
      'user_XJkQs5dF62PCUcRiooeT1')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        event.target.reset()
    }
  
    return (
      <form className="single-item" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" 
        />
        <p>Name</p>
        <input type="text" name="from_name" placeholder='name'
        />
        <p>Email</p>
        <input type="email" name="from_email" placeholder='email'
        />
        <p>Message</p>
        <textarea name="message" placeholder='message'
        /><br/><br/>
        <input type="submit" value="Send" 
        />
        {/* <Button onClick= {sendEmail}>Send</Button> */}
      </form>
    );
  }

  export default Email;