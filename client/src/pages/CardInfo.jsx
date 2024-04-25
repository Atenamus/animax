import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function CardInfo() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  async function getAnimeDetail() {
    await fetch(`http://localhost:3000/anime/?id=${id}`)
      .then(async (data) => {
        return await data.json();
      })
      .then((item) => {
        setData(item[0]);
      });
  }
  useEffect(() => {
    getAnimeDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log("🚀 ~ CardInfo ~ data:", data);

  return (
    <>
      <div>
        <h1>Info Page</h1>
        <div>
          <p>{data.name }</p>
        </div>
      </div>
    </>
  );
}

export default CardInfo;
