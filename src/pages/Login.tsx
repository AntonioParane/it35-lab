import React, { useState } from 'react';
import {
    IonButton,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonToast,
    IonFooter
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { supabase } from '../utils/supabaseClient';
import Life from './Life.png'

const Login: React.FC = () => {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const doLogin = async () => {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: username,
                password: password,
            });

            if (error) {
                setToastMessage("Invalid username or password.");
                setShowToast(true);
                return;
            }

            setToastMessage("Login Successful!");
            setShowToast(true);

            setTimeout(() => {
                history.push('/it35-lab/app');
            }, 2000);

        } catch (err) {
            setToastMessage("An error occurred. Please try again.");
            setShowToast(true);
        }
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding" fullscreen>
                <div
                    style={{
                        maxWidth: '450px',
                        margin: 'auto',
                        marginTop: '60px',
                        padding: '24px',
                        backgroundColor: '#ffffff',
                        borderRadius: '16px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                        textAlign: 'center'
                    }}
                >
                    {/* 👇 Logo Image */}
                    <img
                        src={Life}
                        alt="App Logo"
                        style={{ width: '120px', height: '120px', objectFit: 'contain', marginBottom: '20px' }}
                    />

                    <h2 style={{ marginBottom: '20px' }}>Login</h2>

                    <IonList>
                        <IonItem>
                            <IonLabel position="floating">Email</IonLabel>
                            <IonInput value={username} onIonChange={e => setUsername(e.detail.value!)} />
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Password</IonLabel>
                            <IonInput type="password" value={password} onIonChange={e => setPassword(e.detail.value!)} />
                        </IonItem>
                    </IonList>

                    <IonButton onClick={doLogin} expand="full" style={{ marginTop: '20px' }}>Login</IonButton>
                    <IonButton onClick={() => history.push('/signup')} expand="full" color="secondary">Register</IonButton>
                </div>
            </IonContent>

            <IonFooter>
                <IonToast
                    isOpen={showToast}
                    onDidDismiss={() => setShowToast(false)}
                    message={toastMessage}
                    duration={2000}
                />
            </IonFooter>
        </IonPage>
    );
};

export default Login;
