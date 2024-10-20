import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import OnlineTrainers from '../../Component/OnlineTrainers';
import GoldSiverHeader from '../../../view/HomePage/GoldSiverHeader';
import Nav from 'react-bootstrap/Nav';
import Faq from './innerPage/Faq';
import Attacks from './innerPage/Attacks';
import Moods from './innerPage/Moods';
import Skills from './innerPage/Skills';
import Items from './innerPage/Items';

function PokemonGuide() {
    const dispatch = useDispatch();
    const [key, setKey] = useState('faq')

    const handleSelect = (eventKey) => setKey(eventKey);
    return (
        <GoldSiverHeader previous='/home' title='Pokemon Guid'>
            <div className='container p-5 challenge'>
                <Card border='dark' text='white' className='bg-theme'>
                    <Card.Body className='text-center'>
                        <Nav variant="pills" activeKey={key} className='d-flex gap-3'
                        onSelect={handleSelect}
                        >
                            <Nav.Item>
                                <Nav.Link eventKey="faq" href="#/home" className='bg-light-theme text-white'>
                                    FAQs
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="attcaks" href="#/home" className='bg-light-theme text-white'>
                                    Info Attacks
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="moods" href="#/home" className='bg-light-theme text-white'>
                                    Info Moods
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="skill" href="#/home" className='bg-light-theme text-white'>
                                    Skill Info
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="item" href="#/home" className='bg-light-theme text-white'>
                                    Item Info
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <div className='mt-5'>
                            {
                                key == 'faq' && <Faq />
                            }
                            {
                                key == 'attcaks' && <Attacks />
                            }
                            {
                                key == 'moods' && <Moods />
                            }
                            {
                                key == 'skill' && <Skills />
                            }
                            {
                                key == 'item' && <Items />
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
