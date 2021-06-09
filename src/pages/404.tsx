import react from 'react';
import Link from 'next/link';

const PageNotFound: React.FC = () => {
  return (
    <Link href='/'>
      <div className='PageNotFound'>
        <h1>404</h1>
        {/* <img src="" alt="page not found image"/> */}
        <p>Oops, looks like this is not a page! </p>
        <p>Click anywhere to return to the experience</p>
      </div>
    </Link>
  );
};

export default PageNotFound;
