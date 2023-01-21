// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Layout } from './components';
import { Home } from './pages';
import { WindowSize } from './utils';

function App() {    
    const getWidthScreen = WindowSize();
    const isMobile = getWidthScreen.width <= 768 ? true : false;
    
    return (
        <div className="App" id="App">
            <Layout >
                <Home isMobile={isMobile}/>
            </Layout>
        </div>
    );
}

export default App;
