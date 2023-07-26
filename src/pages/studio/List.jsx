import Item from "./Item";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";
import { useDataContext } from "../../context/lanContext";

const List = ({ categorie }) => {
  const { lan } = useDataContext();
  let url;
  let mask;

  switch (categorie) {
    case 1:
      url = `/espacios/`;
      mask = 1;
      break;
    case 2:
      url = `/arte/`;
      mask = 2;
      break;
    case 3:
      url = `/objetos/`;
      mask = 3;
      break;
    case 4:
      url = `/muebles/`;
      mask = 4;
      break;
    case 5:
      url = `/efimeros/`;
      mask = 5;
      break;
    case 6:
      url = `/alianzas/`;
      mask = 6;
      break;
  }

  const { data, loading } = useFetch(url + lan);

  return (
    <section className="pt-28 bg-secondary" id="list">
      <div className="flex flex-wrap gap-y-8 justify-center">{loading ? <Loader /> : data && data.map((item) => <Item key={item.id} data={item} mask={mask} />)}</div>
    </section>
  );
};

export default List;
