import React, { useEffect, useState } from 'react'
import GoldSiverHeader from './GoldSiverHeader'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getPlayerPokemons } from '../../store/pokemon'
function Battle() {
    const pokemons = useSelector(state => state.pokemon.player_pokemons)
    const [yourPokemon, setYourPokemon] = useState({})
    const [oppPokemon, setOppPokemon] = useState({})
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPlayerPokemons())
    }, [])
    useEffect(() => {
        setYourPokemon(pokemons[0])
        setOppPokemon(pokemons[1])
    }, [pokemons])
    return (
        <>
            <GoldSiverHeader previous='/home' title='Battle'>
                <section className="ar_battle_area_section">
                    <div className="p-3 container-md">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="ar_batte_area">
                                    <div className='your-pokemon'>
                                        <img src={`/images/pokemon/back/${yourPokemon?.wild_id}.gif`} alt="" />
                                    </div>
                                    <div className='opp-pokemon'>
                                        <img src={`/images/pokemon/${oppPokemon?.wild_id}.gif`} alt="" />
                                    </div>
                                    <div className="ar_battle_area_top">
                                        <div className="ar_battleTop_left">
                                            {/* <div className="ar_battle_left_text">
                                                <img src="/images/battle/text-content.png" alt="images" />
                                                <div className="arBattle_left_cont">
                                                    <p>.Mewtwo used Physical Meteor</p>
                                                    <p>.Your turn to attack</p>
                                                </div>
                                            </div> */}
                                            <div className="ar_battle_left_hp_area">
                                                <div className="ar_battle_left_hp_text">
                                                    <p>{yourPokemon?.naam}</p>
                                                    <p>Lv <span>{yourPokemon?.level}</span></p>
                                                </div>
                                                <img src="/images/battle/hpRead.png" alt="images" />
                                                <img src="/images/battle/expEmpty.png" alt="images" />
                                            </div>
                                        </div>
                                        {/* <div className="ar_battleTop_middle">
                                            <p>Time Left: </p>
                                            <p><span>2:39</span></p>
                                        </div> */}
                                        <div className="ar_battleTop_right right">
                                            <div className="ar_battle_left_hp_area">
                                                <div className="ar_battle_left_hp_text">
                                                    <p>{oppPokemon?.naam}</p>
                                                    <p>Lv <span>{oppPokemon?.level}</span></p>
                                                </div>
                                                <img src="/images/battle/hpRead.png" alt="images" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ar_battle_area_bottom">
                                        <div className="ar_battle_bottom_run">
                                            <a href="#"> <img src="/images/battle/run.png" alt="images" /></a>
                                        </div>
                                        <div className="ar_battle_bottom_btnAct">
                                            <div className="ar_battle_btom_single">
                                                <a href="#"><img src="/images/battle/redAt.png" alt="images" /></a>
                                                <p>קבאמ</p>
                                            </div>
                                            <div className="ar_battle_btom_single">
                                                <a href="#"><img src="/images/battle/selAt.png" alt="images" /></a>
                                                <p>קית</p>
                                            </div>
                                            <div className="ar_battle_btom_single">
                                                <a href="#"><img src="/images/battle/selAt.png" alt="images" /></a>
                                                <p>ןומיקופ</p>
                                            </div>
                                        </div>
                                        <div className="ar_battle_bottom_bottm">
                                            <div className="ar_battle_single_bottom">
                                                <a href="#"><img src="/images/battle/Normal.png" alt="images" /></a>
                                                <p>Dodge</p>
                                            </div>
                                            <div className="ar_battle_single_bottom">
                                                <a href="#"><img src="/images/battle/Normal.png" alt="images" /></a>
                                                <p>Punch</p>
                                            </div>
                                            <div className="ar_battle_single_bottom">
                                                <a href="#"><img src="/images/battle/Electric.png" alt="images" /></a>
                                                <p>Iron Tail</p>
                                            </div>
                                            <div className="ar_battle_single_bottom">
                                                <a href="#"><img src="/images/battle/Electric.png" alt="images" /></a>
                                                <p>Thunder Shock </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </GoldSiverHeader>
        </>

    )
}

export default Battle
