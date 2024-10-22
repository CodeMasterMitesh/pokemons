import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PokemonProfile from '../../Component/PokemonProfile';
import { useDispatch, useSelector } from 'react-redux';
import { getPlayerPokemons } from '../../../store/pokemon';
import { Card, Col, Overlay, Popover, Row } from 'react-bootstrap'



function Calculator() {
    const dispatch = useDispatch();

    const player_pokemons = useSelector(state => state.pokemon.player_pokemons);
    const [hoveredId, setHoveredId] = useState(null);
    const [pokemon, setPokemon] = useState({});
    const [target, setTarget] = useState(null); // Track the current target element


    const handleMouseEnter = (e, id) => {
        setHoveredId(id);
        setTarget(e.currentTarget)
    };

    const handleMouseLeave = () => {
        setHoveredId(null);
    };
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    useEffect(() => {
        dispatch(getPlayerPokemons())
    }, []);
    return (
        <div className='container p-5 challenge'>
            <Card border='dark' text='white' className='bg-theme'>
                <Card.Header><h3 className='text-center'> Pokemon Calculator</h3></Card.Header>

                <Card.Body className='text-center'>
                    <h5>With the Pokémon Calculator you will be sure whether or not your Pokémon is strong enough to do well in the world of Pokémon World Legends !</h5>
                    <h5>There are two types of Calculator: SIMPLE and PREMIUM !</h5>
                    <h5>Make the most of this function and become the best Pokémon Master!</h5>
                </Card.Body>
            </Card>
            <Card border='dark' text='white' className='bg-theme mt-1'>
                <Card.Header><h3 className='text-center'> My Team</h3></Card.Header>
                <Card.Body >
                    <Carousel
                        swipeable={false}
                        draggable={false}
                        showDots={true}
                        responsive={responsive}
                        ssr={true}
                        slidesToSlide={2}
                        infinite={true}
                        // autoPlay={true}
                        // autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition='all'
                        transitionDuration={500}
                        containerClass='carousel-container'
                        removeArrowOnDeviceType={['tablet', 'mobile']}
                        dotListClass='custom-dot-list-style'
                        itemClass='carousel-item-padding-40-px'
                    >
                        {
                            player_pokemons && player_pokemons.map((item, index) => {
                                // if (!targetRefs.current[item.wild_id]) {
                                //   targetRefs.current[item.wild_id] = React.createRef();
                                // }

                                return <>
                                    <div
                                        key={index}
                                        // ref={targetRefs.current[item.wild_id]}
                                        className=" position-relative w-100 character-item2-inner2 gap-2 cursor-pointer" >
                                        <div className="character-item2-inner3 pokemon-gifs"
                                        >
                                            <div onMouseEnter={(e) => handleMouseEnter(e, item.wild_id)}
                                                onMouseLeave={handleMouseLeave}>

                                                <img src={`/images/pokemon/${item.wild_id}.gif`} alt="" height={100} />
                                                <div className="character-item2-inner4">
                                                    <img src="/images/character-17.png" alt="" />
                                                </div>
                                                <div className="character-item2-inner5 b--35" >
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
                                </>

                            })
                        }
                    </Carousel>
                </Card.Body>
            </Card>
            <Card className='mt-2 bg-theme text-white'>
                <Row>
                    <Col md={6} className='d-flex justify-content-between flex-column'>
                        <Card.Header><h3 className='text-center'> Simple Calculator</h3></Card.Header>

                        <Card.Body>
                            <ul className='normal-li'>
                                <li><b>With the simple calculator, you will be able to see the APPROXIMATE</b> IV values ​​of your Pokémon.</li>
                                <li>Per day you will have 5 (or ∞ if it is a <b> PREMIUM ACCOUNT</b> ) FREE uses .</li>
                                <li>After free uses, a fee will be charged according to the number of uses up to the <b>20th use </b>.</li>
                                <li><b>Price</b>: Free</li>
                                <li><b>FREE</b> Uses Remaining: ∞</li>
                            </ul>
                        </Card.Body>
                        <div className="register-item-inner6 w-100  p-3">
                            <button className='challenge-button' onClick={setPokemon}><span style={{fontSize:'12px'}}>See simple IV's</span></button>
                        </div>
                    </Col>
                    <Col md={6} className='d-flex justify-content-between flex-column'>
                        <Card.Header><h3 className='text-center'> See simple IV's</h3></Card.Header>

                        <Card.Body>
                            <ul className='normal-li'>
                                <li><b>With the premium calculator, you will be able to see the EXACT </b>IV values ​​of your Pokémon.</li>
                                <li>The price is <b>FIXED</b> , so there is no <b>daily limit</b> on how much the rate can increase..</li>
                                <li>After viewing, the graph will be SAVED to your <b>Pokémon 's PROFILE</b> ..</li>
                                <li><b>Price</b>:
                                    <img src="/images/icons/gold.png" alt="" />
                                    5</li>
                            </ul>
                        </Card.Body>
                        <div className="register-item-inner6 w-100 p-3">
                            <button className='challenge-button' onClick={setPokemon}> <span style={{fontSize:'12px'}}>See premium IV's</span></button>
                        </div>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default Calculator
