import React, { useEffect } from 'react'
import GoldSiverHeader from '../HomePage/GoldSiverHeader'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getPlayerPokemons } from 'store/pokemon';

function Hospital() {
    const dispatch = useDispatch();

    const player_pokemons = useSelector(state => state.pokemon.player_pokemons);

    useEffect(() => {
        dispatch(getPlayerPokemons())
    }, []);
    return (
        <div>
            <GoldSiverHeader previous={'/map'} title='Hospital'>
                <section class="ar_hospital_area_section">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="ar_hospital_area">
                                    <img src="/images/hospital/hospital-bg.png" alt="" />
                                    <div class="ar_hospital_recovery">
                                        <img src="/images/hospital/recovery.png" alt="" />
                                    </div>
                                    <div class="ar_hotpita_btnCoin">
                                        <a href="#"><img src="/images/hospital/hosbtn.png" alt="" /></a>
                                        <a href="#"><img src="/images/hospital/btnplace.png" alt="" /></a>
                                    </div>
                                    <div class="ar_hospital_item_single">
                                        {player_pokemons?.map((item) => {
                                            return <div className='position-relative ' style={{marginRight:'10px'}}>
                                                <img src="/images/hospital/ho2.png" alt="" className='m-0'/>
                                                <img src={`/images/pokemon/${item.wild_id}.gif`} alt="" height={90} className='position-absolute pokemon-img' style={{top:'50%',right:'50%',transform:'translate(50%,-50%)',margin:'0px'}}/>

                                            </div>
                                        })
                                        }
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

export default Hospital
