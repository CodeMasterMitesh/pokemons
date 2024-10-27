import { Badge, Table, Form } from 'react-bootstrap';
import { pokemonGuide } from '../../../../store/assistance'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Pagination from '@mui/material/Pagination';
import debounce from 'lodash.debounce'

function Attacks() {
    const dispatch = useDispatch()
    const pokemon_guide = useSelector(state => state.assistance.pokemon_guide)
    const [search, setSearch] = useState('');
    const payload = {
        category: 'attack-info',
        page: 1,
        search: ''
    }
    useEffect(() => {
        dispatch(pokemonGuide(payload))
    }, [])
    const handleChange = (e, value) => {
        payload.page = value;
        dispatch(pokemonGuide(payload))

    }
    const debouncedDispatch = useCallback(
        debounce((payload) => {
            dispatch(pokemonGuide(payload));
        }, 1000),
        []
    );

    const handleChangeSearch = (e) => {
        payload.search = e.target.value;
        setSearch(e.target.value);
        debouncedDispatch(payload);
    };
    return (
        <div>
            <Table striped bordered hover className='table-theme'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Type</th>
                        <th>Attack</th>
                        <th>Hit</th>
                        <th>Effect</th>
                        <th>Contact</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {pokemon_guide?.data?.map((item, index) => {
                        return <tr>
                            <td>{((pokemon_guide?.pagination?.current_page - 1) * 20) + index + 1}</td>

                            <td>{item.naam}</td>
                            <td><div className={`type-icon type-${item.tipo}`}>{item.tipo}</div></td>

                            <td><div className={`type-icon type-${item.soort}`}>{item.soort}</div></td>
                            <td>{item.sterkte}</td>
                            <td>--</td>
                            <td>--</td>
                            <td>
                                <img src={`/images/icons/${item.makes_contact}.png`} alt="" />
                            </td>
                            <td>
                                <img src={`/images/icons/${item.klaar}.png`} alt="" />
                            </td>
                        </tr>
                    })}

                </tbody>
            </Table>
            <div className='d-flex justify-content-between'>
                <div className='pl-style'>
                    <Form.Control className='bg-theme text-white ' type="text" value={search} placeholder="Search" onChange={(e) => handleChangeSearch(e)} />
                </div>
                <Pagination variant='outlined text-white' color="primary" shape="rounded" count={pokemon_guide?.pagination?.total_pages} onChange={handleChange} />
            </div>
        </div>
    )
}

export default Attacks
