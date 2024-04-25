import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function CardInfo() {
  const { id } = useParams();
  console.log("🚀 ~ CardInfo ~ id:", id);
  const [data, setData] = useState([]);
  async function getAnimeDetail() {
    await fetch(`http://localhost:3000/anime/?id=${id}`)
      .then(async (data) => {
        return await data.json();
      })
      .then((item) => {
        console.log(item);
        setData(item);
      });
  }
  useEffect(() => {
    getAnimeDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div>
        <h1>Info Page</h1>
        <div>
          {/* <img src="" alt="" /> */}
          <p>{data.name}</p>
        </div>
      </div>
    </>
  );
}

export default CardInfo;
