import { timestempToRelative } from '../../Helper'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getFriendRequest, getFriends } from '../../store/friends';
import { getChat, sendChat } from '../../store/chat';
import { getUsers } from '../../store/auth';
import { useTranslation } from 'react-i18next';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import moment from 'moment';

function Chat() {
    const [usersTab, setUsersTab] = useState('friendList');
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const all_chat = useSelector(state => state.chat.all_chat);
    const [message, setMessage] = useState('')
    const online_users = useSelector(state => state.auth.online_users);
    const friends = useSelector(state => state.friend.friends);
    const online_friend_count = useSelector(state => state.friend.online_friend_count);
    const online_user_count = useSelector(state => state.auth.online_user_count);
    const user_data = useSelector(state => state.auth.user_data)
    const handleUsersTab = (name) => {
        setUsersTab(name)
    }
    const getData = async () => {
        try {
            setInterval(() => {
                try {
                    // dispatch(getChat()).unwrap();
                } catch (error) {

                }
            }, 5000);
            await dispatch(getUsers()).unwrap();
            await dispatch(getFriends()).unwrap();

            // await dispatch(getFriendRequest()).unwrap();
        } catch (error) {
        }
    }
    const handleSubmit = async () => {
        const data = {
            name: user_data.username,
            msg: message,
            admin: false
        }
        await dispatch(sendChat(data)).unwrap()
        setMessage('')
        dispatch(getChat())
    }
    const handleEnter = (e) => {
        if (e.charCode == 13) {
            handleSubmit();
        }
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        // attack/attack_map
        <section className="mock-area pt-0">
            <div className="container">
                <div className="mock-item3">
                    <div className="mock-item3-inner">

                        <div className="mock-item3-inner2">
                            <ul>
                                <li>{t('friends')} <span>{online_friend_count}</span><strong>/{friends?.length}</strong></li>
                                <li>{t('online')} <span>{online_user_count}</span></li>
                            </ul>
                        </div>
                        <div className="mock-item3-inner3">
                            <ul>
                                <li><a className={(usersTab == 'friendList' ? 'usertab-active' : 'usertab') + ' cursor-pointer'} onClick={() => { handleUsersTab('friendList') }}>{t('friendList')}</a></li>
                                <li><a className={(usersTab == 'all' ? 'usertab-active' : 'usertab') + ' cursor-pointer'} onClick={() => { handleUsersTab('all') }}>{t('all')}</a></li>
                            </ul>
                        </div>
                        <div className="mock-item3-inner4">
                            {usersTab == 'friendList' && friends?.map((item, i) => (
                                <div key={i} className="mock-item3-inner5">
                                    <div className="mock-item3-inner6">
                                        {/* <p><img src={i % 2 === 0 ? "images/mock-14.png" : "images/mock-15.png"} alt="" /> {i % 2 === 0 ? t('user1') : t('user2')}</p> */}
                                        <p><img src="images/mock-14.png" alt="" /> {item.friend_name}</p>
                                    </div>
                                    <div className="mock-item3-inner7">
                                        {/* <h2>{i % 2 === 0 ? <strong>{t('hebrewText')}</strong> : t('timeAgo')}</h2> */}
                                        <h2>{item.online_status}</h2>
                                    </div>
                                </div>
                            ))}
                            {usersTab == 'friendList' && friends?.length == 0 && <div className='notfound'>
                                No data found
                            </div>}
                            {usersTab == 'all' && online_users?.length == 0 && <div className='notfound'>
                                No data found
                            </div>}
                            {usersTab == 'all' && online_users?.map((item, i) => (
                                <div key={i} className="mock-item3-inner5">
                                    <div className="mock-item3-inner6">
                                        {/* <p><img src={i % 2 === 0 ? "images/mock-14.png" : "images/mock-15.png"} alt="" /> {i % 2 === 0 ? t('user1') : t('user2')}</p> */}
                                        <p><img src="images/mock-14.png" alt="" /> {item.username}</p>
                                    </div>
                                    <div className="mock-item3-inner7">
                                        {/* <h2>{i % 2 === 0 ? <strong>{t('hebrewText')}</strong> : t('timeAgo')}</h2> */}
                                        {/* <h2>{item.online_status}</h2> */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mock-item3-inner9">
                        <div className="mock-item3-inner10">
                            <div className="mock-item3-inner4">
                                <div className='chat-input d-flex'>
                                    <Form.Control
                                        type="text"
                                        id="inputPassword5"
                                        value={message}
                                        onChange={(e) => { setMessage(e.target.value) }}
                                        aria-describedby="passwordHelpBlock"
                                        onKeyPress={handleEnter}
                                    />
                                    <Button variant="primary" onClick={handleSubmit}>Send</Button>
                                </div>
                                {/* Repeating Sections */}
                                {all_chat.map((item, index) => (
                                    <div key={index} className="mock-item3-inner11">
                                        <h2 className='d-flex justify-content-between ml-2'> <span>{item.posted}</span>
                                            <span>{item.name}</span>
                                        </h2>
                                        <p>{item.msg}</p>
                                        <img src="images/mock-19.png" alt="" />
                                    </div>
                                ))}

                                {/* Challenge Section */}
                                {/* <div className="mock-item3-inner12">
                            <div>
                                <h2>
                                    <strong>{t('challengeText', { user: t('user2') })}</strong>
                                </h2>
                            </div>
                            <div>
                                <p>{t('ignore')}<span>{t('accept')}</span></p>
                            </div>
                        </div> */}

                                {/* Go Back Section */}

                                {/* <div className="mock-item3-inner13">
                            <div>
                                <p>{t('goBack')}</p>
                            </div>
                            <div>
                                <img src="images/mock-18.png" alt="" />
                            </div>
                        </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Chat
