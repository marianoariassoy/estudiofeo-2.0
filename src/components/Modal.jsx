import ReactPlayer from "react-player";

const Modal = ({ setCurrentVideo, currentVideo }) => {
  const handelClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setCurrentVideo(null);
    }
  };
  return (
    <div className="fade-in fixed bg-black bg-opacity-60 h-screen w-screen top-0 left-0 grid place-items-center dismiss z-50 py-16 px-16" onClick={handelClick}>
      <div className="bg-white p-4 w-full">
        <ReactPlayer url={currentVideo} playing={true} controls={true} width="100%" height="100%" className="aspect-video object-cover" />
      </div>

      <span className="absolute top-8 right-8 text-white font-bold text-4xl cursor-pointer hover:text-black dismiss" onClick={handelClick}>
        X
      </span>
    </div>
  );
};

export default Modal;
