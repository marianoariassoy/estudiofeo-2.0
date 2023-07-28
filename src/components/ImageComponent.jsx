import { useEffect, useState } from "react";
import { useDataContext } from "../context/lanContext";
import BeatLoader from "react-spinners/BeatLoader";

const ImageComponent = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { imageURL } = useDataContext();

  // loader - full - img;

  useEffect(() => {
    const image = new Image();
    image.src = imageURL + src;
    image.onload = () => {
      setIsLoading(false);
    };
  }, [src]);

  return (
    <>
      <div className="flex items-center justify-center h-full w-full">{isLoading ? <BeatLoader /> : <img loading="lazy" src={imageURL + src} alt={alt} className="fade-in h-full w-full object-cover object-center" />}</div>
    </>
  );
};

export default ImageComponent;
