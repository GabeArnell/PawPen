import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {DogList,DogsCreateForm} from "../src/ui-components"


export default function Home() {
  return (
    <div className={styles.container}>
      <body >
        <h1>
          Pop-in and introduce your dog!
        </h1>
        <DogsCreateForm className="DogForm"/>
      </body>
    </div>
  )
}
