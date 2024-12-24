import axios from "axios";
import { useState } from "react";

function Planets() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [planet, setPlanet] = useState("");

  const handleClick = () => {
    if (planet.trim() === "") return;
    setLoading(true);
    axios
      .get(`https://api.api-ninjas.com/v1/planets?name=${planet}`, {
        headers: { "X-Api-Key": import.meta.env.VITE_NINJA_API_KEY },
      })
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setData(res.data);
        } else {
          setData(null);
        }
        setLoading(false);
      });
  };

  return (
    <div>
      <h1>
        PLANET DETAILS
      </h1>
      <div>
        <input
          type="text"
          placeholder="Enter Planet Name"
          onChange={(e) => setPlanet(e.target.value)}
         
        />
        <button
          onClick={handleClick}
         
        >
          GO
        </button>
      </div>
      <div className="w-full max-w-5xl">
        {loading && (
          <p>Loading...</p>
        )}
        {data ? (
          data.length > 0 ? (
            <div>
              {data.map((planet, index) => (
                <div
                  key={index}
                  
                >
                  <h3 >
                    {planet.name}
                  </h3>
                  <p >
                    <span className="font-bold">Mass:</span> {planet.mass}
                  </p>
                  <p >
                    <span className="font-bold">Radius:</span> {planet.radius}
                  </p>
                  <p >
                    <span className="font-bold">Period:</span> {planet.period}
                  </p>
                  <p >
                    <span className="font-bold">Temp:</span>{" "}
                    {planet.temperature}
                  </p>
                  <p>
                    <span className="font-bold">LY:</span>{" "}
                    {planet.distance_light_year}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p >No planet data found</p>
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Planets;