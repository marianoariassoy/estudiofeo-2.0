import Form from "./Form";
import { Instagram, Behance, Points } from "../icons/icons";

const Footer = () => {
  return (
    <>
      <section className="px-12 py-24 lg:flex justify-between items-end" id="contacto">
        <div>
          <div className="text-xl">
            <div className="flex gap-3">
              <a href="https://wa.me/5493874848331" className="hover:line-through">
                +54 9 387 4848331
              </a>
              |
              <a href="https://wa.me/5493873436896" className="hover:line-through">
                +54 9 387 3436896
              </a>
            </div>
            <div>Pueyrredón 190 &bull; Salta | Argentina</div>
            <div>
              <a href="mailto:hola@estudiofeo.com" className="hover:line-through">
                hola@estudiofeo.com
              </a>
            </div>
            <div className="flex gap-3 items-center">
              <Instagram />
              <a href="https://instagram.com/estudio.feo" target="_blank" rel="noopener noreferrer" className="hover:line-through">
                @estudio.feo
              </a>
              |
              <a href="https://instagram.com/tienda.feo" target="_blank" rel="noopener noreferrer" className="hover:line-through">
                @tienda.feo
              </a>
              |
              <a href="https://instagram.com/galeria.feo" target="_blank" rel="noopener noreferrer" className="hover:line-through">
                @galeria.feo
              </a>
            </div>
            <div className="flex gap-3 items-center">
              <Behance />
              <a href="https://www.behance.net/estudio_feo" target="_blank" rel="noopener noreferrer" className="hover:line-through">
                behance.net/estudio_feo
              </a>
            </div>
            <div className="mb-6 mt-6">
              <Points />
            </div>
            <div className="font-extraitalic">www.estudiofeo.com</div>
          </div>
        </div>
        <div className="mt-8 lg:w-1/3">
          <Form />
        </div>
      </section>
    </>
  );
};

export default Footer;
