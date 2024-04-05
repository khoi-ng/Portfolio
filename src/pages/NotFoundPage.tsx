import { Link } from 'react-router-dom';
import './NotFoundPage.scss';

const NotFoundPage = () => {
  return (
    <div className='not-Found-div'>
      <h2>404 Page Not Found</h2>
      <Link to='/'>Get Back to the Home</Link>
    </div>
  );
};

export default NotFoundPage;
