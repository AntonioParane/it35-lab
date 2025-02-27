import React from 'react';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel
} from '@ionic/react';

const Favorites: React.FC = () => {
  const favoriteHouses = [
    { name: 'Manila', price: '₱500,000' },
    { name: 'Quezon City', price: '₱750,000' },
    { name: 'Makati', price: '₱450,000' },
    { name: 'Tagaytay', price: '₱600,000' },
    { name: 'Pasig', price: '₱550,000' },
    { name: 'Caloocan', price: '₱620,000' },
    { name: 'Mandaluyong', price: '₱700,000' },
    { name: 'Parañaque', price: '₱580,000' },
    { name: 'Las Piñas', price: '₱490,000' },
    { name: 'Marikina', price: '₱510,000' }
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Favorites</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {favoriteHouses.map((house, index) => (
            <IonItem key={index}>
              <IonLabel>
                🏡 {house.name} - {house.price}
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Favorites;
