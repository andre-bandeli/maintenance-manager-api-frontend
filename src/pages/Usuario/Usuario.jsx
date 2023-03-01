import React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {fetchUserData} from '../../axios/authService';

import './usuario.scss'
import MenuLateral from '../../components/menuLateral/MenuLateral'

export default function Usuario() {

  const dispatch=useDispatch();
  const [loading,setLoading]=useState(false);
  const [data,setData]=useState({});

  React.useEffect(()=>{
      fetchUserData().then((response)=>{
          setData(response.data);
      }).catch((e)=>{
          localStorage.clear();
      })
  },[])


  return (
    <div className='usuario'>
      <div className="containerUsuario">
        <MenuLateral/>
        <div className="containerList">
          <h1>Olá {data && `${data.firstName} ${data.lastName}`}</h1>
        
        </div>
      </div>
    </div>
  )
}
