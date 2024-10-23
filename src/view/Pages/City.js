import React, { useState } from 'react'
import GoldSiverHeader from '../HomePage/GoldSiverHeader'
import { Card } from 'react-bootstrap'
import './ImageWithTooltip.css'; // Custom CSS for styling

function City() {
    const [hoveredArea, setHoveredArea] = useState(null);

    const handleMouseEnter = (area) => {
        setHoveredArea(area);
    };

    const handleMouseLeave = () => {
        setHoveredArea(null);
    };
    return (
        <div>
            <GoldSiverHeader previous={'/home'} title='City'>
                <div className='p-5'>
                    <Card border='dark' text='white' className='bg-theme'>
                        <Card.Header><h3 className='text-center'> City</h3></Card.Header>

                        <Card.Body className='text-center'>
                            <h5>Well, here is the City ... You can do several activities in the city, such as Traveling, buying Poké balls, Facing Gyms and many other things...</h5>
                            <h5>Take care, trainer!</h5>
                        </Card.Body>
                    </Card>
                    <Card border='dark' text='white' className='bg-theme mt-2'>
                        <Card.Body className='text-center position-relative'>
                            <img src="/images/town/town.png" alt="" />
                            <div
                                className="hover-area"
                                style={{ top: '20%', left: '30%', width: '100px', height: '100px' }}
                                onMouseEnter={() => handleMouseEnter('area1')}
                                onMouseLeave={handleMouseLeave}
                            >
                                {hoveredArea === 'area1' && (
                                    <div className="tooltip">Tooltip for Area 1</div>
                                )}
                            </div>

                            <div
                                className="hover-area"
                                style={{ top: '50%', left: '50%', width: '100px', height: '100px' }}
                                onMouseEnter={() => handleMouseEnter('area2')}
                                onMouseLeave={handleMouseLeave}
                            >
                                {hoveredArea === 'area2' && (
                                    <div className="tooltip">Tooltip for Area 2</div>
                                )}
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </GoldSiverHeader>

        </div>
    )
}

export default City
