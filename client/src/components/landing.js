import { Button } from "@mui/material";
import img from "../img/t1.png"
import Footer from "./Footer";

const Landing = () => {
  return (
    <div className="mainContainer">

      <div className="container-landing row">

        <div className="contentLetras col-xl-6 ">
          <h1>Las Autenticas de Villas de Tezontepec</h1>
          <p className="ven"> Ven a descubrir el verdadero sabor de
            villas de Tezontepec! </p>
        </div>

        <div className="col-xl-6 d-flex justify-content-center ">
          <img className="img" src={img} alt="foto" />
        </div>

        <div className="container-btn col-xl-4">
          <Button href='/Contact' className="btn-contact"> Contactanos </Button>
        </div>

        <div className="container-btn col-xl-4">
          <Button href='/Branches' className="btn-contact"> Sucursales </Button>
        </div>

        <div className="container-btn col-xl-4">
          <Button href='/Menu' className="btn-contact"> Menu </Button>
        </div>
      </div>


      <Footer />

    </div>
  )
}

export default Landing;