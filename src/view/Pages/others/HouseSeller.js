import OnlineTrainers from '../../../view/Component/OnlineTrainers'
import GoldSiverHeader from '../../../view/HomePage/GoldSiverHeader'
import React, { useState } from 'react'
import { Card, Table, Form } from 'react-bootstrap'

function HouseSeller() {

  const [data, setData] = useState([
    {
      name: "Cardboard Box",
      price: '500',
      description: 'An extremely simple box. It can hold up to 2 Pokémon.',
      img: 'house1.png',
      checked: false
    },
    {
      name: "Small House",
      price: '3000',
      description: 'A very popular house among beginner trainers. It can hold up to 20 Pokémon.',
      img: 'house2.gif',
      checked: false

    },
    {
      name: "Normal House",
      price: '30000',
      description: ' A beautiful house with a garden and a pond with fish, your Pokémon will love it. It can accommodate up to 100 Pokémon.',
      img: 'house3.gif',
      checked: false

    },
    {
      name: "Mansion",
      price: '80000',
      description: 'A huge property with open fields and a beautiful garden with majestic lakes. It can accommodate up to 2,500 Pokémon.',
      img: 'house4.gif',
      checked: false

    },
  ])
  const handleSelect = (e, index) => {
    setData((prev) => {
      let item = prev[index];
      item.checked = e;
      return prev;
    })
  }
  return (
    <GoldSiverHeader previous={'/home'} title='House Seller'>
      <div className='container p-5 challenge'>


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
                  {data.map((item, index) => {
                    return <tr key={index} style={{ verticalAlign: 'middle' }} onClick={(e) => { (handleSelect(!item.checked, index)) }}>
                      <td className='text-center'>
                        <Form.Check type='radio' checked={item.checked} onChange={(e) => { (handleSelect(e.target.checked, index)) }} />
                      </td>
                      <td className='text-center'>
                        <img src={`/images/${item.img}`} alt="" />

                      </td>
                      <td style={{ textAlign: 'center' }}>
                        {item.price}
                        <img src="/images/icons/silver.png" alt="" />
                      </td>
                      <td style={{ maxWidth: '200px' }}>
                        The <b>{item.name}.</b> {item.description}
                      </td>
                    </tr>
                  })
                  }
                </tbody>
              </Table>
              <div className="register-item-inner6 w-100 mt-4">
                <button className='challenge-button'>Buy</button>
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
