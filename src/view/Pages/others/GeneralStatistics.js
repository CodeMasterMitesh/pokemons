import { Card, Col, Overlay, Popover, Row } from 'react-bootstrap'
import GoldSiverHeader from '../../../view/HomePage/GoldSiverHeader'
import React, { useState } from 'react'
import PokemonProfile from '../../../view/Component/PokemonProfile';

function GeneralStatistics() {

    const [target, setTarget] = useState(null); // Track the current target element
    const [hoveredId, setHoveredId] = useState(null);

    const arr = [
        {
            name: 'Strongest Pokemon',
            data: [
                {
                    wild_id: 289,
                    name: 'Maviss',
                    value: '1893',
                    img: '289',
                    id: 134,
                    mood: "Naive",
                    Nagotiable: 'Negotiable',
                    type1: 'Normal',
                    pokemon: true
                },
            ]
        },
        {
            name: 'More experienced pokemon',
            data: [
                {
                    wild_id: 289,
                    name: 'Maviss',
                    value: '31852203',
                    img: '289',
                    id: 134,
                    mood: "Naive",
                    Nagotiable: 'Negotiable',
                    type1: 'Normal',
                    pokemon: true
                },
            ]
        },
        {
            name: 'Millionaires',
            data: [
                {
                    name: 'Maviss',
                    value: '3454758',
                    img: '/images/characters/Calem/Thumb.png',
                    character: true

                },
            ]
        },
        {
            name: 'Pokémon collectors in the TOP 3',
            data: [
                {
                    name: 'Maviss',
                    value: '2',
                    img: '/images/characters/Calem/Thumb.png',
                    character: true

                },
            ]
        },
        {
            name: 'Pokémon Collectors Lv.100',
            data: [
                {
                    name: 'NightSlash',
                    value: '2',
                    img: '/images/characters/Cilan/Thumb.png',
                    character: true
                },
                {
                    name: 'Maviss',
                    value: '2',
                    img: '/images/characters/Calem/Thumb.png',
                    character: true

                },
            ]
        },
        {
            name: 'Duelists',
            data: [
                {
                    name: 'Maviss',
                    value: '3718',
                    img: '/images/characters/Calem/Thumb.png',
                    character: true
                },
            ]
        },
    ]

    const handleMouseEnter = (e, item) => {
        if(item.pokemon){
            setHoveredId(item.wild_id);
            setTarget(e.currentTarget)
        }
    };

    const handleMouseLeave = () => {
        setHoveredId(null);
    };
    return (
        <div>
            <GoldSiverHeader previous='/home' title='General Statistics'>

                <div className='container p-2 challenge'>
                    {arr.map((item, itemIndex) => {
                        return <Card border='dark' key={itemIndex} text='white' className='bg-theme mt-2 accordion-badge'>
                            <Card.Header><h3 className='text-center '>{item.name}</h3></Card.Header>
                            <Row className='justify-content-center'>
                                {item.data.map((inner, index) => {
                                    return <Col md={1} sm={1} xs={1} key={index} style={{ width: '200px' }} className='p-3' onMouseEnter={(e) => handleMouseEnter(e, inner)}
                                        onMouseLeave={handleMouseLeave}>
                                        <div className='d-flex justify-content-center flex-column align-items-center general-box'>
                                            <h4>{inner.name}</h4>
                                            {inner.character && <img src={inner.img} alt="" style={{ height: '162px' }} />}
                                            {inner.pokemon && <img src={`/images/pokemon/${inner.img}.gif`} alt="" style={{ height: '112px' }} />}
                                            <h4>{inner.value}</h4>
                                        </div>
                                        <Overlay
                                            show={hoveredId === inner.wild_id}
                                            target={target}
                                            placement="bottom"
                                            className='w-100 p-0'
                                        >
                                            <Popover body id={`popover-${inner.wild_id}`} className='custom-popover'>
                                                <Popover.Body className='p-0'>
                                                    <PokemonProfile data={inner} />
                                                </Popover.Body>
                                            </Popover>
                                        </Overlay>
                                    </Col>
                                })}
                            </Row>
                        </Card>
                    })
                    }
                </div>
            </GoldSiverHeader>
        </div>
    )
}

export default GeneralStatistics
