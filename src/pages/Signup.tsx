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
    IonFooter,
    IonModal,
    IonText
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { supabase } from '../utils/supabaseClient';

const Signup: React.FC = () => {
    const history = useHistory();
    const [regUsername, setRegUsername] = useState('');
    const [regPassword, setRegPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleRegister = async () => {
        if (regPassword !== confirmPassword) {
            setToastMessage("Passwords do not match!");
            setShowToast(true);
            return;
        }

        try {
            const { data, error } = await supabase.auth.signUp({
                email: regUsername,
                password: regPassword,
            });

            if (error) {
                setToastMessage(error.message);
                setShowToast(true);
                return;
            }

            setToastMessage("Account created successfully!");
            setShowToast(true);
            setShowModal(true);
        } catch (err) {
            setToastMessage("An error occurred. Please try again.");
            setShowToast(true);
        }
    };

    const handleConfirm = () => {
        setShowModal(false);
        history.push('/it35-lab');
    };

    const handleCancel = () => {
        setShowModal(false);
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Sign Up</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className='ion-padding'>
                <IonList>
                    <IonItem>
                        <IonLabel position="floating">Email</IonLabel>
                        <IonInput value={regUsername} onIonChange={e => setRegUsername(e.detail.value!)} />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Password</IonLabel>
                        <IonInput type="password" value={regPassword} onIonChange={e => setRegPassword(e.detail.value!)} />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Confirm Password</IonLabel>
                        <IonInput type="password" value={confirmPassword} onIonChange={e => setConfirmPassword(e.detail.value!)} />
                    </IonItem>
                </IonList>
                <IonButton onClick={handleRegister} expand="full">Create Account</IonButton>
                <IonButton onClick={() => history.push('/it35-lab')} expand="full" color="light">Back to Login</IonButton>
            </IonContent>
            <IonFooter>
                <IonToast
                    isOpen={showToast}
                    onDidDismiss={() => setShowToast(false)}
                    message={toastMessage}
                    duration={3000}
                />
            </IonFooter>

            <IonModal isOpen={showModal} onDidDismiss={handleCancel}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Confirm Registration</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonText>
                        <h2>Registration Successful!</h2>
                        <p>Do you want to proceed to the login page?</p>
                    </IonText>
                </IonContent>
                <IonFooter>
                    <IonButton expand="full" onClick={handleConfirm}>Yes</IonButton>
                    <IonButton expand="full" color="light" onClick={handleCancel}>No</IonButton>
                </IonFooter>
            </IonModal>
        </IonPage>
    );
};

export default Signup;