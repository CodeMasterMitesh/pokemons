import React from 'react'
import GoldSiverHeader from '../HomePage/GoldSiverHeader'

function Create() {
    return (
        <div>
            <GoldSiverHeader previous={'/home'} title='Create'>
                <section class="ar_create_area_section">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="ar_create_area">
                                    <div class="ar_create_carousel_wrapper owl-carousel owl-theme">
                                        <div class="ar_create_carosel_single">
                                            <img src="images/create/car2.png" alt="images"/>
                                        </div>
                                        <div class="ar_create_carosel_single">
                                            <img src="images/create/car2.png" alt="images"/>
                                        </div>
                                        <div class="ar_create_carosel_single">
                                            <img src="images/create/car2.png" alt="images"/>
                                        </div>
                                        <div class="ar_create_carosel_single">
                                            <img src="images/create/character.png" alt="images"/>
                                        </div>
                                        <div class="ar_create_carosel_single">
                                            <img src="images/create/car2.png" alt="images"/>
                                        </div>
                                        <div class="ar_create_carosel_single">
                                            <img src="images/create/car2.png" alt="images"/>
                                        </div>
                                        <div class="ar_create_carosel_single">
                                            <img src="images/create/car2.png" alt="images"/>
                                        </div>
                                    </div>

                                    <div class="ar_create_btn_area">
                                        <div class="ar_create_single_btn">
                                            <a href="#"><img src="images/create/input.png" alt=""/></a>
                                            <div class="ar_creat_btn_cont">
                                                <p>ֵׁםש</p>
                                            </div>
                                        </div>
                                        <div class="ar_create_single_btn">
                                            <a href="#"><img src="images/create/input.png" alt=""/></a>
                                            <div class="ar_creat_btn_cont">
                                                <select name="cars" id="cars">
                                                    <option value="volvo">Kanto</option>
                                                    <option value="saab">Saab</option>
                                                    <option value="mercedes">Mercedes</option>
                                                    <option value="audi">Audi</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="ar_create_single_btn">
                                            <a href="#"><img src="images/create/cbtn.png" alt=""/></a>
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

export default Create
