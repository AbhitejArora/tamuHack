import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import Layout from '../components/layout';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>SafeOR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <img src= "images/logo.jpg" />
      <p class="text-[#5CC3C6] text-6xl mt-20 mb-5">Welcome to SafeOR!</p>
      <Link href="/report">
        <button class="bg-[#5CC3C6] text-white font-bold py-2 px-4 rounded-full mb-5">
          View Report
        </button>
      </Link>

      {/* <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
         
        </div> */}

    </div>
  )
}
