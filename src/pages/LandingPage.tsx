import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonFooter,
  IonButtons,
  IonMenu,
  IonList,
  IonItem,
  IonLabel,
  IonMenuButton,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import lifeImg from './media/Life.png';
const LandingPage: React.FC = () => {
  const history = useHistory();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Sidebar Menu */}
      <IonMenu side="start" menuId="main-menu" contentId="main-content">
        <IonHeader>
          <IonToolbar color="success">
          <IonTitle>
              <div style={{ display: 'flex', margin:'10px',alignItems: 'center', gap: '5px' }}>
              
                <span
                  style={{
                    fontWeight: 'bolder',
                    fontSize: '30px',
                    letterSpacing: '3px',
                    color: 'black',
                    fontFamily: 'Montserrat, sans-serif',
                    WebkitTextStroke: '1px black',
                    background: 'linear-gradient(90deg, #00c853, #b2ff59)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
                  }}
                >
                 Menu
                </span>
              </div>
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          {/* Logo in menu */}
          <div style={{ textAlign: 'center', margin: '20px 0' }}>
            <img
              src={lifeImg}
              alt="Ecolife Logo"
              style={{ width: '80px', height: '80px', borderRadius: '50%' }}
            />
          </div>

          <IonList>
            <IonItem button onClick={() => scrollTo('home')}>
              <IonLabel>Home</IonLabel>
            </IonItem>
            <IonItem button onClick={() => scrollTo('about')}>
              <IonLabel>About Us</IonLabel>
            </IonItem>
            <IonItem button onClick={() => scrollTo('connect')}>
              <IonLabel>Connect Us</IonLabel>
            </IonItem>
            <IonItem button onClick={() => scrollTo('contact')}>
              <IonLabel>Contact Us</IonLabel>
            </IonItem>
            <IonButton
              expand="block"
              fill="solid"
              color="primary"
              onClick={() => history.push('/it35-lab/login')}
              style={{ marginTop: '10px' }}
            >
              Login
            </IonButton>
            <IonButton
              expand="block"
              fill="solid"
              color="secondary"
              onClick={() => history.push('/it35-lab/register')}
              style={{ marginTop: '10px' }}
            >
              Signup
            </IonButton>
          </IonList>
        </IonContent>
      </IonMenu>

      {/* Main Content */}
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar color="success">
            <IonButtons slot="start">
              <IonMenuButton autoHide={false} className="ion-hide-md-up" />
            </IonButtons>

            <IonTitle>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img
                  src={lifeImg}
                  alt="Ecolife Logo"
                  style={{ width: '32px', height: '32px', borderRadius: '6px' }}
                />
                <span
                  style={{
                    fontWeight: 'bolder',
                    fontSize: '30px',
                    letterSpacing: '3px',
                    color: 'black',
                    fontFamily: 'Montserrat, sans-serif',
                    WebkitTextStroke: '1px black',
                    background: 'linear-gradient(90deg, #00c853, #b2ff59)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  Ecolife
                </span>
              </div>
            </IonTitle>

            <IonButtons slot="end" className="ion-hide-sm-down" style={{ gap: '8px' }}>
              <IonButton fill="clear" onClick={() => scrollTo('home')}>Home</IonButton>
              <IonButton fill="clear" onClick={() => scrollTo('about')}>About Us</IonButton>
              <IonButton fill="clear" onClick={() => scrollTo('connect')}>Connect Us</IonButton>
              <IonButton fill="clear" onClick={() => scrollTo('contact')}>Contact Us</IonButton>
              <IonButton fill="outline" size="small" onClick={() => history.push('/it35-lab/login')}>
                Login
              </IonButton>
              <IonButton fill="solid" color="success" size="small" onClick={() => history.push('/it35-lab/register')}>
                Signup
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding">
          <section id="home" style={{ padding: '16px', textAlign: 'center', color: 'darkgreen' }}>
          <h1
  style={{
    fontWeight: 'bolder',
    fontSize: '36px',
    letterSpacing: '2px',
    color: '#2c6e49', // Earthy green color
    fontFamily: 'Georgia, serif', // A more natural and organic font family
    background: 'linear-gradient(90deg, #84c1a0, rgb(67, 180, 36))', // Green gradient like leaves
    WebkitBackgroundClip: 'text', 
    WebkitTextFillColor: 'transparent',
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)', // Slight shadow for texture
    padding: '10px',
    textAlign: 'center',
    WebkitTextStroke: '2pxrgb(9, 10, 9)', // Adding a dark green stroke around the text
  }}
>
  Welcome to Ecolife
</h1>


            <p style={{  margin:'-30',fontSize: '14px',
    fontWeight: 'bold',
    fontFamily: 'Georgia, serif',
    color: 'green', // Fallback
    WebkitTextStroke: '0.5px darkgreen', // Thin dark green stroke
    WebkitTextFillColor: 'black', // Fill color to enable stroke visibility
    textShadow: '1px 1px 2px rgba(0,0,0,0.1)',}}>What is Carbon Footprint?</p>
            <p
  style={{
    fontSize: '14px',
    fontWeight: 'bold',
    fontFamily: 'Georgia, serif',
    color: 'green', // Fallback
    WebkitTextStroke: '0.5px darkgreen', // Thin dark green stroke
    WebkitTextFillColor: 'black', // Fill color to enable stroke visibility
    textShadow: '1px 1px 2px rgba(0,0,0,0.1)', // Optional: subtle shadow for depth
  }}
>
  Get to know your Carbon Footprint using our Calculator.
</p>
<div
  style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    margin: '30px 0',
  }}
>
  {/* Top Row: 2 Circular Images */}
  <div
    style={{
      display: 'flex',
      gap: '5vw',
      justifyContent: 'center',
      flexWrap: 'wrap',
    }}
  >
    {[1, 2].map((_, i) => (
      <img
        key={i}
        src={lifeImg}
        alt={`Ecolife Logo ${i + 1}`}
        style={{
          width: '25vw',
          maxWidth: '140px',
          minWidth: '80px',
          aspectRatio: '1/1',
          borderRadius: '50%',
          border: '4px solid #4caf50',
          boxShadow: '0 6px 12px rgba(0,0,0,0.25)',
          transition: 'transform 0.3s ease',
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      />
    ))}
  </div>

  {/* Fullscreen Width Boxed Image */}
<img
  src={lifeImg}
  alt="Ecolife Logo Box Fullscreen"
  style={{
    width: '100vw',               // full screen width
    height: '25vh',               // responsive height (35% of viewport height)
    objectFit: 'cover',           // crop image nicely
    borderRadius: '0',            // remove rounding for edge-to-edge look
    borderTop: '4px solid #2e7d32',
    borderBottom: '4px solid #2e7d32',
    boxShadow: '0 6px 12px rgba(0,0,0,0.25)',
    transition: 'transform 0.3s ease',
  }}
  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.01)')}
  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
/>

</div>

          </section>

          <section id="about" style={{ padding: '16px', color: 'darkgreen' }}>
            <h2>About Carbon Footprint</h2>
            <p style={{ fontSize: '14px', lineHeight: '1.6' }}>
              A carbon footprint is the total greenhouse gas emissions caused directly and indirectly by an individual, organization, event, or product.
            </p>
          </section>

          <section id="connect" style={{ padding: '16px', color: 'darkgreen' }}>
            <h2>Connect With Us</h2>
            <p>Follow us on social media or reach out via email for collaboration opportunities.</p>
          </section>

          <section id="contact" style={{ padding: '16px', color: 'darkgreen' }}>
            <h2>Contact Us</h2>
            <p>Email: info@ecolife.org</p>
            <p>Phone: +123 456 7890</p>
          </section>

          <section id="calculate" style={{ padding: '16px', textAlign: 'center', color: 'darkgreen' }}>
            <h2>Calculate Your Carbon Footprint</h2>
            <IonButton color="success" onClick={() => alert('Get Started!')} style={{ marginTop: '10px' }}>
              Get Started
            </IonButton>
            <div style={{ marginTop: '20px' }}>
              <input type="file" accept=".xlsx, .xls" />
              <br />
              <IonButton style={{ marginTop: '10px' }} color="medium" onClick={() => alert('Downloading Template...')}>
                Download Excel Template
              </IonButton>
            </div>
          </section>
        </IonContent>

        <IonFooter>
          <div style={{ textAlign: 'center', fontSize: '14px', padding: '10px', backgroundColor: '#f1f1f1' }}>
            © 2025 Ecolife
          </div>
        </IonFooter>
      </IonPage>
    </>
  );
};

export default LandingPage;
