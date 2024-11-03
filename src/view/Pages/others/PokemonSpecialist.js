import { useSelector } from 'react-redux'
import OnlineTrainers from '../../../view/Component/OnlineTrainers'
import GoldSiverHeader from '../../../view/HomePage/GoldSiverHeader'
import React from 'react'
import { Card, Col, Form, Row, Table } from 'react-bootstrap'

function PokemonSpecialist() {
  const user_data = useSelector(state=>state.auth.user_data)

  return (
    <GoldSiverHeader previous='/home' title='Specialist'>
      <div className='p-5'>
        <Card border='dark' text='white' className='bg-theme'>
          <Card.Header><h3 className='text-center'> Experts</h3></Card.Header>

          <Card.Body className='text-center'>
            <h5>After extensive studies, our scientists have discovered that there are ways to change some aspects of Pokémon, but it is a very delicate procedure and there is a cost!</h5>
            <h5 className='mt-5'>Shiny Specialist: They are able to transform any Pokémon into a shiny Pokémon!</h5>
            <h5>Mood Specialist: These are the ones responsible for taking care of your Pokémon's mood!</h5>
            <h5>Name Specialist: These specialists are the ones who give names to your Pokémon!</h5>
            {<h5><b>Note: MINIMUM RANK TO SEE POKÉMON Specialist: 5 - TRAINER. KEEP LEVELING UP TO UNLOCK!</b></h5>}

          </Card.Body>
        </Card>
        <Row className='mt-2'>
          <Col md={6}>
            <Card border='dark' text='white' className='bg-theme'>
              <Card.Header><h3 className='text-center'> Especialista Shiny</h3></Card.Header>

              <Card.Body className='text-center'>
                <Table striped bordered hover className='table-theme'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Pokemon</th>
                      <th>Level</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ verticalAlign: 'middle' }}>
                      <td>
                        <Form.Check type='checkbox' />
                      </td>
                      <td>
                        <img src="/images/pokemon/icon/250.gif" alt="" /> <span className='m-2'>Ho-oh</span>
                      </td>
                      <td>100</td>
                      <td><img src="/images/icons/gold.png" alt="" />90</td>
                    </tr>
                  </tbody>
                </Table>
                <div className='d-flex justify-content-end m-3'>
                  <div className='d-flex gap-2 align-items-center'>
                    <div className="register-item-inner6 w-100">
                      <button className='specialist-button'>Ok</button>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card border='dark' text='white' className='bg-theme'>
              <Card.Header><h3 className='text-center'> Name Expert</h3></Card.Header>

              <Card.Body className='text-center'>
                <Table striped bordered hover className='table-theme'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Pokemon</th>
                      <th>Level</th>
                      <th>Value</th>
                      <th>Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ verticalAlign: 'middle' }}>
                      <td>
                        <Form.Check type='checkbox' />
                      </td>
                      <td>
                        <img src="/images/pokemon/icon/250.gif" alt="" /> <span className='m-2'>Ho-oh</span>
                      </td>
                      <td>100</td>
                      <td><img src="/images/icons/silver.png" alt="" />free</td>
                      <td>
                        <Form.Control className='bg-theme text-white' type="text" value='Ho-oh' placeholder="Enter name" />
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <div className='d-flex justify-content-end m-3'>
                  <div className='d-flex gap-2 align-items-center'>
                    <div className="register-item-inner6 w-100">
                      <button className='specialist-button'>Ok</button>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card border='dark' text='white' className='bg-theme h-100 mt-2'>
              <Card.Header><h3 className='text-center'> Humor Specialist</h3></Card.Header>

              <Card.Body className='text-center'>
                <Table striped bordered hover className='table-theme'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Pokemon</th>
                      <th>Level</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ verticalAlign: 'middle' }}>
                      <td>
                        <Form.Check type='checkbox' />
                      </td>
                      <td>
                        <img src="/images/pokemon/icon/250.gif" alt="" /> <span className='m-2'>Ho-oh</span>
                      </td>
                      <td>100</td>
                      <td><img src="/images/icons/gold.png" alt="" />26</td>
                    </tr>
                  </tbody>
                </Table>
                <div className='d-flex justify-content-end m-3'>
                  <div className='d-flex gap-2 align-items-center'>
                    <div className="register-item-inner6 w-100">
                      <button className='specialist-button'>Ok</button>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card border='dark' text='white' className='bg-theme h-100 mt-2'>
              <Card.Header><h3 className='text-center'> Premium Humor Specialist</h3></Card.Header>

              <Card.Body className='text-center'>
                <Table striped bordered hover className='table-theme'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Pokemon</th>
                      <th>Level</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ verticalAlign: 'middle' }}>
                      <td>
                        <Form.Check type='checkbox' />
                      </td>
                      <td>
                        <img src="/images/pokemon/icon/250.gif" alt="" /> <span className='m-2'>Ho-oh</span>
                      </td>
                      <td>100</td>
                      <td><img src="/images/icons/gold.png" alt="" />50</td>
                    </tr>
                  </tbody>
                </Table>
                <div className='d-flex justify-content-end m-3'>
                  <div className='d-flex gap-2 align-items-center'>
                    <Form.Select className='bg-theme text-white'>
                      <option>Increase</option>
                      <option>To decrease</option>
                    </Form.Select>
                    <Form.Select className='bg-theme text-white'>
                      <option>Attack</option>
                      <option>Defance</option>
                      <option>Sp. Atk</option>
                      <option>Sp. Def</option>
                      <option>Speed</option>
                    </Form.Select>
                    <div className="register-item-inner6 w-100">
                      <button className='specialist-button'>Ok</button>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className='text-start'>A more delicate but more effective change is that we can define whether a certain attribute will increase or decrease, which increases the chances of obtaining the desired mood.</h5>
                  <h5 className='text-start m-0'><b>
                    Remember that neutral moods are valid, because they are precisely neutral because they increase and decrease the same attribute.</b></h5>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card border='dark' text='white' className='bg-theme mt-3'>
              <Card.Header><h3 className='text-center'> Professional Mood Specialist</h3></Card.Header>

              <Card.Body className='text-center'>
                <Table striped bordered hover className='table-theme'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Pokemon</th>
                      <th>Level</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ verticalAlign: 'middle' }}>
                      <td>
                        <Form.Check type='checkbox' />
                      </td>
                      <td>
                        <img src="/images/pokemon/icon/250.gif" alt="" /> <span className='m-2'>Ho-oh</span>
                      </td>
                      <td>100</td>
                      <td><img src="/images/icons/gold.png" alt="" />90</td>
                    </tr>
                  </tbody>
                </Table>
                <div className='d-flex justify-content-end'>
                  <div className='d-flex gap-2 align-items-center'>
                    <Form.Select className='bg-theme text-white'>
                      <option>Adamnat</option>
                    </Form.Select>
                    <div className="register-item-inner6 w-100">
                      <button className='specialist-button'>Ok</button>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div>
          <OnlineTrainers />
        </div>
      </div>
    </GoldSiverHeader>
  )
}

export default PokemonSpecialist
