import React from 'react';
import Header from './component/Header';
import Search from './component/Search';
import Footer from './component/Footer';
import Profilebox from './component/Profilebox';
import Profile from './component/Profile';
import Recommendation from './component/Recommendation';
import Category from './component/Category';
import CategoryHover from './component/CategoryHover';
import CategoryHover2 from './component/CategoryHover2';
import CategoryHover3 from './component/CategoryHover3';
import './App.css';

function App() {
  return <div className = "app-container">
    <Header />
    <Search />
    <Category />
    <CategoryHover />
    <CategoryHover2 />
    <CategoryHover3 />
    <Footer />
    <Profilebox />
    <Profile />
    <Recommendation />
  </div>;
}

export default App;