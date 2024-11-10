import React, { useEffect } from 'react'
import GoldSiverHeader from '../HomePage/GoldSiverHeader'
import { Button, Card, Col, Row, Table } from 'react-bootstrap'
import Silver from '../Component/Silver'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getPlayerPokemons } from '../../store/pokemon'
import { useNavigate, useSearchParams } from 'react-router-dom'
import OnlineTrainers from '../Component/OnlineTrainers'

function ChallangeRequest() {
    const player_pokemons = useSelector(state => state.pokemon.player_pokemons)
    const [searchParams,setSearchParams] = useSearchParams();
    const challanged =searchParams.get('challanged') 
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getPlayerPokemons())
    }, [])
    return (
        <div>

            <GoldSiverHeader previous={'/home'} title='Challange'>
                <div className='container p-2 challenge'>


                    <Card border='dark' text='white' className='bg-theme'>
                        {!challanged && <Card.Header><h5 className='text-center'> NightSlash has challanged you to a duel. the dual has a take of:<Silver /> 10 </h5></Card.Header>}
                        {challanged &&<Card.Header><h5 className='text-center'> Waiting for accept challange... </h5></Card.Header>}

                        <Card.Body className='text-center'>
                            <Row>
                                <Table className='table-theme'>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img src="images/characters/Cilan/npc.png" alt="" />
                                            </td>
                                            <td style={{ width: '50%' }} className='vertical-align-middle'>

                                                <div className='d-flex justify-content-center'>
                                                    <Row className='justify-content-center align-items-center'>
                                                        <Col xs={4} className='p-2'>
                                                            <div>
                                                                <h5 className='header-theme'>Test1234</h5>
                                                                <div className='p-2'>
                                                                    <Row>
                                                                        {player_pokemons.map((item, index) => {
                                                                            return <Col md={4} className='p-2' key={index}>
                                                                                <div className='challange-pk'>
                                                                                    <img src={`/images/pokemon/icon/${item.wild_id}.gif`} alt="" />

                                                                                </div>
                                                                            </Col>
                                                                        })}
                                                                        {
                                                                            Array.from({ length: 6 - player_pokemons.length }).map((_, index) => {
                                                                                return <Col md={4} className='p-2' key={index}>
                                                                                    <div className='challange-pk'>
                                                                                    </div>
                                                                                </Col>
                                                                            })
                                                                        }
                                                                    </Row>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col xs={3} className='d-flex align-items-center p-0'>
                                                            <img src="/images/icons/avatar/vs.png" alt="" /></Col>
                                                        <Col xs={4} className='p-2'>
                                                            <h5 className='header-theme'>NightSlash</h5>
                                                            <div className='p-2'>
                                                                <Row>
                                                                    {player_pokemons.map((item, index) => {
                                                                        return <Col md={4} className='p-2' key={index}>
                                                                            <div className='challange-pk'>
                                                                                <img src={`/images/pokemon/icon/${item.wild_id}.gif`} alt="" />

                                                                            </div>
                                                                        </Col>
                                                                    })}
                                                                    {
                                                                        Array.from({ length: 6 - player_pokemons.length }).map((_, index) => {
                                                                            return <Col md={4} className='p-2' key={index}>
                                                                                <div className='challange-pk'>
                                                                                </div>
                                                                            </Col>
                                                                        })
                                                                    }
                                                                </Row>
                                                            </div>
                                                        </Col>
                                                        {!challanged && <Col md={12} className='d-flex justify-content-center'>
                                                            <div className='d-flex gap-3'>
                                                                <Button variant='success' onClick={()=>{navigate('/battle')}}>Accept</Button>
                                                                <Button variant='danger'>Decline</Button>
                                                            </div>
                                                        </Col>}
                                                    </Row>
                                                </div>

                                            </td>
                                            <td>
                                                <img src="images/characters/Cilan/npc.png" alt="" />

                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Row>
                        </Card.Body>
                    </Card>
                    <div>
                        <OnlineTrainers/>
                    </div>
                </div>
            </GoldSiverHeader>
        </div>
    )
}

export default ChallangeRequest
