import { FaGithub, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 p-8">
      <div className="text-center mb-6">
        <p
          className="text-3xl sm:text-4xl font-medium hover:text-cyan-500 transition duration-300 cursor-pointer"
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          style={{ transition: "transform 0.3s ease" }}
        >
          Created by{" "}
          <span className="text-cyan-500">Abhinav Viswam</span>
        </p>
      </div>
      <ul className="flex flex-col sm:flex-row items-center justify-center space-y-8 sm:space-y-0 sm:space-x-12">
        <li>
          <a
            href="https://github.com/AbhinavViswam"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 text-gray-300 hover:text-cyan-500 transition duration-200"
          >
            <FaGithub size={32} />
            <span className="text-2xl sm:text-3xl">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/_abhinav_viswam/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 text-gray-300 hover:text-pink-500 transition duration-200"
          >
            <FaInstagram size={32} />
            <span className="text-2xl sm:text-3xl">Instagram</span>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
