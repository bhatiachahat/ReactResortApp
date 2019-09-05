import React from 'react'
import {Link} from 'react-router-dom'

export default function Box(props) {
    return (
        <div className="box">
            <h1 id="heading">{props.title}</h1>
            <p>{props.subtitle}</p>
        <div> <Link to={props.link} className="button">{props.linkname}</Link></div>
        </div>
    )
}
