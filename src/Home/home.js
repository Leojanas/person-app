import React from 'react';
import { Link} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Link to={'/page/1'}><p>List</p></Link>
        </div>
    )
}

export default Home;