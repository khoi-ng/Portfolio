import './Footer.scss';
import { FaGithub, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className='footer-content-wrapper'>
        <div className='row-container'>
          <a href='https://github.com/khoi-ng'>
            <FaGithub />
          </a>
          <a href='https://www.facebook.com/khoi.nguyenduy/'>
            <FaFacebook />
          </a>
          {/* <a href='https://twitter.com/KKAI11942989'>
            <FaFacebook />
          </a> */}
        </div>
        <div className='copyright'>
          <p>Duy Khoi Nguyen © 2024</p>
          <p>Designed and programmed with ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
