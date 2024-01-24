import React from 'react'
import './Background.css'
import InputBox from '../InputBox/InputBox'
import InputList from '../InputLists/InputList'

export default function Background(){
    return(
        <div className='background'>
        <InputBox />
        <InputList />
    </div>
    )
}