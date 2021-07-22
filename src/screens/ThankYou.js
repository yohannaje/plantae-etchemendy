import {React} from 'react';
import { useParams } from "react-router-dom";
import { EmptyPageComponent } from '../components/EmptyPageComponent/EmptyPageComponent.js';
import { Footer } from '../components/Footer/Footer.js';

export const ThankYou=()=>{
    const { orderId } = useParams();
  
    return <div>
        <EmptyPageComponent
          className="emptyCart"
          imgUrl="https://i.ibb.co/7jpDytr/Artboard-1-2x.png"
          altText="compra exitosa"
          h1="¡Gracias por Tu Compra!"
          link="/"
          extraInfo={`El código de tu pedido es ${orderId}, pronto recibirás un mail confirmando el envío.`}
          btnText="Volver al Home"
        />
        <Footer/>
    </div>
}