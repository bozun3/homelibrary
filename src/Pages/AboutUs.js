import React from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

export default function AboutUs() {
  return (
    <>
      <div>
        <NavBar />
        <div>
          <section
            style={{
              display: "flex",
              flexWrap: "wrap",
              background: "white",
            }}
          >
            <article style={{ padding: "10px", margin: "10px" }}>
              <p style={{ fontSize: "20px" }}>
                Najbolja stvar o knjigama? Nikada se ne možete zasititi njima
                niti ih pročitati sve. Ali ako se zadesite da vaša kolekcija
                knjiga postane nepodnošljivo pretrpana i ukoliko posjedujete
                malu kućnu biblioteku ova aplikacija je upravo za vas jer će vam
                pomoći da organizirate svoju biblioteku i nosite je u svom
                džepu.
              </p>
            </article>

            <article style={{ padding: "10px", margin: "10px" }}>
              <p style={{ fontSize: "20px" }}>
                Napredovanjem tehnologija došli smo do toga da nam se razni
                planeri, podsjetnici, i mnoštvo drugih stvari nalazi na mobilnom
                uređaju, s toga smo odlučili kreirati ovu internet aplikaciju
                koju će razni korisnici moći koristiti i na Android platofrmi
                kao i na Apple uređajima.
              </p>
            </article>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}
