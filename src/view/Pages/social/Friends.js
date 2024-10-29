import React, { useCallback, useEffect, useState } from 'react'
import GoldSiverHeader from '../../HomePage/GoldSiverHeader'
import { useDispatch, useSelector } from 'react-redux'
import { acceptFriendRequest, blockFriend, declineFriendRequest, getFriendRequest, getFriends, getSearchPlayers, removeFriend, sendFriendRequest } from '../../../store/friends'
import { Form } from 'react-bootstrap'
import debounce from 'lodash.debounce'

function Friends() {
    const dispatch = useDispatch()
    const friends = useSelector(state => state.friend.friends)

    const handleBlock = async (name) => {
        await dispatch(blockFriend(name)).unwrap()
        dispatch(getFriends())
    }
    const handleRemove = async (name) => {
        await dispatch(removeFriend(name)).unwrap()
        dispatch(getFriends())
    }
    useEffect(() => {
        dispatch(getFriends())
    }, [])
    return (
        <div>
            <GoldSiverHeader previous={'/home'} title='My Friends'>
                <section className="ar_work_area_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="ar_work_area_main">
                                    <div className="ar_work_area">
                                        <div className="ar_single_item_table_work heading">
                                            <div className="ar_work_single_text text heading">
                                                <p>Friends</p>
                                            </div>
                                        </div>
                                        <div className="ar_workFlex_wrapper">
                                            {friends.map((item, index) => {
                                                return <div key={index} className="ar_single_item_table_work hard w-100">
                                                    <div className="p-2 d-flex justify-content-between w-100">
                                                        <div className='d-flex gap-3 align-items-center'>
                                                            <img src="/images/mock-19.png" alt="" />
                                                            <h2>{item.friend_name}</h2>
                                                        </div>
                                                        <div className='d-flex align-items-center'>
                                                            {/* <a className='cursor-pointer' onClick={() => {  }}><img src="/images/playerProfile/nished.png" alt="" /></a> */}
                                                            <div className="ar_play_middle_top_tag cursor-pointer" style={{width:'100px'}} onClick={() => { handleRemove(item.friend_name) }}>
                                                                <a className='w-100'><img style={{width:"100%"}} src="/images/playerProfile/btnUser.png" alt="" /></a>
                                                                <div className="ar_play_middle_top_tagText">
                                                                    <p>Remove</p>
                                                                </div>
                                                            </div>
                                                            <a className='cursor-pointer' onClick={() => { handleBlock(item.friend_name) }}><img src="/images/playerProfile/nished.png" alt="" /></a>
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
                                        <div className="ar_work_btn">
                                            <div className="ar_work_single_btn">
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
