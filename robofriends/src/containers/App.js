import React, { useState, useEffect } from 'react'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

const App = () => {

    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users));
    },[]);

    const filteredRobots =robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return (
        <>
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={event => setSearchField(event.target.value)} />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        </>
    );

}

export default App;