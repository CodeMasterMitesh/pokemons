import React from 'react'
import { Table } from 'react-bootstrap';


function Faq() {
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
                    <tr>
                        <td>1</td>
                        <td>How was the game</td>
                        <td>Good</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Faq
