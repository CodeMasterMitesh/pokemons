import React, { useState } from 'react'
import { Form, Table } from 'react-bootstrap';


function PokemonBalls() {

    const [data, setData] = useState([
        {
            img: 'Poke ball.png',
            name: "Poke ball",
            amount: 3,
            unit_value: 100,
            sell: 0
        },
        {
            img: 'Timer ball.png',
            name: "Timer ball",
            amount: 1,
            unit_value: 175,
            sell: 0
        }
    ])
    return (
        <div>
            <h3 className='mb-3'>Pokemon Balls</h3>
            <Table striped bordered hover className='table-theme'>
                <thead>
                    <tr>
                        <th></th>
                        <th>Item</th>
                        <th>Amount</th>
                        <th>Unit value.</th>
                        <th>Sell</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return <tr className='vertical-align-middle'>
                            <td>{index + 1}</td>
                            <td>

                                <div className='d-flex justify-content-start gap-4 align-items-center'>
                                    <div className='img-round'>
                                        <img src={`/images/items/${item.img}`} alt="" />
                                    </div>
                                    <div>
                                        {item.name}
                                    </div>
                                </div>
                            </td>

                            <td>{item.amount}x</td>
                            <td><img src="/images/icons/silver.png" alt="" />{item.unit_value}</td>
                            <td>
                                <div className='d-flex justify-content-end w-100 gap-4'>
                                    <Form.Control className='bg-theme text-white' style={{ width: '100px' }} type="number" placeholder="Enter name" />
                                    <div className="register-item-inner6">
                                        <button className='specialist-button'>OK</button>
                                    </div>
                                </div>
                            </td>
                        </tr>

                    })
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default PokemonBalls
