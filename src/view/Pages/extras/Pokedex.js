import React, { useState } from 'react'
import GoldSiverHeader from '../../HomePage/GoldSiverHeader'
import { Badge, Card, Col, Form, Row, Table } from 'react-bootstrap'

function Pokedex() {
  const [pokemons, setPokeom] = useState([
    { name: 'Ho-ho' },
    { name: 'Ivysaur' },
  ])
  const HMTM = [
    { name: 'HM02', img: 'Attack_Flying.png' },
    { name: 'HM04', img: 'Attack_Flying.png' },
    { name: 'HM05', img: 'Attack_Flying.png' },
    { name: 'HM06', img: 'Attack_Flying.png' },
    { name: 'TM04', img: 'Attack_Flying.png' },
  ]
  return (
    <div>
      <GoldSiverHeader previous={'/home'} title='Pokedex'>
        <div className='p-2 container'>

          <Card border='dark' text='white' className='bg-theme'>
            <Card.Header><h5 className='text-center'>Rarities</h5></Card.Header>
            <Card.Body>
              <Table className='table-theme'>
                <tbody>
                  <tr>
                    <td>
                      <Form.Select className='bg-theme text-white'>
                        <option>Increase</option>
                        <option>To decrease</option>
                      </Form.Select>
                    </td>
                    <td>
                      <Form.Select className='bg-theme text-white'>
                        <option>Increase</option>
                        <option>To decrease</option>
                      </Form.Select>
                    </td>
                    <td>
                      <Form.Select className='bg-theme text-white'>
                        <option>Increase</option>
                        <option>To decrease</option>
                      </Form.Select>
                    </td>
                    <td>
                      <Form.Select className='bg-theme text-white'>
                        <option>Increase</option>
                        <option>To decrease</option>
                      </Form.Select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Form.Select className='bg-theme text-white'>
                        <option>Increase</option>
                        <option>To decrease</option>
                      </Form.Select>
                    </td>
                    <td>
                      <Form.Select className='bg-theme text-white'>
                        <option>Increase</option>
                        <option>To decrease</option>
                      </Form.Select>
                    </td>
                    <td>
                      <Form.Select className='bg-theme text-white'>
                        <option>Increase</option>
                        <option>To decrease</option>
                      </Form.Select>
                    </td>
                    <td>
                      <Form.Select className='bg-theme text-white'>
                        <option>Increase</option>
                        <option>To decrease</option>
                      </Form.Select>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
          <Card border='dark' text='white' className='bg-theme mt-2'>
            <Card.Header><h5 className='text-center'>You have already found 29 Pokémon out of a total of 1005 Pokémon!</h5></Card.Header>
            <Card.Body>
              <Row>
                <Col md={3}>
                  <h5 className='text-center'>Pokemons</h5>
                  <div className='p-3 pl-style'>
                    <Form.Control className='bg-theme text-white ' type="text" placeholder="Enter name" />
                  </div>
                  <Table className='table-theme'>
                    <tbody>
                      {pokemons.map((item, index) => {
                        return <tr>
                          <td>{index + 1}. {item.name}</td></tr>
                      })
                      }
                    </tbody>
                  </Table>
                </Col>
                <Col md={9} style={{maxHeight:'500px'}} className='overflow-auto'>
                  <h5 className='text-center'>Information</h5>
                  <Row>
                    <Col md={6} className='p-2'>
                      <Table className='table-theme'>
                        <tbody>
                          <tr>
                            <td><b>#250 HO-OH</b></td>
                            <td className='text-center'><b>(Legendary)</b></td>
                          </tr>
                          <tr>

                            <td>
                              <img src="/images/pokemon/250.gif" alt="" />
                            </td>
                            <td>
                              <img src="/images/shiny/250.gif" alt="" />

                            </td>
                          </tr>
                          <tr>
                            <td><b>» Lives in:</b></td>
                            <td className='text-center'>Johto</td>
                          </tr>
                          <tr>
                            <td><b>» Type:</b></td>
                            <td className='text-center'>
                              <Badge bg="warning" className='poke-profile-badges'>
                                Fire
                              </Badge>
                              <Badge bg="danger" className='poke-profile-badges' style={{ marginLeft: "2px" }}>
                                Flying
                              </Badge>
                            </td>
                          </tr>
                          <tr>
                            <td><b>» Evolves from:</b></td>
                            <td className='text-center'>-</td>
                          </tr>
                          <tr>
                            <td><b>» Favorite place:</b></td>
                            <td className='text-center'><b>Lava</b> is the favorite spot.</td>
                          </tr>
                          <tr>
                            <td><b>» Possible Skill(s):</b></td>
                            <td className='text-center'><b>Pressure,Regenerator</b></td>
                          </tr>
                          <tr>
                            <td><b>» Catch Chance:</b></td>
                            <td className='text-center'><b>2%</b></td>
                          </tr>
                          <tr>
                            <td><b>» Can you come to the PokéMart?</b></td>
                            <td className='text-center'><b>Yes [Legendary/Starter]</b></td>
                          </tr>
                          <tr>
                            <td colSpan={2} className='text-center'>
                              <p><b>There are 1 Ho-ohs in the game.</b></p>
                              <p><b>There is 1 at level 100.</b></p>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                      <div>
                        <Table className='table-theme'>
                          <tbody>
                            <tr>
                              <td colSpan={6} >
                                <h5 className='text-center'>Base states</h5>
                              </td>
                            </tr>
                            <tr>
                              <td className='text-center'><img src="/images/icons/stats/stat_hp.png" alt="" /></td>
                              <td className='text-center'><img src="/images/icons/stats/stat_at.png" alt="" /></td>
                              <td className='text-center'><img src="/images/icons/stats/stat_de.png" alt="" /></td>
                              <td className='text-center'><img src="/images/icons/stats/stat_sa.png" alt="" /></td>
                              <td className='text-center'><img src="/images/icons/stats/stat_sd.png" alt="" /></td>
                              <td className='text-center'><img src="/images/icons/stats/stat_sp.png" alt="" /></td>
                            </tr>
                            <tr>
                              <td className='text-center'>106</td>
                              <td className='text-center'>130</td>
                              <td className='text-center'>90</td>
                              <td className='text-center'>110</td>
                              <td className='text-center'>154</td>
                              <td className='text-center'>90</td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                      <div>
                        <Table className='table-theme'>
                          <tbody>
                            <tr>
                              <td colSpan={6} >
                                <h5 className='text-center'>Attacks</h5>
                              </td>
                            </tr>
                            <tr>
                              <td className='text-center'>Attack1</td>
                              <td className='text-center'>Attack2</td>
                              <td className='text-center'>Attack3</td>
                              <td className='text-center'>Attack4</td>
                            </tr>
                            <tr>
                              <td className='text-center'>Whirlwind</td>
                              <td className='text-center'>--</td>
                              <td className='text-center'>--</td>
                              <td className='text-center'>--</td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                      <div>
                        <Table className='table-theme'>
                          <tbody>
                            <tr>
                              <td colSpan={6} >
                                <h5 className='text-center'>Top 3 best of kind</h5>
                              </td>
                            </tr>
                            <tr>
                              <td className='text-center'>There are no pokemon of that species</td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </Col>
                    <Col >
                      <div style={{ maxHeight: '350px' }} className='overflow-auto'>

                        <Table className='table-theme text-white'>
                          <thead style={{ position: 'sticky', top: '0px' }}>
                            <tr>
                              <td colSpan={2}>

                                <h5 className='text-center'>Attacks & Evolution</h5>
                              </td>
                            </tr>
                            <tr>
                              <th className='text-center'>Level</th>
                              <th>Evolution</th>
                            </tr>
                          </thead>
                          <tbody><tr>
                            <td align="center">
                              9</td>
                            <td>Safeguard</td>
                          </tr><tr>
                              <td align="center">15</td>
                              <td>Gust</td>
                            </tr><tr>
                              <td align="center">23</td>
                              <td>Recover</td>
                            </tr><tr>
                              <td align="center">29</td>
                              <td>Fireont</td>
                            </tr><tr>
                              <td align="center">37</td>
                              <td>Sunnyont</td>
                            </tr><tr>
                              <td align="center">43</td>
                              <td>Swift</td>
                            </tr><tr>
                              <td align="center">51</td>
                              <td>Naturalont</td>
                            </tr><tr>
                              <td align="center">57</td>
                              <td>Ancientont</td>
                            </tr><tr>
                              <td align="center">65</td>
                              <td>Extrasensory</td>
                            </tr><tr>
                              <td align="center">71</td>
                              <td>Punishment</td>
                            </tr><tr>
                              <td align="center">79</td>
                              <td>Futureont</td>
                            </tr><tr>
                              <td align="center">85</td>
                              <td>Sacredont</td>
                            </tr><tr>
                              <td align="center">93</td>
                              <td>Calmont</td>
                            </tr><tr>
                              <td align="center">99</td>
                              <td>Skyont</td>
                            </tr></tbody>
                        </Table>
                      </div>

                      <div>
                        <Table className='table-theme'>
                          <tbody>
                            <tr>
                              <td colSpan={6} >
                                <h5 className='text-center'>EV Gain</h5>
                              </td>
                            </tr>
                            <tr>
                              <td className='text-center'><img src="/images/icons/stats/stat_hp.png" alt="" /></td>
                              <td className='text-center'><img src="/images/icons/stats/stat_at.png" alt="" /></td>
                              <td className='text-center'><img src="/images/icons/stats/stat_de.png" alt="" /></td>
                              <td className='text-center'><img src="/images/icons/stats/stat_sa.png" alt="" /></td>
                              <td className='text-center'><img src="/images/icons/stats/stat_sd.png" alt="" /></td>
                              <td className='text-center'><img src="/images/icons/stats/stat_sp.png" alt="" /></td>
                            </tr>
                            <tr>
                              <td className='text-center'>0</td>
                              <td className='text-center'>0</td>
                              <td className='text-center'>0</td>
                              <td className='text-center'>0</td>
                              <td className='text-center'>0</td>
                              <td className='text-center'>0</td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                      <div>
                        <h5 className='text-center header-theme'>TM/HM</h5>
                        <div className='overflow-auto' style={{ maxHeight: '200px' }}>
                          <Row className='justify-content-center'>
                            {HMTM.map((item) => {
                              return <Col md={2}>
                                <Table className='table-theme text-white'>
                                  <tbody>
                                    <tr>
                                      <td>{item.name}</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <img src={`/images/items/${item.img}`} class="elipse" />
                                      </td>
                                    </tr>
                                  </tbody>
                                </Table>
                              </Col>
                            })}
                          </Row>
                        </div>
                      </div>
                      <div>
                        <h5 className='text-center header-theme'>Advantages and disadvantages</h5>
                        <div className='overflow-auto' style={{ maxHeight: '200px' }}>
                          <tbody><tr><td align="center">

                            <div>
                              <table>
                                <tbody><tr>
                                  <td>
                                    <div class="tipo Normalt">NOR</div>
                                  </td>
                                  <td>
                                    <div class="tipo Firet">FIR</div>
                                  </td>
                                  <td>
                                    <div class="tipo Watert">WAT</div>
                                  </td>
                                  <td>
                                    <div class="tipo Electrict">HE</div>
                                  </td>
                                  <td>
                                    <div class="tipo Grasst">GRA</div>
                                  </td>
                                  <td>
                                    <div class="tipo Icet">ICE</div>
                                  </td>
                                  <td>
                                    <div class="tipo Fightingt">FIG</div>
                                  </td>
                                  <td>
                                    <div class="tipo Poisont">POI</div>
                                  </td>
                                  <td>
                                    <div class="tipo Groundt">GRO</div>
                                  </td>
                                </tr>
                                </tbody></table>
                            </div>


                          </td></tr></tbody>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>

      </GoldSiverHeader >
    </div >
  )
}

export default Pokedex
