import React,{ useState } from 'react';
import './App.css';
import LoginPage from './components/LoginPage.js';  
import MainMenu from './components/MainMenu.js';
import CollectionPage from './components/CollectionPage.js';


function App() {

  const [currentPage, setCurrentPage] = useState ('login');

  const goToMenu = () => {
    setCurrentPage ('menu')
  };

  const goToCollection = () => {
    setCurrentPage ('collection');
  };


  if (currentPage === 'login') {
    return <LoginPage onLogin={goToMenu} />;
  }

  if (currentPage === 'menu') {
    return <MainMenu onNavigateToCollection = {goToCollection} />;
  }

  if (currentPage === 'collection') {
    return <CollectionPage onBackToMenu={goToMenu} />;
  }
  return null;

}

export default App;
