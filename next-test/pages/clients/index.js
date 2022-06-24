import React from 'react'
import Link from 'next/link'

const Clientpage = () => {
    const client = [
        {id: 'yoo', name: 'yoojaesuk'},
        {id:'kang', name: 'kanghdong'}
    ]
  return (
    <>
        <div>Clientpage</div>
        <ul>
            {client.map(client => (
                <li key={client.id}>
                    <Link href={{ pathname: '/clients/[name]',
                    query: {name: client.name}
                }}>{client.name}</Link>
                </li>
            ))}
        </ul>


    </>
    )
}

export default Clientpage