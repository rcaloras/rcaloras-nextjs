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
        <div className="row flex-fill vh-100">
            <div className="col-md-8 p-0">
                <div className="hero-image"/>
            </div>
            <div className="col-md-4">
                <div className="body-content">
                    <section className="name-headline">
                        <section>
                            <h1 className="name">Ryan Caloras</h1>
                        </section>
                        <section>
                            <p className='headline'>Engineering Manager and Entrepreneur in New York</p>
                        </section>
                        <div className="profile-divider"/>
                    </section>
                    <section className="bio">
                        <p>Full time jump shooter, entrepreneur, and hacker. I like to start things, and build stuff.
                                I'm a musician at heart and will talk about music for hours.
                                Always have a bag packed for my next adventure.</p>
                    </section>
                </div>
            </div>
        </div>
      </main>
    );
  }