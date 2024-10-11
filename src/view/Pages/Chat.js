import { timestempToRelative } from '../../Helper'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getFriendRequest, getFriends } from '../../store/friends';
import { getChat } from '../../store/chat';
import {  getUsers } from '../../store/auth';
import { useTranslation } from 'react-i18next';


function Chat() {
    const [usersTab, setUsersTab] = useState('friendList');
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const all_chat = useSelector(state => state.chat.all_chat);
    const online_users = useSelector(state => state.auth.online_users);
    const friends = useSelector(state => state.auth.friends);

    const handleUsersTab=(name)=>{
        setUsersTab(name)
    }
    const getData=async ()=>{
        try {
            await dispatch(getUsers()).unwrap();
            await dispatch(getFriends()).unwrap();
            await dispatch(getFriendRequest()).unwrap();
            // await dispatch(getChat()).unwrap();
        } catch (error) {
        }
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    
    <section className="mock-area pt-0">
    <div className="container">
        <div className="mock-item3">
            <div className="mock-item3-inner">

                <div className="mock-item3-inner2">
                    <ul>
                        <li>{t('friends')} <span>1</span><strong>/{friends.length}</strong></li>
                        <li>{t('online')} <span>{online_users.length}</span></li>
                    </ul>
                </div>
                <div className="mock-item3-inner3">
                    <ul>
                        <li><a className={(usersTab =='friendList'? 'usertab-active':'usertab')+ ' cursor-pointer'} onClick={()=>{handleUsersTab('friendList')}}>{t('friendList')}</a></li>
                        <li><a  className={(usersTab =='all'? 'usertab-active':'usertab') + ' cursor-pointer'} onClick={()=>{handleUsersTab('all')}}>{t('all')}</a></li>
                    </ul>
                </div>
                <div className="mock-item3-inner4">
                    {(usersTab =='friendList'?friends:online_users).map((item, i) => (
                        <div key={i} className="mock-item3-inner5">
                            <div className="mock-item3-inner6">
                                {/* <p><img src={i % 2 === 0 ? "images/mock-14.png" : "images/mock-15.png"} alt="" /> {i % 2 === 0 ? t('user1') : t('user2')}</p> */}
                                <p><img src="images/mock-14.png" alt="" /> {item.username}</p>
                            </div>
                            <div className="mock-item3-inner7">
                                {/* <h2>{i % 2 === 0 ? <strong>{t('hebrewText')}</strong> : t('timeAgo')}</h2> */}
                                <h2>{timestempToRelative(item.online)}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mock-item3-inner9">
                <div className="mock-item3-inner10">
                    <div className="mock-item3-inner4">
                        {/* Repeating Sections */}
                        {all_chat.map((item, index) => (
                            <div key={index} className="mock-item3-inner11">
                                <h2>{item.name}</h2>
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
                        <div className="mock-item3-inner13">
                            <div>
                                <p>{t('goBack')}</p>
                            </div>
                            <div>
                                <img src="images/mock-18.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Chat
