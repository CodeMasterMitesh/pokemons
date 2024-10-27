import { pokemonGuide } from '../../../../store/assistance'
import React, { useCallback, useEffect, useState } from 'react'
import { Form, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Pagination from '@mui/material/Pagination';
import debounce from 'lodash.debounce'



function Items() {
    const dispatch = useDispatch()
    const pokemon_guide = useSelector(state => state.assistance.pokemon_guide)
    const [search, setSearch] = useState('');
    const payload = {
        category: 'items-info',
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
                        <th></th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Is it on Pokemon Market?</th>
                        <th>Wheel of Fourtune?</th>
                        <th>Equippable?</th>
                    </tr>
                </thead>
                <tbody>
                    {pokemon_guide?.data?.map((item, index) => {
                        return <tr>
                            <td>{((pokemon_guide?.pagination?.current_page - 1) * 20) + index + 1}</td>
                            <td>
                                <div className='pokemon-symbole'>
                                    <img src={`/images/items/${item.naam}.png`} alt="" />
                                </div>
                            </td>
                            <td>
                                {item.naam}
                            </td>
                            <td style={{ maxWidth: '300px' }}>
                                {item.omschrijving_pt}
                            </td>
                            <td>
                                Poké Balls
                            </td>
                            <td>
                                <img src={`/images/icons/${item.beschikbaar}.png`} alt="" />

                            </td>
                            <td>
                                <img src={`/images/icons/${item.roleta}.png`} alt="" />

                            </td>
                            <td>
                                <img src={`/images/icons/${item.equip}.png`} alt="" />
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

export default Items
