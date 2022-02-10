import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import { activeSkillProgress } from "../utilits";

const ParallaxVideo = dynamic(import("./Parallax"), {
  ssr: false,
});

const Skills = () => {
  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
  });

  return (
    <div className="kura_tm_section" id="skills">
      <div className="kura_tm_skills">
        <div className="container">
          <div className="skills_inner">
            <div className="left">
              <div className="kura_tm_main_title light">
                <span>Biografia</span>
                <h3>Wybrane osiągnięcia</h3>
              </div>
              <div className="text wow fadeInUp" data-wow-duration=".7s">
                <p>
                  Ponad 40 lat doświadczenia w dydaktyce i badaniach. Wydanych ponad 50 publikacji. Ponad 40 lat doświadczenia w dydaktyce i badaniach. Wydanych ponad 50 publikacji. Ponad 40 lat doświadczenia w dydaktyce i badaniach. Wydanych ponad 50 publikacji. Ponad 40 lat doświadczenia w dydaktyce i badaniach. Wydanych ponad 50 publikacji. 
                </p>
              </div>
              <div
                className="dodo_progress wow fadeInUp"
                data-wow-duration=".7s"
                data-wow-delay=".2s"
              >
                <div className="progress_inner" data-value="60">
                  <span>
                    <span className="label">Lat w dydaktyce</span>
                    <span className="number">40+</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" style={{ width: "60%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value="80">
                  <span>
                    <span className="label">Doktoranci</span>
                    <span className="number">30+</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" style={{ width: "50%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value="90">
                  <span>
                    <span className="label">Habilitacje</span>
                    <span className="number">15+</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" style={{ width: "30%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <ParallaxVideo />
              <div
                className="my_image jarallax"
                data-speed="0"
                style={{
                  backgroundImage: "url(/img/portfolio/2.jpg)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
