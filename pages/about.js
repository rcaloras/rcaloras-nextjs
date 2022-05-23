import Head from 'next/head';

export default function About() {
    return (
      <main className="container-fluid top-container">
        <Head>
          <title>Ryan Caloras</title>
          <meta name="description" content="rcaloras.com" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <div className="image hero-image"></div>
      </main>
    );
  }