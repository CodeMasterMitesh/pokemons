import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import { Row, Col, Form, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../../store/auth';
import { getSearchPlayers } from '../../../store/friends';
import Accordion from 'react-bootstrap/Accordion';
import Toast from 'react-bootstrap/Toast';
import OnlineTrainers from '../../../view/Component/OnlineTrainers';
import GoldSiverHeader from '../../../view/HomePage/GoldSiverHeader';


function Fishery() {
    const dispatch = useDispatch();

    return (
        <GoldSiverHeader previous='/home' title='Fishery'>
            <div className='container p-2 challenge'>
                <Card border='dark' text='white' className='bg-theme'>
                    <Card.Header><h3 className='text-center'> Fishery</h3></Card.Header>

                    <Card.Body className='text-center'>
                        <h5>Welcome to the fishing tournament.</h5>
                        <h5>Those trainers who accumulate the most points will win the prize at the end of the day.</h5>
                        <h5 className='mt-5'>1st Place: 20,000 </h5>
                        <h5>2nd Place: 10,000 </h5>
                        <h5>3rd Place: 5,000</h5>

                    </Card.Body>
                </Card>
                <Card border='dark' text='white' className='bg-theme mt-1'>
                    <Card.Header>
                        <Toast
                            className="d-inline-block m-1 bg-theme w-100"
                        >
                            <Toast.Body className='text-white'>
                                <h5 className='text-center'>YOUR POINTS WILL BE RESET AT THE END OF THE DAY!</h5>
                            </Toast.Body>
                        </Toast>

                    </Card.Header>
                </Card>
                <Card border='dark' text='white' className='bg-theme mt-1'>
                    <Card.Header><h3 className='text-center'> Fishery</h3></Card.Header>
                    <Card.Body className='d-flex justify-content-center flex-wrap'>
                        <div className='fishing-road'>
                            <img src="/images/items/Fishing rod.png" alt="" />
                            <h5 className='text-center m-2'>Fishing Rod</h5>
                            <Form.Check
                                className='d-flex justify-content-center'
                                name="road"
                                id="validationFormik0"
                                defaultChecked
                            />
                        </div>
                        <div className="register-item-inner6 w-100 mt-4">
                            <button type="submit" className='challenge-button'>Fish</button>
                        </div>
                    </Card.Body>
                </Card>
                <Card border='dark' text='white' className='bg-theme mt-1'>
                    <Card.Body >
                        <Row>
                            <Col md={6}>
                                <h4 className='text-center'>Best fishermen of the day</h4>
                                <Table striped bordered hover variant='dark' className='table-theme'>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Trainer</th>
                                            <th>Points</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>NightSlash</td>
                                            <td>71,312 Points</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Lost</td>
                                            <td>0 Points</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>jkhan</td>
                                            <td>0 Point</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                            <Col>
                                <h4 className='text-center'>Best fishermen of yesterday</h4>

                                <Table striped bordered hover variant='dark' className='table-theme'>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Trainer</th>
                                            <th>Points</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>NightSlash</td>
                                            <td>71,312 Points</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Lost</td>
                                            <td>0 Points</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>jkhan</td>
                                            <td>0 Point</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <div className='mt-2'>
                    <OnlineTrainers />
                </div>
            </div>
        </GoldSiverHeader>

    )
}

export default Fishery
