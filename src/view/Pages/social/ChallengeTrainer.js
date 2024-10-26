import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../../store/auth';
import { getSearchPlayers } from '../../../store/friends';
import OnlineTrainers from '../../../view/Component/OnlineTrainers';
import GoldSiverHeader from '../../../view/HomePage/GoldSiverHeader';
function ChallengeTrainer() {
    const dispatch = useDispatch();
    const online_users = useSelector(state => state.auth.online_users)
    const search_players = useSelector(state => state.friend.search_players)

    const init = () => {
        // dispatch(getUsers()).unwrap()
        dispatch(getSearchPlayers(''))

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
                                />
                                <img src="images/register-02.png" alt="" />
                            </div>
                        </Col>
                        <Col md={3}>
                            <h4>Value:</h4>
                            <div className="register-item-inner4 m-0">
                                <input type="text"
                                    className="form-control bg-theme"
                                    id="name" />
                                <img src="images/register-02.png" alt="" />
                            </div>
                        </Col>
                        <Col md={12}  >
                            <div className="register-item-inner6 ">
                                <button type="submit" className='challenge-button'>Challenge</button>
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
