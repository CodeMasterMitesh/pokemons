import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import GoldSiverHeader from '../HomePage/GoldSiverHeader';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getPlayerPokemons } from '../../store/pokemon';
import { Tooltip } from 'react-tooltip';
import moment from 'moment';

function Character() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const pokemon_id = queryParams.get('id'); // replace 'yourParamName' with the query parameter name

    const dispatch = useDispatch()
    const all_pokemons = useSelector((state) => state.pokemon.player_pokemons)
    const [selected, setSelected] = useState({})
    const [tab, setTab] = useState('skills')
    const [selectedIndex, setSelectedIndex] = useState(0)

    const handleSelect = (selectedIndex) => {
        setSelectedIndex(selectedIndex);
        let show = all_pokemons[selectedIndex];
        let totalpower = parseFloat(show['attack']) + parseFloat(show['defence']) + parseFloat(show['speed']) + parseFloat(show['spc.attack']) + parseFloat(show['spc.defence'])
        let totalev = parseFloat(show.hp_ev) + parseFloat(show.attack_ev) + parseFloat(show.defence_ev) + parseFloat(show.speed_ev) + parseFloat(show['spc.attack_ev']) + parseFloat(show['spc.defence_ev'])
        setSelected({ ...show, totalpower: totalpower.toLocaleString(), totalev: totalev.toLocaleString() })

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
        let totalpower = parseFloat(show['attack']) + parseFloat(show['defence']) + parseFloat(show['speed']) + parseFloat(show['spc.attack']) + parseFloat(show['spc.defence'])
        let totalev = parseFloat(show.hp_ev) + parseFloat(show.attack_ev) + parseFloat(show.defence_ev) + parseFloat(show.speed_ev) + parseFloat(show['spc.attack_ev']) + parseFloat(show['spc.defence_ev'])
        setSelected({ ...show, totalpower: totalpower.toLocaleString(), totalev: totalev.toLocaleString() })
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
                                                <p>YourNightmare - <b>{selected.naam}</b></p>
                                            </div>
                                            <div className="arPokeprofile_right_top_btn span">
                                                <img src="/images/pokeProfile/poke2.png" alt="images" />
                                                <p>Power:<span>{selected.totalpower}</span></p>
                                            </div>
                                        </div>
                                        <div className="ar_pokeProfile_carousel owl-carousel owl-theme " style={{ marginTop: '66px',minHeight:'300px' }}>
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
                                                <p>Lv <span>{selected.level}</span></p>
                                            </div>
                                            <div className="ar_pokeprofile_level_HP">
                                                <img data-tooltip-id="hp" data-tooltip-content={`${selected.leven}/${selected.levenmax} HP`} src="/images/pokeProfile/hp-bar-full.png" alt="images" />
                                                <Tooltip id="hp" />
                                                <img data-tooltip-id="EXP" data-tooltip-content={`${selected.level < 100 ? (selected.expnodig - selected.exp) + ' EXP for the next level' : 'Your pokemon is now at max lavel (100)!'}`} src="/images/pokeProfile/exp-bar-full.png" alt="images" />
                                                <Tooltip id="EXP" />

                                            </div>
                                        </div>
                                    </div>
                                    <div className="ar_pokeProfile_right_area">
                                        {tab == 'skills' && <div className="ar_pokeProfile_right_single_cont">
                                            <div className="ar_pokeProfile_right_top">
                                                <a href="#"><img src="/images/pokeProfile/pokeprofileBall.png" alt="images" />Characteristics</a>
                                            </div>
                                            <div className="ar_pokeprofile_table_area">
                                                <div className="ar_pokeProfile_single_wrapper">
                                                    <a href="#"><img src="/images/pokeProfile/circle.png" alt="" />Purchased: <span>{moment(selected.capture_date).fromNow()}</span></a>
                                                    <a href="#"><img src="/images/pokeProfile/circle.png" alt="" />Color: <span>{selected.shiny ? 'Shiny' : 'Standard'}</span></a>
                                                </div>
                                                <div className="ar_pokeProfile_single_wrapper">
                                                    <a href="#"><img src="/images/pokeProfile/circle.png" alt="" />Negotiable: <span>{selected.can_trade ? 'Non Negotiable' : 'Negotiable'}</span> </a>
                                                    <a href="#"><img src="/images/pokeProfile/circle.png" alt="" />Ability: <span>Pressure</span> </a>
                                                </div>
                                                <div className="ar_pokeProfile_single_wrapper">
                                                    <a href="#"><img src="/images/pokeProfile/circle.png" alt="" />Level: <span>{selected.level}</span> </a>
                                                    <a href="#"><img src="/images/pokeProfile/circle.png" alt="" />Mood: <span>{selected.karakter}</span> </a>
                                                </div>
                                                <div className="ar_pokeProfile_single_wrapper">
                                                    <a href="#"><img src="/images/pokeProfile/circle.png" alt="" />Species: {selected.naam}</a>
                                                    <a href="#"><img src="/images/pokeProfile/circle.png" alt="" />Pkeball: <img src={`/images/items/${selected.gevongenmet}.png`} alt="" /></a>
                                                </div>
                                            </div>

                                            <div className="ar_pokeProfile_right_top top second d-flex">
                                                <a href="#" className='d-flex w-100 align-items-center'><img src="/images/pokeProfile/pokeprofileBall.png" alt="images" /><div className='d-flex justify-content-between' style={{ flexGrow: 1 }}> <span>Tip [?] </span><span>{selected.totalev} TOTAL EV's</span></div></a>
                                            </div>
                                            <div className="ar_pokeprofile_table_area">
                                                <div className="ar_pokeProfile_single_wrapper">
                                                    <a href="#"><img src="/images/pokeProfile/circle.png" alt="" />HP: <span>{selected.hp_ev} EV's</span></a>
                                                    <a href="#"><img src="/images/pokeProfile/circle.png" alt="" />Sp. Attack: <span>{selected['spc.attack_ev']} EV's</span></a>
                                                </div>
                                                <div className="ar_pokeProfile_single_wrapper">
                                                    <a href="#"><img src="/images/pokeProfile/circle.png" alt="" />Attack: <span>{selected.attack_ev} EV's</span> </a>
                                                    <a href="#"><img src="/images/pokeProfile/circle.png" alt="" />Sp. Defense: <span>{selected['spc.defence_ev']} EV's</span> </a>
                                                </div>
                                                <div className="ar_pokeProfile_single_wrapper">
                                                    <a href="#"><img src="/images/pokeProfile/circle.png" alt="" />Defense: <span>{selected.defence_ev} EV's</span> </a>
                                                    <a href="#"><img src="/images/pokeProfile/circle.png" alt="" />Speed: <span>{selected.speed_ev} EV's</span> </a>
                                                </div>
                                            </div>
                                            <div className="ar_pokeProfile_right_top top second d-flex">
                                                <a href="#" className='d-flex w-100 align-items-center'><img src="/images/pokeProfile/pokeprofileBall.png" alt="images" /><div className='d-flex justify-content-between' style={{ flexGrow: 1 }}> <span>Tip [?] </span><span>186 TOTAL IV's</span></div></a>
                                            </div>
                                            <div className="ar_pokeprofile_table_area">
                                                <div className="ar_pokeProfile_single_wrapper">
                                                    <a href="#"><img src="/images/pokeProfile/circle.png" alt="" />HP: <span>{selected.hp_ev} EV's</span></a>
                                                    <a href="#"><img src="/images/pokeProfile/circle.png" alt="" />Sp. Attack: <span>{selected['spc.attack_ev']} EV's</span></a>
                                                </div>
                                                <div className="ar_pokeProfile_single_wrapper">
                                                    <a href="#"><img src="/images/pokeProfile/circle.png" alt="" />Attack: <span>{selected.attack_ev} EV's</span> </a>
                                                    <a href="#"><img src="/images/pokeProfile/circle.png" alt="" />Sp. Defense: <span>{selected['spc.defence_ev']} EV's</span> </a>
                                                </div>
                                                <div className="ar_pokeProfile_single_wrapper">
                                                    <a href="#"><img src="/images/pokeProfile/circle.png" alt="" />Defense: <span>{selected.defence_ev} EV's</span> </a>
                                                    <a href="#"><img src="/images/pokeProfile/circle.png" alt="" />Speed: <span>{selected.speed_ev} EV's</span> </a>
                                                </div>
                                            </div>
                                        </div>}
                                        {tab == 'status' && <div className="ar_pokeProfile_right_single_cont">
                                            <div className="ar_pokeProfile_right_top">
                                                <a href="#" className='d-flex w-100 align-items-center'><img src="/images/pokeProfile/pokeprofileBall.png" alt="images" /><div className='d-flex justify-content-between' style={{ flexGrow: 1 }}> <span> Status [?] </span><span>1340 Total</span></div></a>

                                            </div>
                                            <div className="ar_pokeprofile_table_area">
                                                <div className="ar_pokeProfile_single_wrapper">
                                                    <a href="#" className='d-flex align-items-center'> <img src="/images/pokeProfile/circle.png" alt="" />HP:
                                                        <span style={{marginLeft:'20px'}}> {Array.from({ length: 7 }).map((item) => {

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
                                                            }</span></a>
                                                </div>
                                               
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
