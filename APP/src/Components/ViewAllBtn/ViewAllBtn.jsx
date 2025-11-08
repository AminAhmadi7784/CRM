import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
import './ViewAllBtn.css'

export default function ViewAllBtn(props) {
    return (
        <>
            <Link to={props.to} className='workload__header-link'>{props.title}  <IoIosArrowBack /></Link>
        </>
    )
}
