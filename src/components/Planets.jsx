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
      })
  };

  return(
    <>
    <div>
        <input type="text" placeholder="Enter Planet Name" onChange={(e)=>setPlanet(e.target.value)}/>
        <button onClick={handleClick}>GO</button>
    </div>
    <div>
        {loading && <p>loading...</p>}
        {data?(
            data.length>0?(
               <div>
                <h3>{data[0].name}</h3>
                <p>Mass:{data[0].mass}</p>
                <p> Radius: {data[0].radius}</p>
                <p> Period: {data[0].period}</p>
                <p> Temp: {data[0].temperature}</p>
               <p> LY: {data[0].distance_light_year}</p>

               </div>
            ):(<p>No planet data found</p>)
        ):(<p>Enter a planet name</p>)}     
    </div>
    </>
  )
}
export default Planets;
