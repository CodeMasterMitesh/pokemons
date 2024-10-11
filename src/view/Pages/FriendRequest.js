import React, { useEffect } from 'react'
import GoldSiverHeader from '../HomePage/GoldSiverHeader'
import { useDispatch, useSelector } from 'react-redux'
import { getFriendRequest } from '../../store/friends'

function FriendRequest() {
const dispatch = useDispatch()
const friend_requests = useSelector(state=>state.friend.friend_requests)
    useEffect(()=>{
        dispatch(getFriendRequest())
    })
    return (
        <div>
            <GoldSiverHeader previous={'/profile'} title='Friend Requests'>
                <section class="ar_work_area_section">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="ar_work_area_main">
                                    <div class="ar_work_area">
                                        <div class="ar_single_item_table_work heading">
                                            <div class="ar_work_single_text text heading">
                                                <p>Friend Requests</p>
                                            </div>
                                        </div>
                                        <div class="ar_workFlex_wrapper">
                                            {friend_requests.map((item)=>{
                                            <div class="ar_single_item_table_work hard">
                                                <div class="ar_work_single_text text">
                                                    <p><span>(Hard)</span>Help to clean your town</p>
                                                </div>

                                            </div>
                                            })}
                                            {
                                                friend_requests&& friend_requests.length==0 &&<div className='notfound'>
                                                    No any pending request
                                                </div>
                                            }
                                        </div>
                                        <div class="ar_work_btn">
                                            <div class="ar_work_single_btn">
                                                <img src="assets/images/work/input.png" alt="" />
                                            </div>
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

export default FriendRequest
