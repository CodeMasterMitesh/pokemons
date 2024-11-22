import React, { useState } from 'react'
import { Card, Col, Form, Nav, Row } from 'react-bootstrap'
import Pagination from '@mui/material/Pagination';

import { Tooltip } from 'react-tooltip'
import Gold from 'view/Component/Gold'
import OnlineTrainers from 'view/Component/OnlineTrainers'
import Silver from 'view/Component/Silver'
import GoldSiverHeader from 'view/HomePage/GoldSiverHeader'

function Pockemart() {
    const [key, setKey] = useState('pokeballs')
    const handleSelect = (eventKey) => setKey(eventKey);
    const components = {
        Silver: Silver,
        Gold: Gold,
    }
    const [data, setData] = useState({
        pokeballs: {
            type: 'text',
            name: "Pokeballs",
            data: [
                {
                    img: '/images/items/Master ball.png',
                    name: 'Master ball',
                    type: "Gold",
                    value: 50,
                    compo: 'text',
                    desc: "123"
                },
                {

                    img: '/images/items/Poke ball.png',
                    name: 'Poke ball',
                    type: "Silver",
                    value: 200,
                    compo: 'text',
                    desc: "123"


                }
            ]
        },
        key_items: {
            type: 'check',
            name: "Key items",
            data: [
                {
                    img: '/images/items/Black Box.png',
                    name: 'Black Box',
                    type: "Gold",
                    value: 50,
                }
            ]
        },
        special_items: {
            type: 'text',
            name: "Special items",
            data: [
                {
                    img: '/images/items/Rare candy.png',
                    name: 'Rare candy',
                    type: "Gold",
                    value: 25,
                },
                {
                    img: '/images/items/Burn Drive.png',
                    name: 'Burn Drive',
                    type: "Gold",
                    value: 100,
                },
            ]
        },
        potion: {
            type: 'text',
            name: "Potions",
            data: [
                {
                    img: '/images/items/Potion.png',
                    name: 'Potion',
                    type: "Silver",
                    value: 300,
                    compo: 'text'
                },
            ]
        },
        stones: {
            type: 'text',
            name: "Stones",
            data: [
                {
                    img: '/images/items/Audinotite.png',
                    name: 'Audinotite',
                    type: "Gold",
                    value: 450,
                    compo: 'text'
                },
            ]
        },
        pokemons: {
            type: 'check',
            name: "pokemons",
            data: [
                {
                    img: '/images/items/egg.gif',
                    name: 'Common',
                    type: "Silver",
                    value: 1675,
                },
            ]
        },
        attacts: {
            type: 'text',
            name: "Attacks",
            data: [
                {
                    img: '/images/items/Attack_Fighting.png',
                    name: 'TM01',
                    type: "Gold",
                    value: 5,
                }
            ],
        }
    })

    return (
        <div>
            <GoldSiverHeader previous='/map' title='PokéMart'>
                <div className='container'>
                    <Card border='dark' text='white' className='bg-theme'>
                        <Card.Header><h3 className='text-center'> PokéMart</h3></Card.Header>

                        <Card.Body className='text-center'>
                            <h5>Hello, trainer! Can I help you with something? Well... Let me guess... Are you out of Poke Balls?</h5>
                            <h5>If so, you're in the right place! Check out our beautiful stock of Poké Balls...</h5>
                            <h5>If not, we have several other Items and Pokémon that will help you on your journey!</h5>
                        </Card.Body>
                    </Card>
                    <Card border='dark' text='white' className='bg-theme mt-2 p-3'>
                        <Nav variant="pills" activeKey={key} className='d-flex gap-3'
                            onSelect={handleSelect}
                        >
                            <Nav.Item>
                                <Nav.Link eventKey="pokeballs" className='bg-light-theme text-white'>
                                    Poke balls
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="key_items" className='bg-light-theme text-white'>
                                    Key items
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="special_items" className='bg-light-theme text-white'>
                                    Special items
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="potion" className='bg-light-theme text-white'>
                                    Potion
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="stones" className='bg-light-theme text-white'>
                                    Stones
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="pokemons" className='bg-light-theme text-white'>
                                    Pokemons
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="attacts" className='bg-light-theme text-white'>
                                    Attacts
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <div className='mt-5'>
                            <Card.Header><h3 className='text-center'> {data[key]?.name}</h3></Card.Header>

                            <Row className='justify-content-center'>
                                {data[key]?.data?.map((item,index) => {
                                    const Component = components[item.type];
                                    return <Col md={2} sm={2} xs={2} className='p-2' key={index}>
                                        <div className='pokemar-card pl-style'>
                                            <div className='img-round'>
                                                <img src={item.img} alt="" />
                                            </div>
                                            <h6>{item.name}</h6>
                                            <p className='mb-3'><Component /> : {item.value} <span data-tooltip-content={item.desc} data-tooltip-id={item.img} className='cursor-pointer'> [?]</span>
                                                <Tooltip id={item.img} />
                                            </p>
                                            {data[key]?.type == 'check' && <Form.Check type='radio' name='radio' />}
                                            {data[key]?.type == 'text' && <Form.Control type='numebr' className='bg-theme text-white' placeholder='Ex: 0' />}
                                        </div>
                                    </Col>
                                })}
                            </Row>
                        </div>
                        <div className='d-flex justify-content-end'>
                            <Pagination variant='outlined text-white' color="primary" shape="rounded" count={60}  />
                        </div>
                    </Card>
                    <OnlineTrainers />
                </div>
            </GoldSiverHeader>


        </div>
    )
}

export default Pockemart
