
import Head from 'next/head';
import OSCECase from './OSCECase';

export default function Home() {
  return (
    <>
      <Head>
        <title>AMC OSCE Simulator</title>
      </Head>
      <OSCECase />
    </>
  );
}
