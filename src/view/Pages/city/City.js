import React, { useState } from 'react'
import GoldSiverHeader from '../../HomePage/GoldSiverHeader'
import { Card, Cards } from 'react-bootstrap'
import { Tooltip } from 'react-tooltip';
import citydata from '../../JsonData/city'
import { useNavigate } from 'react-router-dom';

function City() {
    const [hoveredArea, setHoveredArea] = useState(null);
    const navigate=useNavigate()
    return (
        <div>
            <GoldSiverHeader previous={'/home'} title='City'>
                <div className='p-5'>
                    <Card border='dark' text='white' className='bg-theme'>
                        <Card.Header><h3 className='text-center'> City</h3></Card.Header>

                        <Card.Body className='text-center'>
                            <p>Well, here is the City ... You can do several activities in the city, such as Traveling, buying Poké balls, Facing Gyms and many other things...</p>
                            <p>Take care, trainer!</p>
                        </Card.Body>
                    </Card>
                    <Card border='dark' text='white' className='bg-theme mt-2'>
                        <Card.Body className='d-flex justify-content-center'>
                            <div className='position-relative' style={{ width: 'fit-content' }}>
                                <img src="/images/town/town.png" alt="" />
                                {citydata.map((item) => {
                                    return <div
                                        className="hover-area cursor-pointer"
                                        style={{position:"absolute", top: item.top, left: item.left, width: item.width, height: item.height }}
                                        data-tooltip-id={item.id}
                                        data-tooltip-content={item.title}
                                        onClick={()=>{navigate(`${item.route}`) }}
                                    >
                                        <Tooltip id={item.id} />
                                    </div>
                                })}
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </GoldSiverHeader>

        </div>
    )
}

export default City
