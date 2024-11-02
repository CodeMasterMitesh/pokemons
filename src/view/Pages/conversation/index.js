import { useDispatch } from 'react-redux'
import GoldSiverHeader from '../../HomePage/GoldSiverHeader'
import React, { useState } from 'react'
import Message from './Message'
import NewConversation from './NewConversation'
import Block from './Block'
import Conversation from './Conversation'

function ConversationIndex() {
    const [selected, setSelected] = useState('Message')
    const components = {
        Message: Message,
        Conversation: Conversation,
        NewConversation: NewConversation,
        Block: Block,
    };
    const renderComponent=()=>{
        const Compo = components[selected]
        return <Compo/>
    }
    return (
        <div>
            <GoldSiverHeader previous='/home' title='Message Box'>
                <section className="ar_shop_area_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="ar_shop_area">
                                    <div className="ar_shop_area_left">
                                        <a onClick={() => setSelected('Message')}>
                                            <div className={`ar_shop_nav_single ${selected == 'Message' ? '' : 'topup'}`}>
                                                <a ><img src={`images/shop/${selected == 'Message' ? 'gridShop' : 'topUp'}.png`} alt="" /></a>
                                                <a ><p>Official Message</p></a>
                                            </div>
                                        </a>
                                        <a onClick={() => setSelected('Conversation')}>
                                            <div className={`ar_shop_nav_single ${selected == 'Conversation' ? '' : 'topup'}`}>
                                                <a ><img src={`images/shop/${selected == 'Conversation' ? 'gridShop' : 'topUp'}.png`} alt="" /></a>

                                                <a ><p>Conversation</p></a>
                                            </div></a>
                                        <a onClick={() => setSelected('NewConversation')}>
                                            <div className={`ar_shop_nav_single ${selected == 'NewConversation' ? '' : 'topup'}`}>
                                                <a ><img src={`images/shop/${selected == 'NewConversation' ? 'gridShop' : 'topUp'}.png`} alt="" /></a>

                                                <a ><p>New Conversation</p></a>
                                            </div>
                                        </a>
                                        <a onClick={() => setSelected('Block')}>
                                            <div className={`ar_shop_nav_single ${selected == 'Block' ? '' : 'topup'}`}>
                                                <a ><img src={`images/shop/${selected == 'Block' ? 'gridShop' : 'topUp'}.png`} alt="" /></a>
                                                <a ><p>Block</p></a>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="ar_work_area_main overflow-auto" style={{flexGrow:1}} >
                                        <div className="ar_work_area" style={{minHeight:'400px'}}>
                                            {renderComponent()}
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

export default ConversationIndex
