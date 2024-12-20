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
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div className="mb-8">
        <input
          type="text"
          placeholder="Enter Planet Name"
          onChange={(e) => setPlanet(e.target.value)}
          className="p-2 text-black rounded-lg border-2 border-gray-300 outline-none focus:border-cyan-500"
        />
        <button
          onClick={handleClick}
          className="ml-4 p-2 bg-cyan-500 rounded-lg hover:bg-cyan-600 transition duration-200"
        >
          GO
        </button>
      </div>
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
        {loading && (
          <p className="text-center text-gray-400">Loading...</p>
        )}
        {data ? (
          data.length > 0 ? (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-center">{data[0].name}</h3>
              <p><span className="font-bold">Mass:</span> {data[0].mass}</p>
              <p><span className="font-bold">Radius:</span> {data[0].radius}</p>
              <p><span className="font-bold">Period:</span> {data[0].period}</p>
              <p><span className="font-bold">Temp:</span> {data[0].temperature}</p>
              <p><span className="font-bold">LY:</span> {data[0].distance_light_year}</p>
            </div>
          ) : (
            <p className="text-center text-gray-400">No planet data found</p>
          )
        ) : (
          <p className="text-center text-gray-400">Enter a planet name</p>
        )}
      </div>
    </div>
  );
}

export default Planets;