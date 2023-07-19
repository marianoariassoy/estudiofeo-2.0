const Item = ({ data, mask }) => {
  return (
    <a href={data.url} className="scroll item-mask items-center justify-center relative inline-flex">
      <div className="item-mask-txt absolute left-0 w-full z-30 px-8 opacity-0">
        <h3 className="text-xl text-center font-bold">{data.title}</h3>
      </div>

      <img src={`/assets/mask/mask-${mask}-outline.svg`} className="item-mask-image mask-outline" />
    </a>
  );
};

export default Item;
