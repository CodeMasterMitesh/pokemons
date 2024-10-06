import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import GoldSiverHeader from '../HomePage/GoldSiverHeader';

function Character() {
    return (
        <div>
            <GoldSiverHeader previous={'/home'} title='Character'>
                <section className="ar_pokeProfile_area_section pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="ar_pokeprofile_area">
                                    <div className="ar_pokeProfile_left_area">
                                        <div className="arPokeprofile_left_top">
                                            <div className="arPokeprofile_right_top_btn single">
                                                <img src="images/pokeProfile/poke1.png" alt="images" />
                                                <p>YourNightmare - <b>Pikachu</b></p>
                                            </div>
                                            <div className="arPokeprofile_right_top_btn span">
                                                <img src="images/pokeProfile/poke2.png" alt="images" />
                                                <p>Power:<span>984998</span></p>
                                            </div>
                                        </div>
                                        <div className="ar_pokeProfile_carousel owl-carousel owl-theme">
                                            <Carousel
                                                prevIcon={<img src="images/pokeProfile/leftarrow.png" alt="images" className='navigation-image' />}
                                                nextIcon={<img src="images/pokeProfile/rightarrow.png" alt="images" className='navigation-image' />}
                                            >
                                                <Carousel.Item>
                                                    {/* <ExampleCarouselImage text="First slide" /> */}
                                                    <a href="#"><img src="images/pokeProfile/character.png" alt="" /></a>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <a href="#"><img src="images/pokeProfile/character.png" alt="" /></a>
                                                </Carousel.Item>
                                            </Carousel>
                                        </div>
                                        <div className="arPokeProfile_skils_status">
                                            <img src="images/pokeProfile/status.png" alt="images" />
                                            <img src="images/pokeProfile/skills.png" alt="images" />
                                        </div>
                                        <div className="arPokeProfile_hpArea">
                                            <div className="ar_pokeprofile_level">
                                                <img src="images/pokeProfile/level.png" alt="" />
                                                <p>Lv <span>73</span></p>
                                            </div>
                                            <div className="ar_pokeprofile_level_HP">
                                                <img src="images/pokeProfile/hp-bar-full.png" alt="images" />
                                                <img src="images/pokeProfile/exp-bar-full.png" alt="images" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ar_pokeProfile_right_area">
                                        <div className="ar_pokeProfile_right_single_cont">
                                            <div className="ar_pokeProfile_right_top">
                                                <a href="#"><img src="images/pokeProfile/pokeprofileBall.png" alt="images" />Characteristics</a>
                                            </div>
                                            <div className="ar_pokeprofile_table_area">
                                                <div className="ar_pokeProfile_single_wrapper">
                                                    <a href="#"><img src="images/pokeProfile/circle.png" alt="" />Purchased 15 days ago</a>
                                                    <a href="#"><img src="images/pokeProfile/circle.png" alt="" />Gilded: <span>Fix</span></a>
                                                </div>
                                                <div className="ar_pokeProfile_single_wrapper">
                                                    <a href="#"><img src="images/pokeProfile/circle.png" alt="" />Trade: <span>Marketable</span> </a>
                                                    <a href="#"><img src="images/pokeProfile/circle.png" alt="" />Capabilities: <span>Synchronize</span> </a>
                                                </div>
                                                <div className="ar_pokeProfile_single_wrapper">
                                                    <a href="#"><img src="images/pokeProfile/circle.png" alt="" />Mode: <span>Brave</span> </a>
                                                    <a href="#"><img src="images/pokeProfile/circle.png" alt="" />Item: <span>None</span> </a>
                                                </div>
                                                <div className="ar_pokeProfile_single_wrapper">
                                                    <a href="#"><img src="images/pokeProfile/circle.png" alt="" />Sex: Captured Mew</a>
                                                    <a href="#"><img src="images/pokeProfile/circle.png" alt="" /></a>
                                                </div>
                                            </div>

                                            <div className="ar_pokeProfile_right_top top second">
                                                <a href="#"><img src="images/pokeProfile/pokeprofileBall.png" alt="images" />Tip [?]</a>
                                            </div>
                                            <div className="ar_pokeprofile_table_area">
                                                <div className="ar_pokeProfile_single_wrapper">
                                                    <a href="#"><img src="images/pokeProfile/circle.png" alt="" />Purchased 15 days ago</a>
                                                    <a href="#"><img src="images/pokeProfile/circle.png" alt="" />Gilded: <span>Fix</span></a>
                                                </div>
                                                <div className="ar_pokeProfile_single_wrapper">
                                                    <a href="#"><img src="images/pokeProfile/circle.png" alt="" />Trade: <span>Marketable</span> </a>
                                                    <a href="#"><img src="images/pokeProfile/circle.png" alt="" />Capabilities: <span>Synchronize</span> </a>
                                                </div>
                                                <div className="ar_pokeProfile_single_wrapper">
                                                    <a href="#"><img src="images/pokeProfile/circle.png" alt="" />Mode: <span>Brave</span> </a>
                                                    <a href="#"><img src="images/pokeProfile/circle.png" alt="" />Item: <span>None</span> </a>
                                                </div>
                                                <div className="ar_pokeProfile_single_wrapper">
                                                    <a href="#"><img src="images/pokeProfile/circle.png" alt="" />Sex: Captured Mew</a>
                                                    <a href="#"><img src="images/pokeProfile/circle.png" alt="" /></a>
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

export default Character
