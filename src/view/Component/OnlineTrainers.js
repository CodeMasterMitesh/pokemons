import { getUsers } from '../../store/auth';
import { getSearchPlayers } from '../../store/friends';
import React, { useEffect } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function OnlineTrainers() {
   
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const online_users = useSelector(state => state.auth.online_users)
    const search_players = useSelector(state => state.friend.search_players)

    const init = () => {
        dispatch(getUsers()).unwrap()
        // dispatch(getSearchPlayers(''))

    }
    useEffect(() => {
        init()
    }, [])
  return (
    <div>
       <Card border='dark' text='white' className='bg-theme mt-2'>
                <Card.Header><h1 className='text-center'> Online Trainers</h1></Card.Header>
                <Card.Body className='text-center'>
                    <Row style={{gap:'8px'}} className='justify-content-center p-3'>
                        {online_users.map((item,index) => {
                            return <Col md={3} lg={2} xs={5} key={index} className='onlineTrainer-names' onClick={()=>{navigate(`/profile?playername=${item.username}`)}}>
                                <div className="register-item-inner4 m-0">
                                   <span> {item.username}</span>
                                    <img src="/images/register-02.png" alt="" />
                                </div>
                            </Col>
                        })
                        }
                    </Row>
                </Card.Body>
            </Card>
    </div>
  )
}

export default OnlineTrainers
