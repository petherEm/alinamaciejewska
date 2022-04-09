import { useState } from "react";
import { HomeModal } from "./ContentModal";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [modalValue, setModalValue] = useState({
    img: null,
    title: "",
  });
  const onOpenModal = (img, title) => {
    setOpen(true);
    setModalValue({ img, title });
  };
  const onCloseModal = () => {
    setOpen(false);
    setModalValue({ img: null, title: "" });
  };
  return (
    <div className="kura_tm_section" id="home">
      <div className="kura_tm_hero">
        <div className="container">
          <div className="content">
            <div className="left">
              <span className="name">Politechnika Warszawska</span>
              <h3 className="job">Prof. dr hab. Alina Maciejewska</h3>
              <div className="services">
                <ul>
                  <li>
                    <a
                      href="#"
                      onClick={() =>
                        onOpenModal(
                          "/img/news/mama_inauguracja_PW.jpg",
                          "Wieloletni Dziekan Wydziału Gospodarki Przestrzennej"
                        )
                      }
                    >
                      <img className="image" src="/img/service/1.jpg" alt="" />
                      <span>
                        Wieloletni Dziekan Wydziału Gospodarki Przestrzennej
                      </span>
                      <img
                        className="svg"
                        src="/img/svg/right-arrow.svg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() =>
                        onOpenModal(
                          "/img/news/mama_GIK_2.jpg",
                          "Profesor Zwyczajny"
                        )
                      }
                    >
                      <img className="image" src="/img/service/2.jpg" alt="" />
                      <span>Profesor Zwyczajny</span>
                      <img
                        className="svg"
                        src="/img/svg/right-arrow.svg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() =>
                        onOpenModal(
                          "/img/news/mama_GIK_2.jpg",
                          "Kierownik Zakładu Gospodarki Przestrzennej i Nauk o Środowisku Przyrodniczym"
                        )
                      }
                    >
                      <img className="image" src="/img/service/3.jpg" alt="" />
                      <span>
                        Kierownik Zakładu Gospodarki Przestrzennej i Nauk o
                        Środowisku Przyrodniczym{" "}
                      </span>
                      <img
                        className="svg"
                        src="/img/svg/right-arrow.svg"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="short_info">
                <ul>
                  <li>
                    <div className="list_inner">
                      <h3>40+</h3>
                      <span>
                        Lat
                        <br />
                        Doświadczenia
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>200+</h3>
                      <span>
                        Publikacji
                        <br />
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right">
              <div className="image">
                <img src="/img/thumbs/3-4.jpg" alt="" />
                <div
                  className="main"
                  style={{ backgroundImage: "url(img/hero/A.jpeg)" }}
                ></div>
                <div className="shape"></div>
              </div>
            </div>
            <div className="down anchor">
              <a href="#portfolio">
                <img className="svg" src="/img/svg/down-arrow.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <HomeModal
        open={open}
        onCloseModal={() => onCloseModal()}
        img={modalValue.img}
        title={modalValue.title}
      />
    </div>
  );
};

export default Home;
