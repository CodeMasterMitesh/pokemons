import React, { useEffect, useState } from 'react'
import GoldSiverHeader from '../HomePage/GoldSiverHeader'
import { useDispatch, useSelector } from 'react-redux'
import { acceptFriendRequest, declineFriendRequest, getBlockList, getFriendRequest, unblockFriend } from '../../store/friends'
import { Card, Form, Table } from 'react-bootstrap'
import OnlineTrainers from '../Component/OnlineTrainers'

function Classification() {

    const [data, setData] = useState([

    ])
    return (
        <div>
            <GoldSiverHeader previous={'/home'} title='Gold market'>
                <div className='container p-5 challenge'>
                    <Card border='dark' text='white' className='bg-theme mt-2'>
                        <Card.Header><h3 className='text-center'> Ranking</h3></Card.Header>

                        <Card.Body className='overflow-auto'>
                            <div className='p-4' style={{ minWidth: '300px' }}>
                                <Table striped bordered hover className='table-theme'>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Trainer</th>
                                            <th>Rank</th>
                                            <th>Scoring</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((item, index) => {
                                            return <tr key={index} style={{ verticalAlign: 'middle' }} >
                                                <td className='text-center p-2'>
                                                    <img src="/images/icons/gold-vip1.png" alt="" />
                                                </td>
                                                <td className='p-4'>
                                                    <h5>{item.name}</h5>
                                                    <h6>{item.description}</h6>

                                                    {item.textBox && <Form.Control className='bg-theme text-white' style={{ width: '200px' }} type="text" value='Ho-oh'
                                                        placeholder="Enter name" />}
                                                    {item.select && <Form.Select className='bg-theme text-white' style={{ width: '100px' }}>
                                                        <option>Attack</option>
                                                        <option>Defance</option>
                                                        <option>Sp. Atk</option>
                                                        <option>Sp. Def</option>
                                                        <option>Speed</option>
                                                    </Form.Select>}

                                                </td>
                                                <td style={{ textAlign: 'center' }} >
                                                    <img src="/images/icons/gold.png" alt="" />
                                                    {item.price}
                                                </td>
                                                <td>
                                                    <div className="register-item-inner6 w-100">
                                                        <button className='specialist-button'>Buy</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        })
                                        }
                                        {!data.length && <tr>
                                            <td colSpan={5} className='text-center'> No Results.</td>
                                        </tr>}
                                    </tbody>
                                </Table>
                            </div>

                        </Card.Body>
                    </Card>
                    <div >
                        <OnlineTrainers />
                    </div>
                </div>
            </GoldSiverHeader>
        </div>
    )
}

export default Classification
