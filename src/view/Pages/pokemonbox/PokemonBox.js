import React, { useEffect, useState } from 'react'
import GoldSiverHeader from '../../HomePage/GoldSiverHeader'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { getPlayerPokemons } from '../../../store/pokemon';
import boxes from './boxes'
import { toast } from 'react-toastify';
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";
import Info from './Info';
import Modal from 'react-bootstrap/Modal';
import { boxUpdate } from 'store/pages';

function PokemonBox() {
    const user_data = useSelector(state => state.auth.user_data)
    const dispatch = useDispatch()
    const player_pokemons = useSelector(state => state.pokemon.player_pokemons)
    const [pokemonBox, setPokemonBox] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [boxes_data, setBoxes] = useState(boxes);
    const [config, setConfig] = useState(false);

    const [selected, setSelected] = useState(boxes[0])
    const [box_pokemons, setBoxPokemons] = useState(boxes[0].pokemons)

    const [configBox, setConfigBox] = useState({})
    const [configBoxIndex, setConfigIndex] = useState(0)
    useEffect(() => {
        setPokemonBox(player_pokemons);
    }, [player_pokemons])
    // Function to handle drag events
    const backs = [
        'Seabed2',
        'River',
        'River2',
        'Sky',
        'Volcano2',
        'Volcano'
    ]
    const onDragEnd = (result) => {

        const { destination, source } = result;
        if (!destination) return; // Dropped outside the list

        if (source.droppableId == 'lower-box') {
            let i = box_pokemons.findIndex(item => !item.wild_id)
            if (i == -1) {
                toast.error('Box is full')
                return
            }
        } else if (pokemonBox.length == 5) {
            toast.error('List is full')
            return
        }
        const sourceList = source.droppableId === 'upper-box' ? pokemonBox : box_pokemons;
        const destinationList = destination.droppableId === 'upper-box' ? pokemonBox : box_pokemons;
        const sourceSetter = source.droppableId === 'upper-box' ? setPokemonBox : setBoxPokemons;
        const destinationSetter = destination.droppableId === 'upper-box' ? setPokemonBox : setBoxPokemons;

        // Moving within the same list
        if (source.droppableId === destination.droppableId) {

            const reorderedList = Array.from(sourceList);
            const [movedItem] = reorderedList.splice(source.index, 1);
            reorderedList.splice(destination.index, 0, movedItem);
            sourceSetter(reorderedList);

            if (destination.droppableId == 'lower-box') {

                setBoxes((prev) => {
                    prev[selectedIndex].pokemons = reorderedList;
                    return prev
                })
            }
        }
        // Moving between lists
        else {
            const newSourceList = Array.from(sourceList);
            const [movedItem] = newSourceList.splice(source.index, 1);

            const newDestinationList = Array.from(destinationList);

            newDestinationList.splice(destination.index, 0, movedItem);
            if (destination.droppableId == 'lower-box') {

                let i = -1;
                newDestinationList.map((item, index) => {
                    if (!item.wild_id) {
                        i = index;
                    }
                })
                newDestinationList.splice(i, 1);
            }

            sourceSetter(newSourceList);
            destinationSetter(newDestinationList);
            if (destination.droppableId == 'lower-box') {

                setBoxes((prev) => {
                    prev[selectedIndex].pokemons = newDestinationList;
                    return prev
                })
            }
        }
    };
    const setPokemonData = (e) => {
        setSelected(boxes[e.target.value]);
        setSelectedIndex(e.target.value);
        setBoxPokemons(boxes[e.target.value].pokemons)
    }
    const hanldePrevious = () => {
        if (selectedIndex > 0) {
            setBoxPokemons(boxes_data[selectedIndex - 1].pokemons)
            setSelected(boxes_data[selectedIndex - 1])
            setSelectedIndex(selectedIndex - 1)
        }
    }
    const hanldeNext = () => {
        if (selectedIndex < boxes_data.length - 1) {
            setBoxPokemons(boxes_data[selectedIndex + 1].pokemons)
            setSelected(boxes_data[selectedIndex + 1])
            setSelectedIndex(selectedIndex + 1)
        }
    }
    const handleSave = () => {
        dispatch(boxUpdate(configBox))
    }
    useEffect(() => {
        dispatch(getPlayerPokemons())
    }, [])

    const handleConfigOpen = () => {
        setConfigBox({ name: selected.name, img: selected.img.split('.')[0] })
        setConfig(true)
        setConfigIndex(backs.indexOf(selected.img.split('.')[0]))
    }
    const hanldePreviousConfig = () => {
        if (configBoxIndex > 0) {
            setConfigBox({ ...configBox, img: backs[configBoxIndex - 1] })
            setConfigIndex(configBoxIndex - 1)
        }
    }
    const hanldeNextConfig = () => {
        if (configBoxIndex < backs.length - 1) {
            setConfigBox({ ...configBox, img: backs[configBoxIndex + 1] })
            setConfigIndex(configBoxIndex + 1)
        }
    }
    
    return (
        <div>
            <Modal show={config} onHide={() => setConfig(false)}>
                <Modal.Header closeButton className='bg-theme text-white'>
                    <Modal.Title>Configuration</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-theme d-flex justify-content-center'>
                    <div className='text-white d-flex align-items-center gap-3'>
                        <FaCircleChevronLeft size={20} className='cursor-pointer' onClick={hanldePreviousConfig} />
                        <div>
                            <div className='mb-3'>
                                <Form.Control className='bg-theme text-white' value={configBox.name} onChange={(e) => setConfigBox({ ...configBox, name: e.target.value })} />
                                <b>Background:{configBox.img} </b>
                            </div>
                            <img src={`/images/box/${configBox.img}.png`} alt="" width={300} height={200} />
                        </div>
                        <FaCircleChevronRight size={20} className='cursor-pointer' onClick={hanldeNextConfig} />
                    </div>
                </Modal.Body>
                <Modal.Footer className='bg-theme text-white'>
                    <Button variant="secondary" onClick={() => setConfig(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <GoldSiverHeader previous={'/home'} title='Pokemon Box'>
                <div className='container p-2 challenge'>
                    <Card border='dark' text='white' className='bg-theme'>
                        <Card.Header><h3 className='text-center'> Pokémon Box</h3></Card.Header>
                        <Card.Body className='text-center'>
                            <h5>Welcome to your BOX, Trainer!</h5>
                            <h5>Here you can store your Pokémon, organize them, sell them and use many other functions... Be an organized Trainer, because I'm sure it will be better for you!</h5>
                        </Card.Body>
                    </Card>
                    <Card border='dark' text='white' className='bg-theme mt-2'>
                        <Card.Header><h3 className='text-center'>Current team :</h3></Card.Header>
                        <Card.Body className='text-center'>
                            <Row>
                                <Col sm={3} className='mt-5' style={{ borderRight: "2px solid #1e2953" }}>
                                    <h6>You currently have a mansion, and you can keep 2500 Pokémon</h6>
                                    <h6>Pokémon Lv. 100: {user_data?.aantalpokemon}</h6>
                                    <p>TOP 3 Pokémon: <span>
                                        <span>
                                            <span><img src="/images/icons/medal3.png" alt="" style={{ margin: '0px' }} />0 </span>|
                                            <span><img src="/images/icons/medal2.png" alt="" style={{ margin: '0px' }} />0 </span>|
                                            <span><img src="/images/icons/medal1.png" alt="" style={{ margin: '0px' }} />0 </span>|
                                        </span>
                                    </span></p>

                                    <div className='mt-5'>
                                        <img src="/images/house4.gif" alt="" />
                                        <h6 className='mt-3'>2498 slots available</h6>
                                    </div>
                                </Col>
                                <Col sm={9} className='d-flex justify-content-center' >
                                    <div className='d-flex align-items-center flex-column'>
                                        <DragDropContext onDragEnd={onDragEnd} style={{ width: '100%' }} >
                                            <div style={styles.container} >
                                                <Droppable droppableId="upper-box" direction="horizontal">
                                                    {(provided) => (
                                                        <div
                                                            style={styles.box}
                                                            {...provided.droppableProps}
                                                            ref={provided.innerRef}
                                                        >
                                                            {pokemonBox.map((pokemon, index) => (
                                                                <Draggable key={pokemon.id} draggableId={pokemon.id} index={index}>
                                                                    {(provided) => (
                                                                        <div
                                                                            ref={provided.innerRef}
                                                                            {...provided.draggableProps}
                                                                            {...provided.dragHandleProps}
                                                                            style={{ ...styles.pokemon, ...provided.draggableProps.style }}

                                                                        >
                                                                            <img
                                                                                src={`/images/pokemon/icon/${pokemon.id}.gif`} alt="" style={{ ...styles.img }} />
                                                                            {pokemon.id && <Info pokemon={pokemon} selected={selected} />}

                                                                        </div>
                                                                    )}
                                                                </Draggable>
                                                            ))}
                                                            {provided.placeholder}
                                                        </div>
                                                    )}
                                                </Droppable>

                                            </div>
                                            <div className='mt-3 mb-3 d-flex justify-content-around w-100'>
                                                <div className='d-flex gap-3 align-items-center'>
                                                    <FaCircleChevronLeft size={20} className='cursor-pointer' onClick={hanldePrevious} />
                                                    <Form.Select value={selectedIndex} onChange={(e) => { setPokemonData(e) }} className='bg-theme text-white' style={{ width: '100px' }}>
                                                        {
                                                            boxes_data.map((item, index) => {
                                                                return <option value={index}>{item.name}</option>
                                                            })
                                                        }
                                                    </Form.Select>
                                                    <FaCircleChevronRight size={20} className='cursor-pointer' onClick={hanldeNext} />
                                                </div>
                                                <Button color='secondary' onClick={handleConfigOpen}>Configuration</Button>
                                            </div>
                                            <Droppable droppableId="lower-box" direction="horizontal">
                                                {(provided) => (
                                                    <div
                                                        style={{ ...styles.mainbox, background: `url(/images/box/${selected.img})`, padding: '0px', margin: '2px', width: '400px', height: '250px', borderRadius: '5px' }}
                                                        {...provided.droppableProps}
                                                        ref={provided.innerRef}
                                                    >
                                                        {box_pokemons?.map((pokemon, index) => (
                                                            <Draggable key={pokemon.id} draggableId={pokemon.id} index={index}>
                                                                {(provided) => (
                                                                    <div
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                        style={{ ...styles.bxpokemon, ...provided.draggableProps.style }}

                                                                    >
                                                                        <img
                                                                            src={`/images/pokemon/icon/${pokemon.id}.gif`} alt="" style={{ ...styles.img }} />
                                                                        {pokemon.wild_id && <Info pokemon={pokemon} selected={selected} />}

                                                                    </div>
                                                                )}
                                                            </Draggable>
                                                        ))}
                                                        {provided.placeholder}
                                                    </div>
                                                )}
                                            </Droppable>
                                        </DragDropContext>
                                    </div>

                                    {/* <DragDropContext onDragEnd={onDragEnd}>
                                        <div style={styles.container}>
                                            <Droppable droppableId="lower-box" direction="horizontal">
                                                {(provided) => (
                                                    <div
                                                        style={styles.box}
                                                        {...provided.droppableProps}
                                                        ref={provided.innerRef}
                                                    >
                                                        {lowerPokemonBox.map((pokemon, index) => (
                                                            <Draggable key={pokemon.id} draggableId={pokemon.id} index={index}>
                                                                {(provided) => (
                                                                    <div
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                        style={{ ...styles.pokemon, ...provided.draggableProps.style }}

                                                                    >
                                                                        <img
                                                                            src={`/images/pokemon/icon/${pokemon.wild_id}.gif`} alt="" style={{ ...styles.img }} />
                                                                    </div>
                                                                )}
                                                            </Draggable>
                                                        ))}
                                                        {provided.placeholder}
                                                    </div>
                                                )}
                                            </Droppable>
                                        </div>
                                    </DragDropContext> */}

                                </Col>
                            </Row>

                        </Card.Body>
                    </Card>
                </div>
            </GoldSiverHeader>

        </div>
    )
}

// Basic styling for layout
const styles = {
    container: {
        textAlign: 'center',
        marginTop: '20px',
        backgroundImage: 'url(../images/box/hand3.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100 % 100 %',
        // width: '345px',
        height: '50px',
        paddingLeft: '10px',
        width: "353px",
        borderRadius: 0,
    },
    box: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        maxWidth: '500px',
        padding: '2px 12px',
        margin: '0px auto',
        minHeight: '100%',
        gap: '26px'
    },
    mainbox: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        maxWidth: '90%',
        padding: '2px 12px',
        margin: '0px auto',
        gap: '2px'
    },
    pokemon: {
        textAlign: 'center',
        cursor: 'grab',
        height: "100%",
        width: "32px",
    },
    bxpokemon: {
        textAlign: 'center',
        cursor: 'grab',
        height: "100%",
        width: "10%",
        height: "38px",
        // background:'white'
    },
};
export default PokemonBox
