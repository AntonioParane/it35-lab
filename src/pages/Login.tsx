import {
    IonAlert,
    IonAvatar,
    IonButton,
    IonContent,
    IonIcon,
    IonInput,
    IonInputPasswordToggle,
    IonPage,
    IonToast,
    IonText,
    useIonRouter
  } from '@ionic/react';
  import { useState } from 'react';
  import { supabase } from '../utils/supabaseClient';
  import lifeImg from './media/Life.png';
  
  const AlertBox: React.FC<{ message: string; isOpen: boolean; onClose: () => void }> = ({ message, isOpen, onClose }) => {
    return (
      <IonAlert
        isOpen={isOpen}
        onDidDismiss={onClose}
        header="Notification"
        message={message}
        buttons={['OK']}
      />
    );
  };
  
  const Login: React.FC = () => {
    const navigation = useIonRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [showToast, setShowToast] = useState(false);
  
    const doLogin = async () => {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
  
      if (error) {
        setAlertMessage(error.message);
        setShowAlert(true);
        return;
      }
  
      setShowToast(true);
      setTimeout(() => {
        navigation.push('/it35-lab/app', 'forward', 'replace');
      }, 300);
    };
  
    return (
      <IonPage>
        <IonContent
          fullscreen
          style={{
            position: 'relative', 
          }}
        >
          {/* Background Image */}
          <div
  style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'url("https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,q_auto,w_720/64381ad1f1d35c001d3650ec.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    zIndex: -1,
  }}
/>

  
          {/* Login Form */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.88)',
              borderRadius: '10px',
              padding: '20px',
              width: '90%',
              maxWidth: '400px',
              margin: 'auto',
              marginTop: '15%',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.87)',
              textAlign: 'center',
            }}
          >
         <IonAvatar style={{ margin: '0 auto', marginBottom: '20px', width: '100px', height: '100px', overflow: 'hidden' }}>
         <img
  src={lifeImg}
  alt="User Avatar"
  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
/>

</IonAvatar>

  
<div style={{ textAlign: 'center', marginBottom: '20px' }}>
  <h1 style={{ fontWeight: 'bold', color: '#2E8B57' }}>Welcome to Eco Life 🌿</h1>
  <h2 style={{ marginTop: '10px', fontWeight: 'bold', color: '#2E8B57' }}>User Login</h2>
</div>

  
<div style={{ textAlign: 'left', width: '100%', marginTop: '15px' }}>
  <IonInput
    label="Email"
    labelPlacement="floating"
    fill="outline"
    color="success"
    type="email"
    placeholder="Enter Email"
    value={email}
    onIonChange={e => setEmail(e.detail.value!)}
    style={{
      borderRadius: '8px',
      padding: '12px',
      fontSize: '16px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
    }}
  />
</div>

<div style={{ textAlign: 'left', width: '100%', marginTop: '15px' }}>
  <IonInput
    label="Password"
    labelPlacement="floating"
    fill="outline"
    color="success"
    type="password"
    placeholder="Enter password"
    value={password}
    onIonChange={e => setPassword(e.detail.value!)}
    style={{
      borderRadius: '8px',
      padding: '12px',
      fontSize: '16px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
    }}
  >
    <IonInputPasswordToggle slot="end" color="dark" className="custom-eye-icon" />
  </IonInput>
</div>

  
            <IonButton onClick={doLogin} expand="full" color="success" shape="round" style={{ marginTop: '20px'  }}>
              Login
            </IonButton>
  
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
  <IonText style={{ display: 'inline' }}>
    Don't have an account?{' '}
  </IonText>
  <IonButton
    routerLink="/it35-lab/register"
    fill="clear"
    color="primary"
    size="small"
    shape="round"
    style={{
      display: 'inline',
      padding: '0',
      height: 'auto',
      fontSize: 'inherit',
      verticalAlign: 'baseline',
      textTransform: 'none',
      minWidth: 'unset',
    }}
  >
    Sign up now
  </IonButton>
</div>


          </div>
  
          {/* Alert and Toast */}
          <AlertBox message={alertMessage} isOpen={showAlert} onClose={() => setShowAlert(false)} />
  
          <IonToast
            isOpen={showToast}
            onDidDismiss={() => setShowToast(false)}
            message="Login successful! Redirecting..."
            duration={1500}
            position="top"
            color="primary"
          />
        </IonContent>
      </IonPage>
    );
  };
  
  export default Login;