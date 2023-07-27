import { useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useDataContext } from "../context/lanContext";
import useFetch from "../hooks/useFetch";
import Layout from "../layout/Layout";
import Loader from "./Loader";
import TextHTML from "../hooks/useHTML";
import Modal from "./Modal";
import ImageComponent from "./ImageComponent";
import { IconBack, IconVideo, IconForward } from "../icons/icons";

const Post = ({ section }) => {
  let { id } = useParams();
  const { lan } = useDataContext();
  const { data, loading } = useFetch(`/post/${lan}/${id}`);
  const { data: dataImages, loading: loadingImages } = useFetch(`/imagenes/${id}`);
  const [currentVideo, setCurrentVideo] = useState(null);
  let imageIcon;

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  if (data) {
    switch (data[0].type) {
      case 2:
        imageIcon = "image-1.png";
        break;
      case 3:
        imageIcon = "image-2.png";
        break;
      case 4:
        imageIcon = "image-3.png";
        break;
      case 5:
        imageIcon = "image-5.png";
        break;
      case 6:
        imageIcon = "image-4.png";
        break;
      case 7:
        imageIcon = "image-6.png";
        break;

      default:
        break;
    }
  }

  let url;
  if (section === "studio") url = "/studio";
  else if (section === "shop") url = "/shop";
  else if (section === "gallery") url = "/gallery";
  else if (section === "about") url = "/about";

  return (
    <Layout>
      <section className="lg:flex pt-36 px-12">
        <div className="post-col-left mb-8">
          <div className="mb-4">
            <NavLink to={url} className="hover:opacity-60">
              <IconBack />
            </NavLink>
          </div>

          {loading ? (
            <Loader />
          ) : (
            <>
              <Helmet>
                <title>FEO &bull; {data[0].title}</title>
              </Helmet>

              <div className="grid grid-cols-2 justify-between items-center lg:grid-cols-1 ">
                <div className="mb-8 hidden lg:block">
                  {imageIcon && <img src={`/assets/images/${imageIcon}`} className="w-1/2 mb-4" />}

                  <h2 className="font-bold text-3xl">
                    {data[0].section_name} <span className="font-extraitalic">{data[0].section_name_2} </span>
                  </h2>
                </div>

                {data[0].video && (
                  <div className="justify-end flex items-center lg:mb-8 lg:justify-start">
                    <button className="hover:opacity-60 open-video" onClick={() => setCurrentVideo(data[0].video)}>
                      <IconVideo />
                    </button>
                  </div>
                )}
              </div>

              <div className="mb-10">
                {data[0].number && <h2 className="font-bold text-3xl mb-4 text-outline">{data[0].number}</h2>}
                {data[0].subtitle && <h2 className="text-2xl">{data[0].subtitle}</h2>}
                <h1 className="text-4xl font-bold leading-10">{data[0].title}</h1>
              </div>

              {data[0].link && (
                <div className="mb-4">
                  <a href={data[0].link} target="_blank" rel="noreferrer" className="border border-black rounded-full px-4 py-2 font-bold inline-flex gap-2 items-center hover:bg-black hover:text-white mb-2">
                    {lan === "es" ? "Ir al link" : "View Link"}
                  </a>
                </div>
              )}

              <div className="flex flex-col items-start">
                {data[0].prev && (
                  <Link to={`/studio/${data[0].prev}`} className="border border-black rounded-full px-4 py-2 font-bold inline-flex gap-2 items-center hover:bg-black hover:text-white mb-4">
                    <IconBack />
                    {lan === "es" ? "Anterior" : "Prev"}
                  </Link>
                )}
                {data[0].next && (
                  <Link to={`/studio/${data[0].next}`} className="border border-black rounded-full px-4 py-2 font-bold inline-flex gap-2 items-center hover:bg-black hover:text-white mb-2">
                    {lan === "es" ? "Siguiente" : "Next"}
                    <IconForward />
                  </Link>
                )}
              </div>
            </>
          )}
        </div>

        <div className="post-col-right flex flex-wrap">
          {loadingImages ? (
            <Loader />
          ) : (
            dataImages.map((item, index) => {
              return (
                <div key={index} className={item.square > 0 ? "w-1/2" : "w-full"}>
                  <div className={item.square > 0 ? "w-full aspect-square object-cover" : "w-full"}>
                    <ImageComponent src={item.image} alt={data[0].title} />
                  </div>
                  {item.text && (
                    <div className="pb-8 lg:p-14">
                      <TextHTML text={lan === "es" ? item.text : item.text_eng} />
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </section>

      {currentVideo && <Modal currentVideo={currentVideo} setCurrentVideo={setCurrentVideo} />}
    </Layout>
  );
};

export default Post;
