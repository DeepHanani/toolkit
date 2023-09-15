import React from 'react'
import  { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { fetchUsers } from './Slice/UserSlice';

export default function Users() {

   const item =  useSelector(y=>y.user.data);

   const dis = useDispatch();

   useEffect(()=>{
    
      dis(fetchUsers())

   },[])

   console.log(item)
  return (
    <div>
      
    </div>
  )
}
