import React from 'react';
import { Link, useHistory} from 'react-router-dom';

const Home = () => {
    let history = useHistory();
    history.push('/page/1')
    return (
        <div>
            <Link to={'/page/1'}><p>View User List</p></Link>
        </div>
    )
}

export default Home;