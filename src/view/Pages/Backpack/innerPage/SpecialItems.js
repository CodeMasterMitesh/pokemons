import React, { useState } from 'react'
import { Form, Table } from 'react-bootstrap';


function SpecialItems() {

    const [data, setData] = useState([
        {
            img: 'Badge case.png',
            name: "Badge case",
            amount: 1,
            unit_value: '--',
            sell: '--'
        },
        {
            img: 'Bike.png',
            name: "Bike",
            amount: 1,
            unit_value: '--',
            sell: '--'
        },
        {
            img: 'Cave suit.png',
            name: "Cave suit",
            amount: 1,
            unit_value: '--',
            sell: '--'
        },
        {
            img: 'Fishing rod.png',
            name: "Fishing rod",
            amount: 1,
            unit_value: '--',
            sell: '--'
        },
        {
            img: 'Pokedex.png',
            name: "Pokedex",
            amount: 1,
            unit_value: '--',
            sell: '--'
        },
        {
            img: 'Pokedex chip.png',
            name: "Pokedex chip",
            amount: 1,
            unit_value: '--',
            sell: '--'
        }
    ])
    return (
        <div>
            <h3 className='mb-3'>No item found...</h3>
        </div>
    )
    return (
        <div>
            <h3 className='mb-3'>Special Items</h3>
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
                        return <tr style={{verticalAlign:'middle'}}>
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
                            <td>
                                {/* <img src="/images/icons/silver.png" alt="" /> */}
                                {item.unit_value}
                            </td>
                            <td>
                                {item.sell}

                                {/* <div className='d-flex justify-content-end w-100 gap-4'>
                                    <Form.Control className='bg-theme text-white' style={{ width: '100px' }} type="number" placeholder="Enter name" />
                                    <div className="register-item-inner6">
                                        <button className='specialist-button'>OK</button>
                                    </div>
                                </div> */}
                            </td>
                        </tr>

                    })
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default SpecialItems
