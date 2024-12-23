import { FaGithub, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 p-6">
      <div className="text-center mb-4">
        <p
          className="text-lg font-medium hover:text-cyan-500 transition duration-300 cursor-pointer"
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          style={{ transition: "transform 0.3s ease" }}
        >
          Created by{" "}
          <span className="text-cyan-500">Abhinav Viswam</span>
        </p>
      </div>
      <ul className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
        <li>
          <a
            href="https://github.com/AbhinavViswam"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-300 hover:text-cyan-500 transition duration-200"
          >
            <FaGithub size={24} />
            <span className="text-sm sm:text-base">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/_abhinav_viswam/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-300 hover:text-pink-500 transition duration-200"
          >
            <FaInstagram size={24} />
            <span className="text-sm sm:text-base">Instagram</span>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
