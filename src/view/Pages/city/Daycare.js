import React, { useEffect, useState } from 'react'
import PokemonProfile from '../../Component/PokemonProfile';
import { useDispatch, useSelector } from 'react-redux';
import { getPlayerPokemons } from '../../../store/pokemon';
import { Card, Col, Overlay, Popover, Row, Carousel, Table } from 'react-bootstrap'
import GoldSiverHeader from 'view/HomePage/GoldSiverHeader';
import Silver from 'view/Component/Silver';
import OnlineTrainers from 'view/Component/OnlineTrainers';



function Daycare() {
    const dispatch = useDispatch();
    const [selectedIndex, setSelectedIndex] = useState(0)
    const player_pokemons = useSelector(state => state.pokemon.player_pokemons);
    const [hoveredId, setHoveredId] = useState(null);
    const [target, setTarget] = useState(null);


    const handleMouseEnter = (e, id) => {
        setHoveredId(id);
        setTarget(e.currentTarget)
    };

    const handleSelect = async (selectedIndex) => {
        setSelectedIndex(selectedIndex);

    };
    const handleMouseLeave = () => {
        setHoveredId(null);
    };
    useEffect(() => {
        dispatch(getPlayerPokemons())
    }, []);
    return (
        <GoldSiverHeader previous='map' title='Daycare'>

            <div className='container p-2 challenge'>
                <Card border='dark' text='white' className='bg-theme'>
                    <Card.Header><h3 className='text-center'> Kindergarten</h3></Card.Header>

                    <Card.Body className='text-center'>
                        <h5>We'll take care of your Pokémon for<Silver /> 250 Silvers when you come to pick it up.</h5>
                        <h5>We charge a small fee of <Silver />500 Silvers if your Pokémon levels up.</h5>
                        <h5>Your Pokémon won't evolve or learn attacks until you pick it up.</h5>
                    </Card.Body>
                </Card >
                <Card border='dark' text='white' className='bg-theme mt-1'>
                    <Card.Header><h3 className='text-center'> My Team</h3></Card.Header>
                    <Card.Body >

                        {player_pokemons?.length && <Carousel
                            interval={null}
                            className='h-100'
                            activeIndex={selectedIndex} onSelect={handleSelect}
                            prevIcon={<img src="/images/pokeProfile/leftarrow.png" alt="images" className='navigation-image' style={{ width: '30px' }} />}
                            nextIcon={<img src="/images/pokeProfile/rightarrow.png" alt="images" className='navigation-image' style={{ width: '30px' }} />}
                        >
                            {player_pokemons.map((item, index) => {
                                return <Carousel.Item style={{ height: '300px' }} key={index}>
                                    <div
                                        // ref={targetRefs.current[item.wild_id]}
                                        className=" position-relative w-100 h-100 character-item2-inner2 gap-2 cursor-pointer" >
                                        <div className="character-item2-inner3 pokemon-gifs d-flex align-items-center justify-content-center flex-column"
                                            style={{ height: '94%' }}
                                        >
                                            <div onMouseEnter={(e) => handleMouseEnter(e, item.wild_id)}
                                                onMouseLeave={handleMouseLeave}>

                                                <img src={`/images/pokemon/${item.wild_id}.gif`} alt="" height={100} />
                                                <div className="character-item2-inner4">
                                                    <img src="/images/character-17.png" alt="" />
                                                </div>
                                                <div className="character-item2-inner5 b-0" style={{ position: 'absolute' }}>
                                                    <p>{item.naam} - Lv <span>{item.level}</span></p>
                                                </div>
                                            </div>
                                            <Overlay
                                                show={hoveredId === item.wild_id}
                                                target={target}
                                                placement="bottom"
                                                className='w-100 p-0'
                                            >
                                                <Popover body id={`popover-${item.wild_id}`} className='custom-popover'>
                                                    <Popover.Body className='p-0'>
                                                        <PokemonProfile data={item} />
                                                    </Popover.Body>
                                                </Popover>
                                            </Overlay>
                                        </div>
                                    </div>
                                </Carousel.Item>
                            })
                            }


                        </Carousel>}
                        <div className="register-item-inner6 w-100 p-3">
                            <button className='fountain-button'> <span style={{ fontSize: '12px' }}>Leave Pokemon</span></button>
                        </div>
                    </Card.Body>
                </Card>
                <OnlineTrainers/>
            </div >
        </GoldSiverHeader>

    )
}

export default Daycare
