import React, { useCallback, useEffect, useState } from 'react'
import GoldSiverHeader from '../HomePage/GoldSiverHeader'
import { useDispatch, useSelector } from 'react-redux'
import { acceptFriendRequest, declineFriendRequest, getFriendRequest,getSearchPlayers, sendFriendRequest } from '../../store/friends'
import { Form } from 'react-bootstrap'
import debounce from 'lodash.debounce'  

function FriendRequest() {
    const dispatch = useDispatch()
    const friend_requests = useSelector(state => state.friend.friend_requests)
    
    const search_players = useSelector(state => state.friend.search_players)
    // const [search,setSearch] = useState('');
    // const friend_requests=[
    //     {
    //         id:1,
    //         name:'Kunj'
    //     }
    // ]
    const debouncedFetchResults = useCallback(
        debounce((value) => dispatch(getSearchPlayers(value)), 1000), // 500ms debounce
        []
      );
    const handleDecline = async (id) => {
        const data = {
            id: id
        }
        try {
            await dispatch(declineFriendRequest(data)).unwrap()
            dispatch(getFriendRequest())
        } catch (error) {
            
        }
    }
    const handleAccept = async (id) => {
        const data = {
            user_id: id
        }
        try {
            await dispatch(acceptFriendRequest(data)).unwrap()
            dispatch(getFriendRequest())
        } catch (error) {
            
        }
    }
    useEffect(() => {
        try {
            dispatch(getFriendRequest())
            dispatch(getSearchPlayers(''))
        } catch (error) {
            
        }
    },[])
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
                                            {friend_requests.map((item) => {
                                                return <div class="ar_single_item_table_work hard w-100">
                                                    <div class="p-5 d-flex justify-content-between w-100 chat-box">
                                                        <div className='d-flex gap-3 align-items-center'>
                                                            <img src="/images/mock-19.png" alt="" />
                                                            <h2>{item.friend_name}</h2>
                                                        </div>
                                                        <div>
                                                            <a className='cursor-pointer' onClick={() => { handleAccept(item.friend_id) }}><img src="/images/mock-03.png" alt="" /></a>
                                                            <a className='cursor-pointer' onClick={() => { handleDecline(item.friend_id) }}><img src="/images/register-01.png" alt="" /></a>
                                                        </div>

                                                    </div>

                                                </div>
                                            })}
                                            {
                                                friend_requests && friend_requests.length == 0 && <div className='notfound'>
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
                                    <div class="ar_work_area mt-5">
                                        <div class="ar_single_item_table_work heading">
                                            <div class="ar_work_single_text text heading">
                                                <p>Search Friend</p>
                                            </div>
                                        </div>
                                        <div className='chat-input d-flex'>
                                            <Form.Control
                                                type="text"
                                                id="inputPassword5"
                                                // value={search}
                                                onChange={(e) => { debouncedFetchResults(e.target.value) }}
                                                aria-describedby="passwordHelpBlock"
                                            />
                                        </div>
                                        <div class="ar_workFlex_wrapper mt-2">
                                            {search_players.map((item) => {
                                                return <div class="ar_single_item_table_work hard w-100">
                                                    <div class="p-5 d-flex justify-content-between w-100 chat-box">
                                                        <div className='d-flex gap-3 align-items-center'>
                                                            <img src="/images/mock-19.png" alt="" />
                                                            <h2>{item.username}</h2>
                                                        </div>
                                                        <div>
                                                            <a className='cursor-pointer' onClick={() => { dispatch(sendFriendRequest(item.user_id)) }}><img src="/images/mock-03.png" alt="" /></a>
                                                            {/* <a className='cursor-pointer' onClick={() => { handleDecline(item.id) }}><img src="/images/register-01.png" alt="" /></a> */}
                                                        </div>

                                                    </div>

                                                </div>
                                            })}
                                            {
                                                search_players && search_players.length == 0 && <div className='notfound'>
                                                    No data found
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
