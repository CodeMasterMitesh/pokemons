import React from 'react'
import GoldSiverHeader from '../HomePage/GoldSiverHeader'

function Steal() {
    return (
        <div>
            <GoldSiverHeader previous={'/home'} title='Steal'>


                <section class="ar_race_area_section">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="ar_raceInvite_area">
                                    <img src="images/raceInvite/bg-content.png" alt="images" />
                                    <div class="ar_raceinvite_mainBody_in">
                                        <div class="ar_raceInvite_banner_area ar_stealBanner_area">
                                            <img src="images/raceInvite/steal-msg-bg.png" alt="images" />
                                            <div class="ar_raceInvite_banner_cont ar_stealCont">
                                                <p>When you steal a player you have chances to get his pokémons or items from his bag.</p>
                                                <h5>.You can steal only <span>3</span> times per day</h5>
                                            </div>
                                        </div>
                                        <div class="ar_raceInvite_btn_area ar_stealBtn_area">
                                            <img src="images/raceInvite/info-bg.png" alt="" />
                                            <div class="ar_raceInvoice_btn_single ar_steaBtn_single">
                                                <div class="ar_steal_btn_single_item after arStealSingle arStealSingle100">
                                                    <p>Last steal from player: <b>YourNightmare</b></p>
                                                </div>
                                                <div class="ar_steal_btn_single_item arStealSingle">
                                                    <h5><b>Steal from:</b></h5>
                                                    <input type="text" name="set" id="set" />
                                                </div>

                                                <div class="ar_steal_btn_single_item last arStealSingle">
                                                    <a href="#"><img src="images/raceInvite/inname.png" alt="" /></a>
                                                    <p>רומשל </p>
                                                </div>
                                            </div>
                                        </div>
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

export default Steal
