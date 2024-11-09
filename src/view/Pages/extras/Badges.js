import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../../store/auth';
import { getSearchPlayers } from '../../../store/friends';
import Accordion from 'react-bootstrap/Accordion';
import GoldSiverHeader from '../../../view/HomePage/GoldSiverHeader';
import { getUserBadge } from '../../../store/extras';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
function Badges() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user_badges = useSelector(state => state.extras.user_badges)

    const init = async () => {
        let badges = await dispatch(getUserBadge()).unwrap();
        if(badges.success == false){
            navigate('/home')
        }
    }
    useEffect(() => {
        init()
    }, [])
    return (
        <GoldSiverHeader previous='/home' title='Badges'>

        <div className='container p-2 challenge'>
            <Card border='dark' text='white' className='bg-theme'>
                <Card.Header><h3 className='text-center'> Badges</h3></Card.Header>

                <Card.Body className='text-center'>
                    <h5>These are your badges. They are the fruits of your hard work as a Pokémon Trainer.</h5>
                    <h5>You can earn them by battling Pokémon.Gym Leadersin each region.</h5>
                </Card.Body>
            </Card>
            <Card border='dark' text='white' className='bg-theme mt-2 accordion-badge'>
                <Card.Header><h1 className='text-center '> Badges</h1></Card.Header>
                <Accordion defaultActiveKey="0">
                    {user_badges.map((item) => {
                        return <Accordion.Item eventKey="0" >
                            <Accordion.Header className='bg-theme'><h5 className='text-center w-100'>{item.region}</h5></Accordion.Header>
                            <Accordion.Body className='bg-theme'>
                                <Row className='justify-content-center'>
                                    {item?.badges.map((inner,index) => {
                                        return <Col md={1} sm={1} xs={1} key={index}>
                                            <img data-tooltip-id={inner.imgSrc} data-tooltip-content={inner.title} src={`/images/badges/pixel/${inner.imgSrc}`} alt="" />
                                            <Tooltip id={inner.imgSrc}/>
                                        </Col>
                                    })
                                    }
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                    })}
                </Accordion>
            </Card>
        </div>
        </GoldSiverHeader>

    )
}

export default Badges
