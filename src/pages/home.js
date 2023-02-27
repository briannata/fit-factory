function Home() {
  return (
    <div className="App">
        <header id="header" className="header fixed-top" data-scrollto-offset="0">
        <div className="container-fluid d-flex align-items-center justify-content-between">

          <a href="/" className="logo d-flex align-items-center scrollto me-auto me-lg-0">
            <img src="./logo.png" className="logo" alt=""></img>
          </a>

          <nav id="navbar" className="navbar">
            <ul>

              <li><a className="nav-link scrollto" href="#about">About</a></li>
              <li><a className="nav-link scrollto" href="/sign-in">Sign In</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle d-none"></i>
          </nav>

          <a className="btn-getstarted scrollto" href="/sign-up">Get Started</a>

        </div>
      </header>

      <section id="hero-animated" className="hero-animated d-flex align-items-center">
        <div className="container d-flex flex-column justify-content-center align-items-center text-center position-relative" data-aos="zoom-out">
          <img src="assets/img/fashion.png" className="img-fluid animated"></img>
          <h2>Welcome to <span>Fit Factory!</span></h2>
          <p>This web app will analyze what clothes you most and least frequently wear.</p>
          <div className="d-flex">
            <a href="/sign-up" className="btn-get-started scrollto">Get Started</a>
          </div>
        </div>
      </section>

      <main id="main">

        <section id="featured-services" className="featured-services">
          <div className="container">

            <div className="row gy-4">

              <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
                <div className="service-item position-relative">
                  <div className="icon"><i className="bi bi-activity icon"></i></div>
                  <h4><a href="" className="stretched-link">Analytics</a></h4>
                  <p>This app will give you a report of the top 3 and bottom 3 clothing items you wear per month.</p>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out" data-aos-delay="200">
                <div className="service-item position-relative">
                  <div className="icon"><i className="bi bi-bounding-box-circles icon"></i></div>
                  <h4><a href="" className="stretched-link">Easy to Start</a></h4>
                  <p>All you have to do is sign up for an account and enter in descriptions and pictures of your clothes. It's as easy as that!</p>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out" data-aos-delay="400">
                <div className="service-item position-relative">
                  <div className="icon"><i className="bi bi-calendar4-week icon"></i></div>
                  <h4><a href="" className="stretched-link">Quick Process</a></h4>
                  <p>To log your outfit, all you have to do is scan the QR code on your hanger and it'll update automatically.</p>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out" data-aos-delay="600">
                <div className="service-item position-relative">
                  <div className="icon"><i className="bi bi-broadcast icon"></i></div>
                  <h4><a href="" className="stretched-link">Privacy</a></h4>
                  <p>We don't share your data with anyone! Your outfit choices and clothing items are safe with us.</p>
                </div>
              </div>

            </div>

          </div>
        </section>

        <section id="about" className="about">
          <div className="container" data-aos="fade-up">

            <div className="section-header">
              <h2>About Me</h2>
              <p>Hello there! I'm Brianna Ta, a Computer Science student studying at UNC Chapel Hill. I love making websites and personal projects that help solve problems in today's world. With the fashion industry generating an estimated 92 million tons of textile waste annually, I wanted to create a project that would help people identify what clothes they least frequently (or never) wear so that they can donate them and increase sustainability.</p>
            </div>

            <div className="row g-4 g-lg-5" data-aos="fade-up" data-aos-delay="200">

              <div className="col-lg-5">
                <div className="about-img">
                  <img src="assets/img/about.jpg" className="img-fluid" alt=""></img>
                </div>
              </div>

              <div className="col-lg-7">
                <h3 className="pt-0 pt-lg-5">Using coding to save the world, one problem at a time</h3>

                <ul className="nav nav-pills mb-3">
                  <li><a className="nav-link active" data-bs-toggle="pill" href="#tab1">Inspiration</a></li>
                  <li><a className="nav-link" data-bs-toggle="pill" href="#tab3">Projects</a></li>
                </ul>

                <div className="tab-content">

                  <div className="tab-pane fade show active" id="tab1">

                    <p className="fst-italic">My inspiration for this project stemmed from myself. I'm not sure which clothes I don't wear so when I inevitably go through my closet to donate and clear out the clutter, I'm not sure where to start.</p>

                    <div className="d-flex mt-4">
                      <i className="bi bi-check2"></i>
                      <h4>Fashion Industry</h4>
                    </div>
                    <p>The fashion industry currently produces around 92 million tons of textile waste annually. This number is predicted to increase almost 60% by 2030, which would be an annual total of 148 million tons.</p>

                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2"></i>
                      <h4>Sustainable Fashion</h4>
                    </div>
                    <p>Many sustainabile options have popped up to combat the amount of waste in the fashion industry. People can go thrifting, buy second-hand, and sell their clothes on apps like Depop and Poshmark. My web app encourages these sustainable behaviors by reporting which clothes you wear the least and could donate or sell.</p>

                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2"></i>
                      <h4>My Solution</h4>
                    </div>
                    <p>Fit Factory keeps track of the frequency you wear your clothing items. Every month, it will give you a report of your top 3 most worn items and your bottom 3 least worn.</p>

                  </div>

                  <div className="tab-pane fade show" id="tab3">

                    <p className="fst-italic">I love programming with a passion, especially making websites. Here are some of my most recent projects!</p>

                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2"></i>
                      <a href="https://github.com/ciscops/iot-application-server" target="_blank" className="project-link"><h4>IoT Application Server</h4></a>
                    </div>
                    <p>At Cisco, I helped create an IoT (internet of things) Application Server. With this, you can monitor anything that has the ability to output to an MQTT stream. In my particular usecase, we used this app server for smart building monintoring and alerting.</p>

                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2"></i>
                      <a href="https://devpost.com/software/project-yb2vuhx5sqkl" target="_blank" className="project-link"><h4>Taxi Traffic</h4></a>
                    </div>
                    <p>My team won 1st at HackTJ 7.5 in the CabIQ category. We created Taxi Traffic, an algorithm and corresponding web interface that recognized, displayed, and predicted the highest areas of taxi demand in DC.</p>

                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2"></i>
                      <a href="https://devpost.com/software/project-yb2vuhx5sqkl" target="_blank" className="project-link"><h4>OTIS</h4></a>
                    </div>
                    <p>OTIS (or Occupancy Tracking Integrated System) is a MERN stack web application for tracking building occupancy using Computer Vision and Machine Learning. To combat long lines outside of stores, my team created this project to save your spot in line and make sure that the store doesn't go above capacity.</p>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

      </main>

      <footer id="footer" className="footer">

        <div className="footer-legal text-center">
          <div className="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">

            <div className="d-flex flex-column align-items-center align-items-lg-start">
              <div className="credits">
                Designed by <a href="https://briannata.github.io/"  target="_blank">Brianna Ta</a>
              </div>
            </div>

            <div className="social-links order-first order-lg-last mb-3 mb-lg-0">
              <a href="https://briannata.github.io/" target="_blank"><i className="bi bi-laptop"></i></a>
              <a href="https://www.linkedin.com/in/briannata/" target="_blank"><i className="bi bi-linkedin"></i></a>
              <a href="https://github.com/briannata" target="_blank"><i className="bi bi-github"></i></a>
              <a href="mailto:brianna.hy.ta@gmail.com" target="_blank"><i className="bi bi-envelope"></i></a>
              
            </div>

          </div>
        </div>

      </footer>
    </div>
  );
}

export default Home;
