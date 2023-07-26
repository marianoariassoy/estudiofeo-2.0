import { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useDataContext } from "../context/lanContext";
import useFetch from "../hooks/useFetch";
import Loader from "./Loader";
import TextHTML from "../hooks/useHTML";
import Modal from "./Modal";
import ImageComponent from "./ImageComponent";
import { IconBack, IconVideo, IconForward } from "../icons/icons";
import Layout from "../layout/Layout";

const Post = ({ section }) => {
  let { id } = useParams();
  const { lan } = useDataContext();
  const { data, loading } = useFetch(`/post/${lan}/${id}`);
  const { data: dataImages, loading: loadingImages } = useFetch(`/imagenes/${id}`);
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (loading)
    return (
      <div className="h-screen w-screen">
        <Loader />
      </div>
    );

  if (loadingImages)
    return (
      <div className="h-screen w-screen">
        <Loader />
      </div>
    );

  let url;
  if (section === "studio") url = "/studio";
  else if (section === "shop") url = "/shop";
  else if (section === "gallery") url = "/gallery";
  else if (section === "about") url = "/about";

  return (
    <Layout>
      <Helmet>
        <title>FEO &bull; {data[0].title}</title>
      </Helmet>
      <section className="lg:flex pt-36 px-12">
        <div className="post-col-left">
          <div className="mb-4">
            <NavLink to={url} className="hover:opacity-60">
              <IconBack />
            </NavLink>
          </div>

          <div className="grid grid-cols-2 justify-between items-center lg:grid-cols-1">
            <div className="mb-8 hidden lg:block">
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
              <a href={data[0].link} target="_blank" rel="noreferrer" className="border border-black rounded-full px-4 py-2 font-bold inline-flex  gap-2 items-center hover:bg-black hover:text-white mb-2">
                {lan === "es" ? "Ir al link" : "View Link"}
              </a>
            </div>
          )}

          <div className="flex flex-col items-start">
            {data[0].prev && (
              <Link to={`/studio/${data[0].prev}`} className="border border-black rounded-full px-4 py-2 font-bold inline-flex gap-2 items-center hover:bg-black hover:text-white mb-4 ">
                <IconBack />
                {lan === "es" ? "Anterior" : "Previous"}
              </Link>
            )}
            {data[0].next && (
              <Link to={`/studio/${data[0].next}`} className="border border-black rounded-full px-4 py-2 font-bold inline-flex gap-2 items-center hover:bg-black hover:text-white mb-2">
                {lan === "es" ? "Siguiente" : "Next"}
                <IconForward />
              </Link>
            )}
          </div>
        </div>

        <div className="post-col-right flex flex-wrap ">
          {dataImages.map((item, index) => {
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
          })}
        </div>
      </section>

      {currentVideo && <Modal currentVideo={currentVideo} setCurrentVideo={setCurrentVideo} />}
    </Layout>
  );
};

export default Post;
