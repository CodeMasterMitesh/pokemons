import React, { useEffect, useState } from 'react'
import GoldSiverHeader from '../HomePage/GoldSiverHeader'
import { useDispatch, useSelector } from 'react-redux'
import { acceptFriendRequest, declineFriendRequest, getBlockList, getFriendRequest, unblockFriend } from '../../store/friends'
import { Card, Form, Table } from 'react-bootstrap'
import OnlineTrainers from '../Component/OnlineTrainers'
import { goldMarket } from '../../store/pages'
import { getProfile } from '../../store/auth'
import { getCharacters } from '../../store/pokemon'
import { set } from 'date-fns'
import { toast } from 'react-toastify'

function GoldMarket() {
    const dispatch = useDispatch()
    const userData = useSelector(state => state.auth.user_data)
    const [username, setUsername] = useState('')
    const [character, setCharacter] = useState('')
    const characters = useSelector(state => state.pokemon.characters);

    useEffect(() => {
        setUsername(userData.username)
        setCharacter(userData.character)
    }, [userData])
    const [data, setData] = useState([
        {
            id: 1,
            name: "» Vip - 7 days",
            price: '32',
            button: 'Buy',
            key: 'buy_vip7',
            description: 'When you purchase VIP, you get some benefits, such as experience/silvers bonus, VIP bar, reduced time at the Pokémon Center and trips and more...',
        },
        {
            id: 2,
            name: "» Vip - 15 days",
            price: '60',
            button: 'Buy',
            key: 'buy_vip15',
            description: 'When you purchase VIP, you get some benefits, such as experience/silvers bonus, VIP bar, reduced time at the Pokémon Center and trips and more...',

        },
        {
            id: 3,
            name: "» Vip - 30 days",
            price: '100',
            button: 'Buy',
            key: 'buy_vip30',
            description: 'When you purchase VIP, you get some benefits, such as experience/silvers bonus, VIP bar, reduced time at the Pokémon Center and trips and more...',

        },
        {
            id: 4,
            name: "» Name change",
            price: '20',
            description: "Here you can change your trainer's name for a small fee.",
            button: 'To Alter',
            textBox: true,
            key: 'change_name'
        },
        {
            id: 5,
            name: "» Character Swap",
            price: '20',
            description: 'Here you can change your trainer character for a small cost.',
            button: 'To Alter',
            select: true,
            key: 'change_perso',
        },
    ])
    const handleBuy = (item) => {
        let payload = {}
        if (item.id == 4) {
            if (username) {
                payload[item.key] = username
            } else {
                toast.warn('Please add name')
                return
            }
        } else if (item.id == 5) {
            if (character) {
                payload[item.key] = character
            } else {
                toast.warn('Please select character')
                return
            }
        }
        else {
            payload[item.key] = item.price
        }
        dispatch(goldMarket(payload))
    }
    useEffect(() => {
        dispatch(getProfile())
        dispatch(getCharacters())
    }, [])
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

                                                    {item.textBox && <Form.Control className='bg-theme text-white' style={{ width: '200px' }} type="text" value={username} onChange={(e) => { setUsername(e.target.value) }}
                                                        placeholder="Enter name" />}
                                                    {item.select && <Form.Select value={character} onChange={(e) => { setCharacter(e.target.value) }} className='bg-theme text-white' style={{ width: '100px' }}>
                                                        {/* <option>None</option> */}
                                                        {characters.map((item) => {
                                                            return <option>{item.naam}</option>
                                                        })}
                                                    </Form.Select>}

                                                </td>
                                                <td style={{ textAlign: 'center' }} >
                                                    <img src="/images/icons/gold.png" alt="" />
                                                    {item.price}
                                                </td>
                                                <td>
                                                    <div className="register-item-inner6 w-100">
                                                        <button style={{ width: "100px", height: "40px", fontSize: '12px' }} onClick={() => { handleBuy(item) }}>{item.button}</button>
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
