import React, { useCallback, useEffect } from 'react'
import GoldSiverHeader from '../../HomePage/GoldSiverHeader'
import { useDispatch, useSelector } from 'react-redux'
import { getFriends, getSearchPlayers, sendFriendRequest } from '../../../store/friends'
import { Form } from 'react-bootstrap'
import debounce from 'lodash.debounce'
import Table from 'react-bootstrap/Table';

function FindCoach() {
    const dispatch = useDispatch()
    const friends = useSelector(state => state.friend.friends.map(item=>item.friend_id))
    const userData = JSON.parse(localStorage.getItem('userData'))
    const search_players = useSelector(state => state.friend.search_players)

    const debouncedFetchResults = useCallback(
        debounce((value) => dispatch(getSearchPlayers(value)), 1000), // 500ms debounce
        []
    );
    const init = async()=>{
        await dispatch(getFriends()).unwrap()
        dispatch(getSearchPlayers(''))
    }
    useEffect(() => {
        init()
    }, [])
    return (
        <div>
            <GoldSiverHeader previous={'/home'} title='Search Coach'>
                <section className="ar_work_area_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="ar_work_area_main">

                                    <div className="ar_work_area">
                                        <div>
                                            <div className='chat-input d-flex p-0'>
                                                <Form.Control
                                                    type="text"
                                                    id="inputPassword5"
                                                    // value={search}
                                                    onChange={(e) => { debouncedFetchResults(e.target.value) }}
                                                    aria-describedby="passwordHelpBlock"
                                                />
                                            </div>
                                            <div className='overflow-auto mt-5' style={{maxHeight:"500px"}}>
                                                <Table striped bordered hover variant='dark'>
                                                    <thead>
                                                        <tr className='table-sticky-header'>
                                                            <th>#</th>
                                                            <th>Trainer</th>
                                                            <th>Antique</th>
                                                            <th>Last Visit</th>
                                                            <th>Classification</th>
                                                            <th>Status</th>
                                                            <th>Add Friend</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            search_players.map((item, index) => {
                                                                return <tr>
                                                                    <td>{index + 1}</td>
                                                                    <td>{item.username}</td>
                                                                    <td>{item.antiguidade}</td>
                                                                    <td>{item.ultimo_login} {item.ultimo_login_hour}</td>
                                                                    <td>{item.Adminstatus == '1' ?'Administrator':''}</td>
                                                                    <td></td>
                                                                    <td>
                                                                        {!friends.includes(parseInt(item.user_id)) && userData?.UserId != item.user_id  && <a className='cursor-pointer' onClick={() => { dispatch(sendFriendRequest(item.user_id)) }}>
                                                                            <img src="images/mock-03.png" alt="" />
                                                                            </a>}
                                                                            {/* {
                                                                        friends.includes(parseInt(item.user_id))&&<span>Already Friend</span>
                                                                            } */}
                                                                    </td>
                                                                </tr>
                                                            })
                                                        }
                                                    </tbody>
                                                </Table>
                                            </div>

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

export default FindCoach
