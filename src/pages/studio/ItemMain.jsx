import { useDataContext } from "../../context/lanContext";

const Item = ({ data }) => {
  const { lan } = useDataContext();

  return (
    <a href={data.url} className="scroll item-mask items-center justify-center relative inline-flex">
      <div className="item-mask-txt absolute left-0 w-full z-30 px-8 opacity-0 ">
        <h3 className="text-xl text-center font-bold">{lan === "es" ? data.title : data.title_eng}</h3>
      </div>

      <img src={`/assets/images/${data.image}`} className="item-mask-image mask-outline" />
    </a>
  );
};

export default Item;
