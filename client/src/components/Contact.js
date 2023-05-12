import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';
import Footer from "./Footer"

const Contact = () => {


  return (
    <div className='contactContainer'>
      <h1> Haz tu pedido  por  What's App y pasa por tu torta en nuestra sucursal mas cercana </h1>
      <div className='phoneContainer'>
        <WhatsAppIcon className='whats'/>  <span>56 1113 1481</span>
      </div>
      <WhatsAppWidget className="whatsCirculo"  phoneNumber="+5215611131481" message="Hola quiero una torta" />
    <Footer />
    </div>
  )
}

export default Contact