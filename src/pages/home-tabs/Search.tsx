import React from 'react';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonList,
  IonItem,
  IonLabel
} from '@ionic/react';

const Search: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* Search Bar */}
        <IonSearchbar placeholder='Search for a house'></IonSearchbar>
        
        {/* Recent Searches */}
        <IonList>
          <IonItem>
            <IonLabel>🏡 Manila - ₱500,000</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>🏡 Quezon City - ₱750,000</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>🏡 Makati - ₱450,000</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>🏡 Tagaytay - ₱600,000</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Search;