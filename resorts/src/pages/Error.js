import React from 'react'
import Banner from '../components/Banner'
import Box from '../components/Box'

export default function Error() {
    return (
        <div>
         <Banner>
         <Box title="Error 404" subtitle="Page Not Found" link="/" />
         </Banner>
        </div>
    )
}
