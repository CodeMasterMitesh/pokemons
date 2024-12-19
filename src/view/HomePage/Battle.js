import React, { useEffect, useState } from 'react'
import GoldSiverHeader from './GoldSiverHeader'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getPlayerPokemons, getPokemonsByPlayer } from '../../store/pokemon'
import { Tooltip } from 'react-tooltip'
import { Badge, Button } from 'react-bootstrap'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { dualExpire, getDualByTrainerId } from 'store/friends'
function Battle() {

    const [searchParams, setSearchParams] = useSearchParams();
    const duel = searchParams.get('duel')
    const challanged = searchParams.get('challanged')




    const pokemons = useSelector(state => state.pokemon.player_pokemons)
    const [yourPokemon, setYourPokemon] = useState({})
    const [oppPokemon, setOppPokemon] = useState({})
    const [attacking, setAttacking] = useState(false)
    const [oppAttacking, setOppAttacking] = useState(false)
    const [currentAttack, setCurrentAttack] = useState({})
    const [type, selectedType] = useState('Attack')
    const [winLose, setWinLose] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [oppName, setOppName] = useState('')
    const [ws, setWs] = useState(null);

    const [user, setUser] = useState({ name: '', pokemons: [] });
    const [opponent, setOpponent] = useState({ name: '', pokemons: [] });
    const [duel_data, setDuelData] = useState({});



    const getDualData = async () => {
        let user = localStorage.getItem('userData')
        user = user ? JSON.parse(user) : {}
        let payload = {
            trainer_id: user.playerId,
        }
        let data = await dispatch(getDualByTrainerId(payload)).unwrap();
        if (!data?.duel_data?.id) {
            navigate('/home');
        }
        let user_pokemon = [];
        let opponent_pokemon = [];


        const payload2 = {
            status: "expire",
            duel_id: data?.duel_data?.id
        }
        let result = await dispatch(dualExpire(payload2)).unwrap();

        if (challanged == 'true' && data?.duel_data?.id) {
            user_pokemon = await dispatch(getPokemonsByPlayer(data?.duel_data?.uitdager)).unwrap()
            opponent_pokemon = await dispatch(getPokemonsByPlayer(data?.duel_data?.tegenstander)).unwrap()
            setUser({ name: data?.duel_data?.uitdager, pokemons: user_pokemon?.data })
            setOpponent({ name: data?.duel_data?.tegenstander, pokemons: opponent_pokemon?.data })
            setYourPokemon(user_pokemon?.data[0] || {})
            setOppPokemon(opponent_pokemon?.data[0] || {})

        } else if (data) {
            user_pokemon = await dispatch(getPokemonsByPlayer(data?.duel_data?.tegenstander)).unwrap()
            opponent_pokemon = await dispatch(getPokemonsByPlayer(data?.duel_data?.uitdager)).unwrap()

            setUser({ name: data?.duel_data?.tegenstander, pokemons: user_pokemon?.data })
            setOpponent({ name: data?.duel_data?.uitdager, pokemons: opponent_pokemon?.data })
            setYourPokemon(user_pokemon?.data[0] || {})
            setOppPokemon(opponent_pokemon?.data[0] || {})
        }
        setDuelData(data || {})
    }

    const [attackList, setAttackList] = useState([
        {
            name: 'Punch',
            damage: '100',
            type: "Normal"
        },
        {
            name: 'Iron tail',
            damage: '100',
            type: "Electric"
        },
        {
            name: 'Thunder Shock',
            damage: '100',
            type: "Electric"
        },
    ])
    const attack = async (item) => {
        if (!oppAttacking) {
            setAttacking(true);
            setCurrentAttack(item);
            let new_hp = oppPokemon.leven - item.damage;
            setOppPokemon({ ...oppPokemon, leven: new_hp });

            const response = await axios.post('http://localhost:3000/attack', {
                attacker: name,
                target: oppName,
                damage: parseInt(item.damage),
            }).then(() => {
                setAttacking(false);
                setCurrentAttack({});
            })
            // setTimeout(() => {
            //     if (new_hp > 0) {
            //         opp_attack()
            //     }
            // }, 2000);
            if (new_hp <= 0) {
                setWinLose('win');
            }
        }
    }
    const opp_attack = (data) => {
        if (!attacking) {
            setCurrentAttack({ damage: data.damage });
            setCurrentAttack({ damage: data.damage })
            let new_hp = yourPokemon.leven - data.damage;
            setYourPokemon({ ...yourPokemon, leven: new_hp });
            setOppAttacking(false);
            if (new_hp <= 0) {
                setWinLose('lose');
            }
        }
    };
    useEffect(() => {
        dispatch(getPlayerPokemons())
    }, [name])
    useEffect(() => {
        getDualData();
        setTimeout(() => {
            if (winLose == 'win' || winLose == 'lose') {
                navigate('/home')
            }
        }, 2000);
    }, [winLose])
    useEffect(() => {
        // if (name == 1) {
        //     setYourPokemon(pokemons[0])
        //     setOppPokemon(pokemons[1])
        // } else {
        //     setYourPokemon(pokemons[1])
        //     setOppPokemon(pokemons[0])
        // }
        // const websocket = new WebSocket('ws://localhost:3000');

        // websocket.onopen = () => {
        //     console.log('open');
        // }

        // websocket.onmessage = (event) => {
        //     setOppAttacking(true);
        //     const data = JSON.parse(event.data);
        //     if (data.type === 'attack') {
        //         opp_attack(data.damage)
        //     }
        // }
        // websocket.onclose = () => {
        //     console.log('WebSocket closed');
        // };
        // setWs(websocket);
        // return () => {
        //     websocket.close();
        // };

    }, [pokemons])
    // const selectName = (name) => {
    //     setName(name)
    //     setOppName(name == 1 ? 2 : 1)

    //     const registrationMessage = JSON.stringify({
    //         type: 'register',
    //         name: name,
    //     });
    //     ws.send(registrationMessage);
    // }
    return (
        <>
            <GoldSiverHeader previous='/home' title='Battle'>
                <section className="ar_battle_area_section position-relative">
                    {
                        winLose == 'win' && <div className='win-class'><div>You Win !!</div></div>
                    }
                    {
                        winLose == 'lose' && <div className='lose-class'><div>You Lose !!</div></div>
                    }
                    {oppAttacking && <div className='opp-attacking'>Opponent attacking...</div>}
                    <div className="p-3 container-md">
                        <div className="row ">
                            <div className="col-md-12">
                                <div className="ar_batte_area">
                                    <div className='your-pokemon'>
                                        <img src={`/images/pokemon/back/${yourPokemon?.wild_id}.gif`} alt="" />
                                        {oppAttacking && <h1 style={{ fontWeight: 'bolder' }} className='text-danger attack-damage'>-{currentAttack?.damage}</h1>}
                                    </div>
                                    <div className='opp-pokemon'>
                                        <img src={`/images/pokemon/${oppPokemon?.wild_id}.gif`} alt="" />
                                        {attacking && <h1 style={{ fontWeight: 'bolder' }} className='text-danger attack-damage'>-{currentAttack?.damage}</h1>}
                                    </div>
                                    <div className="ar_battle_area_top">
                                        <div className="ar_battleTop_left">

                                            <div className="ar_battle_left_hp_area">
                                                <div className="ar_battle_left_hp_text">
                                                    <p>{yourPokemon?.naam}</p>
                                                    <p>Lv <span>{yourPokemon?.level}</span></p>
                                                </div>
                                                <img src="/images/battle/hp-bar-empty.png" alt="images" />
                                                <div className='position-relative' style={{ height: '25px', width: `${yourPokemon?.leven * 100 / yourPokemon?.levenmax}%`, top: "-35px", backgroundImage: 'url(/images/battle/hpRead.png)' }}>
                                                </div>
                                                <img src="/images/battle/exp-bar-empty.png" alt="images" />
                                            </div>
                                        </div>
                                        {/* <div className="ar_battleTop_middle">
                                            <p>Time Left: </p>
                                            <p><span>2:39</span></p>
                                        </div> */}
                                        <div className="ar_battleTop_right right">
                                            <div className="ar_battle_left_hp_area">
                                                <div className="ar_battle_left_hp_text">
                                                    <p>{oppPokemon?.naam}</p>
                                                    <p>Lv <span>{oppPokemon?.level}</span></p>
                                                </div>
                                                <img src="/images/battle/hp-bar-empty.png" alt="images" />
                                                <div className='position-relative' style={{ transition: 'width 1s', backgroundSize: "201px", height: '17px', width: `${oppPokemon?.leven * 100 / oppPokemon?.levenmax}%`, top: "-27px", backgroundImage: 'url(/images/battle/hpRead.png)' }}>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ar_battle_area_bottom">
                                        <div className="ar_battle_bottom_run">
                                            <a onClick={() => { setWinLose('lose') }}> <img src={"/images/battle/run.png"} alt="images" /></a>
                                        </div>
                                        <div className="ar_battle_bottom_btnAct">
                                            <div className="ar_battle_btom_single" onClick={() => { selectedType('Attack') }}>
                                                <a><img src={`/images/battle/${type == 'Attack' ? 'redAt.png' : 'selAt.png'}`} alt="images" onClick={() => { selectedType('Attack') }} /></a>
                                                <p>Attack</p>
                                            </div>
                                            <div className="ar_battle_btom_single" onClick={() => { selectedType('Pokemon') }}>
                                                <a><img src={`/images/battle/${type == 'Pokemon' ? 'redAt.png' : 'selAt.png'}`} alt="images" onClick={() => { selectedType('Pokemon') }} /></a>
                                                <p>Pokemon</p>
                                            </div>
                                            <div className="ar_battle_btom_single" onClick={() => { selectedType('Fugir') }}>
                                                <a><img src={`/images/battle/${type == 'Fugir' ? 'redAt.png' : 'selAt.png'}`} alt="images" onClick={() => { selectedType('Fugir') }} /></a>
                                                <p>Fugir</p>
                                            </div>
                                            <div className="ar_battle_btom_single" onClick={() => { selectedType('Mochila') }}>
                                                <a><img src={`/images/battle/${type == 'Mochila' ? 'redAt.png' : 'selAt.png'}`} alt="images" onClick={() => { selectedType('Mochila') }} /></a>
                                                <p>Mochila</p>
                                            </div>
                                        </div>
                                        {type == 'Attack' && <div>
                                            <div className="ar_battle_bottom_bottm">
                                                {/* <div className="ar_battle_single_bottom">
                                                    <a href="#"><img src="/images/battle/Normal.png" alt="images" /></a>
                                                    <p>Punch</p>
                                                </div>
                                                <div className="ar_battle_single_bottom">
                                                    <a href="#"><img src="/images/battle/Electric.png" alt="images" /></a>
                                                    <p>Iron Tail</p>
                                                </div>
                                                <div className="ar_battle_single_bottom">
                                                    <a href="#"><img src="/images/battle/Electric.png" alt="images" /></a>
                                                    <p>Thunder Shock </p>
                                                </div> */}
                                                {attackList.map((item, index) => {
                                                    return <div key={index} className="ar_battle_single_bottom" onClick={() => attack(item)}>
                                                        <a><img src={`/images/battle/${item.type}.png`} alt="images" /></a>
                                                        <p>{item.name}</p>
                                                    </div>
                                                })}
                                            </div>
                                        </div>}
                                        {type == 'Pokemon' && <div>
                                            <div className="ar_battle_bottom_bottm">
                                                {pokemons
                                                    .filter((item) => item.id !== yourPokemon.id)
                                                    .map((item, index) => {
                                                        return <div key={index}>
                                                            <div className="ar_battle_single_bottom">
                                                                <a href="#"><img src="/images/battle/selAt.png" alt="images" /></a>
                                                                <div className='d-flex p-2 position-absolute w-100 h-100 top-0 align-items-center cursor-pointer' onClick={() => setYourPokemon(item)}>
                                                                    <div>
                                                                        <img src={`/images/pokemon/icon/${item.wild_id}.gif`} alt="" />
                                                                    </div>
                                                                    <div className='p-2 d-flex justify-content-center align-items-center flex-column' style={{ flexGrow: 1 }}>
                                                                        <h6>{item.naam}</h6>
                                                                        <div className="hp_red" data-tooltip-id='hp' data-tooltip-content={`${item.leven}/${item.levenmax}`} style={{ height: "2px", width: "86%" }}>
                                                                            <div className="progress" style={{ width: `${item.leven * 100 / item.levenmax}%` }}></div>
                                                                            <Tooltip id='hp' />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    })}
                                            </div>

                                        </div>}
                                        {type == 'Fugir' && <div>
                                            <div className="ar_battle_bottom_bottm">
                                                {/* <div className="ar_battle_single_bottom">
                                                    <a href="#"><img src="/images/battle/Normal.png" alt="images" /></a>
                                                    <p>Punch</p>
                                                </div>
                                                <div className="ar_battle_single_bottom">
                                                    <a href="#"><img src="/images/battle/Electric.png" alt="images" /></a>
                                                    <p>Iron Tail</p>
                                                </div>
                                                <div className="ar_battle_single_bottom">
                                                    <a href="#"><img src="/images/battle/Electric.png" alt="images" /></a>
                                                    <p>Thunder Shock </p>
                                                </div> */}
                                                {attackList.map((item, index) => {
                                                    return <div key={index} className="ar_battle_single_bottom" onClick={() => attack(item)}>
                                                        <a href="#"><img src={`/images/battle/${item.type}.png`} alt="images" /></a>
                                                        <p>{item.name}</p>
                                                    </div>
                                                })}
                                            </div>
                                        </div>}
                                        {type == 'Mochila' && <div className='d-flex justify-content-end gap-2 p-3'>
                                            <div className='p-2 mochila-items'>
                                                <img src="/images/items/Poke ball.png" alt="" />
                                                <Badge bg='danger'>6</Badge>
                                            </div>
                                            <div className='p-2 mochila-items'>
                                                <img src="/images/items/Potion.png" alt="" />
                                                <Badge bg='danger'>0</Badge>
                                            </div>
                                        </div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </GoldSiverHeader>
        </>

    )
}

export default Battle
