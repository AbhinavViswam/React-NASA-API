import { useEffect, useState } from 'react';
import axios from 'axios';

function APOD() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios.get("https://api.nasa.gov/planetary/apod", {
            params: {
                api_key: import.meta.env.VITE_NASA_API_KEY
            }
        }).then((res) => {
            setData(res.data);
            setLoading(false);
        });
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
            <div className="max-w-4xl w-full bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                <h1 className="text-2xl font-bold mb-2 text-center py-4">Astronomy Picture Of The Day</h1>
                <div className="relative">
                    {loading ? (
                        <div className="w-full h-72 bg-gray-700 animate-pulse"></div>
                    ) : (
                        <a href={data.hdurl} target='_blank'><img src={data.url} alt={data.title} className="w-full h-72 object-cover" /></a>
                    )}
                </div>
                <div className="p-6">
                    {loading ? (
                        <div className="space-y-4">
                            <div className="h-6 bg-gray-700 rounded w-3/4 animate-pulse"></div>
                            <div className="h-4 bg-gray-700 rounded w-1/2 animate-pulse"></div>
                            <div className="h-20 bg-gray-700 rounded w-full animate-pulse"></div>
                        </div>
                    ) : (
                        <>
                            <h1 className="text-2xl font-bold mb-2">{data.title}</h1>
                            <div className="text-sm text-gray-400 mb-4">{data.date}</div>
                            <p className="text-gray-300">{data.explanation}</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default APOD;