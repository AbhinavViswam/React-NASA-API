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
    <div >
      <h1 >
        STAR DETAILS
      </h1>
      <div >
        <input
          type="text"
          placeholder="Enter Star Name"
          value={star}
          onChange={(e) => setStar(e.target.value)}
          
        />
        <button
          onClick={handleClick}
         
        >
          GO
        </button>
      </div>
      <div >
        {loading && <p>Loading...</p>}
        {data ? (
          data.length > 0 ? (
            <div >
              {data.map((star, index) => (
                <div
                  key={index}
                 
                >
                  <h3 >
                    {star.name}
                  </h3>
                  <p >
                    <span >Constellation:</span>{" "}
                    {star.constellation}
                  </p>
                  <p>
                    <span >Light Year:</span>{" "}
                    {star.distance_light_year}
                  </p>
                  <p >
                    <span >Declination:</span>{" "}
                    {star.declination}
                  </p>
                  <p >
                    <span >Spectral Class:</span>{" "}
                    {star.spectral_class}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p >No stars found</p>
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Stars;
