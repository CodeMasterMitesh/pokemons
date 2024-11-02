import { createMessage } from '../../../store/friends'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

function NewConversation() {
    const [to, setTo] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()
    const handleSend = () => {
        const payload = {
            to, subject, message
        }
        dispatch(createMessage(payload))
    }
    return (
        <div>
            <div className='d-flex flex-column gap-4'>
                <div>
                    <Form.Control type="text" value={to} placeholder="To" onChange={(e) => setTo(e.target.value)} />
                </div>
                <div>
                    <Form.Control type="text" value={subject} placeholder="Subject" onChange={(e) => setSubject(e.target.value)} />
                </div>
                <div>
                    <Form.Control as="textarea" rows={12} value={message} placeholder="Message" onChange={(e) => setMessage(e.target.value)} />
                </div>
                <div>
                    <div className="register-item-inner6 w-100 mt-4">
                        <button className='challenge-button' onClick={handleSend}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewConversation
