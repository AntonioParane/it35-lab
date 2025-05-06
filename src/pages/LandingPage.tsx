import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonImg,
  IonFooter
} from '@ionic/react';
import { useHistory } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ecolife</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <nav style={{
          display: 'flex',
          justifyContent: 'space-around',
          padding: '10px 0',
          backgroundColor: '#f8f8f8',
          fontWeight: 500
        }}>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#connect">Connect Us</a>
          <a href="#contact">Contact Us</a>
          <IonButton size="small" onClick={() => history.push('/login')}>Login</IonButton>
          <IonButton size="small" color="secondary" onClick={() => history.push('/signup')}>Signup</IonButton>
        </nav>

        <div id="home" style={{ padding: '16px', textAlign: 'center' }}>
          <h1>Welcome to Ecolife</h1>
          <p>What is Carbon Footprint?</p>
          <p>Get to know your Carbon Footprint using our Calculator.</p>
        </div>

        <div id="about" style={{ padding: '16px' }}>
          <h2>About Carbon Footprint</h2>
          <p>
            A carbon footprint is the total greenhouse gas emissions caused directly and indirectly by an individual, organization, event or product.
          </p>
        </div>

        <div id="calculate" style={{ padding: '16px', textAlign: 'center' }}>
          <h2>Calculate Your Carbon Footprint</h2>
          <IonButton
            color="success"
            fill="clear"
            onClick={() => alert('Get Started!')}
            style={{ border: '1px solid green', marginTop: '10px' }}
          >
            Get Started
          </IonButton>
          <div style={{ marginTop: '16px' }}>
            <input type="file" accept=".xlsx, .xls" />
            <br />
            <IonButton style={{ marginTop: '10px' }} onClick={() => alert('Downloading Template...')}>
              Download Excel Template
            </IonButton>
          </div>
        </div>
      </IonContent>

      <IonFooter>
        <p style={{ textAlign: 'center', fontSize: '14px', padding: '10px' }}>© 2025 Ecolife</p>
      </IonFooter>
    </IonPage>
  );
};

export default LandingPage;
