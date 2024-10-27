import { useDispatch, useSelector } from 'react-redux'
import OnlineTrainers from '../../../view/Component/OnlineTrainers'
import GoldSiverHeader from '../../../view/HomePage/GoldSiverHeader'
import React, { useEffect, useState } from 'react'
import { Card, Table, Form } from 'react-bootstrap'
import { getHouseSell, houseSeller } from '../../../store/other'
import { toast } from 'react-toastify'

function HouseSeller() {
const dispatch = useDispatch();
const house_seller_data = useSelector(state=>state.other.house_seller_data);
const [checked,setChecked]=useState(null);

  useEffect(()=>{
    dispatch(getHouseSell())
  },[])
  const handleBuy=()=>{
    if(checked || checked==0){
      dispatch(houseSeller(house_seller_data[checked]));
    }else{
      toast.warning('Please select one')
    }
  }
  const handleSelect = (index) => {
    setChecked(index)
  }
  return (
    <GoldSiverHeader previous={'/home'} title='House Seller'>
      <div className='container p-2 challenge'>


        <Card border='dark' text='white' className='bg-theme'>
          <Card.Header><h3 className='text-center'> House Seller</h3></Card.Header>

          <Card.Body className='text-center'>
            <h5>Here I have some house models, see which one you like the most.
              You currently have a Mansion.</h5>
          </Card.Body>
        </Card>
        <Card border='dark' text='white' className='bg-theme mt-2'>
          <Card.Body className='overflow-auto'>
            <div className='p-4' style={{ minWidth: '300px' }}>
              <Table striped bordered hover className='table-theme'>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Home</th>
                    <th>Price</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {house_seller_data.map((item, index) => {
                    return <tr key={index} style={{ verticalAlign: 'middle' }} onClick={(e) => { (handleSelect(index)) }}>
                      <td className='text-center'>
                        <Form.Check type='radio' name='check' checked={index == checked} onChange={(e) => { (handleSelect(index)) }} />
                      </td>
                      <td className='text-center'>
                        <img src={`/${item.link}`} alt="" />

                      </td>
                      <td style={{ textAlign: 'center' }}>
                        {item.kosten}
                        <img src="/images/icons/silver.png" alt="" />
                      </td>
                      <td style={{ maxWidth: '200px' }} dangerouslySetInnerHTML={{__html:item.omschrijving_en}}>
                      </td>
                    </tr>
                  })
                  }
                </tbody>
              </Table>
              <div className="register-item-inner6 w-100 mt-4">
                <button className='challenge-button' onClick={handleBuy}>Buy</button>
              </div>
            </div>

          </Card.Body>
        </Card>
        <div >
          <OnlineTrainers />
        </div>
      </div>
    </GoldSiverHeader>

  )
}

export default HouseSeller
