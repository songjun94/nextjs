import React from 'react'
import { useRouter } from 'next/router'

const ClientPhonePage = () => {
    const router = useRouter();
    console.log('clientDetailPage', router.query);
    
    return (
    <div>ClientPhonePage</div>
  )
}

export default ClientPhonePage