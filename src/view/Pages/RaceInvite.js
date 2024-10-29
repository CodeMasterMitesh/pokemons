import React from 'react'
import GoldSiverHeader from '../HomePage/GoldSiverHeader'

function RaceInvite() {
    return (
        <div>
            <GoldSiverHeader previous={'/home'} title='RaceInvite'>

                <section class="ar_race_area_section">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="ar_raceInvite_area">
                                    <img src="/images/raceInvite/bg-content.png" alt="images"/>
                                        <div class="ar_raceinvite_mainBody_in">
                                            <div class="ar_raceInvite_banner_area">
                                                <img src="/images/raceInvite/race-msg-bg.png" alt="images"/>
                                                    <div class="ar_raceInvite_banner_cont">
                                                        <p>.Invite your friends or enemies for a race</p>
                                                        <h5>.You can invite only <span>5</span> times per day</h5>
                                                    </div>
                                            </div>
                                            <div class="ar_raceInvite_btn_area">
                                                <img class="bgArea" src="/images/raceInvite/info-bg.png" alt=""/>
                                                    <div class="ar_raceInvoice_btn_single">
                                                        <div class="ar_raceinvoice_single_item">
                                                            <a href="#"><img src="/images/raceInvite/input.png" alt=""/></a>
                                                            <p>First input</p>
                                                        </div>
                                                        <div class="ar_raceinvoice_single_item">
                                                            <h3>Second selection:</h3>
                                                            <div class="ar_raceinvoice_radio">
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                                                        <label class="form-check-label" for="flexRadioDefault1">
                                                                            Yes
                                                                        </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                                                        <label class="form-check-label" for="flexRadioDefault2">
                                                                            No
                                                                        </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ar_raceinvoice_single_item">
                                                            <a href="#"><img src="/images/raceInvite/input.png" alt=""/></a>
                                                            <p>Second input</p>
                                                        </div>

                                                        <div class="ar_raceinvoice_single_item last">
                                                            <a href="#"><img src="/images/raceInvite/inname.png" alt=""/></a>
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

export default RaceInvite
