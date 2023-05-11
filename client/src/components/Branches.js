import condesa from "../img/condesa.jpg"
import eugenia from "../img/eugenia.jpg"
import coyo from "../img/coyoacan.jpg"
const Branches = () => {
  return (
    // <div className="sucursalesContainer">

    <div className="white-box">

      <div className="puesto1">
        <img className="img-condesa" src={condesa} alt="puesto condesa" />
        <div className="ubi-condesa"> <h1>Condesa:</h1>
          <p>Abierto las 24 hrs, los 7 días de la semana</p>
          <iframe
            className="maps"
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470.3674302773838!2d-99.17908779345449!3d19.41502232353536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff6060630e43%3A0xd372ee7290e88b06!2sRicas%20Tortas%20Caliente%20Las%20Autenticas%20De%20Villa!5e0!3m2!1ses!2smx!4v1682955196782!5m2!1ses!2smx"
            style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

          <p>Calle: Fernando Montes de Oca, entre Calle Pachuca y Calle Zamora. Colonia Condesa</p>

        </div>


      </div>

      <div className="puesto1">
        <img className="img-condesa" src={coyo} alt="puesto coyo" />
        <div className="ubi-condesa"> <h1>Coyoacán:</h1>
          <p>Abierto las 24 hrs, los 7 días de la semana</p>
          <iframe
            className="maps"

            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.2652918608752!2d-99.16360487287746!3d19.358555753007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff3d84eec4d1%3A0x954c94f8a78fb283!2sTortas%20Gigantes!5e0!3m2!1ses!2smx!4v1682959105914!5m2!1ses!2smx"
            style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

          <p>Avenida México Coyoacán Esquína Rio Churubusco</p>

        </div>


      </div>
      <div className="puesto1">
        <img className="img-condesa" src={eugenia} alt="puesto condesa" />
        <div className="ubi-condesa"> <h1>Eugenia:</h1>
          <p>Abierto las 24 hrs, los 7 días de la semana</p>
          <iframe
            className="maps"

            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3763.624011928492!2d-99.15973858509406!3d19.38542628691124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDIzJzA3LjUiTiA5OcKwMDknMjcuMiJX!5e0!3m2!1ses!2smx!4v1682959524793!5m2!1ses!2smx"
            style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

          <p>Avenida Cuauhtémoc, Esquina Avenida Eugenia</p>
        </div>
      </div>
    </div>

  )
}

export default Branches