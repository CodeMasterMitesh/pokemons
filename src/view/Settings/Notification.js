import React, { useEffect } from 'react'
import GoldSiverHeader from '../HomePage/GoldSiverHeader'
import { getNotifications } from '../../store/other'
import { useDispatch, useSelector } from 'react-redux'

function Notification() {
    const all_notification = useSelector(state => state.other.notifications)
    const dispatch = useDispatch()
    const init = () => {
        dispatch(getNotifications())
    }
    useEffect(() => {
        init()
    }, [])
    return (
        <div>
            <GoldSiverHeader previous={'/home'} title='Notifications'>
                <section class="ar_work_area_section">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="ar_work_area_main">
                                    <div class="ar_work_area">
                                        <div class="ar_single_item_table_work heading">
                                            <div class="ar_work_single_text text heading">
                                                <p>Notifications</p>
                                            </div>
                                        </div>
                                        <div class="ar_workFlex_wrapper">
                                            {all_notification.map((item) => {
                                                return <div class="ar_single_item_table_work easy">
                                                    <div class="ar_work_single_text text notification" >
                                                        <h5 dangerouslySetInnerHTML={{ __html: item.msg }}>

                                                        </h5>
                                                    </div>

                                                </div>

                                            })
                                            }
                                        </div>
                                        <div class="ar_work_btn">
                                            <div class="ar_work_single_btn">
                                                <img src="assets/images/work/input.png" alt="" />
                                            </div>
                                            {/* <div class="ar_work_single_btn">
                                    <a href="#"><img src="assets/images/work/workbtn2.png" alt=""/></a>
                                    <div class="ar_work_btn_xont">
                                        <p>רומשל </p>
                                    </div>
                                </div> */}
                                        </div>
                                    </div>
                                </div>
                                .
                            </div>
                        </div>
                    </div>
                </section>
            </GoldSiverHeader>
        </div>
    )
}

export default Notification
