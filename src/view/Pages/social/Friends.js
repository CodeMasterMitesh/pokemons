import React, { useCallback, useEffect, useState } from 'react'
import GoldSiverHeader from '../../HomePage/GoldSiverHeader'
import { useDispatch, useSelector } from 'react-redux'
import { acceptFriendRequest, blockFriend, declineFriendRequest, getFriendRequest,getFriends,getSearchPlayers, sendFriendRequest } from '../../../store/friends'
import { Form } from 'react-bootstrap'
import debounce from 'lodash.debounce'  

function Friends() {
    const dispatch = useDispatch()
    const friends = useSelector(state => state.friend.friends)

    const handleBlock = async (name) => {
        await dispatch(blockFriend(name)).unwrap()
        dispatch(getFriends())
    }
    useEffect(() => {
        dispatch(getFriends())
    },[])
    return (
        <div>
            <GoldSiverHeader previous={'/home'} title='My Friends'>
                <section class="ar_work_area_section">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="ar_work_area_main">
                                    <div class="ar_work_area">
                                        <div class="ar_single_item_table_work heading">
                                            <div class="ar_work_single_text text heading">
                                                <p>Friends</p>
                                            </div>
                                        </div>
                                        <div class="ar_workFlex_wrapper">
                                            {friends.map((item) => {
                                                return <div class="ar_single_item_table_work hard w-100">
                                                    <div class="p-5 d-flex justify-content-between w-100 chat-box">
                                                        <div className='d-flex gap-3 align-items-center'>
                                                            <img src="images/mock-19.png" alt="" />
                                                            <h2>{item.friend_name}</h2>
                                                        </div>
                                                        <div>
                                                            <a className='cursor-pointer' onClick={() => { handleBlock(item.friend_name) }}><img src="images/playerProfile/nished.png" alt="" /></a>
                                                        </div>

                                                    </div>

                                                </div>
                                            })}
                                            {
                                                friends && friends.length == 0 && <div className='notfound'>
                                                    No any friends
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
                            </div>
                        </div>
                    </div>
                </section>
            </GoldSiverHeader>
        </div>
    )
}

export default Friends
