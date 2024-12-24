import { FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8 flex flex-col gap-8  lg:max-h-[15vh]">
      
      <div className="flex justify-center gap-20 mt-4">
        <a
          href="https://www.instagram.com/_abhinav_viswam/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-2xl hover:text-pink-500"
        >
          <FaInstagram className="text-5xl lg:text-4xl" />
          <span className='text-4xl lg:text-2xl'>Instagram</span>
        </a>
        <a
          href="https://github.com/AbhinavViswam"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-2xl hover:text-gray-500"
        >
          <FaGithub className="text-5xl lg:text-4xl" />
          <span className='text-4xl lg:text-2xl'>GitHub</span>
        </a>
      </div>
        <p className="text-right">Abhinav Viswam</p>
    </footer>
  );
};

export default Footer;
