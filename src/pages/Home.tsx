import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router';

import Favorites from './home-tabs/Favorites';
import Feed from './home-tabs/Feed';
import Search from './home-tabs/Search';

const Home: React.FC = () => {
  const tabs = [
    {
      name: 'Feed',
      tab: 'feed',
      url: '/it35-lab/app/home/feed',
      icon: 'https://cdn-icons-gif.flaticon.com/9583/9583344.gif'
    },
    {
      name: 'Search',
      tab: 'search',
      url: '/it35-lab/app/home/search',
      icon: 'https://cdn.dribbble.com/users/1100029/screenshots/6276269/loading-search-animation-2_1-drb.gif'
    },
    {
      name: 'Favorites',
      tab: 'favorites',
      url: '/it35-lab/app/home/favorites',
      icon: 'https://cdn.pixabay.com/animation/2023/08/21/13/31/13-31-04-403_512.gif'
    }
  ];

  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/it35-lab/app/home/feed" render={Feed} />
          <Route exact path="/it35-lab/app/home/search" render={Search} />
          <Route exact path="/it35-lab/app/home/favorites" render={Favorites} />
          <Route exact path="/it35-lab/app/home">
            <Redirect to="/it35-lab/app/home/feed" />
          </Route>
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          {tabs.map((item, index) => (
            <IonTabButton key={index} tab={item.tab} href={item.url}>
              <img
                src={item.icon}
                alt={`${item.name} icon`}
                style={{ width: 24, height: 24 }}
              />
              <IonLabel>{item.name}</IonLabel>
            </IonTabButton>
          ))}
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};

export default Home;
