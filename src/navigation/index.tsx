import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import API from '../api';

import Homes from '../pages/Home';
import Lots from '../pages/Lots';
import NotFound from '../pages/NotFound';
import { setHomes, setLots, setLotsToHomes } from '../store';

const Navigation = () => {
  const setData = async () => {
    const homes = await API.getHomePlans();
    setHomes(homes);
    const lots = await API.getLots();
    setLots(lots);
    const lotsToHomes = await API.getCombinations();
    setLotsToHomes(lotsToHomes);
  };
  useEffect(() => {
    setData();
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="homes" element={<Homes />} />
        <Route path="lots" element={<Lots />} />
        <Route path="" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
        <Route element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default Navigation;
