import { useState } from "react";
import axios from "axios";

function Stars() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [star, setStar] = useState("");

  const handleClick = async () => {
    if (star.trim() === "") return;
    setLoading(true);
    try {
      const res = await axios.get(
        `https://api.api-ninjas.com/v1/stars?name=${star}`,
        {
          headers: { "X-Api-Key": import.meta.env.VITE_NINJA_API_KEY },
        }
      );
      if (res.data && res.data.length > 0) {
        setData(res.data);
      } else {
        setData(null);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setData(null);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl sm:text-4xl font-bold mb-8 text-center">
        STAR DETAILS
      </h1>
      <div className="mb-8 flex flex-wrap gap-4 justify-center">
        <input
          type="text"
          placeholder="Enter Star Name"
          value={star}
          onChange={(e) => setStar(e.target.value)}
          className="p-3 w-full sm:w-auto text-black rounded-lg border-2 border-gray-300 outline-none focus:border-cyan-500"
        />
        <button
          onClick={handleClick}
          className="p-3 w-full sm:w-auto bg-cyan-500 rounded-lg hover:bg-cyan-600 transition duration-200"
        >
          GO
        </button>
      </div>
      <div className="w-full max-w-5xl">
        {loading && <p className="text-center text-gray-400">Loading...</p>}
        {data ? (
          data.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {data.map((star, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-4"
                >
                  <h3 className="text-lg sm:text-xl font-bold text-center text-cyan-400">
                    {star.name}
                  </h3>
                  <p className="text-xs sm:text-sm">
                    <span className="font-bold">Constellation:</span>{" "}
                    {star.constellation}
                  </p>
                  <p className="text-xs sm:text-sm">
                    <span className="font-bold">Light Year:</span>{" "}
                    {star.distance_light_year}
                  </p>
                  <p className="text-xs sm:text-sm">
                    <span className="font-bold">Declination:</span>{" "}
                    {star.declination}
                  </p>
                  <p className="text-xs sm:text-sm">
                    <span className="font-bold">Spectral Class:</span>{" "}
                    {star.spectral_class}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-400">No stars found</p>
          )
        ) : (
          <p className="text-center text-gray-400">Enter a star name</p>
        )}
      </div>
    </div>
  );
}

export default Stars;
