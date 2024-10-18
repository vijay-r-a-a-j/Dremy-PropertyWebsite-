import React from 'react';
import Home from './components/Home/Home';
import Achievements from './components/Achievements/Achievements';
import FeaturedProperty from './components/FeaturedProperty/FeaturedProperty';
import RecentProperties from './components/RecentProperties/RecentProperties';
import Pricing from './components/Pricing/Pricing';
import MobileApp from './components/MobileApplicaton/MobileApp';
import Footer from './components/Footer/Footer';


const App = ()=>{
  return <div>
      <Home/>
      <Achievements/>
      <FeaturedProperty/>
      <RecentProperties/>
      <Pricing/>
      <MobileApp/>
      <Footer/>
  </div>
}

export default App;