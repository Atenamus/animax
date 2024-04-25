import Card from "../components/ui/Card";
import Carousel from "../components/ui/Carousel";
import clsx from "clsx";
import { useEffect, useState } from "react";
function Home() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(3);
  const itemsPerPage = 10;

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const items = data.slice(firstIndex, lastIndex);

  async function fetchAnime() {
    await fetch("http://localhost:3000/anime")
      .then(async (data) => {
        return await data.json();
      })
      .then((data) => {
        setData(data);
      });
  }
  useEffect(() => {
    fetchAnime();
  }, []);

  const pageNumbers = [];
  for (let i = 1; i <= data.length / 5; i++) {
    pageNumbers.push(i);
  }

  function handlePageChange(page) {
    setCurrentPage(page);
  }
  return (
    <div className="container mx-auto">
      <Carousel />
      <div className="grid lg:grid-cols-5 gap-4">
        {items.map((anime) => {
          return <Card key={anime.id} {...anime} />;
        })}
      </div>
      <div className="join">
        {pageNumbers.map((page, index) => {
          return (
            <button
              className={clsx("join-item  btn", {
                "btn-active": currentPage === page,
              })}
              key={index}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
