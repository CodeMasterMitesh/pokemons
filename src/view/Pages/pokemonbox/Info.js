import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { FaRegPlusSquare } from "react-icons/fa";
import { TbSquareChevronRightFilled } from "react-icons/tb";
import { Button, Dropdown, DropdownButton, Form, Modal, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import boxes from './boxes'
import PokemonProfile from 'view/Component/PokemonProfile';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
        href=""
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {children}
    </a>
));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
        const [value, setValue] = useState('');

        return (
            <div
                ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}
            >
                <ul className="list-unstyled">
                    {React.Children.toArray(children).filter(
                        (child) =>
                            !value || child.props.children.toLowerCase().startsWith(value),
                    )}
                </ul>
            </div>
        );
    },
);

function Info({ pokemon, selected }) {
    const navigate = useNavigate()
    const [showDropdown, setShowDropdown] = useState(false);
    const [show, setShow] = useState(false);
    const [showSell, setShowSell] = useState(false);
    const [showRelease, setShowRelease] = useState(false);
    const [infoShow, setInfoShow] = useState(false);
    const handleSave = () => {

    }

    const toggleDropdown = () => setShowDropdown(!showDropdown);
    return (
        <div style={{ color: 'black' }}>
            <Modal variant='dark' show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton className='bg-theme text-white'>
                    <Modal.Title>Do you want to transfer Mudkip from box?</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-theme'>
                    <div>
                        <Table className='table-theme w-100 text-white'>
                            <tbody>
                                <tr>
                                    <td colSpan={2} className='text-center'>
                                        <img src={`/images/pokemon/${pokemon.wild_id}.gif`} alt="" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Pokemon :</td>
                                    <td>{pokemon.naam} Lv :{pokemon.level}</td>
                                </tr>
                                <tr>
                                    <td>Current Box :</td>
                                    <td>{selected.name}</td>
                                </tr>
                                <tr>
                                    <td>Next Box :</td>
                                    <td>
                                        <Form.Select className='bg-theme text-white' style={{ width: '100px' }}>
                                            {
                                                boxes.map((item, index) => {
                                                    return <option value={index}>{item.name}</option>
                                                })
                                            }
                                        </Form.Select>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Modal.Body>
                <Modal.Footer className='bg-theme text-white'>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal variant='dark' show={showSell} onHide={() => setShowSell(false)}>
                <Modal.Header closeButton className='bg-theme text-white'>
                    <Modal.Title>Sell pokemon</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-theme'>
                </Modal.Body>
                <Modal.Footer className='bg-theme text-white'>
                    <Button variant="secondary" onClick={() => setShowSell(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => setShowSell(false)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal variant='dark' show={showRelease} onHide={() => setShowRelease(false)}>
                <Modal.Header closeButton className='bg-theme text-white'>
                    <Modal.Title>Release pokemon</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-theme'>
                </Modal.Body>
                <Modal.Footer className='bg-theme text-white'>
                    <Button variant="secondary" onClick={() => setShowRelease(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => setShowRelease(false)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={infoShow} onHide={() => setInfoShow(false)} >
                <Modal.Body className='bg-dark'>
                    <PokemonProfile data={pokemon}/>
                </Modal.Body>
                <Modal.Footer className='bg-dark text-white'>
                    <Button variant="secondary" onClick={() => setInfoShow(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className='d-flex align-content-end'>
                <div>
                    <IoSearch color='black' className='cursor-pointer' onClick={ ()=>setInfoShow(true)} />
                </div>
                <div>
                    <FaRegPlusSquare color='black' className='cursor-pointer' />
                </div>
                <Dropdown>
                    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                        <TbSquareChevronRightFilled
                            color="black"
                            className="cursor-pointer"
                            onClick={toggleDropdown}
                        />
                    </Dropdown.Toggle>
                    <Dropdown.Menu as={CustomMenu}>
                        <Dropdown.Item as="button" onClick={() => navigate(`/character?id=${pokemon.id}`)}>Profile</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={() => setShowSell(true)}>Sell</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={() => setShowRelease(true)}>Release</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={() => setShow(true)}>Transfer</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>



        </div>
    )
}

export default Info
