import React, { useEffect } from 'react'
import GoldSiverHeader from '../HomePage/GoldSiverHeader'
import { useDispatch, useSelector } from 'react-redux'
import {getMailList} from '../../store/chat'

function InBox() {
    const dispatch = useDispatch()
    const mail_list = useSelector(state => state.chat.mail_list)
    useEffect(() => {

        dispatch(getMailList())
    })
    return (
        <div>
            <GoldSiverHeader previous={'/home'} title='Mail List'>
                <section class="ar_work_area_section">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="ar_work_area_main">
                                    <div class="ar_work_area">
                                        <div class="ar_single_item_table_work heading">
                                            <div class="ar_work_single_text text heading">
                                                <p>Mail List</p>
                                            </div>
                                        </div>
                                        <div class="ar_workFlex_wrapper">
                                            {mail_list.map((item) => {
                                                return <div class="ar_single_item_table_work hard w-100">
                                                    <div class="p-5 d-flex justify-content-between w-100 block-box">
                                                        <div className='d-flex gap-3 align-items-center'>
                                                            <img src="images/mock-19.png" alt="" />
                                                            <h2>{item.name}</h2>
                                                        </div>

                                                    </div>

                                                </div>
                                            })}
                                            {
                                                mail_list && mail_list.length == 0 && <div className='notfound'>
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

export default InBox
