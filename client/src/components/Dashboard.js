import React from 'react';
import Portfolio from './coins/Portfolio';
import AddCoin from './coins/AddCoin';

const Dashboard = () => {
    return (
        <div>
            <AddCoin />
            <Portfolio />
        </div>
    );
};

export default Dashboard;