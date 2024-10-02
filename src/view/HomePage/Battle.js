import React from 'react'
import '../../assets/css/battle.css'
import { useNavigate } from 'react-router-dom'
function Battle() {
    const navigate = useNavigate()
    return (
        <div className='ar_mainBody'>
            <section className="ar_main_content_area_wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="ar_main_container_area">
                                <div className="ar_heading_area_top">
                                    <div className="ar_heading_title_back">
                                        <a className="ar_back" onClick={()=>navigate('/home')}><img src="/images/game-ui/reButton.png" alt="images"/></a>
                                        <h3> ברק </h3>
                                        <a href="#"><img src="/images/game-ui/question.png" alt="images"/></a>
                                    </div>
                                    <div className="ar_heading_title_plus">
                                        <div className="arTitle_plus_area">
                                            <div className="arTitle_plus_img">
                                                <img src="/images/game-ui/p1.png" alt=""/>
                                                    <p>198923</p>
                                            </div>
                                            <div className="arTitle_plus_img">
                                                <img src="/images/game-ui/p2.png" alt=""/>
                                                    <p className="one152">152</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="ar_battle_area_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="ar_batte_area">
                                <div className="ar_battle_area_top">
                                    <div className="ar_battleTop_left">
                                        <div className="ar_battle_left_text">
                                            <img src="/images/battle/text-content.png" alt="images"/>
                                                <div className="arBattle_left_cont">
                                                    <p>.Mewtwo used Physical Meteor</p>
                                                    <p>.Your turn to attack</p>
                                                </div>
                                        </div>
                                        <div className="ar_battle_left_hp_area">
                                            <div className="ar_battle_left_hp_text">
                                                <p>Pikacchu</p>
                                                <p>Lv <span>90</span></p>
                                            </div>
                                            <img src="/images/battle/hpRead.png" alt="images"/>
                                                <img src="/images/battle/expEmpty.png" alt="images"/>
                                                </div>
                                        </div>
                                        <div className="ar_battleTop_middle">
                                            <p>Time Left: </p>
                                            <p><span>2:39</span></p>
                                        </div>
                                        <div className="ar_battleTop_right right">
                                            <div className="ar_battle_left_hp_area">
                                                <div className="ar_battle_left_hp_text">
                                                    <p>Mewtwo</p>
                                                    <p>Lv <span>90</span></p>
                                                </div>
                                                <img src="/images/battle/hpRead.png" alt="images"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ar_battle_area_bottom">
                                        <div className="ar_battle_bottom_run">
                                            <a href="#"> <img src="/images/battle/run.png" alt="images"/></a>
                                        </div>
                                        <div className="ar_battle_bottom_btnAct">
                                            <div className="ar_battle_btom_single red">
                                                <a href="#"><img src="/images/battle/redAt.png" alt="images"/></a>
                                                <p>קבאמ</p>
                                            </div>
                                            <div className="ar_battle_btom_single">
                                                <a href="#"><img src="/images/battle/selAt.png" alt="images"/></a>
                                                <p>קית</p>
                                            </div>
                                            <div className="ar_battle_btom_single">
                                                <a href="#"><img src="/images/battle/selAt.png" alt="images"/></a>
                                                <p>ןומיקופ</p>
                                            </div>
                                        </div>
                                        <div className="ar_battle_bottom_bottm">
                                            <div className="ar_battle_single_bottom">
                                                <a href="#"><img src="/images/battle/Normal.png" alt="images"/></a>
                                                <p>Dodge</p>
                                            </div>
                                            <div className="ar_battle_single_bottom">
                                                <a href="#"><img src="/images/battle/Normal.png" alt="images"/></a>
                                                <p>Punch</p>
                                            </div>
                                            <div className="ar_battle_single_bottom">
                                                <a href="#"><img src="/images/battle/Electric.png" alt="images"/></a>
                                                <p>Iron Tail</p>
                                            </div>
                                            <div className="ar_battle_single_bottom">
                                                <a href="#"><img src="/images/battle/Electric.png" alt="images"/></a>
                                                <p>Thunder Shock </p>
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

export default Battle
