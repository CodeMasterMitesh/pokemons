import { getProfile, updatePlayer } from '../../store/auth'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap';

import { Modal, Button } from 'react-bootstrap';
import { getPlayerPokemons } from '../../store/pokemon';
import PokemonProfile from '../Component/PokemonProfile';


function Profile() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const player_pokemons = useSelector(state => state.pokemon.player_pokemons);

    const profile_data = useSelector(state => state.auth.user_data)
    const [modal, setModal] = useState(false)

    const [region, setRegion] = useState(profile_data?.wereld)
    const handleCloseModal = () => setModal(false);
    const [hoveredId, setHoveredId] = useState(null);

    const handlesubmit = () => {
        dispatch(updatePlayer(region))
    }


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
    useEffect(() => {
        dispatch(getProfile())
        dispatch(getPlayerPokemons())

    }, [])
    return (
        <div>
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
            <section className="ar_playerProfile_area_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="ar_playerProfile_area">
                                <div className="ar_playerProfile_area_item arPlayer_left">
                                    <div className="arPlayerProfile_left_area">
                                        <Row className="character-item2-inner" style={{ maxHeight: '500px' }}>
                                            {
                                                player_pokemons && player_pokemons.map((item) => {

                                                    return <Col md={6} sm={12} className="character-item2-inner2 gap-2 cursor-pointer" >
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
                                                    return <Col md={6} sm={12} className="arPlayerProfle_chacter_item">
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
                                                    {profile_data.username}</p>
                                                    <p>Lv <span>{profile_data.rank}</span></p>
                                                </div>
                                            </div>
                                            <div className="ar_playerMiddle_bottom_single_item" onClick={()=>{navigate('/social/challenge-trainer')}}>
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
                                                        <a href="playerProfile.html"><p>Results</p></a>
                                                    </div>
                                                </a>
                                            </div>
                                        </a>
                                        <a href="playerProfile-tab.html">
                                            <div className="ar_playerProfile_top_btn">
                                                <a href="playerProfile-tab.html"><img src="/images/playerProfile/tab2.png" alt="" /></a>
                                                <div className="arPlyaderProfile_tab_text last">
                                                    <a href="playerProfile-tab.html"> <p>עדימ</p></a>
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="ar_playerProfile_tabArea_wrapper">
                                        <div className="ar_playerProfile_tab_area arPlay_tab_one">
                                            <div className="ar_playerTab_title">
                                                <a href="#"><img src="/images/playerProfile/circle.png" alt="" />Kanto</a>
                                            </div>
                                            <div className="ar_Playyer_tab_item_wrapper">
                                                <a href="#"><img src="/images/playerProfile/item1.png" alt="" /></a>
                                                <a href="#"><img src="/images/playerProfile/item2.png" alt="" /></a>
                                                <a href="#"><img src="/images/playerProfile/item2.png" alt="" /></a>
                                                <a href="#"><img src="/images/playerProfile/item2.png" alt="" /></a>
                                                <a href="#"><img src="/images/playerProfile/item2.png" alt="" /></a>
                                                <a href="#"><img src="/images/playerProfile/item2.png" alt="" /></a>
                                            </div>

                                            <div className="ar_playerTab_title last">
                                                <a href="#"><img src="/images/playerProfile/circle.png" alt="" />Twinleaf Town</a>
                                            </div>
                                            <div className="ar_Playyer_tab_item_wrapper">
                                                <a href="#"><img src="/images/playerProfile/item2.png" alt="" /></a>
                                                <a href="#"><img src="/images/playerProfile/item2.png" alt="" /></a>
                                                <a href="#"><img src="/images/playerProfile/item2.png" alt="" /></a>
                                                <a href="#"><img src="/images/playerProfile/item2.png" alt="" /></a>
                                                <a href="#"><img src="/images/playerProfile/item2.png" alt="" /></a>
                                                <a href="#"><img src="/images/playerProfile/item2.png" alt="" /></a>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Profile
