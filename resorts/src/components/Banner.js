import React from 'react'

export default function Banner(props) {
    return (
        <div>
            <section id="section" className={props.class}>{props.children}</section>
        </div>
    )
}
Banner.defaultProps = {
    class:"homebanner"
   }