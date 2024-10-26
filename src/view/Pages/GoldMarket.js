import React, { useEffect, useState } from 'react'
import GoldSiverHeader from '../HomePage/GoldSiverHeader'
import { useDispatch, useSelector } from 'react-redux'
import { acceptFriendRequest, declineFriendRequest, getBlockList, getFriendRequest, unblockFriend } from '../../store/friends'
import { Card, Form, Table } from 'react-bootstrap'
import OnlineTrainers from '../Component/OnlineTrainers'

function GoldMarket() {

    const [data, setData] = useState([
        {
            name: "» Vip - 7 dias",
            price: '32',
            description: 'Ao adquirir vip, você ganha algumas vantagens, como bonus de experiência/silvers, vip bar, tempo reduzido no centro pokémon e viagens e mais...',
        },
        {
            name: "» Vip - 15 dias",
            price: '60',
            description: 'Ao adquirir vip, você ganha algumas vantagens, como bonus de experiência/silvers, vip bar, tempo reduzido no centro pokémon e viagens e mais...',

        },
        {
            name: "» Vip - 30 dias",
            price: '100',
            description: ' A beautiful house with a garden and a pond with fish, your Pokémon will love it. It can accommodate up to 100 Pokémon.Ao adquirir vip, você ganha algumas vantagens, como bonus de experiência/silvers, vip bar, tempo reduzido no centro pokémon e viagens e mais...',

        },
        {
            name: "» Troca de nome",
            price: '20',
            description: 'Aqui você pode mudar o nome do seu treinador por um pequeno custo.',
            button: 'To Alter',
            textBox: true
        },
        {
            name: "» Character Swap",
            price: '20',
            description: 'Here you can change your trainer character for a small cost.',
            button: 'To Alter',
            select: true,
            options: ['Alexa', 'Ash']
        },
    ])
    return (
        <div>
            <GoldSiverHeader previous={'/home'} title='Gold market'>
                <div className='container p-2 challenge'>


                    <Card border='dark' text='white' className='bg-theme'>
                        <Card.Header><h3 className='text-center'> Spend your golds</h3></Card.Header>

                        <Card.Body className='text-center'>
                            <h5>This is an exclusive market for purchases with golds, where you can acquire VIP, change your trainer's name,
                                change the trainer/character among other things that may be added soon!</h5>
                        </Card.Body>
                    </Card>
                    <Card border='dark' text='white' className='bg-theme mt-2'>
                        <Card.Body className='overflow-auto'>
                            <div className='p-4' style={{ minWidth: '300px' }}>
                                <Table striped bordered hover className='table-theme'>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Item</th>
                                            <th>Value</th>
                                            <th>Action</th>
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

                                                    {item.textBox && <Form.Control className='bg-theme text-white'  style={{width:'200px'}} type="text" value='Ho-oh'
                                                        placeholder="Enter name" />}
                                                    {item.select && <Form.Select className='bg-theme text-white' style={{width:'100px'}}>
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

export default GoldMarket
