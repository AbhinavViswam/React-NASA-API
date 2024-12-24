

function Home() {
  return (
    <div className="flex flex-col p-10 gap-8 items-center justify-center lg:flex lg:flex-row ">
      <div>     
        <h1 className="font-bold text-5xl text-center mb-4 lg:text-3xl">
          About the Project
        </h1>
        <p className="text-4xl px-16 text-center lg:text-2xl">
          The project allows users to explore detailed astronomical data about
          stars through an intuitive and responsive web application. Users can
          input the name of a star to retrieve information such as its
          constellation, distance in light years, declination, and spectral
          class. The app provides a user-friendly interface and uses the Ninja
          API to fetch real-time astronomical data.
        </p>
        </div>

        <img src="/Black-Hole.jpg" alt="no image" />

       </div>
  );
}

export default Home;
