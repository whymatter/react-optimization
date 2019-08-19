import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {List} from "./List";

function App() {
    const initialSource = [{
        id: 0, name: 'Oliver Seitz'
    }, {
        id: 1, name: 'Anja Beer'
    }, {
        id: 2, name: 'Sabrina Seitz'
    }];

    const [listDataSource, setListDataSource] = useState(initialSource);

    const handleBlur = e => {
        if (e.key === 'Enter') {
            const newName = e.target.value;
            setListDataSource(o => [{id: listDataSource.length, name: newName}, ...o]);

            // reset text field value
            e.target.value = '';
        }
    };

    return (
        <div className="App">
            <div className="App-header" style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{flex: '1 1 100%', height: '100%'}}>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </div>
                <div style={{flex: '0 0 400px', height: '100%'}}>
                    <div><input type="text" onKeyPress={handleBlur}/></div>
                    <List data={listDataSource}/>
                </div>
            </div>
        </div>
    );
}

export default App;
