import { useState, useEffect } from "react";
import axios from "axios";

const EarthNews = () => {
  const [data, setData] = useState(null);
  const [loading,setLoading]=useState(true)

  const NASA_API_KEY = "SPOwny3IBwpL8p0MTXYUb4vPGYb752Buqg4bQNiA";

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
        const response = await axios.
        get("https://api.nasa.gov/planetary/apod",{

          params:{
            api_key:NASA_API_KEY
          }
        })
        setLoading(false)
        setData(response.data);
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
   <>
   {data}
   </>
  );
};

function App(){
  return(
    <>
    <EarthNews/>
    </>
  )
}
export default App