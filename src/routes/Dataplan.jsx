import { useParams } from "react-router-dom";
import { getDataplan } from "../data";

export default function Dataplan() {
  let params =useParams();
  let dataplan = getDataplan(parseInt(params.dataplanId, 10));

  return (
    <main>
      <h2>Dataplan: {params.dataplanId}</h2>
      <p> Validity : {dataplan.validity} </p>
      <p>Size : {dataplan.size} </p>
      <p> Amount: {dataplan.value} </p>
    </main>
  );
}
