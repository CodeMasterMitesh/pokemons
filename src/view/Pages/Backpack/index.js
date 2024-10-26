import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import OnlineTrainers from '../../Component/OnlineTrainers';
import GoldSiverHeader from '../../../view/HomePage/GoldSiverHeader';
import Nav from 'react-bootstrap/Nav';
import Faq from './innerPage/PokemonBalls';
import Attacks from './innerPage/KeyItems';
import Moods from './innerPage/Potions';
import Skills from './innerPage/Stones';
import Items from './innerPage/SpecialItems';
import PokemonBalls from './innerPage/PokemonBalls';
import KeyItems from './innerPage/KeyItems';
import Potions from './innerPage/Potions';
import Stones from './innerPage/Stones';
import HMS from './innerPage/HMS';
import TMS from './innerPage/TMS';
import SpecialItems from './innerPage/SpecialItems';

function PokemonGuide() {
    const dispatch = useDispatch();
    const [key, setKey] = useState('pokemon_balls')

    const handleSelect = (eventKey) => setKey(eventKey);
    return (
        <GoldSiverHeader previous='/home' title='Back Pack'>
            <div className='container p-2 challenge'>
                <Card border='dark' text='white' className='bg-theme'>
                    <Card.Header><h3 className='text-center'> Backpack</h3></Card.Header>

                    <Card.Body className='text-center'>
                        <h5>Well, here is your Backpack ... In it you can store various items and other objects.</h5>
                        <h5>If it gets full you will have to buy a bigger one or sell some of your items...</h5>
                        <h5>Always remember to check the available spaces in your Backpack!</h5>
                    </Card.Body>
                </Card>
                <Card border='dark' text='white' className='bg-theme mt-2'>
                    <Card.Body className='text-center'>
                        <Nav variant="pills" activeKey={key} className='d-flex gap-3'
                            onSelect={handleSelect}
                        >
                            <Nav.Item>
                                <Nav.Link eventKey="pokemon_balls" className='bg-light-theme text-white'>
                                    Pokemon Balls
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="key_items" className='bg-light-theme text-white'>
                                    Key Items
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="special_items" className='bg-light-theme text-white'>
                                    Special Items
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="potions" className='bg-light-theme text-white'>
                                    Potions
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="stones" className='bg-light-theme text-white'>
                                    Stones
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="hms" className='bg-light-theme text-white'>
                                    HM'S
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="tms" className='bg-light-theme text-white'>
                                    TM'S
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <div className='mt-5'>
                            {
                                key == 'pokemon_balls' && <PokemonBalls />
                            }
                            {
                                key == 'key_items' && <KeyItems />
                            }
                            {
                                key == 'special_items' && <SpecialItems />
                            }
                            {
                                key == 'potions' && <Potions />
                            }
                            {
                                key == 'stones' && <Stones />
                            }
                            {
                                key == 'hms' && <HMS />
                            }
                            {
                                key == 'tms' && <TMS />
                            }
                        </div>
                    </Card.Body>
                </Card>
                <div className='mt-2'>
                    <OnlineTrainers />
                </div>
            </div>
        </GoldSiverHeader>

    )
}

export default PokemonGuide
