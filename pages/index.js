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
                <div className="profile-divider"/>
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
                <section className="links">
                  <div className="links-header">Around the web</div>
                    <ul className="links-ul list-group list-group-horizontal">
                      <li className="fs-3" title="Resume">
                        <a className="btn btn-outline-primary" href="https://bit.ly/3ND6RMd" target="_blank"><i className="bi bi-file-person"></i> Resume</a>
                      </li>
                      <li className="fs-2">
                        <a className="" title="LinkedIn" href="https://linkedin.com/in/rcaloras" target="_blank"><i class="bi bi-linkedin"></i></a>
                      </li>
                      <li className="fs-2">
                      <a className="" title="Github" href="https://github.com/rcaloras" target="_blank"><i class="bi bi-github"></i></a>
                      </li>
                    </ul>
                </section>
            </div>
        </div>
    </div>
  </main>
  );
}