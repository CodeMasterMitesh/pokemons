import React, { useEffect } from 'react'
import GoldSiverHeader from '../HomePage/GoldSiverHeader'
import { useDispatch, useSelector } from 'react-redux'
import { acceptFriendRequest, declineFriendRequest, getBlockList, getFriendRequest, unblockFriend } from '../../store/friends'

function BlockList() {
    const dispatch = useDispatch()
    const block_friends = useSelector(state => state.friend.block_friend_list)
    // const block_friends = [
    //     {
    //         id: 1,
    //         name: 'Kunj'
    //     }
    // ]
    const handleUnblock = async (name) => {
        try {
            console.log(name);
            
            await dispatch(unblockFriend(name)).unwrap()
            dispatch(getBlockList())
        } catch (error) {
            
        }
    }
    useEffect(() => {
        dispatch(getBlockList())
    },[])
    return (
        <div>
            <GoldSiverHeader previous={'/profile'} title='Block List'>
                <section className="ar_work_area_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="ar_work_area_main">
                                    <div className="ar_work_area">
                                        <div className="ar_single_item_table_work heading">
                                            <div className="ar_work_single_text text heading">
                                                <p>Block List</p>
                                            </div>
                                        </div>
                                        <div className="ar_workFlex_wrapper">
                                            {block_friends.map((item) => {
                                                return <div className="ar_single_item_table_work hard w-100">
                                                    <div className="p-5 d-flex justify-content-between w-100 block-box">
                                                        <div className='d-flex gap-3 align-items-center'>
                                                            <img src="/images/mock-19.png" alt="" />
                                                            <h2>{item.username}</h2>
                                                        </div>
                                                        <div>
                                                            <div className="ar_play_middle_top_tag cursor-pointer" onClick={() => { handleUnblock(item.username) }}>
                                                                <a ><img src="/images/playerProfile/btnUser.png" alt="" /></a>
                                                                <div className="ar_play_middle_top_tagText">
                                                                    <p>Unblock</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            })}
                                            {
                                                block_friends && block_friends.length == 0 && <div className='notfound'>
                                                    No data found
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
                                .
                            </div>
                        </div>
                    </div>
                </section>
            </GoldSiverHeader>
        </div>
    )
}

export default BlockList
