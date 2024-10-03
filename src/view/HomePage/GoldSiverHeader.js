import React from 'react'
import { useNavigate } from 'react-router-dom'
const GoldSiverHeader = ({previous}) => {
    const navigate = useNavigate()
    return (
        <div>
            <section className="ar_main_content_area_wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="ar_main_container_area">
                                <div className="ar_heading_area_top">
                                    <div className="ar_heading_title_back">
                                        <a className="ar_back cursor-pointer" onClick={() => navigate(previous)}><img src="/images/game-ui/reButton.png" alt="images" /></a>
                                        <h3> ברק </h3>
                                        <a href="#"><img src="/images/game-ui/question.png" alt="images" /></a>
                                    </div>
                                    <div className="ar_heading_title_plus">
                                        <div className="arTitle_plus_area">
                                            <div className="arTitle_plus_img">
                                                <img src="/images/game-ui/p1.png" alt="" />
                                                <p>198923</p>
                                            </div>
                                            <div className="arTitle_plus_img">
                                                <img src="/images/game-ui/p2.png" alt="" />
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
        </div>
    )
}

export default GoldSiverHeader
