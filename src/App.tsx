import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Dark mode setting */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

import Login from './pages/Login';
import Signup from "./pages/Signup";
import Menu from './pages/Menu';
import LandingPage from './pages/LandingPage'; // 👈 Add this line

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/" component={LandingPage} />         {/* 👈 Default page */}
        <Route exact path="/login" component={Login} />          {/* 👈 Changed from /it35-lab to /login */}
        <Route exact path="/signup" component={Signup} />
        <Route path="/it35-lab/app" component={Menu} />
        <Redirect exact from="/it35-lab" to="/login" />          {/* 👈 Keeps legacy path support */}
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
