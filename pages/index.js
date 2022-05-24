import Head from 'next/head';

export default function Home() {
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
        <div className="col-md-4 p-0">
            <div className="body-content">
                <section className="name-headline">
                    <section>
                        <h1 className="name">Ryan Caloras</h1>
                    </section>
                    <section>
                        <p className="headline">Engineering Manager and Entrepreneur in New York</p>
                    </section>
                </section>
                <a className="btn btn-block btn-primary" id="contact-btn" href="mailto:ryan@rcaloras.com?subject=Hello">
                  <i className="bi bi-envelope"/><span className='contact-span'>Get in touch</span>
                </a>
                <section className="bio">
                    <p>Software Engineering Leader who builds exceptionally high performing and diverse teams.
                      I like to start things, build stuff, and help people and organizations grow.
                      I'm passionate about product and love to riff on design and user experience.
                      </p>
                      <p>
                      I previously founded a company and like working on side projects.
                      I'm a musician at heart and will talk about music for hours.
                      Always have a bag packed for my next adventure.</p>
                </section>
                <div className="profile-divider"/>
                <section className="meta">
                  <div className="meta-header">Around the web</div>
                  Resume Instagram.com Gilt.com Bashhub
                </section>
            </div>
        </div>
    </div>
  </main>
  );
}