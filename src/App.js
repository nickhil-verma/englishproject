
import './App.css';
import { useRef,useState } from 'react';

import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
function App() {
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xxomne7",
        "template_h4sh03m",
        form.current,
        "i6Aaq5I0OEyQLqAPi"
      )
      .then((result) => {
        console.log('Email sent successfully:', result.text)
        form.current.reset();
        setDone(true);
        console.log('email sent sucessfully');  
      })
      .catch((error) => {
        console.error('Email not sent:', error);
      });
  };
  return (
    <div className="App">
       <h1 className='Expheading sectionheading' >Team Members</h1>
    <div id="Experience"className='expcontainer'>
    <motion.div
     initial={{x:-100, opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.4,duration:0.8}} viewport={{
      once:true,
    }}
     className='Experience-holder'>
        <div className='experience-card'>
            <img src="" alt="Nikhil Verma"className='explogo'>

            </img>
            <h3>
              Nikhil Verma
                
            </h3>
            <ul className='explist'>
                  <li>
                  <h3>
            Individual Contribution done for project
            </h3>
                  </li>
                  <li>
                    ⚪ Contributes for JS repos
                  </li>
            </ul>
        </div>
        
    </motion.div>    
    <motion.div
      initial={{x:100, opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.4,duration:0.8}} viewport={{
        once:true,
      }}
    className='Experience-holder'>
        <div className='experience-card'>
            <img src="" alt='Om singh' className='explogo'>

            </img>
            <h3>
            Om Singh
            </h3>
            <ul className='explist'>
                  <li >
                  <h3 style={{textAlign:"start"}}>
            Individual Contribution done for project
            </h3>
                  </li>
                  <li>
                    topic 
                  </li>
                  <li>
                  topic
                  </li>
            </ul>
        </div>
        
    </motion.div>    
    </div>
    <div className='contact-form' >
            <form ref={form} onSubmit={sendEmail}>
                <div className='input holder'><motion.input
                 initial={{x:-100, opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.4,duration:0.8}} viewport={{
                once:true,
              }}
                required className='forminput' name="user_name" type='text' placeholder='Name'></motion.input>
                <motion.input 
                 initial={{x:100, opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.4,duration:0.8}} viewport={{
                once:true,
              }}
                 required className='forminput' name="user_email" type='email' placeholder='Email@example.com'></motion.input></div>
                <motion.input 
                initial={{y:100, opacity:0}} whileInView={{y:0,opacity:1}} transition={{delay:0.6,duration:0.8}} viewport={{
                    once:true,
                  }}
                  className='forminput'type='text' name="mobno" placeholder='Subject'></motion.input>
                <motion.textarea className='textarea' initial={{y:100, opacity:0}} whileInView={{y:0,opacity:1}} transition={{delay:0.7,duration:0.8}} viewport={{
                    once:true,
                  }}  required type='text' name="message" placeholder='Your Message'></motion.textarea>
                  <span className="submit-msg">{done && "Message Sent. Confirmation is sent to your mail"}</span>
                <motion.button initial={{ opacity:0}} whileInView={{opacity:1}} transition={{delay:0.8,duration:0.8}} viewport={{
                    once:true,
                  }}className='submitbtn' value="Send">Submit</motion.button>
            </form>
        </div>
    </div>
  );
}

export default App;
