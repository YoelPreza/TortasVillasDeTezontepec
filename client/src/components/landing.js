import fondo from "../img/fondo.png"
import { Button } from "@mui/material";
import img from "../img/t1.png"
import Footer from "./Footer";

const Landing = () => {
  return (
    <div>
      <img className="fondo" src={fondo} alt="fondo" />

      <div className="container-landing row">

        <div className="contentLetras col-xl-6">
          <h1>Las Autenticas de Villas de Tezontepec</h1>
          <p> Ven a descubrir el verdadero sabor de
            villas de Tezontepec! </p>
        </div>
        <div className="col-xl-5">
          <img className="img" src={img} alt="foto" />
        </div>
        <div className="container-btn col-xl-12">
        <Button href='/Contact' className="btn-contact"> Contactanos </Button>

        </div>
      </div>


<Footer />

    </div>
  )
}

export default Landing;