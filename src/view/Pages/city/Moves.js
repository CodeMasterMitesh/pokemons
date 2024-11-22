import React, { useEffect, useState } from 'react'
import PokemonProfile from '../../Component/PokemonProfile';
import { useDispatch, useSelector } from 'react-redux';
import { getPlayerPokemons } from '../../../store/pokemon';
import { Card, Col, Overlay, Popover, Row, Carousel, Table } from 'react-bootstrap'
import Chart from 'react-apexcharts'
import { PokemonCalculatorIvs } from '../../../store/assistance';
import GoldSiverHeader from 'view/HomePage/GoldSiverHeader';



function Moves() {
    const dispatch = useDispatch();
    const [selectedIndex, setSelectedIndex] = useState(0)
    const user_data = useSelector(state => state.auth.user_data)
    const player_pokemons = useSelector(state => state.pokemon.player_pokemons);
    const [hoveredId, setHoveredId] = useState(null);
    const pokemon_calculator = useSelector(state => state.assistance.pokemon_calculator)
    const [calc, setCalc] = useState('');
    const [target, setTarget] = useState(null); // Track the current target element

    const [series, setSeries] = useState([{
        name: 'IVs',
        data: [],
    }]);
    const [options, setOption] = useState({
        chart: {
            height: 350,
            type: 'radar',
        },
        title: {
            text: 'IVs'
        },
        yaxis: {
            stepSize: 20
        },
        xaxis: {
            categories: ['HP', 'Attack', 'Defense', 'Sp. Attack', 'Sp. Defense', 'Speed']
        },
        tooltip: {
            // shared: true,      // Enables showing all series values on hover
            // intersect: false,  // Disables intersect mode to allow shared tooltip
            theme: 'dark'
        },
    },)

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
        <GoldSiverHeader previous='/city' title='Attack Specialist'>
            <div className='container p-2 challenge'>
                <Card border='dark' text='white' className='bg-theme'>
                    <Card.Header><h3 className='text-center'> Attack Specialist</h3></Card.Header>

                    <Card.Body className='text-center'>
                        <h5>Hello Young Trainer , how are you?</h5>
                        <h5>What beautiful Pokémon you have!</h5>
                        <h5>Would you like me to show you the Special Attacks I can teach you ?</h5>
                        <h5>Or even remind you of an Attack ?</h5>
                        <h5>Choose a Pokémon and I will show you.</h5>
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
                    </Card.Body>
                </Card>
                <Card className='mt-2 bg-theme text-white'>
                    <Row>
                        <Col md={6} className='d-flex justify-content-between flex-column'>
                            <Card.Header><h3 className='text-center'> Move tutor</h3></Card.Header>

                            <Card.Body>
                                <ul className='normal-li'>
                                    <li>Here you can <b>teach</b> moves to your Pokémon for a sum of <b>Silvers</b> or <b>Gold</b> </li>
                                </ul>
                            </Card.Body>
                            <div className="register-item-inner6 w-100  p-3">
                                <button className='challenge-button' ><span style={{ fontSize: '12px' }}>Teaching Scams</span></button>
                            </div>
                        </Col>
                        <Col md={6} className='d-flex justify-content-between flex-column'>
                            <Card.Header><h3 className='text-center'> Move Reminder</h3></Card.Header>

                            <Card.Body>
                                <ul className='normal-li'>
                                    <li>Here you can <b>recall</b> moves from your Pokémon for a sum of <b>Silvers</b> or <b> Gold</b> .</li>
                                </ul>
                            </Card.Body>
                            <div className="register-item-inner6 w-100 p-3">
                                <button className='challenge-button'> <span style={{ fontSize: '12px' }}>Remember Scams</span></button>
                            </div>
                        </Col>
                    </Row>
                </Card>

            </div >
        </GoldSiverHeader>

    )
}

export default Moves
