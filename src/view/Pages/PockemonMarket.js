import React, { useState } from 'react'
import { Card, Col, Form, Nav, Row, Table } from 'react-bootstrap'
import GoldSiverHeader from 'view/HomePage/GoldSiverHeader'

export default function PockemonMarket() {

    const [key, setKey] = useState('Auctions')
    return (
        <div>
            <GoldSiverHeader previous={'/home'} title='Pockemmon Market'> 
                <div className='container'>
                    <Card border='dark' text='white' className='bg-theme'>
                        <Card.Header>
                            <h3 className='text-center'>Pockemmon Market</h3>
                            <h5 className='text-center'>Buy and sell Pokémon at the best price with our sales methods!</h5>
                        </Card.Header>
                        <Card.Body>
                            <div>
                                <h3 className='card-header text-center'>Filter Sales</h3>
                                <div className='p-2'>
                                    <Row>
                                        <Col md={3} >
                                            <label>Species:</label>
                                            <div>
                                                <Form.Select className='bg-theme text-white'>
                                                    <option value="">None</option>
                                                </Form.Select>
                                            </div>
                                        </Col>
                                        <Col md={3} >
                                            <label>Full power :</label>
                                            <div>
                                                <Form.Control className='bg-theme text-white' type='number' />
                                            </div>
                                        </Col>
                                        <Col md={3} >
                                            <label>Rigion :</label>
                                            <div>
                                                <Form.Select className='bg-theme text-white'>
                                                    <option value="">None</option>
                                                </Form.Select>
                                            </div>
                                        </Col>
                                        <Col md={3} >
                                            <label>Price :</label>
                                            <div className='d-flex justify-content-around'>
                                                <Form.Control className='bg-theme text-white' type='number' />
                                                <Form.Select className='bg-theme text-white'>
                                                    <option value="">None</option>
                                                </Form.Select>
                                            </div>
                                        </Col>
                                        <Col md={3} >
                                            <label>Trainer :</label>
                                            <div>
                                                <Form.Control className='bg-theme text-white' type='text' />
                                            </div>
                                        </Col>
                                        <Col md={3} >
                                            <label>Level :</label>
                                            <div className='d-flex justify-content-around'>
                                                <Form.Control className='bg-theme text-white' type='number' />
                                                <Form.Select className='bg-theme text-white'>
                                                    <option value="">None</option>
                                                </Form.Select>
                                            </div>
                                        </Col>
                                        <Col md={3} >
                                            <label>Equipped :</label>
                                            <div>
                                                <Form.Select className='bg-theme text-white'>
                                                    <option value="">None</option>
                                                </Form.Select>
                                            </div>
                                        </Col>
                                        <Col md={3} >
                                            <div className='d-flex align-items-center h-100'>
                                                <div className='d-flex gap-3' ><label>Just Shiny : </label><Form.Check className='bg-theme text-white' type='checkbox' /></div>
                                            </div>
                                        </Col>
                                        <Col md={12}>
                                            <div className="register-item-inner6 w-100 mt-4">
                                                <button style={{ width: "100px", height: "30px", fontSize: '12px' }} >Search</button>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className='card-header'></div>
                                <div>
                                    <div>
                                        <Nav variant="pills" activeKey={key} className='d-flex gap-3'>
                                            <Nav.Item>
                                                <Nav.Link eventKey="Auctions" className='bg-light-theme text-white'>
                                                    Auctions
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="Direct" className='bg-light-theme text-white'>
                                                    Direct
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="Provate" className='bg-light-theme text-white'>
                                                    Provate
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className='d-flex align-items-center'>
                                                <div className='d-flex gap-3'>
                                                    <Form.Check type='check' /> <span>Show only my Pokémon</span>
                                                </div>
                                            </Nav.Item>
                                        </Nav>
                                    </div>

                                    <div className='mt-3'>
                                        <Table className='table-theme text-white'>
                                            <thead>
                                                <tr>
                                                    <td>Pokemon</td>
                                                    <td>Features</td>
                                                    <td>Total Power</td>
                                                    <td>Item</td>
                                                    <td>Date</td>
                                                    <td>Price</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td colspan={6}>
                                                        <p className='text-center'>
                                                            No data
                                                        </p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>

                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </GoldSiverHeader >

        </div >
    )
}
