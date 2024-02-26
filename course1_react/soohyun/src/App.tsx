import { ImagesProvider } from './context/ImagesContext';
import Images from './components/Images';
import Header from './layouts/Header';
import GeneralStyles from './styles/GeneralStyles';
import Categories from './components/Categories';
import Pagination from './components/Pagination';

function App() {
  return (
    <div className="App">
      <GeneralStyles />
      <Header />
      <ImagesProvider>
        <Categories />
        <Images />
        <Pagination />
      </ImagesProvider>
    </div>
  );
}

export default App;
