import React from 'react'
import { styles } from '../util/style'
import { clients } from '../util/constants'
import ClientCard from './ClientCard'

const Client = () => {
  return (
    <div className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map(client=>(
        <ClientCard key={client.id} logo={client.logo}/>
      ))}
    </div>
    </div>
  )
}

export default Client
