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
import first from './media/first.png';
import bg from './media/Northern.jpg';
import second from './media/Screenshot.png';
const LandingPage: React.FC = () => {
  const history = useHistory();
  const images = [first, second];
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
                  style={{ width: '50px', height: '50px', borderRadius: '6px' }}
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
                  ECO <br /> LIFE
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
    fontSize: '50px',
    letterSpacing: '1px',
    color: '#2c6e49', 
    fontFamily: 'Georgia, serif',
    background: 'linear-gradient(90deg, #84c1a0, rgb(67, 180, 36))',
    WebkitBackgroundClip: 'text', 
    WebkitTextFillColor: 'transparent',
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)', 
    padding: '10px',
    textAlign: 'center',
    WebkitTextStroke: 'black 1px',
  }}
>
  Welcome to Ecolife
</h1>


            <p style={{  margin:'-30',fontSize: '14px',
    fontWeight: 'bold',
    fontFamily: 'Georgia, serif',
    color: 'green', 
    WebkitTextStroke: '0.5px darkgreen', 
    WebkitTextFillColor: 'black', 
    textShadow: '1px 1px 2px rgba(0,0,0,0.1)',}}>What is Carbon Footprint?</p>
            <p
  style={{
    fontSize: '14px',
    fontWeight: 'bold',
    fontFamily: 'Georgia, serif',
    color: 'green',
    WebkitTextStroke: '0.5px darkgreen', 
    WebkitTextFillColor: 'black',
    textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
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
   {images.map((imgSrc, i) => (
    <img
      key={i}
      src={imgSrc}
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
  src={bg}
  alt="Ecolife Logo Box Fullscreen"
  style={{
    width: '100vw',            
    height: '30vh',             
    objectFit: 'cover',        
    borderRadius: '0',         
    borderTop: '4px solid #2e7d32',
    borderBottom: '4px solid #2e7d32',
    boxShadow: '0 6px 12px rgba(0,0,0,0.25)',
    transition: 'transform 0.3s ease',
    marginBottom: '-50px',
  }}
  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.01)')}
  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
/>

</div>

          </section>

          <section id="about" style={{ padding: '16px',  }}>
          <h2
  style={{
    fontSize: '25px',
    fontWeight: 'bolder',
    color: '#2e7d32',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    
    marginBottom: '12px',
  }}
>
  About Carbon Footprint
</h2>

            <p style={{ fontSize: '14px', lineHeight: '1.6' }}>
            A carbon footprint measures the total greenhouse gas emissions, mainly carbon dioxide and methane, generated by an individual, institution, or community through various activities such as energy use, transportation, and consumption. At Northern Bukidnon State College (NBSC), understanding and managing our carbon footprint is essential as we strive to become a more environmentally responsible institution.

NBSC, located in a growing rural region, contributes to emissions through electricity usage, campus transportation, and daily operations. However, the college also has unique opportunities to lead in sustainable practices. Through awareness campaigns, eco-friendly campus initiatives, and integration of green practices in education and policy, NBSC is taking steps to reduce its environmental impact.

Promoting carbon awareness among students, faculty, and staff is key to fostering a culture of sustainability. As we continue to grow, managing NBSC’s carbon footprint supports not only climate action but also a healthier, greener future for the entire Bukidnon community.


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
              <p>
      Visit the <a href="https://nbsc.edu.ph/" target="_blank" rel="noopener noreferrer">NBSC Website</a>
    </p>
     <p>
      Visit the <a href="https://www.facebook.com/aparane" target="_blank" rel="noopener noreferrer">My Facebook account</a>
    </p>
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
