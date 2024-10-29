import React from 'react'
import GoldSiverHeader from '../HomePage/GoldSiverHeader'

function Town() {
    return (
        <div>
            <GoldSiverHeader previous={'/home'} title='Town'>
                <section class="ar_town_area_section">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="ar_town_area">
                                    <div class="ar_town_carousel_wrapper owl-carousel owl-theme">
                                        <div class="ar_singe_town_itwm">
                                            <img src="/images/town/hospital.png" alt="images"/>
                                        </div>
                                        <div class="ar_singe_town_itwm">
                                            <img src="/images/town/townCoro.png" alt="images"/>
                                        </div>
                                        <div class="ar_singe_town_itwm">
                                            <img src="/images/town/townCoro.png" alt="images"/>
                                        </div>
                                        <div class="ar_singe_town_itwm">
                                            <img src="/images/town/townCoro.png" alt="images"/>
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

export default Town
