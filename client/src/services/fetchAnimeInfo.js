import axios from "axios";
async function fetchAnimeInfo(id) {
  const res = await axios
    .get(`http://localhost:3000/anime/?id=${id}`)
    .then((data) => data.data)
    .catch((error) =>
      console.log(
        "fetching error : ",
        error.response.data,
        error.response.status,
        error.response.message
      )
    );
  return res;
}
export default fetchAnimeInfo;
