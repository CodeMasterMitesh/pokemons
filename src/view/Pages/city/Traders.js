import React, { useEffect, useState } from 'react'
import { Card, Carousel, Col, Form, Row, Table } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import OnlineTrainers from 'view/Component/OnlineTrainers';
import GoldSiverHeader from 'view/HomePage/GoldSiverHeader';
import traders from 'view/JsonData/traders';

function Traders() {

    return (
        <div>
            <GoldSiverHeader previous='/city' title='Travel'>
                <div className='container'>
                    <Card border='dark' text='white' className='bg-theme'>
                        <Card.Header><h3 className='text-center'>Comerciantes</h3></Card.Header>

                        <Card.Body className='text-center'>
                            <h5>Here you can trade with Kayl, Wayne, and Remy</h5>
                            <h5>The level of the Pokémon you receive is based on what you gave in the trade.</h5>
                            <h5>If you have 2 of the same Pokémon with you, the first one in the order is the one you will trade</h5>
                        </Card.Body>
                    </Card>
                    <Card border='dark' text='white' className='bg-theme mt-2'>
                        <Card.Header><h3 className='text-center'>Casino</h3></Card.Header>
                        <Card.Body>
                            {traders.map((item) => {
                                return <Row className='p-3 card-header'>
                                    <Col xs={4} className='text-center'>
                                        <img src={`/images/${item.img}`} alt="" />
                                    </Col>
                                    <Col xs={8} >
                                        {item.description}
                                    </Col>
                                </Row>
                            })}
                        </Card.Body>
                    </Card>
                    <OnlineTrainers />
                </div>

            </GoldSiverHeader>

        </div>
    )
}

export default Traders
