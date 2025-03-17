import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import GoldSiverHeader from '../HomePage/GoldSiverHeader';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getPlayerPokemons, getPokemonProfileById } from '../../store/pokemon';
import { Tooltip } from 'react-tooltip';
import Chart from 'react-apexcharts'
import moment from 'moment';

function Character() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const pokemon_id = queryParams.get('id'); // replace 'yourParamName' with the query parameter name
    const [total, setTotal] = useState({ tip: 0, status: 0 })
    const dispatch = useDispatch()
    const all_pokemons = useSelector((state) => state.pokemon.player_pokemons)
    const pokemon = useSelector((state) => state.pokemon.pokemon)
    const [selected, setSelected] = useState({})
    const [tab, setTab] = useState('skills')
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [status, setStatus] = useState([])
    const [series, setSeries] = useState([{
        name: 'IVs',
        data: [],
    }]);
    const [options, setOption] = useState({
        chart: {
            height: 350,
            type: 'radar',
        },
        title: {
            text: 'IVs'
        },
        yaxis: {
            stepSize: 20
        },
        xaxis: {
            categories: ['HP', 'Attack', 'Defense', 'Sp. Attack', 'Sp. Defense', 'Speed']
        }
    },)

    const handleSelect = async (selectedIndex) => {
        setSelectedIndex(selectedIndex);
        let show = all_pokemons[selectedIndex];
        const { data } = await dispatch(getPokemonProfileById(show.id)).unwrap();
        
        if (data.length && data[0]?.tip) {
            const totaltip = parseFloat(data[0]?.tip[0].Ataque) + parseFloat(data[0]?.tip[0].Defesa) + parseFloat(data[0]?.tip[0].HP) + parseFloat(data[0]?.tip[0]['Sp. Ataque']) + parseFloat(data[0]?.tip[0]['Sp. Defesa']) + parseFloat(data[0]?.tip[0]['Speed']);
            total.tip= totaltip; 
        }
        setStatusData(data)

    };
    const init = async () => {
        const pokemons = await dispatch(getPlayerPokemons()).unwrap()
        let show = {};
        if (pokemon_id) {
            let i = pokemons.findIndex(item => item.id == pokemon_id)
            setSelectedIndex(i);
            show = pokemons[i];
        } else {
            show = pokemons[0];
        }
        const { data } = await dispatch(getPokemonProfileById(show.id)).unwrap();

        if (data.length && data[0]?.tip) {
            const totaltip = parseFloat(data[0]?.tip[0].Ataque) + parseFloat(data[0]?.tip[0].Defesa) + parseFloat(data[0]?.tip[0].HP) + parseFloat(data[0]?.tip[0]['Sp. Ataque']) + parseFloat(data[0]?.tip[0]['Sp. Defesa']) + parseFloat(data[0]?.tip[0]['Speed']);
            total.tip= totaltip; 
        }
        setStatusData(data)
    }
    const setStatusData = (data) => {
        if (data.length && data[0].status && data[0].status.length) {
            setSeries(prev => {
                let series = prev[0];
                series.data = [
                    data[0]?.ivs[0].hp,
                    data[0]?.ivs[0].spcattack_iv,
                    data[0]?.ivs[0].attack_iv,
                    data[0]?.ivs[0].spcdefence_iv,
                    data[0]?.ivs[0].defence_iv,
                    data[0]?.ivs[0].speed_iv]
                return [series]
            })
            let status_data = data[0].status[0]
            let hp = {
                max: status_data.hp_max,
                poke: status_data.hp_poke,
                up: status_data.hp_up,
                value: (status_data.hp_poke * 10 / status_data.hp_max),
                img: 'HP up',
                name: 'HP'
            }
            let attack = {
                max: status_data.Ataque_attack_max,
                poke: status_data.Ataque_attack,
                up: status_data.Ataque_attack_up,
                value: (status_data.Ataque_attack * 10 / status_data.Ataque_attack_max),
                name: 'Ataque',
                img: 'Protein'
            }
            let defance = {
                max: status_data.Defesa_attack_up,
                poke: status_data.spc_defence,
                up: status_data.spc_defence_spc_up,
                value: (status_data.spc_defence * 10 / status_data.Defesa_attack_up),
                name: 'Defesa',
                img: 'Iron'
            }
            let spc_atk = {
                max: status_data.Sp_Ataque_spatk_max,
                poke: status_data.Sp_Ataque,
                up: status_data.Sp_Ataque_spc_up,
                value: (status_data.Sp_Ataque * 10 / status_data.Sp_Ataque_spatk_max),
                name: 'Sp. Ataque',
                img: 'Calcium'
            }
            let spc_dfc = {
                max: status_data.Defesa_attack_up,
                poke: status_data.Defesa_defence,
                value: (status_data.Defesa_defence * 10 / status_data.Defesa_attack_up),
                up: status_data.Defesa_defence_up,
                name: 'Sp. Defesa',
                img: 'Calcium'
            }
            let speed = {
                max: status_data.speed_max,
                poke: status_data.speed,
                up: status_data.speed_spc_up,
                value: (status_data.speed * 10 / status_data.speed_max),
                name: 'Speed',
                img: 'Carbos'
            }
            let total_status =
                parseFloat(hp.poke) +
                parseFloat(attack.poke) +
                parseFloat(defance.poke) +
                parseFloat(spc_atk.poke) +
                parseFloat(spc_dfc.poke) +
                parseFloat(speed.poke)
                
            setTotal({...total,status:total_status})
            setStatus([
                hp,
                attack,
                defance,
                spc_atk,
                spc_dfc,
                speed])
        }
    }
    useEffect(() => {
        init();

    }, [])
    return (
        <div>
            <GoldSiverHeader previous={'/home'} title='Character'>
                <section className="ar_pokeProfile_area_section pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="ar_pokeprofile_area">
                                    <div className="ar_pokeProfile_left_area">
                                        <div className="arPokeprofile_left_top">
                                            <div className="arPokeprofile_right_top_btn single">
                                                <img src="/images/pokeProfile/poke1.png" alt="images" />
                                                <p>YourNightmare - <b>{pokemon.Species}</b></p>
                                            </div>
                                            <div className="arPokeprofile_right_top_btn span">
                                                <img src="/images/pokeProfile/poke2.png" alt="images" />
                                                <p>Power:<span>{pokemon['Total Power']}</span></p>
                                            </div>
                                        </div>
                                        <div className="ar_pokeProfile_carousel owl-carousel owl-theme " style={{ marginTop: '66px', minHeight: '300px' }}>
                                            {all_pokemons?.length && <Carousel
                                                interval={null}
                                                className='h-100'
                                                activeIndex={selectedIndex} onSelect={handleSelect}
                                                prevIcon={<img src="/images/pokeProfile/leftarrow.png" alt="images" className='navigation-image' style={{ width: '30px' }} />}
                                                nextIcon={<img src="/images/pokeProfile/rightarrow.png" alt="images" className='navigation-image' style={{ width: '30px' }} />}
                                            >
                                                {all_pokemons.map((item) => {
                                                    return <Carousel.Item style={{ height: '300px' }} >
                                                        <div className='d-flex justify-content-center h-100 align-items-center'>
                                                            <img src={item.link} alt="" />
                                                        </div>
                                                    </Carousel.Item>
                                                })
                                                }
                                            </Carousel>}
                                        </div>
                                        <div className="arPokeProfile_skils_status">
                                            <img src="/images/pokeProfile/status.png" alt="images" className='cursor-pointer' onClick={() => setTab('status')} />
                                            <img src="/images/pokeProfile/skills.png" alt="images" className='cursor-pointer' onClick={() => setTab('skills')} />
                                        </div>
                                        <div className="arPokeProfile_hpArea">
                                            <div className="ar_pokeprofile_level">
                                                <img src="/images/pokeProfile/level.png" alt="" />
                                                <p>Lv <span>{pokemon.level}</span></p>
                                            </div>
                                            {pokemon?.HP_EXP && <div className="ar_pokeprofile_level_HP">
                                                <img data-tooltip-id="hp" data-tooltip-content={`${pokemon?.HP_EXP[0]?.leven}/${pokemon?.HP_EXP[0]?.levenmx} HP`} src="/images/pokeProfile/hp-bar-full.png" alt="images" />
                                                <Tooltip id="hp" />
                                                <img data-tooltip-id="EXP" data-tooltip-content={pokemon?.HP_EXP[0]?.leven_title} src="/images/pokeProfile/exp-bar-full.png" alt="images" />
                                                <Tooltip id="EXP" />

                                            </div>}
                                        </div>
                                    </div>
                                    <div className="ar_pokeProfile_right_area">
                                        {tab == 'skills' && <div className="ar_pokeProfile_right_single_cont">
                                            <div className="ar_pokeProfile_right_top">
                                                <a href="#"><img src="/images/pokeProfile/pokeprofileBall.png" alt="images" />Characteristics</a>
                                            </div>
                                            <div className="ar_pokeprofile_table_area">
                                                <div className="ar_pokeProfile_single_wrapper">
                                                    <a href="#"><img src="/images/pokeProfile/circle.png" alt="" />Purchased: <span>{pokemon.Purchased}</span></a>
                                                    <a href="#"><img src="/images/pokeProfile/circle.png" alt="" />Color: <span>{pokemon.Color}</span></a>
                                                </div>
                                                <div className="ar_pokeProfile_single_wrapper">
                                                    <a href="#"><img src="/images/pokeProfile/circle.png" alt="" />Negotiable: <span>{pokemon.Negotiable}</span> </a>
                                                    <a href="#"><img src="/images/pokeProfile/circle.png" alt="" />Ability: <span>{pokemon.Ability}</span> </a>
                                                </div>
                                                <div className="ar_pokeProfile_single_wrapper">
                                                    <a href="#"><img src="/images/pokeProfile/circle.png" alt="" />Level: <span>{pokemon.level}</span> </a>
                                                    <a href="#"><img src="/images/pokeProfile/circle.png" alt="" />Mood: <span>{pokemon.Mood}</span> </a>
                                                </div>
                                                <div className="ar_pokeProfile_single_wrapper">
                                                    <a href="#"><img src="/images/pokeProfile/circle.png" alt="" />Species: {pokemon.Species}</a>
                                                    <a href="#"><img src="/images/pokeProfile/circle.png" alt="" />Pokeball: <img src={`/images/items/${pokemon.Pokéball}.png`} alt="" /></a>
                                                </div>
                                            </div>

                                            {pokemon.tip && <div className="ar_pokeProfile_right_top top second d-flex">
                                                <a href="#" className='d-flex w-100 align-items-center'><img src="/images/pokeProfile/pokeprofileBall.png" alt="images" /><div className='d-flex justify-content-between' style={{ flexGrow: 1 }}> <span>Tip [?] </span><span>{total.tip} TOTAL EV's</span></div></a>
                                            </div>}
                                            {pokemon.tip && <div className="ar_pokeprofile_table_area">
                                                <div className="ar_pokeProfile_single_wrapper">
                                                    <a href="#"><img src="/images/pokeProfile/circle.png" alt="" />HP: <span>{pokemon?.tip[0].hp_ev} EV's</span></a>
                                                    <a href="#"><img src="/images/pokeProfile/circle.png" alt="" />Sp. Attack: <span>{pokemon?.tip[0]['Sp. Ataque']} EV's</span></a>
                                                </div>
                                                <div className="ar_pokeProfile_single_wrapper">
                                                    <a href="#"><img src="/images/pokeProfile/circle.png" alt="" />Attack: <span>{pokemon?.tip[0].Ataque} EV's</span> </a>
                                                    <a href="#"><img src="/images/pokeProfile/circle.png" alt="" />Sp. Defense: <span>{pokemon?.tip[0]['Sp. Defesa']} EV's</span> </a>
                                                </div>
                                                <div className="ar_pokeProfile_single_wrapper">
                                                    <a href="#"><img src="/images/pokeProfile/circle.png" alt="" />Defense: <span>{pokemon?.tip[0].Defesa} EV's</span> </a>
                                                    <a href="#"><img src="/images/pokeProfile/circle.png" alt="" />Speed: <span>{pokemon?.tip[0].Speed} EV's</span> </a>
                                                </div>
                                            </div>}
                                            {pokemon.ivs && <div className="ar_pokeProfile_right_top top second d-flex">
                                                <a href="#" className='d-flex w-100 align-items-center'><img src="/images/pokeProfile/pokeprofileBall.png" alt="images" /><div className='d-flex justify-content-between' style={{ flexGrow: 1 }}> <span>Tip [?] </span><span>{pokemon.ivs[0].total} TOTAL IV's</span></div></a>
                                            </div>}
                                            {pokemon.ivs && <div className="ar_pokeprofile_table_area">
                                                {series && series[0].data.length && <Chart options={options} series={series} type="radar" height={350} />
                                                }
                                                {/* <div className="ar_pokeProfile_single_wrapper">
                                                    <a href="#"><img src="/images/pokeProfile/circle.png" alt="" />HP: <span>{pokemon?.ivs[0].hp} IV's</span></a>
                                                    <a href="#"><img src="/images/pokeProfile/circle.png" alt="" />Sp. Attack: <span>{pokemon?.ivs[0].spcattack_iv} IV's</span></a>
                                                </div>
                                                <div className="ar_pokeProfile_single_wrapper">
                                                    <a href="#"><img src="/images/pokeProfile/circle.png" alt="" />Attack: <span>{pokemon?.ivs[0].attack_iv} IV's</span> </a>
                                                    <a href="#"><img src="/images/pokeProfile/circle.png" alt="" />Sp. Defense: <span>{pokemon?.ivs[0].spcdefence_iv} IV's</span> </a>
                                                </div>
                                                <div className="ar_pokeProfile_single_wrapper">
                                                    <a href="#"><img src="/images/pokeProfile/circle.png" alt="" />Defense: <span>{pokemon?.ivs[0].defence_iv} IV's</span> </a>
                                                    <a href="#"><img src="/images/pokeProfile/circle.png" alt="" />Speed: <span>{pokemon?.ivs[0].speed_iv} IV's</span> </a>
                                                </div> */}
                                            </div>}
                                        </div>}
                                        {tab == 'status' && <div className="ar_pokeProfile_right_single_cont">
                                            <div className="ar_pokeProfile_right_top">
                                                <a href="#" className='d-flex w-100 align-items-center'><img src="/images/pokeProfile/pokeprofileBall.png" alt="images" /><div className='d-flex justify-content-between' style={{ flexGrow: 1 }}> <span> Status [?] </span><span>{total.status} Total</span></div></a>

                                            </div>
                                            <div className="ar_pokeprofile_table_area">
                                                {status.map((item,index) => {
                                                    return <div className="ar_pokeProfile_single_wrapper" style={{ display: 'block' }}>
                                                        <a href="#" className='d-flex align-items-center w-100'> <img src="/images/pokeProfile/circle.png" alt="" />
                                                            <div className='d-flex align-items-center w-100 justify-content-between'>
                                                                <span style={{ minWidth: '25%' }}>{item.name}:</span>
                                                                <span data-tooltip-id={`star-${index}`} data-tooltip-content={`maximum ${item.name} ${item.max}`}> {Array.from({ length: item.value }).map((item) => {

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
                                                                    {Array.from({ length: 10 - item.value }).map((item) => {

                                                                        return <span
                                                                            style={{
                                                                                color: 'gray',
                                                                                fontSize: '24px',
                                                                            }}
                                                                        >
                                                                            ★
                                                                        </span>
                                                                    })
                                                                    }</span>
                                                                <Tooltip id={`star-${index}`} />
                                                                
                                                                <div className='d-flex'>
                                                                    <div>{item.poke} (+{item.up}<img src={`/images/items/${item.img}.png`} alt=''/>)</div>
                                                                </div>

                                                            </div></a>
                                                    </div>
                                                })}

                                            </div>
                                        </div>}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </GoldSiverHeader>
        </div>
    )
}

export default Character
