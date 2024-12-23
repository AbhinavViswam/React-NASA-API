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
    <div className="min-h-[80vh] bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl sm:text-4xl font-bold mb-8 text-center">
        PLANET DETAILS
      </h1>
      <div className="mb-8 flex flex-wrap gap-4 justify-center">
        <input
          type="text"
          placeholder="Enter Planet Name"
          onChange={(e) => setPlanet(e.target.value)}
          className="p-2 text-black rounded-lg border-2 border-gray-300 outline-none focus:border-cyan-500 w-full sm:w-auto"
        />
        <button
          onClick={handleClick}
          className="p-2 bg-cyan-500 rounded-lg hover:bg-cyan-600 transition duration-200 w-full sm:w-auto"
        >
          GO
        </button>
      </div>
      <div className="w-full max-w-5xl">
        {loading && (
          <p className="text-center text-gray-400">Loading...</p>
        )}
        {data ? (
          data.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {data.map((planet, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center"
                >
                  <h3 className="text-lg sm:text-2xl font-bold text-center mb-4">
                    {planet.name}
                  </h3>
                  <p className="text-xs sm:text-sm">
                    <span className="font-bold">Mass:</span> {planet.mass}
                  </p>
                  <p className="text-xs sm:text-sm">
                    <span className="font-bold">Radius:</span> {planet.radius}
                  </p>
                  <p className="text-xs sm:text-sm">
                    <span className="font-bold">Period:</span> {planet.period}
                  </p>
                  <p className="text-xs sm:text-sm">
                    <span className="font-bold">Temp:</span>{" "}
                    {planet.temperature}
                  </p>
                  <p className="text-xs sm:text-sm">
                    <span className="font-bold">LY:</span>{" "}
                    {planet.distance_light_year}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-400">No planet data found</p>
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Planets;