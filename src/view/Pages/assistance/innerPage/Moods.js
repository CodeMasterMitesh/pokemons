import { Table } from 'react-bootstrap';
import { pokemonGuide } from '../../../../store/assistance'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Moods() {
    const dispatch = useDispatch()
    const pokemon_guide = useSelector(state => state.assistance.pokemon_guide)
    const payload = {
        category: 'mood-info',
    }
    useEffect(() => {
        dispatch(pokemonGuide(payload))
    }, [])
    return (
        <div>
            <h3 className='header-theme'> Mood by status</h3>
            <Table striped bordered hover className='table-theme vertical-align-middle'>
                <thead>
                    <tr className='vertical-align-middle'>
                        <th>#</th>
                        <th>-Attck</th>
                        <th>-Defense</th>
                        <th>-Sp.Atk</th>
                        <th>-Sp.Def</th>
                        <th>-Speed</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='vertical-align-middle'>
                        <td>+ Attack</td>
                        <td align="center">Hardy</td>
                        <td align="center" ><div className="green">Lonely</div></td>
                        <td align="center" ><div className="green">Adamant</div></td>
                        <td align="center" ><div className="green">Naughty</div></td>
                        <td align="center" ><div className="green">Brave</div></td>
                    </tr>
                    <tr className='vertical-align-middle'>
                        <td>+ Defense</td>
                        <td align="center" ><div className="red">Bold</div></td>
                        <td align="center">Docile</td>
                        <td align="center" ><div className="green">Impish</div></td>
                        <td align="center" ><div className="green">Lax</div></td>
                        <td align="center" ><div className="green">Relaxed</div></td>
                    </tr>
                    <tr className='vertical-align-middle'>
                        <td>+ Sp. Atk</td>
                        <td align="center" ><div className="red">Modest</div></td>
                        <td align="center" ><div className="red">Mild</div></td>
                        <td align="center">Bashful</td>
                        <td align="center" ><div className="green">Rash</div></td>
                        <td align="center" ><div className="green">Quiet</div></td>
                    </tr>
                    <tr className='vertical-align-middle'>
                        <td>+ Sp. Def</td>
                        <td align="center" ><div className="red">Calm</div></td>
                        <td align="center" ><div className="red">Gentle</div></td>
                        <td align="center" ><div className="red">Careful</div></td>
                        <td align="center">Quirky</td>
                        <td align="center" ><div className="green">Sassy</div></td>
                    </tr>
                    <tr className='vertical-align-middle'>
                        <td>+ Speed</td>
                        <td align="center" ><div className="red">Timid</div></td>
                        <td align="center" ><div className="red">Hasty</div></td>
                        <td align="center" ><div className="red">Jolly</div></td>
                        <td align="center" ><div className="red">Naive</div></td>
                        <td align="center">Serious</td>
                    </tr>
                </tbody>
            </Table>
            <h3 className='header-theme'> Humor by name</h3>
            <Table striped bordered hover className='table-theme vertical-align-middle'>
                <thead>
                    <tr className='vertical-align-middle'>
                        <th>#</th>
                        <th>Attck</th>
                        <th>Defense</th>
                        <th>Speed</th>
                        <th>Esp.Attack</th>
                        <th>Esp.Defense</th>
                    </tr>
                </thead>
                <tbody>
                    {pokemon_guide?.data?.map((item) => {
                        return <tr className='vertical-align-middle'>
                            <td>{item.karakter_naam}</td>
                            <td align="center" ><div className={item.attack_add =='Aumenta' ? "green" :(item.attack_add == 'Diminui'?'red':"")}>{item.attack_add}</div></td>
                            <td align="center" ><div className={item.defence_add =='Aumenta' ? "green" :(item.defence_add == 'Diminui'?'red':"")}>{item.defence_add}</div></td>
                            <td align="center" ><div className={item.speed_add =='Aumenta' ? "green" :(item.speed_add == 'Diminui'?'red':"")}>{item.speed_add}</div></td>
                            <td align="center" ><div className={item['spc.attack_add'] =='Aumenta' ? "green" :(item['spc.attack_add'] == 'Diminui'?'red':"")}>{item['spc.attack_add']}</div></td>
                            <td align="center" ><div className={item['spc.defence_add'] =='Aumenta' ? "green" :(item['spc.defence_add'] == 'Diminui'?'red':"")}>{item['spc.defence_add']}</div></td>
                        </tr>
                    })}
                </tbody>
            </Table>

        </div>
    )
}

export default Moods
