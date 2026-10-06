import React, {useState} from 'react'
import emailjs from '@emailjs/browser';
import ContactModal from './ContactModal'

const Contact = (props) => {
    const [isLoading, setIsLoading] = useState(false)
    const [contact, setContact] = useState({
        name:'',
        email:'',
        description: ''
    })

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
    
    const onChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        let template_params = {
            "from_name": contact.name,
            "to_name": "my beautiful self",
            "message_html": contact.description,
            "from_email": contact.email || "None"
         }
         
        let service_id = "default_service";
        let template_id = "template_amd2ayl";
        emailjs.send(service_id, template_id, template_params, 'OIKFHf0cGEyasAXFe')
            .then((res) => {
                sleep(1000).then(() => {
                    setIsLoading(false)
                })
            }, (error) => {
                console.log("error ", error)
                setIsLoading(false)
            });
        setContact({
            name:'',
            email:'',
            description: ''
        })
    }
    return (
        <>
            {isLoading === true ? <ContactModal /> : 
            <div className='contact'>
                <form onSubmit={onSubmit}>
                <span id='contact' name='contact'> &nbsp; </span>
                    <legend>Ask me anything!</legend>
                    <input
                        className='input'
                        type='email'
                        name='email'
                        placeholder='Your email here'
                        value={contact.email}
                        onChange={onChange}
                        />
                    <input
                        className='input'
                        type='text'
                        name='name'
                        placeholder='Your name here'
                        value={contact.name}
                        onChange={onChange}
                        required
                        />
                    <textarea
                        className='input description'
                        type='text'
                        name='description'
                        placeholder='Your question or suggestion here'
                        value={contact.description}
                        onChange={onChange}
                        required
                        />
                    <button type='submit' value="Send">Submit</button>
                </form>
            </div>
            }
        </>
    )
}

export default Contact