import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className="title">
        Go to {' '}
        <Link href="/posts/first-post">
          <u><a>production</a></u>
        </Link>
      </h1>
      <h1 className="title">
        Go to {' '}
        <Link href="/posts/first-post">
          <u><a>development</a></u>
        </Link>
      </h1>
      

     
    </div>
  )
}
