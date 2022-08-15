import './assets/css/app.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import NumbersInfo from './components/NumbersInfo';
import LastMovie from './components/LastMovie';
import Genres from './components/Genres';
import Footer from './components/Footer';

function App() {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Header />
          <div className="container-fluid">
            <NumbersInfo />
            <div className="row">
              <LastMovie />
              <Genres />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
