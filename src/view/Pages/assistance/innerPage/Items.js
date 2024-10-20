import React from 'react'
import { Table } from 'react-bootstrap'
function Items() {
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
                    <tr>
                        <td>1</td>
                        <td>
                            <div className='pokemon-symbole'>
                                <img src="/images/items/Poke ball.png" alt="" />
                            </div>
                        </td>
                        <td>
                            Poke ball

                        </td>
                        <td>
                            Normal chance to capture a pokemon.
                        </td>
                        <td>
                            Poké Balls
                        </td>
                        <td>
                            <img src="/images/icons/green.png" alt="" />

                        </td>
                        <td>
                            <img src="/images/icons/green.png" alt="" />

                        </td>
                        <td>
                            <img src="/images/icons/red.png" alt="" />

                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>
                            <div className='pokemon-symbole'>
                                <img src="/images/items/Great ball.png" alt="" />
                            </div>
                        </td>
                        <td>
                            Great ball

                        </td>
                        <td>
                            1.5x higher chance of catching a Pokemon.
                        </td>
                        <td>
                            Poké Balls
                        </td>
                        <td>
                            <img src="/images/icons/green.png" alt="" />

                        </td>
                        <td>
                            <img src="/images/icons/green.png" alt="" />

                        </td>
                        <td>
                            <img src="/images/icons/red.png" alt="" />

                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>
                            <div className='pokemon-symbole'>
                                <img src="/images/items/Ultra ball.png" alt="" />
                            </div>
                        </td>
                        <td>
                            Ultra ball

                        </td>
                        <td>
                            2.0x higher chance of catching a Pokemon.
                        </td>
                        <td>
                            Poké Balls
                        </td>
                        <td>
                            <img src="/images/icons/green.png" alt="" />

                        </td>
                        <td>
                            <img src="/images/icons/green.png" alt="" />

                        </td>
                        <td>
                            <img src="/images/icons/red.png" alt="" />

                        </td>
                    </tr>

                </tbody>
            </Table>
        </div>
    )
}

export default Items
