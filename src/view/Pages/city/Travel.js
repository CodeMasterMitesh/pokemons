import React, { useEffect, useState } from 'react'
import { Card, Carousel, Col, Form, Row, Table } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getPlayerPokemons } from 'store/pokemon';
import OnlineTrainers from 'view/Component/OnlineTrainers';
import Silver from 'view/Component/Silver';
import GoldSiverHeader from 'view/HomePage/GoldSiverHeader';
import travel from 'view/JsonData/travel'

function Travel() {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const player_pokemons = useSelector(state => state.pokemon.player_pokemons);

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPlayerPokemons())
    }, [])

    const handleSelect = async (selectedIndex) => {
        setSelectedIndex(selectedIndex);
    };
    return (
        <div>
            <GoldSiverHeader previous='/map' title='Travel'>
                <div className='container'>
                    <Card border='dark' text='white' className='bg-theme'>
                        <Card.Header><h5 className='text-center'>Here you can travel to other regions</h5></Card.Header>
                        <Card.Body >
                            <Carousel
                                interval={null}
                                className='h-100'
                                activeIndex={selectedIndex}
                                onSelect={handleSelect}
                                prevIcon={<img src="/images/pokeProfile/leftarrow.png" alt="images" className='navigation-image' style={{ width: '30px' }} />}
                                nextIcon={<img src="/images/pokeProfile/rightarrow.png" alt="images" className='navigation-image' style={{ width: '30px' }} />}
                            >
                                {travel.map((item, index) => {
                                    return <Carousel.Item key={index}>
                                        <div className='d-flex flex-column position-relative'>
                                            <div className='gym-trainer'>
                                                <img className='trainer' src={`/images/regioes/${item.title}.png`} alt="" />
                                                {item.lock && <img className='locked-trainer' src="/images/icons/avatar/lock.png" alt="" style={{ zIndex: 2 }} />}
                                                <div className='travel-title p-2'>
                                                    <p><h4 style={{ fontSize: '46px' }}>{item.title}</h4></p>
                                                    <p><h5 style={{ fontSize: '26px' }}>Cost : <Silver />{item.silver}</h5></p>
                                                </div>
                                            </div>
                                        </div>
                                    </Carousel.Item>
                                })}
                            </Carousel>
                            <div className='card-header'></div>
                            <div className='p-3'>
                                <p style={{ fontSize: '13px' }}><b>Duration:</b></p>
                                <p style={{ fontSize: '13px' }}>{travel[selectedIndex].duration}</p>

                                <p style={{ fontSize: '13px' }} className='mt-4'><b>Description:</b></p>
                                <div style={{ fontSize: '13px' }} dangerouslySetInnerHTML={{ __html: travel[selectedIndex].description }}></div>

                            </div>
                            <div>
                                <div className="register-item-inner6 w-100">
                                    <button style={{ width: "200px", height: "40px", fontSize: '12px' }}>You haven't unlock this</button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Row>
                        <Col md={6}>
                            <Card className='mt-2 bg-theme text-white'>
                                <Card.Header>
                                    <h3 className='text-center'>To Fly</h3>
                                </Card.Header>
                                <Card.Body>
                                    <h5 className='card-header text-center'>Does your Pokémon have the FLY move? You can travel for free!</h5>
                                    <div className='text-center p-4'>
                                        <img src="/images/fly.gif" alt="" />
                                    </div>
                                    <Table className='table-theme text-white'>
                                        <tbody>
                                            <tr>
                                                <td>Region:</td>
                                                <td>
                                                    <Form.Select className='bg-theme text-white'>
                                                        <option selected>Region</option>
                                                        <option value="Kanto">Kanto</option>
                                                        <option value="Johto">Johto</option>
                                                        <option value="Hoenn">Hoenn</option>
                                                        <option value="Sinnoh">Sinnoh</option>
                                                        <option value="Unova">Unova</option>
                                                        <option value="Kalos">Kalos</option>
                                                        <option value="Alola">Alola</option>
                                                    </Form.Select>
                                                </td>
                                                <td>Pokemon:</td>
                                                <td>
                                                    <Form.Select className='bg-theme text-white'>
                                                        {player_pokemons.map((item) => {
                                                            return <option>{item.naam}</option>
                                                        })}
                                                    </Form.Select>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card className='mt-2 bg-theme text-white'>
                                <Card.Header>
                                    <h3 className='text-center'>Surfar</h3>
                                </Card.Header>
                                <Card.Body>
                                    <h5 className='card-header text-center'>Does your Pokémon have the SURF move? You can travel for free!</h5>
                                    <div className='text-center p-4'>
                                        <img src="/images/surf.gif" alt="" />
                                    </div>
                                    <Table className='table-theme text-white'>
                                        <tbody>
                                            <tr>
                                                <td>Region:</td>
                                                <td>
                                                    <Form.Select className='bg-theme text-white'>
                                                        <option selected>Region</option>
                                                        <option value="Kanto">Kanto</option>
                                                        <option value="Johto">Johto</option>
                                                        <option value="Hoenn">Hoenn</option>
                                                        <option value="Sinnoh">Sinnoh</option>
                                                        <option value="Unova">Unova</option>
                                                        <option value="Kalos">Kalos</option>
                                                        <option value="Alola">Alola</option>
                                                    </Form.Select>
                                                </td>
                                                <td>Pokemon:</td>
                                                <td>
                                                    <Form.Select className='bg-theme text-white'>
                                                        {player_pokemons.map((item) => {
                                                            return <option>{item.naam}</option>
                                                        })}
                                                    </Form.Select>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <OnlineTrainers />
                </div>

            </GoldSiverHeader>

        </div>
    )
}

export default Travel
