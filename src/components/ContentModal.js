import { Modal } from "react-responsive-modal";
export const NewsModal = ({ open, onCloseModal, img, title, date }) => {
  return (
    <Modal open={open} onClose={() => onCloseModal()} center>
      <div className="box_inner">
        <div className="description_wrap" style={{ padding: "30px" }}>
          <div className="news_popup_informations">
            <div className="image">
              <img src={img} alt="" />
            </div>
            <br />
            <div className="details" style={{ marginBottom: "20px" }}>
              {date && <span>{date}</span>}
              <h3>{title ? title : `VS Code Gets New JavaScript Debugger`}</h3>
              <div></div>
            </div>
            <div className="text">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
                culpa, est, quod optio libero nisi eaque fugiat illo veritatis a
                dicta ea fuga beatae praesentium ut dignissimos asperiores
                quibusdam iste.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur, temporibus? Minima quod, recusandae distinctio
                totam mollitia dolor minus officiis pariatur.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
                culpa, est, quod optio libero nisi eaque fugiat illo veritatis a
                dicta ea fuga beatae praesentium ut dignissimos asperiores
                quibusdam iste.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export const HomeModal = ({ open, onCloseModal, img, title, date }) => {
  return (
    <Modal open={open} onClose={() => onCloseModal()} center>
      <div className="box_inner">
        <div className="description_wrap" style={{ padding: "30px" }}>
          <div className="news_popup_informations">
            <div className="image">
              <img src={img} alt="" />
            </div>
            <br />
            <div className="details" style={{ marginBottom: "20px" }}>
              {date && <span>{date}</span>}
              <h3>{title ? title : ` `}</h3>
              <div></div>
            </div>
            <div className="hidden_content">
              <div className="popup_informations">
                <div className="description">
                  <p>
                    Absolwentka Uniwersytetu Warszawskiego Wydzia??u Chemii -
                    specjalno???? chemia analityczna. Stopie?? naukowy doktora w
                    zakresie gleboznawstwa uzyska??a w roku 1985; Stopie?? naukowy
                    doktora habilitowanego uzyska??a w 1994 roku w zakresie
                    kszta??towania i ochrony ??rodowiska; Tytu?? naukowy profesora
                    w dziedzinie nauk rolniczych otrzyma??a w 2000 roku. W roku
                    2016 Centralna Komisja do spraw Stopni i Tytu????w na
                    podstawie art.6 ust.5 Ustawy z dnia14 marca 2003r.o
                    stopniach naukowych i tytule naukowym oraz o stopniach i
                    tytule w zakresie sztuki (Dz.U.z 2016r. poz.882 z p??zn.zm.)
                    na posiedzeniu w dniu 28 listopada 2016r.,po zasi??gni??ciu
                    opinii w??a??ciwej Sekcji Komisji na podstawie przed??o??onego
                    dorobku naukowego, dydaktycznego i organizacyjnego, uzyska??a
                    uprawnienia profesorskie do nadawania stopni naukowych i
                    tytu????w w dziedzinie nauk technicznych(Decyzja nr
                    BCK-Org.-275/2016). Politechnice Warszawskiej jest
                    zatrudniona od 1 listopada 1980 roku w Zak??adzie
                    Gleboznawstwa i Ochrony Grunt??w Wydzia??u Geodezji i
                    Kartografii na stanowiskach: naukowo-technicznych (1980
                    r.-1987 r.), adiunkta (1987 r. ??? 2001 r.), profesora
                    nadzwyczajnego (2001 r. ??? 2007 r.), a od 1 wrze??nia 2007 roku
                    do 21 stycznia 2019 roku na stanowisku profesora
                    zwyczajnego. Aktualnie jest zatrudniona w Politechnice
                    Warszawskiej na stanowisku profesora.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
