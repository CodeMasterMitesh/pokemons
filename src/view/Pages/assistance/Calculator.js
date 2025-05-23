import React, { useEffect, useState } from 'react'
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import PokemonProfile from '../../Component/PokemonProfile';
import { useDispatch, useSelector } from 'react-redux';
import { getPlayerPokemons } from '../../../store/pokemon';
import { Card, Col, Overlay, Popover, Row, Carousel, Table } from 'react-bootstrap'
import Chart from 'react-apexcharts'
import { PokemonCalculatorIvs } from '../../../store/assistance';
import GoldSiverHeader from 'view/HomePage/GoldSiverHeader';



function Calculator() {
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
    const setCalcData = async (calc) => {
        if (player_pokemons.length) {
            let payload = {
                pokemonview: calc == 'simple' ? 1 : 2,
                pokemonid: player_pokemons[selectedIndex].id
            }
            let data = await dispatch(PokemonCalculatorIvs(payload)).unwrap();
            if (data.success) {
                let hp_iv = data.hp_iv.split(' - ')
                let attack_iv = data.attack_iv.split(' - ')
                let defence_iv = data.defence_iv.split(' - ')
                let spc_attack_iv = data['spc.attack_iv'].split(' - ')
                let spc_defence_iv = data['spc.defence_iv'].split(' - ')
                let speed_iv = data.speed_iv.split(' - ')

                let arr = [{
                    name: 'IVs',
                    data: [hp_iv[0], attack_iv[0], defence_iv[0], spc_attack_iv[0], spc_defence_iv[0], speed_iv[0]],
                }]
                if (hp_iv.length > 1) {
                    arr.push({
                        name: 'IV',
                        data: [hp_iv[1], attack_iv[1], defence_iv[1], spc_attack_iv[1], spc_defence_iv[1], speed_iv[1]],
                    })
                }
                setSeries(arr)
                setCalc(calc);
            }

        }
    }
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
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
        <GoldSiverHeader previous='home' title='Calculator'>
            <div className='container p-2 challenge'>
                <Card border='dark' text='white' className='bg-theme'>
                    <Card.Header><h3 className='text-center'> Pokemon Calculator</h3></Card.Header>

                    <Card.Body className='text-center'>
                        <h5>With the Pokémon Calculator you will be sure whether or not your Pokémon is strong enough to do well in the world of Pokémon World Legends !</h5>
                        <h5>There are two types of Calculator: SIMPLE and PREMIUM !</h5>
                        <h5>Make the most of this function and become the best Pokémon Master!</h5>
                        {user_data.rank < 4 && <h5 className='text-danger'><b>Note: MINIMUM RANK TO SEE POKÉMON IVs: 4 - TRAINER. KEEP LEVELING UP TO UNLOCK!</b></h5>}
                    </Card.Body>
                </Card >
                {!calc && <Card border='dark' text='white' className='bg-theme mt-1'>
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
                }
                {
                    !calc && <Card className='mt-2 bg-theme text-white'>
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
                                    <button className='challenge-button' onClick={() => setCalcData('simple')}><span style={{ fontSize: '12px' }}>See simple IV's</span></button>
                                </div>
                            </Col>
                            <Col md={6} className='d-flex justify-content-between flex-column'>
                                <Card.Header><h3 className='text-center'> See premium IV's</h3></Card.Header>

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
                                    <button className='challenge-button' onClick={() => setCalcData('premium')}> <span style={{ fontSize: '12px' }}>See premium IV's</span></button>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                }
                {
                    calc && <Card border='dark' text='white' className='bg-theme mt-2'>
                        <Card.Header><h3 className='text-center'> {calc}IV Calculator</h3></Card.Header>

                        <Card.Body className='text-center'>
                            <Table className='table-theme color-white'>
                                <tbody>
                                    <tr>
                                        <td className='text-start'><b>HP: {pokemon_calculator.hp_iv}</b></td>
                                        <td className='text-end'><b>Sp. Attack: {pokemon_calculator['spc.attack_iv']}</b></td>
                                    </tr>
                                    <tr>
                                        <td className='text-start'><b>Attack: {pokemon_calculator.attack_iv}</b></td>
                                        <td className='text-end'><b>Sp. Defense: {pokemon_calculator['spc.defence_iv']}</b></td>
                                    </tr>
                                    <tr>
                                        <td className='text-start'><b>Defense: {pokemon_calculator['defence_iv']}</b></td>
                                        <td className='text-end'><b>Speed: {pokemon_calculator['speed_iv']}</b></td>
                                    </tr>
                                </tbody>
                            </Table>
                            <div className="register-item-inner6 w-100 p-3">
                                <button className='calculator-button' onClick={() => setCalc('')}> <span style={{ fontSize: '12px', width: '200px' }}>See more pokemon premium IV's</span></button>
                            </div>
                        </Card.Body>
                    </Card>
                }
                {
                    calc && player_pokemons[selectedIndex] && <Card border='dark' text='white' className='bg-theme mt-2'>
                        <Card.Header><h3 className='text-center'> IV of {player_pokemons[selectedIndex].naam}</h3></Card.Header>
                        <Card.Body className='text-center'>
                            {series && series[0].data.length && <Chart options={options} series={series} type="radar" height={350} />}
                        </Card.Body>
                    </Card>
                }
            </div >
        </GoldSiverHeader>

    )
}

export default Calculator
