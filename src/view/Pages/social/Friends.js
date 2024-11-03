import React, { useCallback, useEffect, useState } from 'react'
import GoldSiverHeader from '../../HomePage/GoldSiverHeader'
import { useDispatch, useSelector } from 'react-redux'
import { acceptFriendRequest, blockFriend, declineFriendRequest, getFriendRequest, getFriends, getSearchPlayers, removeFriend, sendFriendRequest } from '../../../store/friends'
import { Form } from 'react-bootstrap'
import debounce from 'lodash.debounce'
import { MdBlock } from "react-icons/md";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { Tooltip } from 'react-tooltip';

import { AiFillBank } from "react-icons/ai";
import { LuMessagesSquare } from "react-icons/lu";
import { useNavigate } from 'react-router-dom'


function Friends() {
    const dispatch = useDispatch()
    const naviagate = useNavigate()
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
                                                            {/* <div className="ar_play_middle_top_tag cursor-pointer" style={{ width: '80px' }} >
                                                                <a className='w-100'><img style={{ width: "100%" }} src="/images/playerProfile/btnUser.png" alt="" /></a>
                                                                <div className="ar_play_middle_top_tagText">
                                                                    <p>Remove</p>
                                                                </div>
                                                            </div> */}
                                                            <div data-tooltip-id="Remove" data-tooltip-content='Remove' className='cursor-pointer small-button'>
                                                                <IoIosRemoveCircleOutline onClick={() => { handleRemove(item.friend_name) }} size={30} />
                                                                <Tooltip id="Remove" />

                                                            </div>
                                                            <div data-tooltip-id="message" data-tooltip-content='Messages' className='cursor-pointer small-button'>
                                                                <LuMessagesSquare onClick={() => { naviagate('/conversation') }} size={30} />
                                                                <Tooltip id="message" />

                                                            </div>
                                                            <div data-tooltip-id="Transfer-Value" data-tooltip-content='Transfer Value' className='cursor-pointer small-button'>
                                                                <Tooltip id="Transfer-Value" />
                                                                <AiFillBank onClick={() => { naviagate('/transfer-value') }} size={30} />
                                                            </div>
                                                            <div data-tooltip-id="Block" data-tooltip-content='Block' className='cursor-pointer small-button'>

                                                            <Tooltip id="Block" />
                                                                <MdBlock size={30} onClick={() => { handleBlock(item.friend_name) }} color='red' />
                                                            </div>
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
