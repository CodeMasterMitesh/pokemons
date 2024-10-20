import React from 'react'
import { Badge, Table } from 'react-bootstrap';

function Attacks() {
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
                    <tr>
                        <td>1</td>
                        <td>10,000,000 Volt Thunderbolt</td>
                        <td><Badge bg="secondary" className='text fs-6'>Special</Badge></td>

                        <td><Badge bg="warning" className='fs-6'>Electric</Badge></td>
                        <td>195</td>
                        <td>100</td>
                        <td>--</td>
                        <td>
                            <img src="/images/icons/green.png" alt="" />
                        </td>
                        <td>
                            <img src="/images/icons/red.png" alt="" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>10,000,000 Volt Thunderbolt</td>
                        <td><Badge bg="secondary" className='text fs-6'>Special</Badge></td>
                        <td><Badge bg="warning" className='fs-6'>Electric</Badge></td>
                        <td>195</td>
                        <td>100</td>
                        <td>--</td>
                        <td>
                            <img src="/images/icons/green.png" alt="" />
                        </td>
                        <td>
                            <img src="/images/icons/red.png" alt="" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>10,000,000 Volt Thunderbolt</td>
                        <td><Badge bg="secondary" className='text fs-6'>Special</Badge></td>
                        <td><Badge bg="warning" className='fs-6'>Electric</Badge></td>
                        <td>195</td>
                        <td>100</td>
                        <td>--</td>
                        <td>
                            <img src="/images/icons/green.png" alt="" />
                        </td>
                        <td>
                            <img src="/images/icons/red.png" alt="" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>10,000,000 Volt Thunderbolt</td>
                        <td><Badge bg="secondary" className='text fs-6'>Special</Badge></td>
                        <td><Badge bg="warning" className='fs-6'>Electric</Badge></td>
                        <td>195</td>
                        <td>100</td>
                        <td>--</td>
                        <td>
                            <img src="/images/icons/green.png" alt="" />
                        </td>
                        <td>
                            <img src="/images/icons/red.png" alt="" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>10,000,000 Volt Thunderbolt</td>
                        <td><Badge bg="secondary" className='text fs-6'>Special</Badge></td>
                        <td><Badge bg="warning" className='fs-6'>Electric</Badge></td>
                        <td>195</td>
                        <td>100</td>
                        <td>--</td>
                        <td>
                            <img src="/images/icons/green.png" alt="" />
                        </td>
                        <td>
                            <img src="/images/icons/red.png" alt="" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>10,000,000 Volt Thunderbolt</td>
                        <td><Badge bg="secondary" className='text fs-6'>Special</Badge></td>
                        <td><Badge bg="warning" className='fs-6'>Electric</Badge></td>
                        <td>195</td>
                        <td>100</td>
                        <td>--</td>
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

export default Attacks
