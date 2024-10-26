import React from 'react'
import { Card, Col, Row, Table } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import GoldSiverHeader from '../HomePage/GoldSiverHeader'
import Chart from 'react-apexcharts'

function PokemonProfile() {
    const params = useParams()
    const id = params.id
    const series = [{
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20],
    }];

    const options = {
        chart: {
            height: 350,
            type: 'radar',
        },
        title: {
            text: 'Basic Radar Chart'
        },
        yaxis: {
            stepSize: 20
        },
        xaxis: {
            categories: ['January', 'February', 'March', 'April', 'May', 'June']
        }
    }


return (
    <GoldSiverHeader previous='/home' title='Profile'>
        <div className='p-5'>
            <Card border='dark' text='white' className='bg-theme'>
                <Card.Header><h3 className='text-center'> Ho Ho</h3></Card.Header>
                <Card.Body className='pk-bg'>
                    <img src="/images/pokemon/250.gif" alt="" />
                </Card.Body>
            </Card>
            <Row>
                <Col md={6}>
                    <Card className='bg-theme text-white mt-2'>
                        <Card.Header><h3 className='text-center'> HP & EXP</h3></Card.Header>
                        <Card.Body>
                            <Table className='table-theme border-none-theme'>
                                <tbody>
                                    <tr>
                                        <td style={{ width: '100px' }}>HP [?]</td>
                                        <td>
                                            <div class="progress" style={{ width: "100%" }}></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '100px' }}>EXP [?]</td>
                                        <td>
                                            <div class="bar_blue" style={{ width: " 100%", "height": "13px" }}>
                                                <div class="progress" style={{ background: "#cccccc" }}></div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                    <Card className='bg-theme text-white mt-2'>
                        <Card.Header><h3 className='text-center'> Attack List</h3></Card.Header>
                        <Card.Body>
                            <Row>
                                <Col md={6}>
                                    <a href="./information&amp;category=attack-info&amp;attack=Natural Gift" style={{ fontWeight: 400, margin: "12px" }}>
                                        <button id="aanval" style={{ background: "url(/images/attack/moves/Normal.png) no-repeat" }} class="btn-type">
                                            <font style={{ verticalAlign: "inherit;" }}>
                                                <font style={{ verticalAlign: "inherit;" }}>Natural Gift</font>
                                            </font></button>
                                    </a>
                                </Col>
                                <Col md={6}>
                                    <a href="./information&amp;category=attack-info&amp;attack=Punishment" style={{ fontWeight: 400, margin: "12px" }}>
                                        <button id="aanval" style={{ background: "url(/images/attack/moves/Dark.png) no-repeat" }} class="btn-type">
                                            <font style={{ verticalAlign: "inherit;" }}>
                                                <font style={{ verticalAlign: "inherit;" }}>Punishment</font>
                                            </font></button>
                                    </a></Col>
                                <Col md={6}>
                                    <a href="./information&amp;category=attack-info&amp;attack=Future Sight" style={{ fontWeight: 400, margin: "12px" }}>
                                        <button id="aanval" style={{ background: "url(/images/attack/moves/Psychic.png) no-repeat" }} class="btn-type">
                                            <font style={{ verticalAlign: "inherit;" }}>
                                                <font style={{ verticalAlign: "inherit;" }}>Future Sight</font>
                                            </font></button>
                                    </a>
                                </Col>
                                <Col md={6}>
                                    <a href="./information&amp;category=attack-info&amp;attack=Flying" style={{ fontWeight: 400, margin: "12px" }}>
                                        <button id="aanval" style={{ background: "url(/images/attack/moves/Flying.png) no-repeat" }} class="btn-type">
                                            <font style={{ verticalAlign: "inherit;" }}>
                                                <font style={{ verticalAlign: "inherit;" }}>Sky Attack</font>
                                            </font></button>
                                    </a>
                                </Col>
                            </Row>

                        </Card.Body>
                    </Card>
                    <Card className='bg-theme text-white mt-2'>
                        <Card.Header><h3 className='text-center d-flex justify-content-between'> Status [?] <span>1340 Total</span></h3></Card.Header>
                        <Card.Body>
                            <Table className='table-theme border-none-theme'>
                                <tbody>
                                    <tr className='vertical-align-middle'>
                                        <td>HP:</td>
                                        <td>
                                            {Array.from({ length: 7 }).map((item) => {

                                                return <span
                                                    style={{
                                                        color: 'gold',
                                                        fontSize: '24px',
                                                    }}
                                                >
                                                    ★
                                                </span>
                                            })
                                            }
                                            {Array.from({ length: 3 }).map((item) => {

                                                return <span
                                                    style={{
                                                        color: 'gray',
                                                        fontSize: '24px',
                                                    }}
                                                >
                                                    ★
                                                </span>
                                            })
                                            }
                                        </td>
                                        <td><span>353</span>(+0 <img src='/images/items/HP up.png' />)</td>
                                    </tr>
                                </tbody>

                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className='bg-theme text-white mt-2'>
                        <Card.Header><h3 className='text-center'> Características</h3></Card.Header>
                        <Card.Body>
                            <Table className='table-theme text-white'>
                                <tbody>
                                    <tr>
                                        <td><b>Purchased:</b> 2 months ago</td>
                                        <td ><b>Color:</b> Standard</td>
                                    </tr>
                                    <tr>
                                        <td><b>Negotiable:</b> Negotiable</td>
                                        <td><b>Ability:</b> Pressure</td>
                                    </tr>
                                    <tr>
                                        <td><b>Level:</b> 100</td>
                                        <td><b>Mood:</b> Gentle</td>
                                    </tr>
                                    <tr>
                                        <td><b>Total power:</b> 1340</td>
                                        <td><b>Item:</b> None</td>
                                    </tr>
                                    <tr>
                                        <td><b>Species:</b> Ho-ho</td>
                                        <td><b>Pkeball:</b><img src="/images/items/Poke ball.png" alt="" /></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                    <Card className='bg-theme text-white mt-2'>
                        <Card.Header><h3 className='text-center d-flex justify-content-around'> TIP [?] <span>3 TOTAL EV's</span></h3></Card.Header>
                        <Card.Body>
                            <Table className='table-theme text-white'>
                                <tbody>
                                    <tr>
                                        <td><b>HP:</b> 0 EV's</td>
                                        <td ><b>Sp. Attack:</b> 3 EV's</td>
                                    </tr>
                                    <tr>
                                        <td><b>Attack:</b> 0 EV's</td>
                                        <td><b>Sp. Defense:</b> 0 EV's</td>
                                    </tr>
                                    <tr>
                                        <td><b>Defense:</b> 0 EV's</td>
                                        <td><b>Speed:</b> 0 EV's</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                    <Card className='bg-theme text-white mt-2'>
                        <Card.Header><h3 className='text-center d-flex justify-content-around'> IV's [?] <span>186 TOTAL IV's</span></h3></Card.Header>
                        <Card.Body>
                            <div>
                                <div id="chart">
                                    {/* <Chart options={options} series={series} type="radar" height={350} /> */}
                                </div>
                                <div id="html-dist"></div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    </GoldSiverHeader>

)
}

export default PokemonProfile
