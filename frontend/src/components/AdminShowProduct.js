import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';

export default function ShowHero() {
  const [heroData, setHeroData] = useState([])
  const navigate = useNavigate()
  const selectedId = []

  useEffect(() => {
    const getData = async () => {
      await axios.get('/api/v1/products').then(res => {
        console.table(res.data.products)
        setHeroData(res.data.products)
        console.log("hello ji kya hal shal ")
      })
    }
    getData()
  }, [])

  const del = async () => {
    const formData = {
      s_id: JSON.stringify(selectedId)
    }
    const result = await axios.delete(`/api/v1/admin/product/${selectedId[0]}`, formData)
    // console.table('hello world' ,result)
  }

  const editbtn = (item) => {
    navigate('/edit', { state: item })
    console.table(item)
  }

  const setId = (e, id) => {
    if (e.target.checked) {
      // console.log("kuch to check hua ")
      selectedId.push(e.target.value)
      console.log("selected id ", selectedId)
    } else {
      const index = selectedId.indexOf(id);
      selectedId.splice(index, 1)
      console.log("selected id ", selectedId)
    }
  }

  return (
    <div className='flex justify-center flex-col'>
      <Header />
      <div className='bg-fuchsia-700 py-10 px-12 text-white mt-10 mx-28 justify-between space-x-20 flex'>
        <p>DELETE</p>
        <p>PRODUCT NAME</p>
        <p>PRODUCT PRICE</p>
        <p>PRODUCT SELLER</p>
        <p>CREATION DATE</p>
        <p>CATEGORY</p>
        <button onClick={() => del()} className='bg-fuchsia-500 rounded mx-28  px-2'>Delete</button>

      </div>
      {heroData.map((item, index) => {
        return <HeroView item={item} editbtn={editbtn} key={item._id} setId={setId} />
      })}
      <Footer />
    </div>

  )
}
// key={props.item._id}
const HeroView = (props) => {
  return (
    <table class="table-fixed"  >
      <tr>
        <div className='bg-fuchsia-600 w-auto py-2  text-white mx-28 my-1 justify-between  px-10 space-x-20 flex flex-row'>
          <td className=''><input type='checkbox' value={props.item._id} onChange={(e) => props.setId(e, props.item._id)} /></td>
          <td className=''>{props.item.name}</td>
          <td className=''>{props.item.price}</td>
          <td className=''>{props.item.seller}</td>
          <td className=''>{props.item.createdAt}</td>
          <td className=''>{props.item.category}</td>
          <td className=''><button className='bg-fuchsia-500 px-5 rounded-xl ' onClick={() => props.editbtn(props.item)}>edit</button></td>
        </div>
      </tr>
    </table>
  )
}