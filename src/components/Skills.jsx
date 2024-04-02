import React from 'react'

export default function Skills() {
  return (
    <div>
      

       <section className="skills-section gray-bg" id="skills-section">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="section-header text-center">
          <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">My Skills</h2>
          <p className=" wow fadeInUp" data-wow-delay=".4s">We put your ideas and thus your wishes in the
            form of a unique web project that inspires
            you
            and you customers.</p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="skills-widget d-flex flex-wrap justify-content-center align-items-center">
          <div className="skill-item wow fadeInUp" data-wow-delay=".4s">
            <div className="skill-inner">
              <div className="icon-box">
              <img src={require("../Images/icons/laravel.png")} alt="" />
              </div>
              <div className="number">80%</div>
            </div>
            <p>Laravel</p>
          </div>
          <div className="skill-item wow fadeInUp" data-wow-delay=".5s">
            <div className="skill-inner">
              <div className="icon-box">
              <img src={require("../Images/icons/react.png")} alt="" />
              </div>
              <div className="number">85%</div>
            </div>
            <p>React</p>
          </div>
          <div className="skill-item wow fadeInUp" data-wow-delay=".6s">
            <div className="skill-inner">
              <div className="icon-box">
              <img src={require("../Images/icons/nodejs.png")} alt="" />
              </div>
              <div className="number">99%</div>
            </div>
            <p>Nodejs</p>
          </div>
          <div className="skill-item wow fadeInUp" data-wow-delay=".7s">
            <div className="skill-inner">
              <div className="icon-box">
              <img src={require("../Images/icons/mongodb.png")} alt="" />
              </div>
              <div className="number">89%</div>
            </div>
            <p>Mongo db</p>
          </div>
          <div className="skill-item wow fadeInUp" data-wow-delay=".8s">
            <div className="skill-inner">
              <div className="icon-box">
              <img src={require("../Images/icons/figma.png")} alt="" />
              </div>
              <div className="number">93%</div>
            </div>
            <p>Figma</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}
