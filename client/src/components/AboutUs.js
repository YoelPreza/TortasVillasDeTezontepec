import Footer from "./Footer"
import villas from "../img/villas.webp"

const AboutUs = () => {
  return (
    <div className="container">
      <div className='row d-flex justify-content-center'>
        <div className='nosotros col-xl-12'>
          <p> <strong> Acerca de nosotros: </strong></p>
          <p>Somos una tortería mexicana con más de 5 años de experiencia en la elaboración de las mejores tortas al estilo de Villas de Tezontepec.
            En nuestro menú encontrarás una gran variedad de opciones, desde las clásicas tortas de jamón y queso, hasta las más elaboradas con milanesa, pierna de cerdo, y más.
            Nuestra tortería se caracteriza por la calidad de nuestros ingredientes, siempre frescos y seleccionados cuidadosamente para brindarte el mejor sabor. Además,
            nuestro personal altamente capacitado se esfuerza día a día para ofrecerte un servicio excepcional y una experiencia única en cada visita.</p>
        </div>

      </div>

      <div className='row  d-flex justify-content-center'>
        <div className=' nosotros col-xl-12'>
        <p> <strong> Misión: </strong></p>
        <p>En nuestra tortería, nos dedicamos a ofrecer a nuestros clientes una experiencia única y auténtica de la cocina mexicana, a través de la elaboración de las mejores tortas al estilo tradicional. 
          Nos esforzamos por brindar un servicio excepcional y por seleccionar cuidadosamente los ingredientes más frescos y de calidad para asegurar el mejor sabor en cada bocado.</p>

        </div>

      </div>

      <div className='row'>
        <div className='col-xl-12'>
        <img className="img-villas" src={villas} alt="villas"/>
        </div>

      </div>
      <Footer />

      
    </div>
  )
}

export default AboutUs