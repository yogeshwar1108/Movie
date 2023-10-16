import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Main.css";

function Main() {
  const [list, setList] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); 

  useEffect(() => {
    axios
      .get("https://movies-app.prakashsakari.repl.co/api/movies")
      .then((res) => setList(res.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Filter movies based on the search query
  const filteredMovies = list.filter((data) =>
    data.name.toLowerCase().includes(searchQuery.toLowerCase())||
    data.director_name.toLowerCase().includes(searchQuery.toLowerCase())||
    data.genre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div>
      <div className="search d-flex justify-content-evenly flex-sm-wrap bd-highlight">
        <div className="row ">
          <FontAwesomeIcon
            className="m-1 "
            icon={faSearch}
            style={{ color: "#f1f2f3" }}
          />
        </div>
        <input placeholder="Search by tittle or director name or genre" className=" p-2 text-center"  value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}/>
      </div>
       
        <div className="d-flex flex-wrap justify-content-center">
          {filteredMovies.map((data) => (
            <div className="card-container" key={data.id}>
              <div className="card-img-container">
                <img className="card-img" src={data.img_link} alt={data.name} />
                <h5 className="text-primary text-center text-uppercase font-weight-bold">
                  {data.name}
                </h5>
              </div>
              <div className="text-center text-info">
                <p>{data.director_name}</p>
              </div>
              <div>
                    <p className="badge bg-primary"> {data.genre}</p>
                  </div>
              <div className=" text-center">
                <div className="pills">
                  <div>
                    <p className="badge bg-secondary"> {data.year}</p>
                  </div>
                 
                  <div>
                    <p className="badge bg-secondary">
                      Imdb :{data.imdb_rating}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
