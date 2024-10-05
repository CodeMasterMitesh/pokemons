import React, { useState } from 'react'
import GoldSiverHeader from './GoldSiverHeader'
import { useSearchParams } from 'react-router-dom'

function Packages() {
    const [params] = useSearchParams()
    const buy = params.get("buy")
    const [selected, setSelected] = useState(buy?buy:'gold')
    const items = {
        gold: [
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
    const [packages,setPackages]=useState(items);

    const hanldeQtyIncrease=(item,index)=>{
        let arr = packages[selected];
        arr[index].qty +=1 
        setPackages({...packages,[selected]:arr})
        
    }
    const hanldeQtyDecrease=(item,index)=>{
        let arr = packages[selected];
        if(arr[index].qty>1){
        arr[index].qty -=1 
            setPackages({...packages,[selected]:arr})
        }
    }
    return (
        <div>
            <GoldSiverHeader previous='/home' />
            <section className="ar_shop_area_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="ar_shop_area">
                                <div className="ar_shop_area_left">
                                    <a onClick={() => setSelected('gold')}>
                                        <div className={`ar_shop_nav_single ${selected == 'gold' ?'':'topup'}`}>
                                            <a ><img src={`images/shop/${selected == 'gold' ? 'gridShop' : 'topUp'}.png`} alt="" /></a>
                                            <a ><p>Gold Shop</p></a>
                                        </div>
                                    </a>
                                    <a onClick={() => setSelected('silver')}>
                                        <div className={`ar_shop_nav_single ${selected == 'silver' ?'':'topup'}`}>
                                            <a ><img src={`images/shop/${selected == 'silver' ? 'gridShop' : 'topUp'}.png`} alt="" /></a>

                                            <a ><p>Silver Shop</p></a>
                                        </div></a>
                                    <a onClick={() => setSelected('vip')}>
                                        <div className={`ar_shop_nav_single ${selected == 'vip' ?'':'topup'}`}>
                                            <a ><img src={`images/shop/${selected == 'vip' ? 'gridShop' : 'topUp'}.png`} alt="" /></a>

                                            <a ><p>Vip</p></a>
                                        </div>
                                    </a>
                                    <a onClick={() => setSelected('topup')}>
                                        <div className={`ar_shop_nav_single ${selected == 'topup' ?'':'topup'}`}>
                                            <a ><img src={`images/shop/${selected == 'topup' ? 'gridShop' : 'topUp'}.png`} alt="" /></a>

                                            <a ><p>Top-up</p></a>
                                        </div>
                                    </a>
                                </div>
                                <div className="ar_shop_area_right">
                                    <div className="ar_shop_item_wrapper">
                                        {packages[selected].map((item,index) => {
                                            return <div className="ar_shop_single_item" key={index}>
                                                <img src="images/shop/item.png" alt="" />
                                                <div className="ar_shop_in_cont">
                                                    <img src="images/shop/item-img.png" alt="" />
                                                    <p>{item.name}</p>
                                                </div>
                                                <div className="ar_shop_bottom_cont">
                                                    <p>{item.amount}</p>
                                                </div>
                                                <div className='button-group'>
                                                <span className='cursor-pointer' onClick={()=>{hanldeQtyIncrease(item,index)}}>+</span>
                                                <span className='qty'>{item.qty}</span>

                                                <span className='cursor-pointer' onClick={()=>{hanldeQtyDecrease(item,index)}}>-</span>
                                                </div>
                                            </div>
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Packages
