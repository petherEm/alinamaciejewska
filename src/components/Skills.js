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
                  Prof.dr hab. Alina Maciejewska jest specjalistką w obszarze
                  kształtowania i ochrony środowiska przyrodniczego, w
                  szczególności w zakresie strategii ochrony i kształtowania
                  zasobów glebowych, remediacji środowiska gruntowo-wodnego,
                  zrównoważonego zagospodarowania terenów objętych wpływem
                  antropopresji, w tym w szczególności terenów poprzemysłowych,
                  pogórniczych, powojskowych, pokolejowych.
                  <br />
                  Jest autorką lub współautorką ponad 200 publikacji, w tym: 87
                  pozycji stanowią artykuły opublikowane w czasopismach
                  naukowych krajowych i międzynarodowych, 3 książki autorskie,
                  13 książek redagowanych, 9 monografii ,w tym 3 wydane za
                  granicą, 26 rozdziałów w monografiach naukowych, 3 rozdziały w
                  książkach, 36 publikacji w recenzowanych materiałach
                  konferencyjnych. 9 monografii, w tym 3 za granicą.
                  <br />
                  Uczestniczyła w 54 konferencjach międzynarodowych wygłaszając
                  29 referatów oraz prezentując postery. Była promotorem
                  czterech zakończonych prac doktorskich, aktualnie jest
                  promotorem jednego przewodu doktorskiego oraz opiekunem
                  naukowym jednego doktoranta. Wykonała wiele recenzji
                  doktorskich i habilitacyjnych oraz recenzowała pięć wniosków
                  na tytuł profesora. Wielokrotnie przewodniczyła komisjom
                  habilitacyjnym i profesorskim oraz konferencjom naukowym.
                  Recenzowała również wiele artykułów naukowych monografii i
                  książek.
                </p>
              </div>
              <div
                className="dodo_progress wow fadeInUp"
                data-wow-duration=".7s"
                data-wow-delay=".2s"
              >
                <div className="progress_inner" data-value="80">
                  <span>
                    <span className="label">Lat w dydaktyce</span>
                    <span className="number">40+</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value="60">
                  <span>
                    <span className="label">Publikacje</span>
                    <span className="number">200+</span>
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
                    <span className="number">5+</span>
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
