import Link from 'next/link';
import { FaInstagram, FaEnvelope, FaCoffee } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">AI Image Generator</h3>
            <p className="text-gray-400">Create stunning AI-generated images</p>
          </div>
          
          <div className="flex space-x-6">
            <Link 
              href="https://instagram.com/irfanwhotf" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              <FaInstagram className="text-2xl" />
            </Link>
            
            <Link 
              href="mailto:mohammediirfan2006@gmail.com"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              <FaEnvelope className="text-2xl" />
            </Link>
            
            <Link 
              href="https://buymeacoffee.com/mohammedirfan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              <FaCoffee className="text-2xl" />
            </Link>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AI Image Generator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
