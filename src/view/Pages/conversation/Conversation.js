import React from 'react'
import { Form } from 'react-bootstrap'

function Conversation() {
    const items=[
        {
            name:"PK 1",
            last:'Hello',
            date:"01/10/2024 12:33:10",
            img:'/images/characters/Steven/npc.png'
        },
        {
            name:"PK 1",
            last:'Hello',
            date:"01/10/2024 12:33:10",
            img:'/images/characters/Steven/npc.png'
        },
        {
            name:"PK 1",
            last:'Hello',
            date:"01/10/2024 12:33:10",
            img:'/images/characters/Steven/npc.png'
        },
        {
            name:"PK 1",
            last:'Hello',
            date:"01/10/2024 12:33:10",
            img:'/images/characters/Steven/npc.png'
        },
    ]
    return (
        <div>
            <div>
                <h1 className='text-center'>Conversation</h1>
                <div>{items.map((item) => {
                    return <div className="ar_single_item_table_work hard w-100" style={{ marginBlock: '5px' }}>
                        <div className="p-4 d-flex justify-content-between w-100">
                            <div className='d-flex' style={{gap:'10px'}}>
                                <div>
                                    <Form.Check className='tf-check' type='checkbox' />
                                </div>
                                <div>
                                    <img src={item.img} alt="" height={25} />
                                </div>
                                <div className='m-0'>
                                    <b>{item.name}</b>
                                    <p>You: <b>{item.last}</b></p>
                                </div>
                            </div>
                            <div>
                                <b>{item.date}</b>
                            </div>
                        </div>

                    </div>
                })}
                </div>
            </div>
        </div>
    )
}

export default Conversation
