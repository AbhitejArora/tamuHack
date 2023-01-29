import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../components/layout';
import { Bar, Line, Scatter, Bubble } from "react-chartjs-2"
import Chart from 'chart.js/auto';
import styles from '../styles/Home.module.css';


const data = {
  labels: ["Jan", "Feb" , "March", "April"],
  datasets: [
    {
      data: [3,5,6,7],
    },
  ],
};


const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  elements: {
    line: {
      tension:0,
      borderWidth: 2,
      borderColor: "rgba(47,97,68,1)",
      fill: "start",
      backgroundColor: "rgba(47,97,68,0.3)",
    },
    point: {
      radius: 0,
      hitRadius: 0,
    },
  },
  scales: {
    xAxis: {
      display: false,
    },
    yAxis: {
      display: false,
    },
  },
};

export default function Report() {
  return (
    <Layout>
      
    
    <Head>
        <title>Report</title>
    </Head>  

      
          <div className={styles.containerText}>
       
            <h3 className="text-3xl font-bold underline">Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </div>

          <Line data={data} width={100} height={40} options={options} />

    
    </Layout>
  );
}
