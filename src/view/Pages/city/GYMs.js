import OnlineTrainers from '../../Component/OnlineTrainers'
import GoldSiverHeader from '../../HomePage/GoldSiverHeader'
import React, { useState } from 'react'
import { Card, Carousel } from 'react-bootstrap'
import gym from 'view/JsonData/gym'

function GYMs() {
    const [selectedIndex, setSelectedIndex] = useState(0)

    const handleSelect = async (selectedIndex) => {
        setSelectedIndex(selectedIndex);

    };
    return (
        <div>
            <GoldSiverHeader previous='/city' title='GYM'>
                <div className='container'>
                    <Card border='dark' text='white' className='bg-theme'>
                        <Card.Header><h3 className='text-center'> Gyms</h3></Card.Header>

                        <Card.Body className='text-center'>
                            <h5>Welcome, trainer!</h5>
                            <h5>Here you can challenge gym leaders from certain regions and with that, you will get advantages by winning against them, such as Badges .
                            </h5>
                            <h5>Train your Pokémon hard, because here, no gym leader will have mercy on you!</h5>
                        </Card.Body>
                    </Card>
                    <Card border='dark' text='white' className='mt-2 bg-theme'>
                        <Card.Header><h3 className='text-center'> Hoenn Region Gyms</h3></Card.Header>

                        <Card.Body className='text-center'>
                            <Carousel
                                interval={null}
                                className='h-100'
                                activeIndex={selectedIndex}
                                onSelect={handleSelect}
                                prevIcon={<img src="/images/pokeProfile/leftarrow.png" alt="images" className='navigation-image' style={{ width: '30px' }} />}
                                nextIcon={<img src="/images/pokeProfile/rightarrow.png" alt="images" className='navigation-image' style={{ width: '30px' }} />}
                            >
                                {gym.map((item, index) => {
                                    return <Carousel.Item key={index}>
                                        <div className='d-flex flex-column'>
                                            <div className='gym-trainer'>
                                                <img className={(item.lock?'locked':'')+ ' trainer'} src={`/images/trainers/${item.title}.png`} alt="" />
                                                <img className={(item.lock?'locked':'')+ ' stone'} src={`/images/badges/pixel/${item.stone}`} alt="" />
                                                {item.lock && <img className='locked-trainer' src="/images/icons/avatar/lock.png" alt="" />}
                                            </div>
                                            <div className='gym-title p-2'>
                                                <p><h4>{item.lock ?'????':item.title}</h4></p>
                                                <p><h5>{item.lock?'????':item.subtitle}</h5></p>
                                            </div>
                                        </div>
                                    </Carousel.Item>
                                })}
                            </Carousel>

                            <div className='description'>
                                <h3>Description</h3>
                                {gym[selectedIndex].lock && <h3>[GYM LOCKED!]</h3>}
                                {gym[selectedIndex].lock && <h3>[WIN FROM PREVIOUS TO BE ABLE TO CHALLENGE GYM LEADER!]</h3>}
                                {!gym[selectedIndex].lock && <div dangerouslySetInnerHTML={{__html:gym[selectedIndex].description}}></div>}
                            </div>
                        </Card.Body>
                    </Card>
                    <OnlineTrainers />
                </div>
            </GoldSiverHeader>

        </div>
    )
}

export default GYMs
