import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <FeaturedProducts />
      <Footer />
    </div>
  );
};

export default App;
