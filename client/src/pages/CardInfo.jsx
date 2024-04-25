import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchAnimeInfo from "../services/fetchAnimeInfo";
function CardInfo() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchAnimeInfo(id).then((data) => setData(data[0]));
  }, []);
  console.log("🚀 ~ CardInfo ~ data:", data);
  return (
    <>
      <div>
        <h1>Info Page</h1>
        <div>
          <p>{data.name}</p>
        </div>
      </div>
    </>
  );
}

export default CardInfo;
