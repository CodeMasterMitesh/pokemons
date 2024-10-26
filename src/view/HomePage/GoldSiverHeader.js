import { getProfile } from '../../store/auth'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const GoldSiverHeader = ({previous,title,children}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user_data = useSelector(state=>state.auth.user_data)

    const getProfileData = async () => {
        try {
            await dispatch(getProfile()).unwrap();
        } catch (error) {
        }
    }
    useEffect(()=>{
        getProfileData()
    },[])
    return (
        <div className='pb-2'>
            <section className="ar_main_content_area_wrapper p-2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="ar_main_container_area">
                                <div className="ar_heading_area_top">
                                    <div className="ar_heading_title_back">
                                        <a className="ar_back cursor-pointer" onClick={() => navigate(previous)}><img src="/images/game-ui/reButton.png" alt="images" /></a>
                                        <h3> {title} </h3>
                                        <a href="#"><img src="/images/game-ui/question.png" alt="images" /></a>
                                    </div>
                                    <div className="ar_heading_title_plus">
                                        <div className="arTitle_plus_area">
                                            <div className="arTitle_plus_img " >
                                                <img src="/images/game-ui/p1.png" alt="" className='cursor-pointer' onClick={()=>navigate('/packages?buy=golds')} />
                                                <p>{user_data?.gold}</p>
                                            </div>
                                            <div className="arTitle_plus_img " >
                                                <img src="/images/game-ui/p2.png" alt="" className='cursor-pointer' onClick={()=>navigate('/packages?buy=silvers')}/>
                                                <p className="one152">{user_data?.silver}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {children}
        </div>
    )
}

export default GoldSiverHeader
