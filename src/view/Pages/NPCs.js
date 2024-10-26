import React, { useEffect, useState } from 'react'
import GoldSiverHeader from '../HomePage/GoldSiverHeader'
import { Card, Form, Table } from 'react-bootstrap'
import OnlineTrainers from '../Component/OnlineTrainers'

function NPCs() {
    return (
        <div>
            <GoldSiverHeader previous={'/home'} title='Batalhar contra NPC'>
                <div className='container p-2 challenge'>


                    <Card border='dark' text='white' className='bg-theme'>
                        <Card.Header><h3 className='text-center'> Batalhar contra NPC</h3></Card.Header>

                        <Card.Body className='text-center'>
                            <h5>Here you have the opportunity to search for trainers to challenge them! By clicking on the SEARCH NPCs</h5>
                            <h5>button, a random trainer will automatically be chosen to battle with you.</h5>
                        </Card.Body>
                    </Card>
                    <div >
                        <OnlineTrainers />
                    </div>
                </div>
            </GoldSiverHeader>
        </div>
    )
}

export default NPCs
