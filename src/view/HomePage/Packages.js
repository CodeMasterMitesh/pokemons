import React, { useEffect, useState } from 'react'
import GoldSiverHeader from './GoldSiverHeader'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getPackages, getUserInvoice } from '../../store/packages'
import { Table } from 'react-bootstrap'

function Packages() {
    const [params] = useSearchParams()
    const dispatch = useDispatch()
    const buy = params.get("buy")
    const [selected, setSelected] = useState(buy ? buy : 'golds')
    const gold_packages = useSelector(state => state.packages.packages);
    const featured_packages = useSelector(state => state.packages.featuredPackages);
    const user_invoices = useSelector(state => state.packages.userInvoice)
    const items = {
        silver: [
            {
                name: 'item1',
                qty: 1,
                amount: 100
            },
            {
                name: 'item2',
                qty: 1,
                amount: 200
            },
            {
                name: 'item3',
                qty: 1,
                amount: 300
            },
            {
                name: 'item4',
                qty: 1,
                amount: 500
            },
            {
                name: 'item5',
                qty: 1,
                amount: 1000
            },
            {
                name: 'item6',
                qty: 1,
                amount: 2000
            },
            {
                name: 'item7',
                qty: 1,
                amount: 5000
            },
            {
                name: 'item8',
                qty: 1,
                amount: 10000
            },
        ],
        topup: [
            {
                name: 'item1',
                qty: 1,
                amount: 100
            },
            {
                name: 'item2',
                qty: 1,
                amount: 200
            },
            {
                name: 'item3',
                qty: 1,
                amount: 300
            },
            {
                name: 'item4',
                qty: 1,
                amount: 500
            },
            {
                name: 'item5',
                qty: 1,
                amount: 1000
            },
            {
                name: 'item6',
                qty: 1,
                amount: 2000
            },
            {
                name: 'item7',
                qty: 1,
                amount: 5000
            },
            {
                name: 'item8',
                qty: 1,
                amount: 10000
            },
        ],
        vip: [
            {
                name: 'item1',
                qty: 1,
                amount: 10
            },
            {
                name: 'item2',
                qty: 1,
                amount: 20
            },
            {
                name: 'item3',
                qty: 1,
                amount: 30
            },
            {
                name: 'item4',
                qty: 1,
                amount: 50
            },
            {
                name: 'item5',
                qty: 1,
                amount: 100
            },
        ],

    }
    const [packages, setPackages] = useState(items);

    const hanldeQtyIncrease = (item, index) => {
        let arr = packages[selected];
        arr[index].qty += 1
        setPackages({ ...packages, [selected]: arr })

    }
    const hanldeQtyDecrease = (item, index) => {
        let arr = packages[selected];
        if (arr[index].qty > 1) {
            arr[index].qty -= 1
            setPackages({ ...packages, [selected]: arr })
        }
    }
    useEffect(() => {
        dispatch(getPackages())
        dispatch(getUserInvoice())

    }, [])
    return (
        <div>
            <GoldSiverHeader previous='/home' title='Packages'>
                <section className="ar_shop_area_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="ar_shop_area">
                                    <div className="ar_shop_area_left">
                                        <a onClick={() => setSelected('golds')}>
                                            <div className={`ar_shop_nav_single ${selected == 'golds' ? '' : 'topup'}`}>
                                                <a ><img src={`images/shop/${selected == 'golds' ? 'gridShop' : 'topUp'}.png`} alt="" /></a>
                                                <a ><p>Gold Shop</p></a>
                                            </div>
                                        </a>
                                        <a onClick={() => setSelected('silvers')}>
                                            <div className={`ar_shop_nav_single ${selected == 'silvers' ? '' : 'topup'}`}>
                                                <a ><img src={`images/shop/${selected == 'silvers' ? 'gridShop' : 'topUp'}.png`} alt="" /></a>

                                                <a ><p>Silver Shop</p></a>
                                            </div></a>
                                        <a onClick={() => setSelected('vip')}>
                                            <div className={`ar_shop_nav_single ${selected == 'vip' ? '' : 'topup'}`}>
                                                <a ><img src={`images/shop/${selected == 'vip' ? 'gridShop' : 'topUp'}.png`} alt="" /></a>

                                                <a ><p>Vip</p></a>
                                            </div>
                                        </a>
                                        <a onClick={() => setSelected('topup')}>
                                            <div className={`ar_shop_nav_single ${selected == 'topup' ? '' : 'topup'}`}>
                                                <a ><img src={`images/shop/${selected == 'topup' ? 'gridShop' : 'topUp'}.png`} alt="" /></a>
                                                <a ><p>Top-up </p></a>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="ar_shop_area_right">
                                        <div className="ar_shop_item_wrapper p-5">

                                            {(selected == 'golds' || selected == 'silvers') && gold_packages?.map((item, index) => {
                                                return item[selected] != 0 && <div className={`ar_shop_single_item packages`} key={index}>
                                                    <img src="/images/shop/item.png" alt="" />
                                                    <div className="ar_shop_in_cont">
                                                        <img src="/images/shop/item-img.png" alt="" />
                                                        <p>{item.naam}</p>
                                                    </div>
                                                    <div className="ar_shop_bottom_cont">
                                                        <p>{item[selected]}</p>
                                                    </div>
                                                    {selected == 'silvers' && <div className='silver'>
                                                        <img src="/images/mock-05.png" alt="" />
                                                    </div>}
                                                    <div className='button-group'>
                                                        {/* <span className='cursor-pointer' onClick={() => { hanldeQtyIncrease(item, index) }}>+</span> */}
                                                        <span className='qty'>{item.value}</span>

                                                        {/* <span className='cursor-pointer' onClick={() => { hanldeQtyDecrease(item, index) }}>-</span> */}
                                                    </div>
                                                </div>
                                            })
                                            }
                                            {(selected !== 'golds' && selected !== 'silvers') && packages[selected].map((item, index) => {
                                                return <div className="ar_shop_single_item" key={index}>
                                                    <img src="/images/shop/item.png" alt="" />
                                                    <div className="ar_shop_in_cont">
                                                        <img src="/images/shop/item-img.png" alt="" />
                                                        <p>{item.name}</p>
                                                    </div>
                                                    <div className="ar_shop_bottom_cont">
                                                        <p>{item.amount}</p>
                                                    </div>
                                                    <div className='button-group'>
                                                        <span className='cursor-pointer' onClick={() => { hanldeQtyIncrease(item, index) }}>+</span>
                                                        <span className='qty'>{item.qty}</span>

                                                        <span className='cursor-pointer' onClick={() => { hanldeQtyDecrease(item, index) }}>-</span>
                                                    </div>
                                                </div>
                                            })}
                                            {featured_packages.length && <h1 className='w-100 mb-2 text-light text-center'>Featured Packages</h1>}
                                            {(selected == 'golds' || selected == 'silvers') && featured_packages?.map((item, index) => {
                                                return item[selected] != 0 && <div className={`ar_shop_single_item packages`} key={index}>
                                                    <img src="/images/shop/item.png" alt="" />
                                                    <div className="ar_shop_in_cont">
                                                        <img src="/images/shop/item-img.png" alt="" />
                                                        <p>{item.naam}</p>
                                                    </div>
                                                    <div className="ar_shop_bottom_cont">
                                                        <p>{item[selected]}</p>
                                                    </div>
                                                    {selected == 'silvers' && <div className='silver'>
                                                        <img src="/images/mock-05.png" alt="" />
                                                    </div>}
                                                    <div className='button-group'>
                                                        {/* <span className='cursor-pointer' onClick={() => { hanldeQtyIncrease(item, index) }}>+</span> */}
                                                        <span className='qty'>{item.value}</span>

                                                        {/* <span className='cursor-pointer' onClick={() => { hanldeQtyDecrease(item, index) }}>-</span> */}
                                                    </div>
                                                </div>
                                            })
                                            }
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='container'>
                    <div className="ar_myProfile_single_item2">
                        <div className="ar_myProfile_sinle_title">
                            <p className='settings-anchor d-flex justify-content-between'> <span ><img src="/images/myAccount/shap.png" alt="" />Last 10 transactions</span></p>
                        </div>
                        <Table >
                            <thead>
                                <tr>
                                    <td>#</td>
                                    <td>Package</td>
                                    <td>Price</td>
                                    <td>Date</td>
                                    <td>Status</td>
                                </tr>
                            </thead>
                            <tbody>
                                {user_invoices.map((item, index) => {
                                    return <tr>
                                        <td>{index + 1}</td>
                                        <td>{item.pack_name}</td>
                                        <td>{item.amount}</td>
                                        <td>{item.date}</td>
                                        <td>{item.status}</td>
                                    </tr>
                                })}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </GoldSiverHeader>
        </div>
    )
}

export default Packages
