import { getProfile, updatePlayer } from '../../store/auth'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap';

import { Modal, Button } from 'react-bootstrap';


function Profile() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const profile_data = useSelector(state => state.auth.user_data)
    const [modal, setModal] = useState(false)
    const [region,setRegion] = useState(profile_data?.wereid)
    const handleCloseModal = () => setModal(false);

    const handlesubmit=()=>{
        dispatch(updatePlayer(region))
    }

    useEffect(() => {
        dispatch(getProfile())
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
                                        <div className="arPlayerProfle_chacter_item">
                                            <a href="#"><img src="images/playerProfile/pokemon-home-mewtwo.png" alt="" /></a>
                                            <div className="ar_playerProfile_cha_text">
                                                <p>Mewtwo- Lv <span>2</span></p>
                                            </div>
                                        </div>
                                        <div className="arPlayerProfle_chacter_item">
                                            <a href="#"><img src="images/playerProfile/pokemon-home-add.png" alt="" /></a>
                                        </div>
                                        <div className="arPlayerProfle_chacter_item">
                                            <a href="#"><img src="images/playerProfile/pokemon-home-add.png" alt="" /></a>
                                        </div>
                                        <div className="arPlayerProfle_chacter_item">
                                            <a href="#"><img src="images/playerProfile/pokemon-home-add.png" alt="" /></a>
                                        </div>
                                        <div className="arPlayerProfle_chacter_item">
                                            <a href="#"><img src="images/playerProfile/pokemon-home-add.png" alt="" /></a>
                                        </div>
                                        <div className="arPlayerProfle_chacter_item">
                                            <a href="#"><img src="images/playerProfile/pokemon-home-add.png" alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="ar_playerProfile_area_item arPlayer_middle">
                                    <div className="ar_playProfile_middle_area">
                                        <div className="ar_playerProfile_middle_top">
                                            <div className="ar_play_middle_top_tag cursor-pointer">
                                                <a onClick={() => { navigate('/friend-requests') }}><img src="images/playerProfile/user.png" alt="" /></a>
                                            </div>
                                            <div className="ar_play_middle_top_tag cursor-pointer">
                                                <a onClick={() => { navigate('/block-list') }}><img src="images/playerProfile/nished.png" alt="" /></a>
                                            </div>
                                            <div className="ar_play_middle_top_tag" onClick={() => { setModal(true) }}>
                                                <a href="#"><img src="images/playerProfile/btnUser.png" alt="" /></a>
                                                <div className="ar_play_middle_top_tagText">
                                                    <p>ןיטינומ</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ar_playerMiddle_bottom_area">
                                            <div className="ar_playerMiddle_bottom_single_item">
                                                <a href="#"><img src="images/playerProfile/playBtnCha.png" alt="" /></a>
                                                <div className="ar_playerMiddle_bottom_single_itemTexy">
                                                    <p><span>[off]</span>Christian</p>
                                                    <p>Lv <span>90</span></p>
                                                </div>
                                            </div>
                                            <div className="ar_playerMiddle_bottom_single_item">
                                                <a href="#"><img src="images/playerProfile/playBtn.png" alt="" /></a>
                                                <div className="ar_playerMiddle_bottom_single_itemTexy last">
                                                    <p>רגתא</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ar_playerProfile_area_item ar_player_right">
                                    <div className="ar_right_minus">
                                        <a href="#" onClick={() => { navigate('/home') }}><img src="images/playerProfile/X.png" alt="" /></a>
                                    </div>
                                    <div className="ar_playerPorfile_right_top">
                                        <a href="playerProfile.html">
                                            <div className="ar_playerProfile_top_btn last">
                                                <a href="playerProfile.html"><img src="images/playerProfile/tab1.png" alt="" /></a>
                                                <a href="playerProfile.html">
                                                    <div className="arPlyaderProfile_tab_text">
                                                        <a href="playerProfile.html"><p>םיגת</p></a>
                                                    </div>
                                                </a>
                                            </div>
                                        </a>
                                        <a href="playerProfile-tab.html">
                                            <div className="ar_playerProfile_top_btn">
                                                <a href="playerProfile-tab.html"><img src="images/playerProfile/tab2.png" alt="" /></a>
                                                <div className="arPlyaderProfile_tab_text last">
                                                    <a href="playerProfile-tab.html"> <p>עדימ</p></a>
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="ar_playerProfile_tabArea_wrapper">
                                        <div className="ar_playerProfile_tab_area arPlay_tab_one">
                                            <div className="ar_playerTab_title">
                                                <a href="#"><img src="images/playerProfile/circle.png" alt="" />Kanto</a>
                                            </div>
                                            <div className="ar_Playyer_tab_item_wrapper">
                                                <a href="#"><img src="images/playerProfile/item1.png" alt="" /></a>
                                                <a href="#"><img src="images/playerProfile/item2.png" alt="" /></a>
                                                <a href="#"><img src="images/playerProfile/item2.png" alt="" /></a>
                                                <a href="#"><img src="images/playerProfile/item2.png" alt="" /></a>
                                                <a href="#"><img src="images/playerProfile/item2.png" alt="" /></a>
                                                <a href="#"><img src="images/playerProfile/item2.png" alt="" /></a>
                                            </div>

                                            <div className="ar_playerTab_title last">
                                                <a href="#"><img src="images/playerProfile/circle.png" alt="" />Twinleaf Town</a>
                                            </div>
                                            <div className="ar_Playyer_tab_item_wrapper">
                                                <a href="#"><img src="images/playerProfile/item2.png" alt="" /></a>
                                                <a href="#"><img src="images/playerProfile/item2.png" alt="" /></a>
                                                <a href="#"><img src="images/playerProfile/item2.png" alt="" /></a>
                                                <a href="#"><img src="images/playerProfile/item2.png" alt="" /></a>
                                                <a href="#"><img src="images/playerProfile/item2.png" alt="" /></a>
                                                <a href="#"><img src="images/playerProfile/item2.png" alt="" /></a>
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
