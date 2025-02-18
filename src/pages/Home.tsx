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
import { Route } from 'react-router';
import Feed from './home-tabs/Feed';
  
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
          </IonRouterOutlet>
        </IonTabs>
      </IonReactRouter>
    );
  };
  
  export default Home;