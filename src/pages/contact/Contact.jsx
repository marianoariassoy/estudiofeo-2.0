import { useEffect } from "react";
import Layout from "../../layout/Layout";
import { useDataContext } from "../../context/lanContext";
import { Helmet } from "react-helmet";
import { Instagram, Behance, Points } from "../../icons/icons";
import { menu } from "../../data/data";

const Contact = () => {
  const { lan, setSection } = useDataContext();

  useEffect(() => {
    setSection("contact");
    window.scrollTo(0, 0);
  }, [setSection]);

  return (
    <Layout>
      <Helmet>
        <title>{lan === "es" ? "Contacto" : "Contact"} FEO</title>
      </Helmet>
      <section className="px-12 pt-32 pb-10">
        <div className="text-xl mb-12">
          <h1 className="font-bold text-7xl mb-4">{lan === "es" ? menu[0].title : menu[0].title_eng}</h1>
          <div className="flex gap-3">
            <a href="https://wa.me/5493874848331" className="hover:line-through">
              +54 9 387 4848331
            </a>
            |
            <a href="https://wa.me/5493873436896" className="hover:line-through">
              +54 9 387 3436896
            </a>
          </div>
          <div>
            <a href="https://goo.gl/maps/6mCdpgkqNceZ1mMWA" className="hover:line-through" target="_blank" rel="noopener noreferrer">
              Pueyrredón 190 &bull; Salta | Argentina
            </a>
          </div>
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

        <div className="text-xl mb-12">
          <h1 className="font-bold text-7xl mb-4">{lan === "es" ? menu[1].title : menu[1].title_eng}</h1>
          <div className="flex gap-3">
            <a href="https://wa.me/5493874848331" className="hover:line-through">
              +54 9 387 4848331
            </a>
            |
            <a href="https://wa.me/5493873436896" className="hover:line-through">
              +54 9 387 3436896
            </a>
          </div>
          <div>
            <a href="https://goo.gl/maps/6mCdpgkqNceZ1mMWA" className="hover:line-through" target="_blank" rel="noopener noreferrer">
              Pueyrredón 190 &bull; Salta | Argentina
            </a>
          </div>
          <div>
            <a href="mailto:tienda.feo@gmail.com" className="hover:line-through">
              tienda.feo@gmail.com
            </a>
          </div>
          <div className="flex gap-3 items-center">
            <Instagram />
            <a href="https://instagram.com/tienda.feo" target="_blank" rel="noopener noreferrer" className="hover:line-through">
              @tienda.feo
            </a>
          </div>
          <div className="mb-6 mt-6">
            <Points />
          </div>
          <div className="font-extraitalic">www.estudiofeo.com</div>
        </div>

        <div className="text-xl mb-12">
          <h1 className="font-bold text-7xl mb-4">{lan === "es" ? menu[2].title : menu[2].title_eng}</h1>
          <div className="flex gap-3">
            <a href="https://wa.me/5493874848331" className="hover:line-through">
              +54 9 387 4848331
            </a>
            |
            <a href="https://wa.me/5493873436896" className="hover:line-through">
              +54 9 387 3436896
            </a>
          </div>
          <div>
            <a href="https://goo.gl/maps/6mCdpgkqNceZ1mMWA" className="hover:line-through" target="_blank" rel="noopener noreferrer">
              Pueyrredón 190 &bull; Salta | Argentina
            </a>
          </div>
          <div>
            <a href="mailto:galeria.feo@gmail.com" className="hover:line-through">
              galeria.feo@gmail.com
            </a>
          </div>
          <div className="flex gap-3 items-center">
            <Instagram />
            <a href="https://instagram.com/galeria.feo" target="_blank" rel="noopener noreferrer" className="hover:line-through">
              @galeria.feo
            </a>
          </div>
          <div className="mb-6 mt-6">
            <Points />
          </div>
          <div className="font-extraitalic">www.estudiofeo.com</div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
