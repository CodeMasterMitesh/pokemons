import React, { useEffect, useState } from 'react'
import GoldSiverHeader from '../HomePage/GoldSiverHeader'
import { Button, Card, Col, Row, Table } from 'react-bootstrap'
import Silver from '../Component/Silver'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getPlayerPokemons, getPokemonsByPlayer } from '../../store/pokemon'
import { useNavigate, useSearchParams } from 'react-router-dom'
import OnlineTrainers from '../Component/OnlineTrainers'
import { dualExpire, duelAccept, duelDecline, getDualByTrainerId } from 'store/friends'
import { init } from 'i18next'

function ChallangeRequest() {
    const player_pokemons = useSelector(state => state.pokemon.player_pokemons)
    const [searchParams, setSearchParams] = useSearchParams();
    const challanged = searchParams.get('challanged')
    const [isRedirected, setRedirection] = useState(false)
    const duel = searchParams.get('duel')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [user, setUser] = useState({ name: '', pokemons: [] });
    const [opponent, setOpponent] = useState({ name: '', pokemons: [] });
    const [duel_data, setDuelData] = useState({});

    const init = async () => {
        let user = localStorage.getItem('userData')
        user = user ? JSON.parse(user) : {}
        let payload = {
            trainer_id: user.playerId,
        }
        let data = await dispatch(getDualByTrainerId(payload)).unwrap();

        // const payload2 = {
        //     status: "expire",
        //     duel_id:data?.duel_data?.id
        // }
        // let result = await dispatch(dualExpire(payload2)).unwrap();

        if(!data?.duel_data?.id){
            navigate('/home');
        }
        let user_data = [];
        let opponent_data = [];

        if (challanged == 'true' && data?.duel_data?.id) {
            user_data = await dispatch(getPokemonsByPlayer(data?.duel_data?.uitdager)).unwrap()
            opponent_data = await dispatch(getPokemonsByPlayer(data?.duel_data?.tegenstander)).unwrap()

            setUser({ name: data?.duel_data?.uitdager, pokemons: user_data?.data||[] })
            setOpponent({ name: data?.duel_data?.tegenstander, pokemons: opponent_data?.data||[] })
        } else if (data) {
            user_data = await dispatch(getPokemonsByPlayer(data?.duel_data?.tegenstander)).unwrap()
            opponent_data = await dispatch(getPokemonsByPlayer(data?.duel_data?.uitdager)).unwrap()


            setUser({ name: data?.duel_data?.tegenstander, pokemons: user_data?.data||[] })
            setOpponent({ name: data?.duel_data?.uitdager, pokemons: opponent_data?.data ||[] })
        }
        setDuelData(data?.duel_data || {})
    }


    const handleAccept = async () => {
        let accept = await dispatch(duelAccept(duel_data?.id)).unwrap();
        if (accept.duel_id) {
            setRedirection(true)
            navigate(`/battle?challanged=${challanged || false}&&duel=${duel_data?.id}`)
        }
    }

    const handleDecline = async () => {
        let decline = await dispatch(duelDecline(duel_data?.id)).unwrap();
        if(decline){
            setRedirection(true)
        }

    }
    useEffect(() => {
        init()

    }, [])


    useEffect(() => {
        if (challanged!='true') {

            const TIMER_KEY = 'redirectTimerStart';
            const TIMER_DURATION = 60000; // 60 seconds in milliseconds

            // Get the timer start time from localStorage
            const savedStartTime = localStorage.getItem(TIMER_KEY);

            // Calculate the remaining time
            const now = Date.now();
            const remainingTime = savedStartTime
                ? Math.max(TIMER_DURATION - (now - parseInt(savedStartTime, 10)), 0)
                : TIMER_DURATION;

            const timer = setTimeout(async () => {
                if (!isRedirected) {
                    const data = {
                        status: "expire",
                        duel_id: duel_data?.id
                    }
                    let result = await dispatch(dualExpire(data)).unwrap();
                    if (result.status == 'success') {
                        navigate('/')
                    }
                }
            }, remainingTime); // 60 seconds = 60000 ms

            // Cleanup timeout when the component unmounts or `isRedirected` changes
            return () => clearTimeout(timer);
        }
    }, [isRedirected]);
    return (
        <div>
            <GoldSiverHeader previous={'/home'} title='Challange'>
                <div className='container p-2 challenge'>


                    <Card border='dark' text='white' className='bg-theme'>
                        {challanged != 'true' && <Card.Header><h5 className='text-center'> {opponent.name} has challanged you to a duel. the duel has a take of:<Silver /> 10 </h5></Card.Header>}
                        {challanged == 'true'&& <Card.Header><h5 className='text-center'> Waiting for accept challange... </h5></Card.Header>}

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
                                                                <h5 className='header-theme'>{user?.name}</h5>
                                                                <div className='p-2'>
                                                                    <Row>
                                                                        {user?.pokemons?.map((item, index) => {
                                                                            return <Col md={4} className='p-2' key={index}>
                                                                                <div className='challange-pk'>
                                                                                    <img src={`/images/pokemon/icon/${item.wild_id}.gif`} alt="" />

                                                                                </div>
                                                                            </Col>
                                                                        })}
                                                                        {
                                                                            Array.from({ length: 6 - user?.pokemons?.length }).map((_, index) => {
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
                                                            <h5 className='header-theme'>{opponent?.name}</h5>
                                                            <div className='p-2'>
                                                                <Row>
                                                                    {opponent?.pokemons?.map((item, index) => {
                                                                        return <Col md={4} className='p-2' key={index}>
                                                                            <div className='challange-pk'>
                                                                                <img src={`/images/pokemon/icon/${item.wild_id}.gif`} alt="" />

                                                                            </div>
                                                                        </Col>
                                                                    })}
                                                                    {
                                                                        Array.from({ length: 6 - opponent?.pokemons?.length }).map((_, index) => {
                                                                            return <Col md={4} className='p-2' key={index}>
                                                                                <div className='challange-pk'>
                                                                                </div>
                                                                            </Col>
                                                                        })
                                                                    }
                                                                </Row>
                                                            </div>
                                                        </Col>
                                                        {challanged!= 'true' && <Col md={12} className='d-flex justify-content-center'>
                                                            <div className='d-flex gap-3'>
                                                                <Button variant='success' onClick={handleAccept}>Accept</Button>
                                                                <Button variant='danger' onClick={handleDecline}>Decline</Button>
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
                        <OnlineTrainers />
                    </div>
                </div>
            </GoldSiverHeader>
        </div>
    )
}

export default ChallangeRequest
