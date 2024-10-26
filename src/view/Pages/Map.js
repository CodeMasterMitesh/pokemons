import React, { useState } from 'react'
import GoldSiverHeader from '../HomePage/GoldSiverHeader'
import { Card, Col, Row } from 'react-bootstrap'
import './ImageWithTooltip.css'; // Custom CSS for styling

function Map() {
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
                        <Card.Header><h3 className='text-center'> Hoenn Map</h3></Card.Header>

                        <Card.Body className='text-center'>
                            <h5>Hello, trainer! Welcome to the Hoenn region MAP</h5>
                            <h5>Always try to progress in the game, and to do so, defeat and capture several Pokémon.</h5>
                            <h5>Always remember to carry Poke balls, because you never know which Pokémon you will encounter on your path!</h5>
                        </Card.Body>
                    </Card>
                    <Card border='dark' text='white' className='bg-theme mt-2'>
                        <Card.Body className='position-relative d-flex justify-content-center'>
                            <table width={590} border={0} cellSpacing={0} cellPadding={0}>
                                <tbody>
                                    <tr>
                                        <td>
                                            <table width={590} border={0} cellSpacing={0} cellPadding={0}>
                                                <tbody>
                                                    <tr>
                                                        <td width={351} height={208}>
                                                            <input type="image" src="/images/attackmap/hoenn/lavagrot.gif" alt="" />
                                                        </td>
                                                        <td width={239} height={208}>
                                                            <input type="image" src="/images/attackmap/hoenn/spookhuis.gif" alt="" />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <table width={590} border={0} cellSpacing={0} cellPadding={0}>
                                                <tbody>
                                                    <tr>
                                                        <td width={267} height={129}>
                                                            <input type="image" src="/images/attackmap/hoenn/area_01.gif" alt="" />
                                                        </td>
                                                        <td width={323} height={129}>
                                                            <input type="image" src="/images/attackmap/hoenn/grasveld_01.gif" alt="" />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <table width={590} border={0} cellSpacing={0} cellPadding={0}>
                                                <tbody>
                                                    <tr>
                                                        <td width={590} height={137}>
                                                            <input type="image" src="/images/attackmap/hoenn/area_02.gif" alt="" />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <table width={590} border={0} cellSpacing={0} cellPadding={0}>
                                                <tbody>
                                                    <tr>

                                                        <td width={255} height={154}>
                                                            <input type="image" src="/images/attackmap/hoenn/vechtschool.gif" alt="" />
                                                        </td>
                                                        <td width={335} height={154}>
                                                            <input type="image" src="/images/attackmap/hoenn/grasveld.gif" alt="" />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <table width={590} border={0} cellSpacing={0} cellPadding={0}>
                                                <tbody>
                                                    <tr>

                                                        <td width={127} height={172}>
                                                            <input type="image" src="/images/attackmap/hoenn/grot.gif" alt="" />
                                                        </td>
                                                        <td width={297} height={172}>
                                                            <input type="image" src="/images/attackmap/hoenn/strand.gif" alt="" />
                                                        </td>
                                                        <td width={166} height={172}>
                                                            <input type="image" src="/images/attackmap/hoenn/water.gif" alt="" />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>



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

export default Map
