import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../components/layout';
import { Bar, Line, Scatter, Bubble } from "react-chartjs-2"
import Chart from 'chart.js/auto';


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
    <>
    <Head>
        <title>Report</title>
    </Head>
    {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      /> */}
      <Line data={data} width={100} height={40} options={options} />

      
    </>
    </Layout>
  );
}
