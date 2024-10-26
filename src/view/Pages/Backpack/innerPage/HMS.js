import React, { useState } from 'react'
import { Form, Table } from 'react-bootstrap';


function HMS() {

    const [data, setData] = useState([
        {
            img: 'Attack_Fighting.png',
            name: "HM04 ()",
            amount: 1,
            unit_value: 16383
        },
    ])
    return (
        <div>
            <h3 className='mb-3'>HM</h3>
            <Table striped bordered hover className='table-theme'>
                <thead>
                    <tr>
                        <th></th>
                        <th>Item</th>
                        <th>Amount</th>
                        <th>Unit value.</th>
                        <th>Sell</th>
                        <th>To Use</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return <tr style={{ verticalAlign: 'middle' }}>
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
                                <img src="/images/icons/silver.png" alt="" />
                                {item.unit_value}
                            </td>
                            <td>
                                <div className='d-flex justify-content-end w-100 gap-4'>
                                    <Form.Control className='bg-theme text-white' style={{ width: '100px' }} type="number" placeholder="Enter name" />
                                    <div className="register-item-inner6">
                                        <button className='potions-button'>OK</button>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="register-item-inner6">
                                    <button className='potions-button'>To Use</button>
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

export default HMS
