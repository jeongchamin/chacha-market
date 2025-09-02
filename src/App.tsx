import Shutter from './components/Shutter';
import Header from './components/Header';
import Footer from './components/Footer';

import Canopy from './components/Canopy';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <div className="app">
      <Shutter duration={2000}></Shutter>
      <Header />
      <Canopy />
      <ProductCard />
      <Footer />
    </div>
  );
}

export default App;
