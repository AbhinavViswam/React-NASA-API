import { useEffect, useState } from 'react';
import axios from 'axios';

function APOD() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios
            .get("https://api.nasa.gov/planetary/apod", {
                params: {
                    api_key: import.meta.env.VITE_NASA_API_KEY,
                },
            })
            .then((res) => {
                setData(res.data);
                setLoading(false);
            });
    }, []);

    return (
        
            <div className='p-10'>
                <h1>
                    Astronomy Picture Of The Day
                </h1>
                <div>
                    {loading ? (
                        <div></div>
                    ) : (
                        <a
                            href={data.hdurl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={data.url}
                                alt={data.title}
                                className='w-screen h-[50vh] object-cover'
                            />
                        </a>
                    )}
                </div>
                <div className='flex flex-col items-center justify-center gap-6'>
                    {loading ? (
                        <div>
                        
                        </div>
                    ) : (
                        <>
                            <div className='flex flex-col gap-2 text-4xl self-start px-16 font-bold'>
                            <h1 className='text-5xl font-black'>
                                {data.title}
                            </h1>
                                {data.date}
                            </div>
                            <p className="text-4xl px-16 text-balanced">
                                {data.explanation}
                            </p>
                        </>
                    )}
                </div>
            </div>
       
    );
}

export default APOD;
