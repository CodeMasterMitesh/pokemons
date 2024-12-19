import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { duelInvite, getSearchPlayers } from '../../../store/friends';
import OnlineTrainers from '../../../view/Component/OnlineTrainers';
import GoldSiverHeader from '../../../view/HomePage/GoldSiverHeader';
import { useNavigate } from 'react-router-dom';





function ChallengeTrainer() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const duel_data =useSelector(state=>state.friend.duel_data)
    const [duel,setDuel] = useState({naam:"",bedrag:""});

    const init = () => {
        dispatch(getSearchPlayers(''))
    }
    const handleChallange=async ()=>{
        let data=await dispatch(duelInvite(duel)).unwrap()
        if(data?.duel_id){
            let params = new URLSearchParams('/challange-request');
            params.set('challanged',true)
            params.set('duel',data.duel_id)
            navigate(`/challange-request?${params.toString()}`); //
        }
    }
    useEffect(() => {
        init()
    }, [])
    return (
        <GoldSiverHeader previous='/home' title='Challenge Trainer' >
        <div className='container p-2 challenge'>
            <Card border='dark' text='white' className='bg-theme'>
                <Card.Body className='text-center'>
                    <h3>Challenge a Trainer to a Duel.</h3>
                    <h4>The Trainer must be online.</h4>
                </Card.Body>
            </Card>
            <Card border='dark' text='white' className='bg-theme mt-2'>
                <Card.Header><h1 className='text-center'> Challenge</h1></Card.Header>
                <Card.Body className='text-center'>
                    <Row className='d-flex justify-content-center gap-4'>
                        <Col md={3}>
                            <h4>Trainer:</h4>

                            <div className="register-item-inner4 m-0">
                                <input type="text"
                                    className="form-control"
                                    id="name"
                                    value={duel.naam}
                                    onChange={(e)=>setDuel({...duel,naam:e.target.value})}
                                />
                                <img src="/images/register-02.png" alt="" />
                            </div>
                        </Col>
                        <Col md={3}>
                            <h4>Value:</h4>
                            <div className="register-item-inner4 m-0">
                                <input type="text"
                                    className="form-control bg-theme"
                                    id="name" 
                                    value={duel.bedrag}
                                    onChange={(e)=>setDuel({...duel,bedrag:e.target.value})}
                                    />
                                <img src="/images/register-02.png" alt="" />
                            </div>
                        </Col>
                        <Col md={12}  >
                            <div className="register-item-inner6 ">
                                <button type="submit" className='challenge-button' onClick={handleChallange}>Challenge</button>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
           <OnlineTrainers/>
        </div>
        </GoldSiverHeader>

    )
}

export default ChallengeTrainer
