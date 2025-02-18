import { 
  IonButton,
    IonButtons,
      IonContent, 
      IonHeader, 
      IonMenuButton, 
      IonPage, 
      IonRouterOutlet, 
      IonTabBar, 
      IonTabs, 
      IonTitle, 
      IonToolbar 
  } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router';
import Feed from './home-tabs/Feed';
import Favorites from './home-tabs/favorites';
import Search from './home-tabs/Search';
  
  const Home: React.FC = () => {

    return (
      <IonReactRouter>
        <IonTabs>
          <IonTabBar slot="bottom">

          </IonTabBar>
          <IonRouterOutlet>
            <Route exact path="/it35-lab/app/home/feed" component={Feed} />
            <Route exact path="/it35-lab/app/home/search" component={Search} />
            <Route exact path="/it35-lab/app/home/favorites" component={Favorites} />
          
            <Route exact path="/it35-lab/app/home">
            <Redirect to="/it35-lab/app/home/feed"/>
            </Route>
          </IonRouterOutlet>
        </IonTabs>
      </IonReactRouter>
    );
  };
  
  export default Home;