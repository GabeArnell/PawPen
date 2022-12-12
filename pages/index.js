import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {DogList} from "../src/ui-components"


export default function Home() {
  return (
    <div className={styles.container}>
      <body >
        <h1>
          Explore your local area to find the perfect puppy play partner!
        </h1>
        <DogList className='Cloudy'/>
      </body>
    </div>
  )
}
