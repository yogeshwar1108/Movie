import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Main.css";

function Main() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("https://movies-app.prakashsakari.repl.co/api/movies")
      .then((res) => setList(res.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <div>
        <div className="d-flex flex-wrap justify-content-center">
          {list.map((data) => (
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
                    <p className=" badge bg-secondary"> {data.genre}</p>
                  </div>
              <div className="d-flex  flex-wrap text-center">
                <div className="pills">
                  <div>
                    <p className=" badge bg-secondary"> {data.year}</p>
                  </div>
                 
                  <div>
                    <p className=" badge bg-secondary">
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
