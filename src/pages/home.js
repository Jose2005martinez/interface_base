import React from 'react';
import { Link } from 'react-router-dom';
import ShowTitle from '../components/ShowTitle';
import OrderedList from '../components/OrderedList';

const Home = () => {
    return (
        <div className="container">
            <h1>Welcome to Small Business Solutions :D</h1>
            <Link to="/main">Iniciar</Link>
            <ShowTitle />
            <OrderedList />
        </div>
    );
}

export default Home;
