import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import data from '../../api/data.json'


const Singlepage = () =>{
  console.log (useParams());
  const{id} = useParams();
  return (
    <div>
      {id}
    </div>
  )
}

export default Singlepage