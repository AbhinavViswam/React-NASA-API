import { FaGithub, FaInstagram } from "react-icons/fa";

function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4 py-6 sm:px-6 lg:px-8">
      <div className="flex flex-col max-w-3xl bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cyan-500 mb-6 text-center">
          Overview
        </h1>

        {/* Flexible Overview Section */}
        <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl leading-relaxed text-justify mb-6">
          The project allows users to explore detailed astronomical data about
          stars through an intuitive and responsive web application. Users can
          input the name of a star to retrieve information such as its
          constellation, distance in light years, declination, and spectral
          class. The app provides a user-friendly interface and uses the Ninja
          API to fetch real-time astronomical data.
        </p>

        <div className="text-center mb-6">
          <p
            className="text-lg sm:text-xl lg:text-2xl font-medium hover:text-cyan-500 transition duration-300 cursor-pointer"
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            style={{ transition: "transform 0.3s ease" }}
          >
            Created by <span className="text-cyan-500">Abhinav Viswam</span>
          </p>
        </div>

        {/* Social Links */}
        <ul className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 sm:flex-row sm:space-x-8">
          <li>
            <a
              href="https://github.com/AbhinavViswam"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-cyan-500 transition duration-200 text-lg sm:text-xl"
            >
              <FaGithub size={24} />
              <span>GitHub</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/_abhinav_viswam/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-pink-500 transition duration-200 text-lg sm:text-xl"
            >
              <FaInstagram size={24} />
              <span>Instagram</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
