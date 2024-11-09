import { getProfile, getProfileByName, updatePlayer } from '../../store/auth'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Row, Col, Form } from 'react-bootstrap';

import { Modal, Button } from 'react-bootstrap';
import { getPlayerPokemons } from '../../store/pokemon';
import PokemonProfile from '../Component/PokemonProfile';
import GoldSiverHeader from '../HomePage/GoldSiverHeader';
import { FaEdit } from "react-icons/fa";
import { getHonors, presentation } from '../../store/other';
import Silver from '../Component/Silver';
import Gold from '../Component/Gold';
import moment from 'moment';
import Online from '../Component/Online';
import Offline from '../Component/Offline';
import { getUserBadge } from '../../store/extras';
import { Tooltip } from 'react-tooltip';


function Profile() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const params = useParams();
    const [disableFlag, setDisableFlag] = useState(true)
    let current_name = JSON.parse(localStorage.getItem('userData'))?.playerName
    let name = JSON.parse(localStorage.getItem('userData'))?.playerName
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const [presentationData, setPresentation] = useState('')
    const user_badges = useSelector(state => state.extras.user_badges)

    if (queryParams.get('playername')) {
        name = queryParams.get('playername');
    }
    const player_pokemons = useSelector(state => state.pokemon.player_pokemons);

    const profile_by_name = useSelector(state => state.auth.profile_by_name)
    const honors = useSelector(state => state.other.honors)
    const [modal, setModal] = useState(false)

    const [region, setRegion] = useState(profile_by_name?.wereld)
    const handleCloseModal = () => setModal(false);
    const [hoveredId, setHoveredId] = useState(null);

    const handlesubmit = () => {
        dispatch(updatePlayer(region))
    }

    useEffect(() => {
        setRegion(profile_by_name?.wereld)
        setPresentation(profile_by_name?.profiel)
    }, [profile_by_name])
    const handleMouseEnter = (id) => {
        setHoveredId(id);
        setTimeout(() => {
            const element = document.getElementById(`pokemon-popup-${id}`);
            if (element) {
                const { right, left, width } = element.getBoundingClientRect();
                const viewportWidth = window.innerWidth;

                // Check if the popup overflows from the right side
                if (right > viewportWidth) {
                    element.style.position = 'absolute';
                    element.style.right = '10px';
                    element.style.left = 'auto';
                    element.style.transform = 'translate(0%,0%) !important';
                    console.log('Adjusted Right:', element.style.right);
                }
                // Check if the popup overflows from the left side
                else if (left < 0) {
                    element.style.position = 'absolute';
                    element.style.left = '10px';
                    element.style.transform = 'translate(0%,0%) !important';

                    element.style.right = 'auto';
                    console.log('Adjusted Left:', element.style.left);
                }
                // Handle near-left-edge cases
                else if (left < 200) {
                    element.style.position = 'absolute';
                    element.style.left = `0px`;
                    element.style.right = 'auto';
                    element.style.transform = 'translate(0%,0%) !important';
                    console.log('Adjusted Near Left:', element.style.left);
                }
            } else {
                console.warn(`Element with ID pokemon-popup-${id} not found.`);
            }
        }, 0); // Allow for DOM updates to settle
    };

    const handleMouseLeave = () => {
        setHoveredId(null);
    };
    const init = async () => {
        let data = await dispatch(getProfileByName(name)).unwrap()
        if (!data) {
            navigate('/home')
        }
    }
    const handlePresentation = () => {
        setDisableFlag(true)
        dispatch(presentation(presentationData))
    }
    const setTime = () => {
        if (parseInt(profile_by_name?.online) + 900 > moment().unix()) {
            return <Online />
        } else {
            return <Offline />
        }
    }
    useEffect(() => {
        init()
        dispatch(getPlayerPokemons())
        dispatch(getHonors())
        dispatch(getUserBadge())
    }, [])
    return (
        <div>
            <GoldSiverHeader title='Profile' previous='/home'>
                <Modal show={modal} onHide={handleCloseModal} size='xl' contentClassName='pokemon-modal'>
                    <Modal.Header closeButton>
                        <Modal.Title style={{ color: 'white' }}>Changes Region</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col md={6}>

                                <div className="ar_myProfile_select_area mt-3">
                                    <select className="form-select" aria-label="Default select example"
                                        name="wereld"
                                        value={region}
                                        onChange={(e) => { setRegion(e.target.value) }}
                                    >
                                        <option selected>Region</option>
                                        <option value="Kanto">Kanto</option>
                                        <option value="Johto">Johto</option>
                                        <option value="Hoenn">Hoenn</option>
                                        <option value="Sinnoh">Sinnoh</option>
                                        <option value="Unova">Unova</option>
                                        <option value="Kalos">Kalos</option>
                                        <option value="Alola">Alola</option>
                                    </select>
                                </div>
                            </Col>
                        </Row>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handlesubmit} size='lg'>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
                <section className="ar_playerProfile_area_section m-0">
                    <div className="container">
                        <Row>

                            <Col md={12} className='p-2'>
                                <div className="ar_myProfile_single_item2">
                                    <div className="ar_myProfile_sinle_title">
                                        <p className='settings-anchor d-flex justify-content-between'> <span ><img src="/images/myAccount/shap.png" alt="" />Profile - {profile_by_name?.username}</span></p>
                                    </div>
                                    <div className="ar_pokeprofile_table_area">
                                        <div className="ar_pokeProfile_single_wrapper">
                                            <p className='p-0'> <img src={`/images/characters/${profile_by_name?.character}/npc.png`} height={160} alt="" /></p>
                                            <p>
                                                <div className="ar_pokeProfile_single_wrapper">
                                                    <p><img src="/images/pokeProfile/circle.png" alt="" />ID: <span>{profile_by_name?.user_id}</span></p>
                                                </div>
                                                <div className="ar_pokeProfile_single_wrapper">
                                                    <p><img src="/images/pokeProfile/circle.png" alt="" />Email: <span>{profile_by_name?.email}</span></p>

                                                </div>

                                            </p>
                                        </div>
                                        <div className="ar_pokeProfile_single_wrapper">

                                        </div>
                                        <div className="ar_pokeProfile_single_wrapper">
                                            <p><img src="/images/pokeProfile/circle.png" alt="" />Silver:<span><Silver />{profile_by_name?.silver}</span></p>
                                            <p><img src="/images/pokeProfile/circle.png" alt="" />Region: <span>{profile_by_name?.wereld}</span></p>
                                        </div>
                                        <div className="ar_pokeProfile_single_wrapper">
                                            <p><img src="/images/pokeProfile/circle.png" alt="" />Gold: <span><Gold />{profile_by_name?.gold}</span></p>
                                        </div>
                                        <div className="ar_pokeProfile_single_wrapper">
                                            <p><img src="/images/pokeProfile/circle.png" alt="" />Registration IP: <span>{profile_by_name?.ip_aangemeld}</span></p>
                                            <p><img src="/images/pokeProfile/circle.png" alt="" />Login IP: <span>{profile_by_name?.ip_ingelogd}</span></p>
                                        </div>
                                        <div className="ar_pokeProfile_single_wrapper">
                                            <p><img src="/images/pokeProfile/circle.png" alt="" />Registered on: <span>{profile_by_name?.aanmeld_datum ? moment(profile_by_name?.aanmeld_datum).format('DD/MM/YYYY') : '-'}</span></p>
                                            <p><img src="/images/pokeProfile/circle.png" alt="" />Rank: <span>{profile_by_name?.rank} {profile_by_name?.admin != 0 ? 'Admin' : '-'}</span></p>
                                        </div>
                                        <div className="ar_pokeProfile_single_wrapper">
                                            <p><img src="/images/pokeProfile/circle.png" alt="" />Overall Rating: <span> {profile_by_name?.admin != 0 ? 'Administrator' : '-'}</span></p>
                                            <p><img src="/images/pokeProfile/circle.png" alt="" />Age: <span>{profile_by_name?.antiguidade}</span></p>
                                        </div>
                                        <div className="ar_pokeProfile_single_wrapper">
                                            <p><img src="/images/pokeProfile/circle.png" alt="" />Badges: <span> {profile_by_name?.badgeszien}</span></p>
                                            <p><img src="/images/pokeProfile/circle.png" alt="" />Pokémon: <span>{profile_by_name?.aantalpokemon}</span></p>
                                        </div>
                                        <div className="ar_pokeProfile_single_wrapper">
                                            <p><img src="/images/pokeProfile/circle.png" alt="" />Pokémon Level 100: <span> {profile_by_name?.aantalpokemon}</span></p>
                                            <p><img src="/images/pokeProfile/circle.png" alt="" />TOP 3 Pokémon: <span>
                                                <span>
                                                    <span><img src="/images/icons/medal3.png" alt="" style={{ margin: '0px' }} />0</span>|
                                                    <span><img src="/images/icons/medal2.png" alt="" style={{ margin: '0px' }} />0</span>|
                                                    <span><img src="/images/icons/medal1.png" alt="" style={{ margin: '0px' }} />0</span>|
                                                </span>
                                            </span></p>
                                        </div>
                                        <div className="ar_pokeProfile_single_wrapper">
                                            <p><img src="/images/pokeProfile/circle.png" alt="" />Wins: <span> {profile_by_name?.gewonnen}</span></p>
                                            <p><img src="/images/pokeProfile/circle.png" alt="" />Losses: <span>{profile_by_name?.verloren}</span></p>
                                        </div>
                                        <div className="ar_pokeProfile_single_wrapper">
                                            <p><img src="/images/pokeProfile/circle.png" alt="" />Status: <span>{setTime()}</span></p>
                                            <p><img src="/images/pokeProfile/circle.png" alt="" />Last Visit: <span>{profile_by_name?.ultimo_login} {profile_by_name?.ultimo_login_hour}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={12}>

                                <div className="ar_playerProfile_area">
                                    <div className="ar_playerProfile_area_item arPlayer_left">
                                        <div className="arPlayerProfile_left_area">
                                            <Row className="character-item2-inner" style={{ maxHeight: '500px' }}>
                                                {
                                                    player_pokemons && player_pokemons.map((item) => {

                                                        return <Col md={6} xs={4} className="character-item2-inner2 gap-2 cursor-pointer" >
                                                            <div className="character-item2-inner3 pokemon-gifs"
                                                                onMouseEnter={() => handleMouseEnter(item.wild_id)}
                                                                onMouseLeave={handleMouseLeave}>
                                                                <img src={`images/pokemon/${item.wild_id}.gif`} alt="" />
                                                                <div className="character-item2-inner4">
                                                                    <img src="/images/character-17.png" alt="" />
                                                                </div>
                                                                <div className="character-item2-inner5 b--35" >
                                                                    <p style={{ minHeight: "60px", fontSize: '12px' }}>{item.naam} - Lv <span>{item.level}</span></p>
                                                                </div>
                                                                <div className='position-absolute mt-2'
                                                                    id={`pokemon-popup-${item.wild_id}`}
                                                                    style={{ zIndex: 100 }}
                                                                >
                                                                    {hoveredId === item.wild_id &&
                                                                        <PokemonProfile data={item} />
                                                                    }
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    })
                                                }
                                                {
                                                    Array.from({ length: (6 - player_pokemons?.length) }).map(() => {
                                                        return <Col md={6} xs={4} className="arPlayerProfle_chacter_item">
                                                            <a href="#"><img src="/images/playerProfile/pokemon-home-add.png" alt="" /></a>
                                                        </Col>
                                                    })
                                                }

                                            </Row>

                                        </div>
                                    </div>
                                    <div className="ar_playerProfile_area_item arPlayer_middle">
                                        <div className="ar_playProfile_middle_area">
                                            <div className="ar_playerProfile_middle_top">
                                                <div className="ar_play_middle_top_tag cursor-pointer">
                                                    <a onClick={() => { navigate('/friend-requests') }}><img src="/images/playerProfile/user.png" alt="" /></a>
                                                </div>
                                                <div className="ar_play_middle_top_tag cursor-pointer">
                                                    <a onClick={() => { navigate('/block-list') }}><img src="/images/playerProfile/nished.png" alt="" /></a>
                                                </div>
                                                <div className="ar_play_middle_top_tag" onClick={() => { setModal(true) }}>
                                                    <a href="#"><img src="/images/playerProfile/btnUser.png" alt="" /></a>
                                                    <div className="ar_play_middle_top_tagText">
                                                        <p>ןיטינומ</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ar_playerMiddle_bottom_area">
                                                <div className="ar_playerMiddle_bottom_single_item">
                                                    <a href="#"><img src="/images/playerProfile/playBtnCha.png" alt="" /></a>
                                                    <div className="ar_playerMiddle_bottom_single_itemTexy">
                                                        <p>
                                                            {/* <span>[off]</span> */}
                                                            {profile_by_name?.username}</p>
                                                        <p>Lv <span>{profile_by_name?.rank}</span></p>
                                                    </div>
                                                </div>
                                                <div className="ar_playerMiddle_bottom_single_item" onClick={() => { navigate('/social/challenge-trainer') }}>
                                                    <a href=""><img src="/images/playerProfile/playBtn.png" alt="" /></a>
                                                    <div className="ar_playerMiddle_bottom_single_itemTexy last">
                                                        <p>Challenge</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ar_playerProfile_area_item ar_player_right">
                                        <div className="ar_right_minus">
                                            <a href="#" onClick={() => { navigate('/home') }}><img src="/images/playerProfile/X.png" alt="" /></a>
                                        </div>
                                        <div className="ar_playerPorfile_right_top">
                                            <a href="playerProfile.html">
                                                <div className="ar_playerProfile_top_btn last">
                                                    <a href="playerProfile.html"><img src="/images/playerProfile/tab1.png" alt="" /></a>
                                                    <a href="playerProfile.html">
                                                        <div className="arPlyaderProfile_tab_text">
                                                            <a><p>Results</p></a>
                                                        </div>
                                                    </a>
                                                </div>
                                            </a>
                                            <a href="playerProfile-tab.html">
                                                <div className="ar_playerProfile_top_btn">
                                                    <a href="playerProfile-tab.html"><img src="/images/playerProfile/tab2.png" alt="" /></a>
                                                    <div className="arPlyaderProfile_tab_text last">
                                                        <a > <p>עדימ</p></a>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="ar_playerProfile_tabArea_wrapper">
                                            <div className="ar_playerProfile_tab_area arPlay_tab_one">
                                                {user_badges.map((item) => {
                                                    return <div>
                                                        <div className="ar_playerTab_title last">
                                                            <a href="#"><img src="/images/playerProfile/circle.png" alt="" />{item.region}</a>
                                                        </div>
                                                        <Row className="ar_Playyer_tab_item_wrapper overflow-x-hidden">
                                                            {item.badges?.map((inner, index) => {
                                                                return <Col md={4} >
                                                                    <div className='position-relative m-3'>
                                                                        <img  src="/images/playerProfile/item2.png" alt="" className='m-0'/>
                                                                        <img  src={`/images/badges/${inner.imgSrc}`} alt="" className='m-0 badges-img'/>
                                                                    </div>
                                                                </Col>
                                                            })}
                                                        </Row>
                                                    </div>
                                                })}
                                            </div>


                                        </div>
                                    </div>

                                </div>
                            </Col>
                            <Col md={6} className='p-3'>
                                <div className="ar_myProfile_single_item2">
                                    <div className="ar_myProfile_sinle_title">
                                        <p className='settings-anchor d-flex justify-content-between'> <span ><img src="/images/myAccount/shap.png" alt="" />Presentation</span><span>
                                            {name == current_name && <FaEdit className='cursor-pointer' size={25} onClick={() => { setDisableFlag(false) }} />}
                                        </span></p>
                                    </div>
                                    <Form.Control as="textarea" disabled={disableFlag} rows={12} value={presentationData} placeholder="Message" onChange={(e) => setPresentation(e.target.value)} />
                                    <div className="ar_myProfile_btn" >
                                        <span href="#" className='settings-anchor'><img src="/images/myAccount/accBtn.png" alt="" onClick={handlePresentation} /></span>
                                        <div className="ar_myProfile_btn_text">
                                            <p style={{ top: '21px' }}>Save Changes </p>
                                        </div>
                                    </div>

                                </div>
                            </Col>
                            <Col md={6} className='p-3'>
                                <div className="ar_myProfile_single_item2">
                                    <div className="ar_myProfile_sinle_title">
                                        <p className='settings-anchor d-flex justify-content-between'> <span ><img src="/images/myAccount/shap.png" alt="" />Honors</span></p>
                                    </div>
                                    <h4>{profile_by_name?.username} has {honors?.honors_counts} honors, including:</h4>
                                    {honors.honors_Name?.length > 0 && <div className="ar_pokeprofile_table_area">
                                        {honors.honors_Name.map((item) => {
                                            return <div className="ar_pokeProfile_single_wrapper">
                                                <p><img src="/images/pokeProfile/circle.png" alt="" />{item.username}</p>
                                                <p><img src="/images/pokeProfile/circle.png" alt="" />{item.date}</p>
                                            </div>
                                        })}
                                    </div>}
                                </div>
                            </Col>

                        </Row>

                    </div>
                </section>

            </GoldSiverHeader>

        </div>
    )
}

export default Profile
