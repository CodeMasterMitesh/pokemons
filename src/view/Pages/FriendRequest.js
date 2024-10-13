import React, { useEffect } from 'react'
import GoldSiverHeader from '../HomePage/GoldSiverHeader'
import { useDispatch, useSelector } from 'react-redux'
import { acceptFriendRequest, declineFriendRequest, getFriendRequest } from '../../store/friends'

function FriendRequest() {
    const dispatch = useDispatch()
    const friend_requests = useSelector(state => state.friend.friend_requests)
    // const friend_requests=[
    //     {
    //         id:1,
    //         name:'Kunj'
    //     }
    // ]
    const handleDecline=async (id)=>{
        const data ={
            id:id
        }
        await dispatch(declineFriendRequest(data)).unwrap()
        dispatch(getFriendRequest())
    }
    const handleAccept=async(id)=>{
        const data ={
            user_id:id
        }
        await dispatch(acceptFriendRequest(data)).unwrap()
        dispatch(getFriendRequest())
    }
    useEffect(() => {
      
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
                                            return <div class="ar_single_item_table_work hard w-100">
                                                <div class="p-5 d-flex justify-content-between w-100 chat-box">
                                                    <div className='d-flex gap-3 align-items-center'>
                                                        <img src="images/mock-19.png" alt="" />
                                                        <h2>{item.name}</h2>
                                                    </div>
                                                    <div>
                                                        <a className='cursor-pointer' onClick={()=>{handleAccept(item.id)}}><img src="images/mock-03.png" alt="" /></a>
                                                        <a className='cursor-pointer' onClick={()=>{handleDecline(item.id)}}><img src="images/register-01.png" alt="" /></a>
                                                    </div>

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
