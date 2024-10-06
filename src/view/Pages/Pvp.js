import React from 'react'
import GoldSiverHeader from '../HomePage/GoldSiverHeader'

function Pvp() {
    return (
        <div>
            <GoldSiverHeader previous={'/home'} title='PVP'>
                <section class="ar_pvp_area_section">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="ar_pvp_area">
                                    <div class="arPVP_area_wrapper_area">
                                        <div class="ar_pvp_wrapper_left">
                                            <div class="ar_pvp_title">
                                                <h3>unii</h3>
                                            </div>
                                            <div class="ar_pvp_character_area">
                                                <a href="#"><img src="images/pvp/pvpchare.png" alt="images"/></a>
                                                <a href="#"><img src="images/pvp/pvp-empty.png" alt="images"/></a>
                                                <a href="#"><img src="images/pvp/pvp-empty.png" alt="images"/></a>
                                                <a href="#"><img src="images/pvp/pvp-empty.png" alt="images"/></a>
                                                <a href="#"><img src="images/pvp/pvp-empty.png" alt="images"/></a>
                                                <a href="#"><img src="images/pvp/pvp-empty.png" alt="images"/></a>
                                            </div>
                                        </div>
                                        <div class="ar_pvp_wrapper_right">
                                            <div class="ar_pvp_title right">
                                                <h3>ASH2002</h3>
                                            </div>
                                            <div class="ar_pvp_character_area last">
                                                <a href="#"><img src="images/pvp/pvpchare.png" alt="images"/></a>
                                                <a href="#"><img src="images/pvp/pvp-empty.png" alt="images"/></a>
                                                <a href="#"><img src="images/pvp/pvp-empty.png" alt="images"/></a>
                                                <a href="#"><img src="images/pvp/pvp-empty.png" alt="images"/></a>
                                                <a href="#"><img src="images/pvp/pvp-empty.png" alt="images"/></a>
                                                <a href="#"><img src="images/pvp/pvp-empty.png" alt="images"/></a>
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

export default Pvp
