import React from 'react'
import { Card } from 'react-bootstrap'
import DOMPurify from 'dompurify';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';

function PokemonProfile({ data }) {
  const navigate = useNavigate()
  const sanitizeHtml = (html) => DOMPurify.sanitize(html);
  return (
    <div className='w-100' style={{ minWidth: '350px', zIndex: 1000 }}>
      <Card color='text' bg='dark' >
        <Card.Header><h5 className='text-center text-white'><span className='cursor-pointer' onClick={()=>{navigate(`/character?id=${data.id}`)}}>&#9432;</span> #{data.real_id} {data.naam}</h5></Card.Header>
        <Card.Header> <div className='text-white'>
          <Stack direction="horizontal" gap={2} className='d-flex justify-content-center'>

            {data.type1 && <Badge bg="warning" className='poke-profile-badges' style={{ borderRadius: '5px !important' }}>
              {data.type1}
            </Badge>}
            {data.type2 && <Badge bg="danger" className='poke-profile-badges' style={{ borderRadius: '5px !important' }}>
              {data.type2}
            </Badge>}
          </Stack>
        </div>
        </Card.Header>
        <Card.Body className='text-center text-white'>
          <Table striped variant='dark'>
            <tbody>
              <tr>
                <th className='text-start'>ID : {data.id}</th>
                <td rowSpan={5} style={{verticalAlign:'middle'}}>
                    <img src={`/images/pokemon/${data.wild_id}.gif`} alt="" />
                </td>
                <td>
                  <img src={`/images/icons/stats/stat_hp.png`} alt="" />
                </td>
                <td rowSpan={4}></td>
                <img src={`/images/icons/stats/stat_at.png`} alt="" />
                <td rowSpan={4}></td>
                <td>
                  <img src={`/images/icons/stats/stat_de.png`} alt="" />
                </td>
              </tr>
              <tr>
                <th className='text-start'>Nickname : {data.naam}</th>
                <td>
                  {data.leven}
                </td>
                <td>{data.attack}</td>
                <td>{data['spc.defence']}</td>
              </tr>
              <tr>
                <th className='text-start'>Mood : {data.karakter}</th>
                <img src={`/images/icons/stats/stat_sa.png`} alt="" />
                <td>
                  <img src={`/images/icons/stats/stat_sd.png`} alt="" />
                </td>
                <td>
                  <img src={`/images/icons/stats/stat_sp.png`} alt="" />
                </td>
              </tr>
              <tr>
                <th className='text-start'>Negotiable : Negotiable </th>
                <td>{data['spc.attack']}</td>
                <td>{data['spcdefence']}</td>
                <td>{data['speed']}</td>
              </tr>
              <tr>
                <th className='text-start'>Total power : {data.trade}</th>
                <td >
                  <img src={`/images/items/Protein.png`} alt="" height={20} width={20} />
                </td>
                <td>
                  <img src={`/images/items/Iron.png`} alt="" height={20} width={30} />
                </td>
                <td>
                  <img src={`/images/items/Carbos.png`} alt="" height={20} width={20} />
                </td>
                <td>
                  <img src={`/images/items/HP up.png`} alt="" height={20} width={30} />
                </td>
                <td>
                  <img src={`/images/items/Calcium.png`} alt="" height={20} width={20} />
                </td>
              </tr>
              <tr>
                <th colSpan={2}>
                  <div className='d-flex justify-content-center gap-3'>
                    <a href="" className='text-decoration-none text-white'>Natural Gift</a> |
                    <a href="" className='text-decoration-none text-white'>Punishment</a>
                  </div>
                  <div className='d-flex justify-content-center gap-3'>
                    <a href="" className='text-decoration-none text-white'>Future Sight </a> |
                    <a href="" className='text-decoration-none text-white'>Sky Attack</a>
                  </div>
                </th>
                <td>{data.has_calc}</td>
                <td>{data.hp_up}</td>
                <td>{data.hp_up}</td>
                <td>{data.hp_up}</td>
                <td>{data.has_calc}</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  )
}

export default PokemonProfile
