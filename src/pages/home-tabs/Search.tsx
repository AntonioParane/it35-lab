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
  IonSelect,
  IonSelectOption,
  IonInput,
  useIonToast
} from '@ionic/react';
import { useState } from 'react';
import { IonAlert } from '@ionic/react';

import { supabase } from '../../utils/supabaseClient'; // ✅ Supabase client import

const CarbonFootprint: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('fossilFuel');

  const [facility, setFacility] = useState('');
  const [hostel, setHostel] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [unit, setUnit] = useState('');
  const [amount, setAmount] = useState('');
  const [presentToast] = useIonToast();


const [electricityFacility, setElectricityFacility] = useState('');
const [electricityYear, setElectricityYear] = useState('');
const [electricityMonth, setElectricityMonth] = useState('');
const [electricityType, setElectricityType] = useState('');
const [electricitySource, setElectricitySource] = useState('');
const [electricityUnit, setElectricityUnit] = useState('');
const [electricityAmount, setElectricityAmount] = useState('');

const [travelFacility, setTravelFacility] = useState('');
const [travelYear, setTravelYear] = useState('');
const [travelMonth, setTravelMonth] = useState('');
const [transportMode, setTransportMode] = useState('');
const [distanceKM, setDistanceKM] = useState('');

const [trees, setTrees] = useState<number>(0);
const [soilArea, setSoilArea] = useState<number>(0);
const [grassArea, setGrassArea] = useState<number>(0);
const [waterArea, setWaterArea] = useState<number>(0);
const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const [isFinalized, setIsFinalized] = useState<boolean>(false);
const [finalResult, setFinalResult] = useState<number | null>(null);
  
  const handleSave = async () => {
    if (!facility || !hostel || !year || !month || !fuelType || !unit || !amount) {
      presentToast({
        message: 'Please fill all required fields (*)',
        duration: 2000,
        color: 'danger',
      });
      return;
    }

    const { data, error } = await supabase
      .from('fossil_fuel')
      .insert([{
        facility,
        hostel,
        year,
        month,
        fuel_type: fuelType,
        unit,
        amount_consumed: Number(amount),
      }]);

    if (error) {
      console.error('Error inserting data:', error.message);
      presentToast({
        message: `Failed to save: ${error.message}`,
        duration: 3000,
        color: 'danger',
      });
    } else {
      presentToast({
        message: 'Fossil Fuel data saved successfully!',
        duration: 2000,
        color: 'success',
      });
      // Optional: Reset form
      setFacility('');
      setHostel('');
      setYear('');
      setMonth('');
      setFuelType('');
      setUnit('');
      setAmount('');
    }
  };

const handleSaveElectricity = async () => {
  const { data, error } = await supabase.from('electricity').insert([
    {
      facility: electricityFacility,
      year: electricityYear,
      month: electricityMonth,
      electricity_type: electricityType,
      electricity_source: electricitySource,
      unit: electricityUnit,
      amount_consumed: electricityAmount
    }
  ]);

  if (error) {
    console.error('Insert error:', error);
    alert('Failed to save electricity data!');
  } else {
    console.log('Insert successful:', data);
    alert('Electricity data saved successfully!');
    // Optionally reset form
    setElectricityFacility('');
    setElectricityYear('');
    setElectricityMonth('');
    setElectricityType('');
    setElectricitySource('');
    setElectricityUnit('');
    setElectricityAmount('');
  }
};

const handleTravelSave = async () => {
  const { data, error } = await supabase.from('travel').insert([
    {
      facility: travelFacility,
      year: travelYear,
      month: travelMonth,
      transport_mode: transportMode,
      distance_km: parseFloat(distanceKM),
    },
  ]);

  if (error) {
    console.error('Error saving travel data:', error.message);
    alert('Failed to save travel data.');
  } else {
    alert('Travel data saved successfully!');
    // Optionally reset form
    setTravelFacility('');
    setTravelYear('');
    setTravelMonth('');
    setTransportMode('');
    setDistanceKM('');
  }
};const handleOffsetSave = async () => {
  // Ensure all values are numbers
  const treesPlanted = Number(trees);
  const soilAreaValue = Number(soilArea);
  const grassAreaValue = Number(grassArea);
  const waterAreaValue = Number(waterArea);

  const { data, error } = await supabase.from('off').insert([
    {
      facility,
      year,
      month,
      trees_planted: treesPlanted,
      area_soil: soilAreaValue,
      area_grass: grassAreaValue,
      area_water: waterAreaValue,
    },
  ]);

  if (error) {
    console.error('Insert error:', error);
    alert('Error saving offset data');
  } else {
    alert('Offset data saved successfully!');
    setShowPopUp(true);
  }
};

 const handleAddAnotherInstance = () => {
    // Clear the form so the user can add another instance
    setFacility('');
    setYear('');
    setMonth('');
    setTrees(0);
    setSoilArea(0);
    setGrassArea(0);
    setWaterArea(0);
    setShowPopUp(false); 
  };
const fetchAndCalculateResults = async () => {
  try {
    const { data: fossilData } = await supabase.from('fossil_fuel').select('*');
    const { data: electricityData } = await supabase.from('electricity').select('*');
    const { data: travelData } = await supabase.from('travel').select('*');
    const { data: offsetData } = await supabase.from('off').select('*');

    const fossilTotal = (fossilData || []).reduce((sum, item) => {
     
      return sum + 0; 
    }, 0);

    const electricityTotal = (electricityData || []).reduce((sum, item) => {
      return sum + 0; 
    }, 0);

    const travelTotal = (travelData || []).reduce((sum, item) => {
      return sum + 0; 
    }, 0);

    const offsetTotal = (offsetData || []).reduce((sum, item) => {
      return sum + 0; 
    }, 0);

    const total = fossilTotal + electricityTotal + travelTotal - offsetTotal;

    setFinalResult(total);

  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
 const handleFinaliseAndShowResults = async () => {
  await fetchAndCalculateResults();  // fetch data, calculate total
  setIsFinalized(true);
  setShowPopUp(false);
  alert('Finalized! You can now view the results.');
};
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
const handleInputChange = (setter: React.Dispatch<React.SetStateAction<number>>) => {
  return (e: any) => {
    const value = e.detail.value;
    setter(isNaN(value) ? 0 : parseFloat(value));
  };
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
            <ul>
              <li>Fill out each form and click <strong>'Save'</strong>.</li>
              <li>If no data, select any default and enter <strong>'0'</strong>.</li>
            </ul>
          </IonText>

          <IonButtons className="nav-buttons ion-margin-top">
            <IonButton fill="outline" onClick={() => handleTabChange('fossilFuel')} color={activeTab === 'fossilFuel' ? 'primary' : 'medium'}>
              Fossil Fuel
            </IonButton>
            <IonButton fill="outline" onClick={() => handleTabChange('electricity')} color={activeTab === 'electricity' ? 'primary' : 'medium'}>
              Electricity
            </IonButton>
            <IonButton fill="outline" onClick={() => handleTabChange('travel')} color={activeTab === 'travel' ? 'primary' : 'medium'}>
              Travel
            </IonButton>
            <IonButton fill="outline" onClick={() => handleTabChange('offset')} color={activeTab === 'offset' ? 'primary' : 'medium'}>
              Offset
            </IonButton>
          </IonButtons>

          <div className="tab-content ion-margin-top">
            {activeTab === 'fossilFuel' && (
              <div>
                <h3>Fossil Fuel</h3>

                <IonItem>
                  <IonLabel position="stacked">Facility*</IonLabel>
                  <IonSelect value={facility} placeholder="Choose Facility" onIonChange={e => setFacility(e.detail.value)}>
                    <IonSelectOption value="Residential Areas">Residential Areas</IonSelectOption>
                    <IonSelectOption value="Hostels">Hostels</IonSelectOption>
                    <IonSelectOption value="Academic Area">Academic Area</IonSelectOption>
                    <IonSelectOption value="Health Centre">Health Centre</IonSelectOption>
                    <IonSelectOption value="Schools">Schools</IonSelectOption>
                    <IonSelectOption value="Visitor's Hostel">Visitor's Hostel</IonSelectOption>
                    <IonSelectOption value="Servant's Quarters">Servant's Quarters</IonSelectOption>
                    <IonSelectOption value="Shops/Bank/PO">Shops/Bank/PO</IonSelectOption>
                    <IonSelectOption value="Lawns and Horticulture">Lawns and Horticulture</IonSelectOption>
                    <IonSelectOption value="Dhobhighat">Dhobhighat</IonSelectOption>
                    <IonSelectOption value="Others">Others</IonSelectOption>
                  </IonSelect>
                </IonItem>

                <IonItem>
                  <IonLabel position="stacked">Hostel*</IonLabel>
                  <IonInput value={hostel} placeholder="Enter hostel name or NA" onIonChange={e => setHostel(e.detail.value!)} />
                </IonItem>

                <IonItem>
                  <IonLabel position="stacked">Year*</IonLabel>
                  <IonSelect value={year} placeholder="Choose Year" onIonChange={e => setYear(e.detail.value)}>
                    <IonSelectOption value="2023">2023</IonSelectOption>
                    <IonSelectOption value="2024">2024</IonSelectOption>
                    <IonSelectOption value="2025">2025</IonSelectOption>
                  </IonSelect>
                </IonItem>

                <IonItem>
                  <IonLabel position="stacked">Month*</IonLabel>
                  <IonSelect value={month} placeholder="Choose Month" onIonChange={e => setMonth(e.detail.value)}>
                    {[
                      'January', 'February', 'March', 'April', 'May', 'June',
                      'July', 'August', 'September', 'October', 'November', 'December'
                    ].map(m => (
                      <IonSelectOption key={m} value={m}>{m}</IonSelectOption>
                    ))}
                  </IonSelect>
                </IonItem>

                <IonItem>
                  <IonLabel position="stacked">Fuel Type*</IonLabel>
                  <IonSelect value={fuelType} placeholder="Choose Fuel Type" onIonChange={e => setFuelType(e.detail.value)}>
                    <IonSelectOption value="diesel">Diesel</IonSelectOption>
                    <IonSelectOption value="petrol/Gasoline">Petrol/Gasoline</IonSelectOption>
                    <IonSelectOption value="naturalGas">Natural Gas</IonSelectOption>
                    <IonSelectOption value="CNG">CNG</IonSelectOption>
                    <IonSelectOption value="LPG">LPG</IonSelectOption>
                  </IonSelect>
                </IonItem>

                <IonItem>
                  <IonLabel position="stacked">Unit*</IonLabel>
                  <IonSelect value={unit} placeholder="Choose Unit" onIonChange={e => setUnit(e.detail.value)}>
                    <IonSelectOption value="liters">Liters</IonSelectOption>
                    <IonSelectOption value="gallons">Gallons</IonSelectOption>
                    <IonSelectOption value="kg">Kilograms</IonSelectOption>
                  </IonSelect>
                </IonItem>

                <IonItem>
                  <IonLabel position="stacked">Amount Consumed*</IonLabel>
                  <IonInput type="number" value={amount} placeholder="Enter amount consumed" onIonChange={e => setAmount(e.detail.value!)} />
                </IonItem>

                <IonButton expand="block" className="ion-margin-top" onClick={handleSave}>
                  Save
                </IonButton>
              </div>
            )}

           {activeTab === 'electricity' && (
  <div>
    <h3>Electricity</h3>

    <IonItem>
  <IonLabel position="stacked">Facility*</IonLabel>
  <IonSelect
    value={electricityFacility}
    placeholder="Choose Facility"
    onIonChange={e => setElectricityFacility(e.detail.value)}
  >
    <IonSelectOption value="Residential Areas">Residential Areas</IonSelectOption>
    <IonSelectOption value="Hostels">Hostels</IonSelectOption>
    <IonSelectOption value="Academic Area">Academic Area</IonSelectOption>
    <IonSelectOption value="Health Centre">Health Centre</IonSelectOption>
    <IonSelectOption value="Schools">Schools</IonSelectOption>
    <IonSelectOption value="Visitor's Hostel">Visitor's Hostel</IonSelectOption>
    <IonSelectOption value="Servant's Quarters">Servant's Quarters</IonSelectOption>
    <IonSelectOption value="Shops/Bank/PO">Shops/Bank/PO</IonSelectOption>
    <IonSelectOption value="Lawns and Horticulture">Lawns and Horticulture</IonSelectOption>
    <IonSelectOption value="Others">Others</IonSelectOption>
  </IonSelect>
</IonItem>


    <IonItem>
      <IonLabel position="stacked">Year*</IonLabel>
      <IonSelect value={electricityYear} placeholder="Choose Year" onIonChange={e => setElectricityYear(e.detail.value)}>
        <IonSelectOption value="2023">2023</IonSelectOption>
        <IonSelectOption value="2024">2024</IonSelectOption>
        <IonSelectOption value="2025">2025</IonSelectOption>
      </IonSelect>
    </IonItem>

    <IonItem>
      <IonLabel position="stacked">Month*</IonLabel>
      <IonSelect value={electricityMonth} placeholder="Choose Month" onIonChange={e => setElectricityMonth(e.detail.value)}>
        <IonSelectOption value="January">January</IonSelectOption>
        <IonSelectOption value="February">February</IonSelectOption>
        <IonSelectOption value="March">March</IonSelectOption>
        <IonSelectOption value="April">April</IonSelectOption>
        <IonSelectOption value="May">May</IonSelectOption>
        <IonSelectOption value="June">June</IonSelectOption>
        <IonSelectOption value="July">July</IonSelectOption>
        <IonSelectOption value="August">August</IonSelectOption>
        <IonSelectOption value="September">September</IonSelectOption>
        <IonSelectOption value="October">October</IonSelectOption>
        <IonSelectOption value="November">November</IonSelectOption>
        <IonSelectOption value="December">December</IonSelectOption>
      </IonSelect>
    </IonItem>

    <IonItem>
      <IonLabel position="stacked">Electricity Type*</IonLabel>
      <IonSelect value={electricityType} placeholder="Choose Electricity Type" onIonChange={e => setElectricityType(e.detail.value)}>
        <IonSelectOption value="Renewable">Renewable</IonSelectOption>
        <IonSelectOption value="Non-Renewable">Non-Renewable</IonSelectOption>
      </IonSelect>
    </IonItem>

    <IonItem>
      <IonLabel position="stacked">Electricity Source*</IonLabel>
      <IonSelect value={electricitySource} placeholder="Choose Electricity Source" onIonChange={e => setElectricitySource(e.detail.value)}>
        <IonSelectOption value="Solar">Solar</IonSelectOption>
        <IonSelectOption value="Grid">Grid</IonSelectOption>
        <IonSelectOption value="Diesel Generator">Diesel Generator</IonSelectOption>
        <IonSelectOption value="Wind">Wind</IonSelectOption>
        <IonSelectOption value="Hydro">Hydro</IonSelectOption>
        <IonSelectOption value="Other">Other</IonSelectOption>
      </IonSelect>
    </IonItem>

    <IonItem>
      <IonLabel position="stacked">Unit*</IonLabel>
      <IonSelect value={electricityUnit} placeholder="Choose Unit" onIonChange={e => setElectricityUnit(e.detail.value)}>
        <IonSelectOption value="kWh">kWh</IonSelectOption>
        <IonSelectOption value="MWh">MWh</IonSelectOption>
        <IonSelectOption value="Units">Units</IonSelectOption>
      </IonSelect>
    </IonItem>

    <IonItem>
      <IonLabel position="stacked">Amount Consumed*</IonLabel>
      <IonInput type="number" value={electricityAmount} placeholder="Enter amount" onIonChange={e => setElectricityAmount(e.detail.value!)} />
    </IonItem>

    <IonButton expand="block" className="ion-margin-top" onClick={handleSaveElectricity}>
      Save
    </IonButton>
  </div>
)}


            {activeTab === 'travel' && (
             <div>
  <h3>Travel</h3>

  {/* Facility */}
  <IonItem>
    <IonLabel position="stacked">Facility*</IonLabel>
    <IonSelect
      value={travelFacility}
      placeholder="Choose Facility"
      onIonChange={e => setTravelFacility(e.detail.value)}
    >
      <IonSelectOption value="Residential Areas">Residential Areas</IonSelectOption>
      <IonSelectOption value="Hostels">Hostels</IonSelectOption>
      <IonSelectOption value="Academic Area">Academic Area</IonSelectOption>
      <IonSelectOption value="Health Centre">Health Centre</IonSelectOption>
      <IonSelectOption value="Schools">Schools</IonSelectOption>
      <IonSelectOption value="Visitor's Hostel">Visitor's Hostel</IonSelectOption>
      <IonSelectOption value="Servant's Quarters">Servant's Quarters</IonSelectOption>
      <IonSelectOption value="Shops/Bank/PO">Shops/Bank/PO</IonSelectOption>
      <IonSelectOption value="Lawns and Horticulture">Lawns and Horticulture</IonSelectOption>
      <IonSelectOption value="Others">Others</IonSelectOption>
    </IonSelect>
  </IonItem>

  {/* Year */}
  <IonItem>
    <IonLabel position="stacked">Year*</IonLabel>
    <IonSelect
      value={travelYear}
      placeholder="Choose Year"
      onIonChange={e => setTravelYear(e.detail.value)}
    >
      <IonSelectOption value="2023">2023</IonSelectOption>
      <IonSelectOption value="2024">2024</IonSelectOption>
      <IonSelectOption value="2025">2025</IonSelectOption>
    </IonSelect>
  </IonItem>

  {/* Month */}
  <IonItem>
    <IonLabel position="stacked">Month*</IonLabel>
    <IonSelect
      value={travelMonth}
      placeholder="Choose Month"
      onIonChange={e => setTravelMonth(e.detail.value)}
    >
      <IonSelectOption value="January">January</IonSelectOption>
      <IonSelectOption value="February">February</IonSelectOption>
      <IonSelectOption value="March">March</IonSelectOption>
      <IonSelectOption value="April">April</IonSelectOption>
      <IonSelectOption value="May">May</IonSelectOption>
      <IonSelectOption value="June">June</IonSelectOption>
      <IonSelectOption value="July">July</IonSelectOption>
      <IonSelectOption value="August">August</IonSelectOption>
      <IonSelectOption value="September">September</IonSelectOption>
      <IonSelectOption value="October">October</IonSelectOption>
      <IonSelectOption value="November">November</IonSelectOption>
      <IonSelectOption value="December">December</IonSelectOption>
    </IonSelect>
  </IonItem>

  {/* Mode of Transport */}
  <IonItem>
    <IonLabel position="stacked">Mode of Transport*</IonLabel>
    <IonSelect
      value={transportMode}
      placeholder="Choose Mode of Transport"
      onIonChange={e => setTransportMode(e.detail.value)}
    >
      <IonSelectOption value="Bus">Bus</IonSelectOption>
      <IonSelectOption value="Car">Car</IonSelectOption>
      <IonSelectOption value="Motorcycle">Motorcycle</IonSelectOption>
      <IonSelectOption value="Train">Train</IonSelectOption>
      <IonSelectOption value="Bicycle">Bicycle</IonSelectOption>
      <IonSelectOption value="Walking">Walking</IonSelectOption>
      <IonSelectOption value="Others">Others</IonSelectOption>
    </IonSelect>
  </IonItem>

  {/* Distance */}
  <IonItem>
    <IonLabel position="stacked">Distance Travelled (KM)*</IonLabel>
    <IonInput
      type="number"
      value={distanceKM}
      placeholder="Enter Approximate Distance"
      onIonChange={e => setDistanceKM(e.detail.value!)}
    />
  </IonItem>

  <IonButton expand="block" className="ion-margin-top" onClick={() => handleTravelSave()}>
    Save
  </IonButton>
</div>

            )}

           {activeTab === 'offset' && (
  <div>
    <h3>Offset</h3>

        <IonItem>
          <IonLabel position="stacked">Facility*</IonLabel>
          <IonSelect value={facility} placeholder="Choose Facility" onIonChange={e => setFacility(e.detail.value)}>
            <IonSelectOption value="Residential Areas">Residential Areas</IonSelectOption>
            <IonSelectOption value="Hostels">Hostels</IonSelectOption>
            <IonSelectOption value="Academic Area">Academic Area</IonSelectOption>
            <IonSelectOption value="Health Centre">Health Centre</IonSelectOption>
            <IonSelectOption value="Schools">Schools</IonSelectOption>
            <IonSelectOption value="Visitor's Hostel">Visitor's Hostel</IonSelectOption>
            <IonSelectOption value="Servant's Quarters">Servant's Quarters</IonSelectOption>
            <IonSelectOption value="Shops/Bank/PO">Shops/Bank/PO</IonSelectOption>
            <IonSelectOption value="Lawns and Horticulture">Lawns and Horticulture</IonSelectOption>
            <IonSelectOption value="Others">Others</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Year*</IonLabel>
          <IonSelect value={year} placeholder="Choose Year" onIonChange={e => setYear(e.detail.value)}>
            <IonSelectOption value="2023">2023</IonSelectOption>
            <IonSelectOption value="2024">2024</IonSelectOption>
            <IonSelectOption value="2025">2025</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Month*</IonLabel>
          <IonSelect value={month} placeholder="Choose Month" onIonChange={e => setMonth(e.detail.value)}>
            {["January", "February", "March", "April", "May", "June", "July", 
              "August", "September", "October", "November", "December"].map((m) => (
              <IonSelectOption key={m} value={m}>{m}</IonSelectOption>
            ))}
          </IonSelect>
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Number of Trees in the Facility*</IonLabel>
          <IonInput type="number" value={trees} onIonChange={handleInputChange(setTrees)} />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Area Covered Under Soil (m²)*</IonLabel>
          <IonInput type="number" value={soilArea} onIonChange={handleInputChange(setSoilArea)} />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Area Covered Under Grass (m²)*</IonLabel>
          <IonInput type="number" value={grassArea} onIonChange={handleInputChange(setGrassArea)} />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Area Covered Under Water (m²)*</IonLabel>
          <IonInput type="number" value={waterArea} onIonChange={handleInputChange(setWaterArea)} />
        </IonItem>

        <IonButton expand="block" className="ion-margin-top" onClick={handleOffsetSave}>
          Save
        </IonButton>

        {/* Pop-up with buttons after save */}
        {showPopUp && !isFinalized && (
          <IonAlert
            isOpen={showPopUp}
            onDidDismiss={() => setShowPopUp(false)}
            header="Save Successful"
            message="Choose an option:"
            buttons={[
              {
                text: 'Add Another Instance',
                handler: handleAddAnotherInstance,
              },
              {
                text: 'Finalise and Show Results',
                handler: handleFinaliseAndShowResults,
                
              },
            ]}
          />
        )}
      </div>
      
)}
{isFinalized && finalResult !== null && (
  <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
    <h2>Your Total Carbon Footprint</h2>
    <p>{finalResult.toFixed(2)} kg CO₂e</p>
  </div>
)}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CarbonFootprint;
