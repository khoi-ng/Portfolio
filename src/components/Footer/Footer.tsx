import './Footer.scss';
import { FaGithub, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className='footer-content-wrapper'>
        <div className='row-container'>
          <div className='copyright'>
            <p>Duy Khoi Nguyen © 2024</p>
            <p>Designed & Programmed with ❤️</p>
          </div>
          <div className='link-icons'>
            <a href='https://github.com/khoi-ng'>
              <FaGithub />
            </a>
            <a href='https://www.facebook.com/khoi.nguyenduy/'>
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
