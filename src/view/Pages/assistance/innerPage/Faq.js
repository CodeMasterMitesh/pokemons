import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap';
import Pagination from '@mui/material/Pagination';
import { useDispatch, useSelector } from 'react-redux'
import { pokemonGuide } from '../../../../store/assistance'



function Faq() {
    const dispatch = useDispatch()
    const pokemon_guide = useSelector(state => state.assistance.pokemon_guide)
    const payload = {
        category: 'game-info',
        page: 1,
    }
    useEffect(() => {
        dispatch(pokemonGuide(payload))
    }, [])
    const handleChange = (e, value) => {
        payload.page = value;
        dispatch(pokemonGuide(payload))
    }
    return (
        <div>
            <Table striped bordered hover className='table-theme'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Question</th>
                        <th>Answer</th>
                    </tr>
                </thead>
                <tbody>
                    {pokemon_guide?.data?.map((item,index) => {
                        return <tr>
                            <td>{index +1 }</td>
                            <td>{item.q}</td>
                            <td>{item.a}</td>
                        </tr>

                    })
                    }
                </tbody>
            </Table>
            <div className='d-flex justify-content-end'>
                <Pagination variant='outlined text-white' color="primary" shape="rounded" count={pokemon_guide?.pagination?.total_pages} onChange={handleChange} />
            </div>
        </div>
    )
}

export default Faq
