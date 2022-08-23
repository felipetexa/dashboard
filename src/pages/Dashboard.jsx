import '../assets/css/app.css';

import ContentRowMovies from '../components/ContentRowMovies';
import LastMovie from '../components/LastMovie';
import Genres from '../components/Genres';


function Dashboard() {

  return (
    
          <div className="container-fluid">
            <ContentRowMovies />
            <div className="row">
              <LastMovie />
              <Genres />
            </div>
          </div>
  );
}

export default Dashboard;
