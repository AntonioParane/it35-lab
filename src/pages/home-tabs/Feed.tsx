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
  IonLabel,
  IonButton,
  IonItemSliding,
  IonItemOptions,
  IonItemOption
} from '@ionic/react';

const Feed: React.FC = () => {
  const places = [
    { name: 'Manila', price: '₱500,000' },
    { name: 'Quezon City', price: '₱750,000' },
    { name: 'Makati', price: '₱450,000' },
    { name: 'Tagaytay', price: '₱600,000' }
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Feed</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {places.map((place, index) => (
            <IonItemSliding key={index}>
              <IonItem>
                <IonLabel>
                  🏡 {place.name} - {place.price}
                </IonLabel>
              </IonItem>
              <IonItemOptions side="end">
                <IonItemOption color="primary">Add to Favorites</IonItemOption>
                <IonItemOption color="secondary">Call</IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Feed;