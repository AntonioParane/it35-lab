import {
  IonButtons,
  IonButton,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonText,
  IonItem,
  IonLabel,
  IonInput,
} from '@ionic/react';
import { useState } from 'react';

const CarbonFootprint: React.FC = () => {
  // State to track which section is currently active
  const [activeTab, setActiveTab] = useState<string>('fossilFuel');

  // Function to handle tab change
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Carbon Footprint</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <div className="container">
          <IonText>
            <h2>Calculate your Carbon Footprint</h2>
            <p><strong>Instructions for filling out the form:</strong></p>
            <ul>
              <li>For each tab, fill out the form and click on <strong>'Save'</strong> to save your changes.</li>
              <li>To add another instance for the same tab, click on <strong>'Add Another Instance'</strong> after saving the current instance.</li>
              <li>Use <strong>'Go to Next/Previous Tab'</strong> to navigate between the tabs.</li>
              <li>Fields marked as <strong>*</strong> are mandatory fields.</li>
              <li>Ensure that you have saved your last instances in each tab. If you do not have the data for any particular Tab/Facility, choose any option for mandatory fields and enter <strong>'0'</strong> in the <strong>'Amount/Distance'</strong> fields.</li>
            </ul>
          </IonText>

          {/* Navigation Buttons */}
          <IonButtons className="nav-buttons">
            <IonButton 
              fill="outline" 
              onClick={() => handleTabChange('fossilFuel')}
              color={activeTab === 'fossilFuel' ? 'primary' : 'medium'}
            >
              Fossil Fuel
            </IonButton>
            <IonButton 
              fill="outline" 
              onClick={() => handleTabChange('electricity')}
              color={activeTab === 'electricity' ? 'primary' : 'medium'}
            >
              Electricity
            </IonButton>
            <IonButton 
              fill="outline" 
              onClick={() => handleTabChange('water')}
              color={activeTab === 'water' ? 'primary' : 'medium'}
            >
              Water
            </IonButton>
            <IonButton 
              fill="outline" 
              onClick={() => handleTabChange('waste')}
              color={activeTab === 'waste' ? 'primary' : 'medium'}
            >
              Waste
            </IonButton>
            <IonButton 
              fill="outline" 
              onClick={() => handleTabChange('travel')}
              color={activeTab === 'travel' ? 'primary' : 'medium'}
            >
              Travel
            </IonButton>
            <IonButton 
              fill="outline" 
              onClick={() => handleTabChange('offset')}
              color={activeTab === 'offset' ? 'primary' : 'medium'}
            >
              Offset
            </IonButton>
          </IonButtons>

          {/* Tab Content */}
          <div className="tab-content">
            {activeTab === 'fossilFuel' && (
              <div>
                <h3>Fossil Fuel</h3>
                <IonItem>
                  <IonLabel position="floating">Fuel Type</IonLabel>
                  <IonInput placeholder="Enter fuel type" />
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">Amount</IonLabel>
                  <IonInput placeholder="Enter amount" />
                </IonItem>
              </div>
            )}
            {activeTab === 'electricity' && (
              <div>
                <h3>Electricity</h3>
                <IonItem>
                  <IonLabel position="floating">Electricity Consumption</IonLabel>
                  <IonInput placeholder="Enter consumption" />
                </IonItem>
              </div>
            )}
            {activeTab === 'water' && (
              <div>
                <h3>Water</h3>
                <IonItem>
                  <IonLabel position="floating">Water Usage</IonLabel>
                  <IonInput placeholder="Enter usage" />
                </IonItem>
              </div>
            )}
            {activeTab === 'waste' && (
              <div>
                <h3>Waste</h3>
                <IonItem>
                  <IonLabel position="floating">Waste Type</IonLabel>
                  <IonInput placeholder="Enter waste type" />
                </IonItem>
              </div>
            )}
            {activeTab === 'travel' && (
              <div>
                <h3>Travel</h3>
                <IonItem>
                  <IonLabel position="floating">Travel Distance</IonLabel>
                  <IonInput placeholder="Enter distance traveled" />
                </IonItem>
              </div>
            )}
            {activeTab === 'offset' && (
              <div>
                <h3>Offset</h3>
                <IonItem>
                  <IonLabel position="floating">Offset Amount</IonLabel>
                  <IonInput placeholder="Enter offset amount" />
                </IonItem>
              </div>
            )}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CarbonFootprint;
