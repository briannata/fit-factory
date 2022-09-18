import React from 'react';
import './dashboard.css';
import logout from '../firebase';
  
function Dashboard() {   

return (
    <div>
        <section id="team" class="team">
      <div class="container" data-aos="fade-up">

        <div class="section-header">
          <h2>Dashboard</h2>
          <h5>Your Top Picks</h5>
        </div>

        <div class="row gy-5">

          <div class="col-xl-4 col-md-6 d-flex center" data-aos="zoom-in" data-aos-delay="200">
            <div class="team-member">
              <div class="member-img">
                <img src="assets/img/default.png" class="img-fluid" alt=""></img>
              </div>
              <div class="member-info">
                <h4>Item 1</h4>
              </div>
            </div>
          </div>

          <div class="col-xl-4 col-md-6 d-flex center" data-aos="zoom-in" data-aos-delay="400">
            <div class="team-member">
              <div class="member-img">
                <img src="assets/img/default.png" class="img-fluid" alt=""></img>
              </div>
              <div class="member-info">
                <h4>Item 2</h4>
              </div>
            </div>
          </div>

          <div class="col-xl-4 col-md-6 d-flex center" data-aos="zoom-in" data-aos-delay="600">
            <div class="team-member">
              <div class="member-img">
                <img src="assets/img/default.png" class="img-fluid" alt=""></img>
              </div>
              <div class="member-info">
                <h4>Item 3</h4>
              </div>
            </div>
          </div>

        </div>

        <div class="section-header top-space">
            <h5>Your Least Favorites</h5>
        </div>

        <div class="row gy-5">

          <div class="col-xl-4 col-md-6 d-flex center" data-aos="zoom-in" data-aos-delay="200">
            <div class="team-member">
              <div class="member-img">
                <img src="assets/img/default.png" class="img-fluid" alt=""></img>
              </div>
              <div class="member-info">
                <h4>Item 1</h4>
              </div>
            </div>
          </div>

          <div class="col-xl-4 col-md-6 d-flex center" data-aos="zoom-in" data-aos-delay="400">
            <div class="team-member">
              <div class="member-img">
                <img src="assets/img/default.png" class="img-fluid" alt=""></img>
              </div>
              <div class="member-info">
                <h4>Item 2</h4>
              </div>
            </div>
          </div>

          <div class="col-xl-4 col-md-6 d-flex center" data-aos="zoom-in" data-aos-delay="600">
            <div class="team-member">
              <div class="member-img">
                <img src="assets/img/default.png" class="img-fluid" alt=""></img>
              </div>
              <div class="member-info">
                <h4>Item 3</h4>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    </div>
);
}
  
export default Dashboard;