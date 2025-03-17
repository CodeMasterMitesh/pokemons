import React, { useEffect, useState } from 'react'
import { Card, Carousel, Col, Form, Row, Table } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getPlayerPokemons } from 'store/pokemon';
import OnlineTrainers from 'view/Component/OnlineTrainers';
import Silver from 'view/Component/Silver';
import Ticket from 'view/Component/Ticket';
import GoldSiverHeader from 'view/HomePage/GoldSiverHeader';
import casino from 'view/JsonData/casino'

function Casino() {

    const [selectedIndex, setSelectedIndex] = useState(0)
    // const player_pokemons = useSelector(state => state.pokemon.player_pokemons);

    const dispatch = useDispatch()
    useEffect(() => {
        // dispatch(getPlayerPokemons())
    }, [])

    const handleSelect = async (selectedIndex) => {
        setSelectedIndex(selectedIndex);
    };
    return (

        <div>
            <GoldSiverHeader previous='/city' title='Casino'>
                <div className='container'>
                    <Card border='dark' text='white' className='bg-theme'>
                        <Card.Header><h3 className='text-center'> Pokemon Casino</h3></Card.Header>

                        <Card.Body className='text-center'>
                            <h5>Here is the Casino, you will have several minigames that you can play and at the end (if you are lucky)
                                you will get Tickets that can be exchanged for Pokémons and other prizes. Have a little perseverance and you will get many Prizes at the Casino!</h5>
                            <h5>Note: To be able to play you need to buy<Ticket /> so carry a good amount of Silvers on hand...
                                Good luck, trainer, you will need it!</h5>
                        </Card.Body>

                        <Card.Header><h3 className='text-center'> Tickets in Inventory:<Ticket />250</h3></Card.Header>

                    </Card>
                    <Card border='dark' text='white' className='bg-theme mt-2'>
                        <Card.Header><h3 className='text-center'>Casino</h3></Card.Header>
                        <Card.Body >
                            <Carousel
                                interval={null}
                                className='h-100'
                                activeIndex={selectedIndex}
                                onSelect={handleSelect}
                                prevIcon={<img src="/images/pokeProfile/leftarrow.png" alt="images" className='navigation-image' style={{ width: '30px' }} />}
                                nextIcon={<img src="/images/pokeProfile/rightarrow.png" alt="images" className='navigation-image' style={{ width: '30px' }} />}
                            >
                                {casino.map((item, index) => {
                                    return <Carousel.Item key={index}>
                                        <div className='d-flex flex-column position-relative'>
                                            <div className='gym-trainer'>
                                                <img className='trainer' src={`/images/cassino/encartes/${item.img}`} alt="" />
                                            </div>
                                        </div>
                                    </Carousel.Item>
                                })}
                            </Carousel>
                            <div className="register-item-inner6 w-100 p-3">
                                <button className='fountain-button'> <span style={{ fontSize: '12px' }}>{casino[selectedIndex].button}</span></button>
                            </div>
                        </Card.Body>
                    </Card>
                    <OnlineTrainers />
                </div>

            </GoldSiverHeader>

        </div>
    )
}

export default Casino
