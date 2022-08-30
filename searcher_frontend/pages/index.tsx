import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Link href={"/search"}>search</Link>
    </div>
  )
}

export default Home
