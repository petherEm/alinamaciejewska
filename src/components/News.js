import React, { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { newsSlider } from "../swiperSliderProps";
import { NewsModal } from "./ContentModal";

const News = () => {
  const [open, setOpen] = useState(false);
  const [modalValue, setModalValue] = useState({
    img: null,
    title: "",
    date: "",
  });
  const onOpenModal = (img, title, date) => {
    setOpen(true);
    setModalValue({ img, title, date });
  };
  const onCloseModal = () => {
    setOpen(false);
    setModalValue({ img: null, title: "", date: "" });
  };

  return (
    <Fragment>
      <div className="kura_tm_section" id="news">
        <div className="kura_tm_news">
          <div className="container">
            <div className="kura_tm_main_title">
              <span>Galeria</span>
              <h3>Wybrane Wydarzenia</h3>
            </div>
            <div className="news_list wow fadeInUp" data-wow-duration=".7s">
              <div className="slick-container">
                <div className="slick-wrapper">
                  <Swiper {...newsSlider}>
                    <SwiperSlide className="slick-slide">
                      <div className="list_inner">
                        <div className="image">
                          <img src="/img/portfolio/410-460.jpg" alt="" />
                          <div
                            className="main"
                            style={{
                              backgroundImage:
                                "url(/img/news/mama_barlik.jpeg)",
                            }}
                          ></div>
                        </div>
                        <div className="overlay"></div>
                        <img
                          className="svg"
                          src="/img/svg/right-arrow.svg"
                          alt=""
                        />
                        <div className="details">
                          <span>Styczeń, 2019</span>
                          <h3>Alina Maciejewska i prof. Barlik (rozwinąć)</h3>
                        </div>
                        <a
                          className="kura_tm_full_link"
                          onClick={() =>
                            onOpenModal(
                              `/img/news/mama_barlik.jpeg`,
                              "Alina Maciejewska i prof. Barlik",
                              "Styczeń, 2019"
                            )
                          }
                        ></a>
                        <div className="news_hidden_details">
                          <div className="news_popup_informations">
                            <div className="text">
                              <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Velit cupiditate quas
                                voluptates sint, laborum nobis modi voluptatum.
                                Laudantium, recusandae dolorem.
                              </p>
                              <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Velit cupiditate quas
                                voluptates sint, laborum nobis modi voluptatum.
                                Laudantium, recusandae dolorem.
                              </p>
                              <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Velit cupiditate quas
                                voluptates sint, laborum nobis modi voluptatum.
                                Laudantium, recusandae dolorem.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slick-slide">
                      <div className="list_inner">
                        <div className="image">
                          <img src="/img/portfolio/410-460.jpg" alt="" />
                          <div
                            className="main"
                            style={{
                              backgroundImage:
                                "url(/img/news/mama_geoforum_2.jpeg)",
                            }}
                          ></div>
                        </div>
                        <div className="overlay"></div>
                        <img
                          className="svg"
                          src="/img/svg/right-arrow.svg"
                          alt=""
                        />
                        <div className="details">
                          <span>Sierpień, 2021</span>
                          <h3>Dodaj tekst</h3>
                        </div>
                        <a
                          className="kura_tm_full_link"
                          onClick={() =>
                            onOpenModal(
                              `/img/news/mama_geoforum_2.jpeg`,
                              "Dodaj tekst",
                              "Sierpień, 2021"
                            )
                          }
                        ></a>
                        <div className="news_hidden_details">
                          <div className="news_popup_informations">
                            <div className="text">
                              <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto perspiciatis distinctio quam cumque voluptates explicabo velit veniam omnis dolore tenetur.
                              </p>
                              <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum nihil quam minima laborum delectus accusamus deleniti provident voluptatem est quod?
                              </p>
                              <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, sunt voluptatum rerum distinctio est voluptate expedita consequuntur eius praesentium asperiores?
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slick-slide">
                      <div className="list_inner">
                        <div className="image">
                          <img src="/img/portfolio/410-460.jpg" alt="" />
                          <div
                            className="main"
                            style={{
                              backgroundImage:
                                "url(/img/news/mama_geoforum5.jpeg)",
                            }}
                          ></div>
                        </div>
                        <div className="overlay"></div>
                        <img
                          className="svg"
                          src="/img/svg/right-arrow.svg"
                          alt=""
                        />
                        <div className="details">
                          <span>Lipiec, 2018</span>
                          <h3>Dodaj tekst</h3>
                        </div>
                        <a
                          className="kura_tm_full_link"
                          onClick={() =>
                            onOpenModal(
                              `/img/news/mama_geoforum5.jpeg`,
                              "Dodaj tekst",
                              "Lipiec, 2018"
                            )
                          }
                        ></a>
                        <div className="news_hidden_details">
                          <div className="news_popup_informations">
                            <div className="text">
                              <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quasi ex laboriosam corrupti saepe aperiam cum aliquid tenetur id quam.
                              </p>
                              <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste molestiae doloribus minima corporis tenetur aut odio, velit eum ut ea illo quae voluptates, veniam consequatur dignissimos rem assumenda, ex esse?
                              </p>
                              <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit voluptatibus, omnis saepe distinctio minus quo. In deserunt accusamus ipsa excepturi itaque dolor error soluta. Laudantium nam architecto placeat exercitationem ipsam?
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slick-slide">
                      <div className="list_inner">
                        <div className="image">
                          <img src="/img/portfolio/410-460.jpg" alt="" />
                          <div
                            className="main"
                            style={{
                              backgroundImage:
                                "url(/img/news/mama_jubileusz3.jpeg)",
                            }}
                          ></div>
                        </div>
                        <div className="overlay"></div>
                        <img
                          className="svg"
                          src="/img/svg/right-arrow.svg"
                          alt=""
                        />
                        <div className="details">
                          <span>Marzec, 2017</span>
                          <h3>Dodaj tekst</h3>
                        </div>
                        <a
                          className="kura_tm_full_link"
                          onClick={() =>
                            onOpenModal(
                              `/img/news/mama_jubileusz3.jpeg`,
                              "Dodaj tekst",
                              "Marzec, 2017"
                            )
                          }
                        ></a>
                        <div className="news_hidden_details">
                          <div className="news_popup_informations">
                            <div className="text">
                              <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, nulla, accusantium exercitationem corporis ratione in doloribus consequatur facilis consectetur rerum fuga accusamus consequuntur odit voluptas quidem aliquam, officiis impedit deserunt.
                              </p>
                              <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam facilis reiciendis suscipit soluta quam, repudiandae molestiae aliquam unde obcaecati. Obcaecati.
                              </p>
                              <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque fuga magnam nesciunt illo eius accusantium consectetur iusto. Autem vel esse dicta. Ea nobis sequi voluptatem eligendi voluptatibus quasi eum? Itaque veniam ex eum quam saepe dignissimos consectetur similique exercitationem deleniti?
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slick-slide">
                      <div className="list_inner">
                        <div className="image">
                          <img src="/img/portfolio/410-460.jpg" alt="" />
                          <div
                            className="main"
                            style={{
                              backgroundImage:
                                "url(/img/news/mama_piaseczno.jpeg)",
                            }}
                          ></div>
                        </div>
                        <div className="overlay"></div>
                        <img
                          className="svg"
                          src="/img/svg/right-arrow.svg"
                          alt=""
                        />
                        <div className="details">
                          <span>Luty, 2016</span>
                          <h3>Dodaj tekst</h3>
                        </div>
                        <a
                          className="kura_tm_full_link"
                          onClick={() =>
                            onOpenModal(
                              `/img/news/mama_piaseczno.jpeg`,
                              "Dodaj tekst",
                              "Luty, 2016"
                            )
                          }
                        ></a>
                        <div className="news_hidden_details">
                          <div className="news_popup_informations">
                            <div className="text">
                              <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni placeat quidem expedita molestiae excepturi quo ipsam optio maiores sequi? Distinctio.
                              </p>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum obcaecati modi alias debitis voluptatum assumenda necessitatibus, quo impedit, consectetur, exercitationem praesentium architecto quibusdam aut ullam repudiandae enim totam dicta reprehenderit!
                              </p>
                              <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo vitae dolor, quas vero veritatis id minus doloribus repellat, deserunt eveniet deleniti possimus placeat aliquam. Saepe itaque, aspernatur corrupti recusandae nostrum ipsum in dolores illo quod nemo laudantium! Consequatur, sunt blanditiis.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slick-slide">
                      <div className="list_inner">
                        <div className="image">
                          <img src="/img/portfolio/410-460.jpg" alt="" />
                          <div
                            className="main"
                            style={{
                              backgroundImage:
                                "url(/img/news/mama_piaseczno2.jpeg)",
                            }}
                          ></div>
                        </div>
                        <div className="overlay"></div>
                        <img
                          className="svg"
                          src="/img/svg/right-arrow.svg"
                          alt=""
                        />
                        <div className="details">
                          <span>Maj, 2019</span>
                          <h3>Dodaj tekst</h3>
                        </div>
                        <a
                          className="kura_tm_full_link"
                          onClick={() =>
                            onOpenModal(
                              `/img/news/mama_piaseczno2.jpeg`,
                              "Dodaj tekst",
                              "Maj, 2019"
                            )
                          }
                        ></a>
                        <div className="news_hidden_details">
                          <div className="news_popup_informations">
                            <div className="text">
                              <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia omnis temporibus eveniet animi quisquam porro aspernatur consectetur adipisci, id obcaecati?
                              </p>
                              <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus suscipit, quam dolores atque voluptatum assumenda eaque, laudantium aut quisquam labore impedit fugiat ullam reiciendis. Tempora non voluptates exercitationem dolorum quis?
                              </p>
                              <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure magnam culpa hic ratione at fugit, debitis dolorem libero reprehenderit obcaecati quos magni eos optio laboriosam accusantium repudiandae corrupti quod nulla!
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slick-slide">
                      <div className="list_inner">
                        <div className="image">
                          <img src="/img/portfolio/410-460.jpg" alt="" />
                          <div
                            className="main"
                            style={{
                              backgroundImage:
                                "url(/img/news/mama_rektor_geodeta.jpeg)",
                            }}
                          ></div>
                        </div>
                        <div className="overlay"></div>
                        <img
                          className="svg"
                          src="/img/svg/right-arrow.svg"
                          alt=""
                        />
                        <div className="details">
                          <span>Marzec, 2016</span>
                          <h3>Dodaj tekst</h3>
                        </div>
                        <a
                          className="kura_tm_full_link"
                          onClick={() =>
                            onOpenModal(
                              `/img/news/mama_rektor_geodeta.jpeg`,
                              "Dodaj tekst",
                              "Marzec, 2016"
                            )
                          }
                        ></a>
                        <div className="news_hidden_details">
                          <div className="news_popup_informations">
                            <div className="text">
                              <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti nobis, optio numquam, a culpa, sed hic laudantium illum ullam reprehenderit qui suscipit maiores quia obcaecati vero ipsum aspernatur! Ea, sit?
                              </p>
                              <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis facere veniam maiores? Quo officia asperiores cupiditate nam sunt voluptatibus minus!
                              </p>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae nobis aperiam, omnis est cum eaque minima odio fugit, recusandae cumque odit perspiciatis reiciendis debitis veritatis eum ex esse rem impedit?
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slick-slide">
                      <div className="list_inner">
                        <div className="image">
                          <img src="/img/portfolio/410-460.jpg" alt="" />
                          <div
                            className="main"
                            style={{
                              backgroundImage:
                                "url(/img/news/mama_wilanow.jpeg)",
                            }}
                          ></div>
                        </div>
                        <div className="overlay"></div>
                        <img
                          className="svg"
                          src="/img/svg/right-arrow.svg"
                          alt=""
                        />
                        <div className="details">
                          <span>Kwiecień, 2018</span>
                          <h3>Dodaj tekst</h3>
                        </div>
                        <a
                          className="kura_tm_full_link"
                          onClick={() =>
                            onOpenModal(
                              `/img/news/mama_wilanow.jpeg`,
                              "Dodaj tekst",
                              "Kwiecień, 2018"
                            )
                          }
                        ></a>
                        <div className="news_hidden_details">
                          <div className="news_popup_informations">
                            <div className="text">
                              <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quo tempora architecto quidem cumque error assumenda enim expedita! Impedit quidem quas odio enim officiis iste dicta non voluptates eaque incidunt.
                              </p>
                              <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, velit perspiciatis? Nulla dolorem incidunt sunt molestiae corporis accusamus porro tempora, assumenda maxime dolore ullam nam libero dolores beatae iure nihil!
                              </p>
                              <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, ab quis ex labore odio assumenda minima facere neque quas tempore.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slick-slide">
                      <div className="list_inner">
                        <div className="image">
                          <img src="/img/portfolio/410-460.jpg" alt="" />
                          <div
                            className="main"
                            style={{
                              backgroundImage:
                                "url(/img/news/mama_wolomin.jpeg)",
                            }}
                          ></div>
                        </div>
                        <div className="overlay"></div>
                        <img
                          className="svg"
                          src="/img/svg/right-arrow.svg"
                          alt=""
                        />
                        <div className="details">
                          <span>Wrzesień, 2015</span>
                          <h3>Dodaj tekst</h3>
                        </div>
                        <a
                          className="kura_tm_full_link"
                          onClick={() =>
                            onOpenModal(
                              `/img/news/mama_wolomin.jpeg`,
                              "Dodaj tekst",
                              "Wrzesień, 2015"
                            )
                          }
                        ></a>
                        <div className="news_hidden_details">
                          <div className="news_popup_informations">
                            <div className="text">
                              <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem eligendi, dolore, nesciunt totam maxime deleniti debitis id provident doloremque nam illum rem pariatur odit, repellendus magnam recusandae a natus aut.
                              </p>
                              <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id distinctio tenetur quibusdam dignissimos voluptate eum fugit corporis veritatis aliquam at?
                              </p>
                              <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad iure quidem facere officia eligendi magnam ipsam temporibus sunt voluptatum animi.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slick-slide">
                      <div className="list_inner">
                        <div className="image">
                          <img src="/img/portfolio/410-460.jpg" alt="" />
                          <div
                            className="main"
                            style={{
                              backgroundImage:
                                "url(/img/news/zlota_kreda.jpeg)",
                            }}
                          ></div>
                        </div>
                        <div className="overlay"></div>
                        <img
                          className="svg"
                          src="/img/svg/right-arrow.svg"
                          alt=""
                        />
                        <div className="details">
                          <span>Wrzesień, 2015</span>
                          <h3>Dodaj tekst</h3>
                        </div>
                        <a
                          className="kura_tm_full_link"
                          onClick={() =>
                            onOpenModal(
                              `/img/news/zlota_kreda.jpeg`,
                              "Dodaj tekst",
                              "Wrzesień, 2015"
                            )
                          }
                        ></a>
                        <div className="news_hidden_details">
                          <div className="news_popup_informations">
                            <div className="text">
                              <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit accusantium voluptas temporibus illo. Quisquam, deleniti doloribus. Facere accusantium facilis voluptate.
                              </p>
                              <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, laboriosam voluptatibus voluptates ullam necessitatibus veritatis, obcaecati nesciunt ut aliquam minima impedit velit deleniti. Aliquid iusto aut similique beatae corporis maxime labore voluptatem, sed, nam, facilis dolorum esse odio perferendis saepe!
                              </p>
                              <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum fugiat nobis aperiam labore culpa ea. Corrupti, consectetur. Ipsum, vero ut.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slick-slide">
                      <div className="list_inner">
                        <div className="image">
                          <img src="/img/portfolio/410-460.jpg" alt="" />
                          <div
                            className="main"
                            style={{
                              backgroundImage:
                                "url(/img/news/mama_nagrody_rok_akadem.jpeg)",
                            }}
                          ></div>
                        </div>
                        <div className="overlay"></div>
                        <img
                          className="svg"
                          src="/img/svg/right-arrow.svg"
                          alt=""
                        />
                        <div className="details">
                          <span>Maj, 2014</span>
                          <h3>Dodaj tekst</h3>
                        </div>
                        <a
                          className="kura_tm_full_link"
                          onClick={() =>
                            onOpenModal(
                              `/img/news/mama_nagrody_rok_akadem.jpeg`,
                              "Dodaj tekst",
                              "Maj, 2014"
                            )
                          }
                        ></a>
                        <div className="news_hidden_details">
                          <div className="news_popup_informations">
                            <div className="text">
                              <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam pariatur ullam provident sed excepturi assumenda non iste nostrum sunt quia?
                              </p>
                              <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit delectus quod earum libero placeat beatae aliquam autem cumque tenetur! Cupiditate?
                              </p>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut vero aspernatur modi similique, ipsa non asperiores reprehenderit quibusdam dolorum quam?
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>

                <div className="kura_tm_swiper_progress fill">
                  <div className="my_pagination_in"></div>
                  <div className="my_navigation">
                    <ul>
                      <li>
                        <a className="my_prev">
                          <img
                            className="svg"
                            src="img/svg/right-arrow.svg"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a className="my_next">
                          <img
                            className="svg"
                            src="img/svg/right-arrow.svg"
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsModal
        open={open}
        onCloseModal={() => onCloseModal()}
        img={modalValue.img}
        title={modalValue.title}
        date={modalValue.date}
      />
    </Fragment>
  );
};

export default News;
