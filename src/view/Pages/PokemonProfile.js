import React, { useEffect, useState } from 'react'
import { Card, Carousel, Col, Row, Table } from 'react-bootstrap'
import { useLocation, useParams } from 'react-router-dom'
import GoldSiverHeader from '../HomePage/GoldSiverHeader'
import Chart from 'react-apexcharts'
import { useDispatch, useSelector } from 'react-redux'
import { getPlayerPokemons } from '../../store/pokemon'
import { Tooltip } from 'react-tooltip';
import moment from 'moment'

function PokemonProfile() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const pokemon_id = queryParams.get('id'); // replace 'yourParamName' with the query parameter name

    const dispatch = useDispatch()
    const all_pokemons = useSelector((state) => state.pokemon.player_pokemons)
    const [selected, setSelected] = useState({})
    const [selectedIndex, setSelectedIndex] = useState(0)
    const series = [{
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20],
    }];

    const options = {
        chart: {
            height: 350,
            type: 'radar',
        },
        title: {
            text: 'Basic Radar Chart'
        },
        yaxis: {
            stepSize: 20
        },
        xaxis: {
            categories: ['January', 'February', 'March', 'April', 'May', 'June']
        }
    }

    const handleSelect = (selectedIndex) => {
        setSelectedIndex(selectedIndex);
        let show = all_pokemons[selectedIndex];
        let totalpower = parseFloat(show['attack']) + parseFloat(show['defence']) + parseFloat(show['speed']) + parseFloat(show['spc.attack']) + parseFloat(show['spc.defence'])
        let totalev = parseFloat(show.hp_ev) + parseFloat(show.attack_ev) + parseFloat(show.defence_ev) + parseFloat(show.speed_ev) + parseFloat(show['spc.attack_ev']) + parseFloat(show['spc.defence_ev'])
        setSelected({ ...show, totalpower: totalpower.toLocaleString(), totalev: totalev.toLocaleString() })

    };

    const init = async () => {
        const pokemons = await dispatch(getPlayerPokemons()).unwrap()
        let show = {};
        if (pokemon_id) {
            let i = pokemons.findIndex(item => item.id == pokemon_id)
            setSelectedIndex(i);
            show = pokemons[i];
        } else {
            show = pokemons[0];
        }
        let totalpower = parseFloat(show['attack']) + parseFloat(show['defence']) + parseFloat(show['speed']) + parseFloat(show['spc.attack']) + parseFloat(show['spc.defence'])
        let totalev = parseFloat(show.hp_ev) + parseFloat(show.attack_ev) + parseFloat(show.defence_ev) + parseFloat(show.speed_ev) + parseFloat(show['spc.attack_ev']) + parseFloat(show['spc.defence_ev'])
        setSelected({ ...show, totalpower: totalpower.toLocaleString(), totalev: totalev.toLocaleString() })



    }
    useEffect(() => {
        init();
    }, [])
    return (
        <GoldSiverHeader previous='/home' title='Profile'>
            <div className='p-5'>
                <Card border='dark' text='white' className='bg-theme'>
                    <Card.Header><h3 className='text-center'> {selected.naam}</h3></Card.Header>
                    <Card.Body className='pk-bg' style={{ backgroundImage: `url('/images/amie/${selected.type1}.png')` }}>

                        {all_pokemons?.length && <Carousel
                            interval={null}
                            className='h-100'
                            activeIndex={selectedIndex} onSelect={handleSelect}
                            prevIcon={<img src="/images/pokeProfile/leftarrow.png" alt="images" className='navigation-image' style={{ width: '30px' }} />}
                            nextIcon={<img src="/images/pokeProfile/rightarrow.png" alt="images" className='navigation-image' style={{ width: '30px' }} />}
                        >
                            {all_pokemons.map((item) => {
                                return <Carousel.Item className='h-100' >
                                    <div className='d-flex justify-content-center h-100 align-items-center'>
                                        <img src={item.link} alt="" />
                                    </div>
                                </Carousel.Item>
                            })
                            }
                        </Carousel>}
                    </Card.Body>
                </Card>
                <Row>
                    <Col md={6}>
                        <Card className='bg-theme text-white mt-2'>
                            <Card.Header><h3 className='text-center'> HP & EXP</h3></Card.Header>
                            <Card.Body>
                                <Table className='table-theme border-none-theme'>
                                    <tbody>
                                        <tr>
                                            <td style={{ width: '100px' }}>HP [?]</td>
                                            <td>
                                                <div data-tooltip-id="hp" data-tooltip-content={`${selected.leven}/${selected.levenmax} HP`} className="progress" style={{ width: `${Math.floor(selected.leven * 100 / selected.levenmax)}%` }} id='hp'></div>
                                                <Tooltip id="hp" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '100px' }}>EXP [?]</td>
                                            <td>
                                                <div data-tooltip-id="EXP" data-tooltip-content={`${selected.level < 100 ? (selected.expnodig - selected.exp) + ' EXP for the next level' : 'Your pokemon is now at max lavel (100)!'}`} className="bar_blue" style={{ width: " 100%", "height": "13px" }}>
                                                    <div className="progress" style={{ background: "#cccccc" }}></div>
                                                    <Tooltip id="EXP" />

                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                        <Card className='bg-theme text-white mt-2'>
                            <Card.Header><h3 className='text-center'> Attack List</h3></Card.Header>
                            <Card.Body>
                                <Row>
                                    {
                                        Array.from({ length: 4 }).map((_, i) => {
                                            return (
                                                selected['aanval_' + (i + 1)] &&
                                                <Col sm={6} index={i}>

                                                    <a href={`./information&amp;category=attack-info&amp;attack=${selected['aanval_' + (i + 1)]}`} style={{ fontWeight: 400, margin: "12px" }}>
                                                        <button id="aanval" style={{ background: `url(/images/attack/moves/${selected['aanval_' + (i + 1)]}.png) no-repeat` }} className="btn-type">
                                                            <font>
                                                                <font>{selected['aanval_' + (i + 1)]}</font>
                                                            </font></button>
                                                    </a>
                                                </Col>
                                            )

                                        })
                                    }
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card className='bg-theme text-white mt-2'>
                            <Card.Header><h3 className='text-center d-flex justify-content-between'> Status [?] <span>1340 Total</span></h3></Card.Header>
                            <Card.Body>
                                <Table className='table-theme border-none-theme'>
                                    <tbody>
                                        <tr className='vertical-align-middle'>
                                            <td>HP:</td>
                                            <td>
                                                {Array.from({ length: 7 }).map((item) => {

                                                    return <span
                                                        style={{
                                                            color: 'gold',
                                                            fontSize: '24px',
                                                        }}
                                                    >
                                                        ★
                                                    </span>
                                                })
                                                }
                                                {Array.from({ length: 3 }).map((item) => {

                                                    return <span
                                                        style={{
                                                            color: 'gray',
                                                            fontSize: '24px',
                                                        }}
                                                    >
                                                        ★
                                                    </span>
                                                })
                                                }
                                            </td>
                                            <td><span>353</span>(+0 <img src='/images/items/HP up.png' />)</td>
                                        </tr>
                                    </tbody>

                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className='bg-theme text-white mt-2'>
                            <Card.Header><h3 className='text-center'> Characteristics</h3></Card.Header>
                            <Card.Body>
                                <Table className='table-theme text-white'>
                                    <tbody>
                                        <tr>
                                            <td><b>Purchased:</b> {moment(selected.capture_date).fromNow()}</td>
                                            <td ><b>Color:</b> {selected.shiny ? 'Shiny' : 'Standard'}</td>
                                        </tr>
                                        <tr>
                                            <td><b>Negotiable:</b>{selected.can_trade ? 'Non Negotiable' : 'Negotiable'} </td>
                                            <td><b>Ability:</b> Pressure</td>
                                        </tr>
                                        <tr>
                                            <td><b>Level:</b> {selected.level}</td>
                                            <td><b>Mood:</b> {selected.karakter}</td>
                                        </tr>
                                        <tr>
                                            <td><b>Total power:</b> {selected.totalpower}</td>
                                            <td><b>Item: {selected.item ? <img src={`/images/items/${selected['item']}.png`} /> : 'None'}</b> </td>
                                        </tr>
                                        <tr>
                                            <td><b>Species:</b> {selected.naam}</td>
                                            <td><b>Pkeball:</b><img src={`/images/items/${selected.gevongenmet}.png`} alt="" /></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                        <Card className='bg-theme text-white mt-2'>
                            <Card.Header><h3 className='text-center d-flex justify-content-around'> TIP [?] <span>{selected.totalev} TOTAL EV's</span></h3></Card.Header>
                            <Card.Body>
                                <Table className='table-theme text-white'>
                                    <tbody>
                                        <tr>
                                            <td><b>HP:</b>{selected.hp_ev} EV's</td>
                                            <td ><b>Sp. Attack:</b> {selected['spc.attack_ev']} EV's</td>
                                        </tr>
                                        <tr>
                                            <td><b>Attack:</b> {selected.attack_ev} EV's</td>
                                            <td><b>Sp. Defense:</b>{selected['spc.defence_ev']} EV's</td>
                                        </tr>
                                        <tr>
                                            <td><b>Defense:</b> {selected.defence_ev} EV's</td>
                                            <td><b>Speed:</b> {selected.speed_ev} EV's</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                        <Card className='bg-theme text-white mt-2'>
                            <Card.Header><h3 className='text-center d-flex justify-content-around'> IV's [?] <span>186 TOTAL IV's</span></h3></Card.Header>
                            <Card.Body>
                                <div>
                                    <div id="chart">
                                        {/* <Chart options={options} series={series} type="radar" height={350} /> */}
                                    </div>
                                    <div id="html-dist"></div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </GoldSiverHeader>

    )
}

export default PokemonProfile
