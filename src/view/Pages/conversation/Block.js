import { blockFriend, getBlockList, unblockFriend } from '../../../store/friends'
import React, { useEffect, useState } from 'react'
import { Table, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

function Block() {
    const [trainer, setTrainer] = useState('')
    const block_friends = useSelector(state => state.friend.block_friend_list)
    const handleUnblock = async (name) => {
        await dispatch(unblockFriend(name)).unwrap()
        dispatch(getBlockList())
    }

    const dispatch = useDispatch()
    const handleBlock = async() => {
        await dispatch(blockFriend(trainer)).unwrap()
        dispatch(getBlockList())
    }
    useEffect(() => {
        dispatch(getBlockList())
    }, [])
    return (
        <div>
            <h1 className='text-center'>Block Trainer</h1>
            <div>
                <div>
                    <Form.Control type="text" value={trainer} placeholder="Trainer" onChange={(e) => setTrainer(e.target.value)} />
                </div>
                <div>
                    <div className="register-item-inner6 w-100 mt-4">
                        <button className='block-button' onClick={handleBlock}>Block</button>
                    </div>
                </div>
            </div>

            <div className='overflow-auto'>
                <Table className='mt-5'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th >Trainer</th>
                            <th >Status</th>
                            <th className='text-center'>Unblock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {block_friends.map((item, index) => {
                            return <tr className='vertical-align-middle'>
                                <td>{index + 1}</td>
                                <td>{item.username}</td>
                                <td><img src="/images/icons/status_offline.png" alt="" />Offline</td>
                                <td>
                                    <div className="register-item-inner6 w-100">
                                        <button className='unblock-button' onClick={()=>{handleUnblock(item.username)}}>Unblock</button>
                                    </div>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Block
