import { AppConfig } from '../utils/AppConfig';

const Footer = () => (
  <div className="w-full antialiased">
    <div className="py-8 text-sm text-center border-t border-gray-300">
      © Copyright {new Date().getFullYear()} {AppConfig.title}
    </div>
  </div>
);

export default Footer;


