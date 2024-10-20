import React from 'react'
import { Badge, Table } from 'react-bootstrap';

function Moods() {
    return (
        <div>
            <Table striped bordered hover className='table-theme'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>-Attck</th>
                        <th>-Defense</th>
                        <th>-Sp.Atk</th>
                        <th>-Sp.Def</th>
                        <th>-Speed</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>+Attack</td>
                        <td>Hardy</td>
                        <td>
                            <div className='bg-success'>
                                Lonely
                            </div>
                        </td>
                        <td>
                            <div className='bg-success'>
                                Adamant
                            </div>
                        </td>
                        <td>
                            <div className='bg-success'>
                                Naughty
                            </div>
                        </td>
                        <td>
                            <div className='bg-success'>
                                Brave
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>+Defense</td>
                        <td>
                            <div className='bg-danger'>Bold </div>
                        </td>
                        <td>Docile</td>
                        <td>
                            <div className='bg-success'>
                                Impish
                            </div>
                        </td>
                        <td>
                            <div className='bg-success'>
                                Lax
                            </div>
                        </td>
                        <td>
                            <div className='bg-success'>
                                Relaxed
                            </div></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Moods
