import Head from 'next/head';

export default function Home() {

  return (
    <main className="container-fluid top-container">
    <Head>
      <title>Ryan Caloras</title>
      <meta name="description" content="rcaloras.com" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
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
                    <p>{`Software Engineering Leader who builds high performing and diverse teams.
                    I like to start things, build stuff, and help people and organizations grow.
                    Most recently, I worked for Instagram building products like Reels and the Explore tab. `}</p>
                    <p>{`I previously founded a company and have a strong entrepreneurial spirit.
                    I'm a musician at heart and will talk about music for hours.
                     Always have a bag packed for my next adventure.`}</p>
                </section>
                <div className="profile-divider"/>
                <section className="links">
                  <div className="links-header">Around the web</div>
                    <ul className="links-ul list-group list-group-horizontal">
                      <li className="fs-3" title="Resume">
                        <a className="btn btn-secondary" href="https://bit.ly/3ND6RMd" target="_blank" rel="noreferrer"><i className="bi bi-file-person"></i> Resume</a>
                      </li>
                      <li className="fs-2">
                        <a className="icon-primary" title="LinkedIn" href="https://linkedin.com/in/rcaloras" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
                      </li>
                      <li className="fs-2">
                      <a className="icon-primary" title="Instagram" href="https://instagram.com/rccola.vanilla" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
                      </li>
                      <li className="fs-2">
                      <a className="icon-primary" title="Github" href="https://github.com/rcaloras" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a>
                      </li>
                      <li className="fs-2">
                      <a className="icon-primary" title="Stack Overflow" href="https://stackoverflow.com/users/1282124/rccola" target="_blank" rel="noreferrer"><i className="bi bi-stack-overflow"></i></a>
                      </li>
                    </ul>
                </section>
            </div>
        </div>
    </div>
  </main>
  );
}