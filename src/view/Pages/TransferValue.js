import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Row, Col, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../store/auth';
import { getSearchPlayers } from '../../store/friends';
import OnlineTrainers from '../../view/Component/OnlineTrainers';
import GoldSiverHeader from '../../view/HomePage/GoldSiverHeader';
import { Tooltip } from 'react-tooltip';
import { transferValue } from '../../store/other';
import { toast } from 'react-toastify';
function TransferValue() {
    const dispatch = useDispatch();
    const [val, setVal] = useState('');
    const [what, setWhat] = useState('silver');
    const [trainer, setTrainer] = useState('');

    const handleTransfer=()=>{
        if(val && trainer){
            console.log(what,trainer,val);
            
            let payload={
                what:what,
                username:trainer,
                send_amount:val,
            }
            dispatch(transferValue(payload))
        }else{
            toast.warn("Please enter value and friend name")
        }
    }
    return (
        <GoldSiverHeader previous='/social/friends' title='Transfer Value' >
            <div className='container p-2 challenge'>
                <Card border='dark' text='white' className='bg-theme'>
                    <Card.Header><h1 className='text-center'> Pokémon Bank</h1></Card.Header>

                    <Card.Body className='text-center'>
                        <h3>Here you can make transfers of Silvers or Golds to other Trainers !</h3>
                        <h4>Minimum <img data-tooltip-id="silver" data-tooltip-content='Silver' src="/images/icons/silver.png" alt="" />10 and MINIMUM RANK to make Gold transfers is 8 - New Duelist !</h4>
                        <Tooltip id="silver" />

                    </Card.Body>
                </Card>
                <Card border='dark' text='white' className='bg-theme mt-2'>
                    <Card.Header><h1 className='text-center'> Transfer Value</h1></Card.Header>
                    <Card.Body className='text-center'>
                        <Row className='d-flex justify-content-center gap-4'>
                            <Col md={3}>
                                <h4>Trainer:</h4>
                                <div className="register-item-inner4 m-0">
                                    <input type="text"
                                        className="form-control"
                                        id="name"
                                        value={trainer}
                                        onChange={(e) => setTrainer(e.target.value)}
                                    />
                                    <img src="/images/register-02.png" alt="" />
                                </div>
                                <p className='d-flex justify-content-center align-items-center' >
                                    <Form.Check className='tf-check' type='radio' name='tf' value='silver'defaultChecked onChange={()=>setWhat('silver')} />
                                    <img src="/images/icons/silver.png" alt=""   style={{width:'20px'}}/>
                                </p>
                            </Col>
                            <Col md={3}>
                                <h4>Value:</h4>
                                <div className="register-item-inner4 m-0">
                                    <input type="text"
                                        className="form-control bg-theme"
                                        id="name"
                                        value={val}
                                        onChange={(e) => setVal(e.target.value)}
                                    />
                                    <img src="/images/register-02.png" alt="" value='gold'/>
                                </div>
                                <p className='d-flex  justify-content-center align-items-center'>
                                    <Form.Check className='tf-check' type='radio' name='tf' onChange={()=>setWhat('gold')}/><img src="/images/icons/gold.png" style={{width:'20px'}} alt="" />

                                </p>
                            </Col>
                            <Col md={12}  >
                                <div className="register-item-inner6 ">
                                    <button type="submit" className='challenge-button' onClick={handleTransfer}>Transfer</button>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <OnlineTrainers />
            </div>
        </GoldSiverHeader>

    )
}

export default TransferValue