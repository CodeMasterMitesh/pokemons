import React from 'react'
import { Table } from 'react-bootstrap'

function Skills() {
    return (
        <div>
            <Table striped bordered hover className='table-theme'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Adaptability</td>
                        <td>
                            It will increase the damage of the move if it is the same Type as the Pokémon.
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Aerilate</td>
                        <td>
                            Normal-type attacks will be transformed into Flying attacks, and their damage will increase.
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Aftermath</td>
                        <td>
                        Damages the foe landing the finishing hit.
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Air Lock</td>
                        <td>
                        Eliminates the effects of weather.
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Skills
