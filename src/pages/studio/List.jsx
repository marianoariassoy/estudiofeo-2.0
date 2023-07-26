import Item from "./Item";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";
import { useDataContext } from "../../context/lanContext";

const List = ({ categorie }) => {
  const { lan } = useDataContext();
  let url;
  let mask;
  let title;
  let title_eng;

  switch (categorie) {
    case 1:
      url = `/espacios/`;
      title = "espacios";
      title_eng = "spaces";
      mask = 1;
      break;
    case 2:
      url = `/arte/`;
      title = "arte";
      title_eng = "art";
      mask = 2;
      break;
    case 3:
      url = `/objetos/`;
      title = "objetos";
      title_eng = "objects";
      mask = 3;
      break;
    case 4:
      url = `/muebles/`;
      title = "muebles";
      title_eng = "furniture";
      mask = 4;
      break;
    case 5:
      url = `/efimeros/`;
      title = "efimeros";
      title_eng = "ephemeral";
      mask = 5;
      break;
    case 6:
      url = `/alianzas/`;
      title = "alianzas";
      title_eng = "alliances";
      mask = 6;
      break;
  }

  const { data, loading } = useFetch(url + lan);

  return (
    <section className="pt-20" id="list">
      <h1 className="font-bold text-7xl text-center mb-28">{lan === "es" ? title : title_eng}</h1>
      <div className="flex flex-wrap gap-y-8 justify-center">{loading ? <Loader /> : data && data.map((item) => <Item key={item.id} data={item} mask={mask} />)}</div>
    </section>
  );
};

export default List;
