import React, { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../AuthContext";
import Navbar from "./Navbar";
import Footer from "./Footer";

const UpdateProduct = (props) => {
  const { user } = useAuth();
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [targa, setTarga] = useState("");
  const [shasia, setShasia] = useState("");
  const [vitiProdhimit, setVitiProdhimit] = useState("");
  const [brandi, setBrandi] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState("");
  const [qyteti, setQyteti] = useState("");
  const [fuel, setFuel] = useState("");
  const [selectedFuel, setSelectedFuel] = useState("");

  const [cylinderVolumeInLiters, setCylinderVolumeInLiters] = useState("");
  const [powerInHp, setPowerInHp] = useState("");
  const [co2EmissionsIgKm, setCo2EmissionsIgKm] = useState("");
  const [gearbox, setGearbox] = useState("");
  const [gearboxDesignation, setGearboxDesignation] = useState("");
  const [wheelDrive, setWheelDrive] = useState("");
  const [wheelDriveDesignation, setWheelDriveDesignation] = useState("");
  const [numberOfSeats, setNumberOfSeats] = useState("");
  const [bodyType, setBodyType] = useState("");

  const [numberOfDoors, setNumberOfDoors] = useState("");
  const [netWeightInKg, setNetWeightInKg] = useState("");
  const [mainColor, setMainColor] = useState("");
  const [colorDescription, setColorDescription] = useState("");
  const [interiorColor, setInteriorColor] = useState("");
  const [exterior, setExterior] = useState({
    "electricalMirrors": false,
    "frontParkingSensor": false,
    "lightSensor": false,
    "rainSensor": false,
    "rearParkingSensor": false,
    "reversingCamera": false,
    "darkWindowsBehind": false,
    // "hangerFixedHook": false,
    // "ledLights": false,
    // "metallicPaint": false,
    // "lightweightRimWinter": false,


    // "winterWheels": false,
    // "roofRails": false,
    // "allSeasonTires ": false,
    // "laserLight": false,
    // "cargoHolders": false,

    // "lightweightRimSummer": false,
    // "summerWheels": false,
    // "xenonLights": false,
    // "trailerAttachment": false,
  });

  const [driverAssistance, setDriverAssistance] = useState({
    // "highBeamAssistant": false,
    
  });
  const [interior, setInterior] = useState({
    // "electricWindows": false,
    // "seatsInFullLeather": false,
   
    
    
    // "sportsSeats": false,
  });
  const [comfort, setComfort] = useState({
    "airConditioning": false,
    "cruiseControlAdaptive": false,
    "seatsInPartialLeather": false,
    "sunroofGlass": false,
    // "middleArms": false,
    "keylessStart": false,
    // "trunkCover": false,
    "electricalSeatWithMemory": false,
    // "cabinHeater": false,
    // "engineHeater": false,
    "heatedSeats": false,
    "cruiseControl": false,
    "electricSeatWithMemory": false,
    "airSuspension": false,
    "antiSpin": false,
    // "levelRegulation": false,
  });
  const [mediaEntertainment, setMediaEntertainment] = useState({
    "auxInput": false,
    // "handsfreeScheme": false,
    // "multifunctionSteeringWheel": false,
    // "radioDABPlus": false,
    "bluetooth": false,
    "headUpDisplay": false,
    "navigationSystem": false,
    "radioFM": false,
    "cdPlayer": false,
    // "cassettePlayer": false,
    // "originalPhone": false,
    // "tvScreenInTheBackSeat": false,
  });
  const [engineDrive, setEngineDrive] = useState({
    // "antiScratch": false,
    // "diffLock": false,
    
    // "tripComputer": false,
    // "dieselParticulateFilter": false,
    // "powerSteering": false,
  });
  const [security, setSecurity] = useState({
    "absBrakes": false,
    // "retrievalSystem": false,
    // "sideAirbags": false,
    // "frontAirbag": false,
    // "isofix": false,
    // "immobilizer": false,
    "alarm": false,
    "centralLocking": false,
  });
  const [kilometrat, setKilometrat] = useState("");
  const [carDamage, setCarDamage] = useState("");
  const [damageDetails, setDamageDetails] = useState("");
  const [image, setImage] = useState("");
  const [imageDescription, setImageDescription] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [number, setNumber] = useState("");
  const userId = localStorage.getItem('userId');




  useEffect(() => {
    axios.get(`http://localhost:8000/forms/${id}`, {
        withCredentials: true,
  },{
    headers: {
     
      'Content-Type': 'multipart/form-data'
  }} )
    .then((res) => {
      console.log(res.data);
      setTarga(res.data.targa);
      setShasia(res.data.shasia);
      setVitiProdhimit(res.data.vitiProdhimit);
      setSelectedBrand(res.data.brandi);
      setSelectedModel(res.data.modeli);
      setQyteti(res.data.qyteti);
      setCylinderVolumeInLiters(res.data.cylinderVolumeInLiters);
      setPowerInHp(res.data.powerInHp);
      setCo2EmissionsIgKm(res.data.co2EmissionsIgKm);
      setGearbox(res.data.gearbox);
      setGearboxDesignation(res.data.gearboxDesignation);
      setWheelDrive(res.data.wheelDrive);
      setWheelDriveDesignation(res.data.wheelDriveDesignation);
      setNumberOfSeats(res.data.numberOfSeats);
      setNumberOfDoors(res.data.numberOfDoors);
      setNetWeightInKg(res.data.netWeightInKg);
      setMainColor(res.data.mainColor);
      setColorDescription(res.data.colorDescription);
      setInteriorColor(res.data.interiorColor);
      setExterior(res.data.exterior);
      setDriverAssistance(res.data.driverAssistance);
      setInterior(res.data.interior);
      setComfort(res.data.comfort);
      setMediaEntertainment(res.data.mediaEntertainment);
      setEngineDrive(res.data.engineDrive);
      setSecurity(res.data.security);
      setKilometrat(res.data.kilometrat);
      setCarDamage(res.data.carDamage);
      setDamageDetails(res.data.damageDetails);
      setImage(res.data.image);
      setImageDescription(res.data.imageDescription);
      setDescription(res.data.description);
      setPrice(res.data.price);
      setContactInfo(res.data.contactInfo);
      setStreetAddress(res.data.streetAddress);
      setNumber(res.data.number);
      setBodyType(res.data.bodyType);
      setSelectedFuel(res.data.fuel);


      
    }
    )
    .catch((err) => {
      console.log(err);
    });
  }, []);








  const UpdateProduct =  (e) => {
    e.preventDefault();
    const updatedForm = {
      targa,
      shasia,
      vitiProdhimit,
      brandi: selectedBrand,
      modeli: selectedModel,
      qyteti,
      fuel:selectedFuel,
      cylinderVolumeInLiters,
      powerInHp,
      co2EmissionsIgKm,
      gearbox,
      wheelDrive,
      bodyType,
      numberOfSeats,
      numberOfDoors,
      netWeightInKg,
      mainColor,
      interiorColor,
      exterior,
      driverAssistance,
      interior,
      comfort,
      mediaEntertainment,
      engineDrive,
      security,
      kilometrat,
      carDamage,
      damageDetails,
   image: image.name,image,
      imageDescription,
      description,
      price,
      contactInfo,
      streetAddress,
      number,
      userId: userId
    }
    console.log(updatedForm);
    axios.put(`http://localhost:8000/forms/${id}`, updatedForm, {
      withCredentials: true,
    })
    .then((res) => {
      console.log(res.data.form);
    if (
      shasia.length < 3 ||
      targa.length < 3 ||
      vitiProdhimit.length < 3 ||
      qyteti.length < 3
    ) {
      alert("Please fill in all the required fields");
    } else {
      setTarga("");
      setShasia("");
      setVitiProdhimit("");
      setSelectedBrand("");
      setSelectedModel("");
      setQyteti("");
      setSelectedFuel("");
      setBodyType("");
      setCylinderVolumeInLiters("");
      setPowerInHp("");
      setCo2EmissionsIgKm("");
      setGearbox("");
      setGearboxDesignation("");
      setWheelDrive("");
      setWheelDriveDesignation("");
      setNumberOfSeats("");
      setNumberOfDoors("");
      setNetWeightInKg("");
      setMainColor("");
      setColorDescription("");
      setInteriorColor("");
      setExterior({
        "electricalMirrors": false,
        "darkWindowsBehind": false,
        "frontParkingSensor": false,
    "lightSensor": false,
    "rainSensor": false,
    "rearParkingSensor": false,
    "reversingCamera": false,
    // "hangerFixedHook": false,
    // "ledLights": false,
    // "metallicPaint": false,
    // "lightweightRimWinter": false,


    // "winterWheels": false,
    // "roofRails": false,
    // "allSeasonTires ": false,
    // "laserLight": false,
    // "cargoHolders": false,

    // "lightweightRimSummer": false,
    // "summerWheels": false,
    // "xenonLights": false,
    // "trailerAttachment": false,
      });
      setDriverAssistance({
        // "highBeamAssistant": false,
    
      });
      setInterior({
        // "electricWindows": false,
    // "seatsInFullLeather": false,
    
    
    // "sportsSeats": false,
      });
      setComfort({
        "airConditioning": false,
        "cruiseControlAdaptive": false,
        // "middleArms": false,
        "keylessStart": false,
        // "trunkCover": false,
        "electricalSeatWithMemory": false,
        // "cabinHeater": false,
        // "engineHeater": false,
        "heatedSeats": false,
        "cruiseControl": false,
        "electricSeatWithMemory": false,
        "airSuspension": false,
        "antiSpin": false,
        "sunroofGlass": false,
     "seatsInPartialLeather": false,
        // "levelRegulation": false,
      });
      setMediaEntertainment({
        "auxInput": false,
    // "handsfreeScheme": false,
    // "multifunctionSteeringWheel": false,
    // "radioDABPlus": false,
    "bluetooth": false,
    "headUpDisplay": false,
    "navigationSystem": false,
    "radioFM": false,
    "cdPlayer": false,
    // "cassettePlayer": false,
    // "originalPhone": false,
    "tvScreenInTheBackSeat": false,
      });
      setEngineDrive({
    //     "antiScratch": false,
    // "diffLock": false,
    
    // "tripComputer": false,
    // "dieselParticulateFilter": false,
    // "powerSteering": false,
  });
      setSecurity({
        "absBrakes": false,
        // "retrievalSystem": false,
        // "sideAirbags": false,
        // "frontAirbag": false,
        // "isofix": false,
        // "immobilizer": false,
        "alarm": false,
        "centralLocking": false,
      }); 
      setKilometrat("");
      setCarDamage("");
      setDamageDetails("");
      setImage("");
      setImageDescription("");
      setDescription("");
      setPrice("");
      setContactInfo("");
      setStreetAddress("");
      setNumber("");

      navigate("/myprofile");
    }
  })
  .catch((err) => {
    console.log(err);
  });
  };



  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setExterior((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
    const allOtherChecked = Object.values(exterior).every((value, key) => key !== name && value);
    if (!checked && allOtherChecked) {
      setExterior((prevState) => ({
        ...prevState,
        selectAllExteriorCheckbox: false,
      }));
    }
  };
  const handleSelectAllExterior = (event) => {
    const { checked } = event.target;
    const updatedExterior = {};
    for (const key in exterior) {
      updatedExterior[key] = checked;
    }
    setExterior(updatedExterior);
  };

    const handleCheckboxChange1 = (event) => {
      const { name, checked } = event.target;
      setDriverAssistance((prevState) => ({
        ...prevState,
        [name]: checked,
      }));
      const allOtherChecked = Object.values(driverAssistance).every((value, key) => key !== name && value);
      if (!checked && allOtherChecked) {
        setDriverAssistance((prevState) => ({
          ...prevState,
          selectAllDriverAssistanceCheckbox: false,
        }));
      }
    };

      const handleSelectAllDriverAssistance = (event) => {
        const { checked } = event.target;
        const updatedDriverAssistance = {};
        for (const key in driverAssistance) {
          updatedDriverAssistance[key] = checked;
        }
        setDriverAssistance(updatedDriverAssistance);
      };


      const handleCheckboxChange2 = (event) => {
        const { name, checked } = event.target;
        setInterior((prevState) => ({
          ...prevState,
          [name]: checked,
        }));
        const allOtherChecked = Object.values(interior).every((value, key) => key !== name && value);
        if (!checked && allOtherChecked) {
          setInterior((prevState) => ({
            ...prevState,
            selectAllInteriorCheckbox: false,
          }));
        }
      };

      const handleSelectAllInterior = (event) => {
        const { checked } = event.target;
        const updatedInterior = {};
        for (const key in interior) {
          updatedInterior[key] = checked;
        }
        setInterior(updatedInterior);
      };



        const handleCheckboxChange3 = (event) => {
          const { name, checked } = event.target;
          setComfort((prevState) => ({
            ...prevState,
            [name]: checked,
          }));
          const allOtherChecked = Object.values(comfort).every((value, key) => key !== name && value);
          if (!checked && allOtherChecked) {
            setComfort((prevState) => ({
              ...prevState,
              selectAllComfortCheckbox: false,
            }));
          }
        }
        const handleSelectAllComfort = (event) => {
          const { checked } = event.target;
          const updatedComfort = {};
          for (const key in comfort) {
            updatedComfort[key] = checked;
          }
          setComfort(updatedComfort);
        };



          const handleCheckboxChange4= (event) => {
            const { name, checked } = event.target;
            setMediaEntertainment((prevState) => ({
              ...prevState,
              [name]: checked,
            }));
            const allOtherChecked = Object.values(mediaEntertainment).every((value, key) => key !== name && value);
            if (!checked && allOtherChecked) {
              setMediaEntertainment((prevState) => ({
                ...prevState,
                selectAllMediaEntertainmentCheckbox: false,
              }));
            }
          }
          const handleSelectAllMediaEntertainment = (event) => {
            const { checked } = event.target;
            const updatedMediaEntertainment = {};
            for (const key in mediaEntertainment) {
              updatedMediaEntertainment[key] = checked;
            }
            setMediaEntertainment(updatedMediaEntertainment);
          };
      

          const handleCheckboxChange5 = (event) => {
              const { name, checked } = event.target;
              setEngineDrive((prevState) => ({
                ...prevState,
                [name]: checked,
              }));
              const allOtherChecked=Object.values(engineDrive).every((value,key)=>key !== name&&value);
              if(!checked&&allOtherChecked){
                setEngineDrive((prevState)=>({
                  ...prevState,
                  selectAllEngineDriveCheckbox:false,
                }));
            }
            }
            const handeSelectAllEngineDrive=(event)=>{
              const {checked}=event.target;
              const updatedEngineDrive={};
              for(const key in engineDrive){
                updatedEngineDrive[key]=checked;
              }
              setEngineDrive(updatedEngineDrive);
            }


                const handleCheckboxChange6= (event) => {
                  const { name, checked } = event.target;
                  setSecurity((prevState) => ({
                    ...prevState,
                    [name]: checked,
                  }));
                  const allOtherChecked = Object.values(security).every((value, key) => key !== name && value);
                  if (!checked && allOtherChecked) {
                    setSecurity((prevState) => ({
                      ...prevState,
                      selectAllSecurityCheckbox: false,
                    }));
                  } 
                 };
                const handleSelectAllSecurity = (event) => {
                  const { checked } = event.target;
                  const updatedSecurity = {};
                  for (const key in security) {
                    updatedSecurity[key] = checked;
                  }
                  setSecurity(updatedSecurity);
                };

              const handleFileChange = (event) => {
                const files = event.target.files;
            
                // Validate selection within limit and file types
                if (files.length + selectedFiles.length > 20) {
                  console.error('Maximum 20 photos allowed.');
                  return;
                }
            
                for (const file of files) {
                  if (!file.type.startsWith('image/')) {
                    console.error('Please select only image files.');
                    continue;
                  }
            
                  setSelectedFiles((prevFiles) => [...prevFiles, file]);
                }
              };
            
              const removePhoto = (index) => {
                setSelectedFiles([...selectedFiles.slice(0, index), ...selectedFiles.slice(index + 1)]);
              };
            
  



  
  

    
  return (
    <>
      <header>
        <Navbar />
      </header>

      <form onSubmit={UpdateProduct}>
      <div className="containe">
            <div className="col-md-6 " style={{marginLeft:"300px"}} >
              <div className="form-group">
                <label htmlFor="targa">Number Plate</label>
                <input type="text" className="form-control"id="targa" value={targa} onChange={(e) => setTarga(e.target.value)} />
              </div>
              <div className="form-group ">
                <label htmlFor="shasia " className="mr-2">Chassis Nr.</label>
                <input type="text" className="form-control" id="shasia" value={shasia} onChange={(e) => setShasia(e.target.value)} />
               
              </div>
              <div className="form-group">
                <label htmlFor="vitiProdhimit">Year Model</label>
                <select type="text" className="form-control" id="vitiProdhimit" value={vitiProdhimit} onChange={(e) => setVitiProdhimit(e.target.value)} >
                  <option value="" disabled>Select a year</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                  <option value="2012">2012</option>
                  <option value="2011">2011</option>
                  <option value="2010">2010</option>
                  <option value="2009">2009</option>
                  <option value="2008">2008</option>
                  </select>
              </div>
              <div className="form-group">
                <label htmlFor="brandi">Brand</label>
                <select
                  id="selectedBrand" value={selectedBrand} onChange={(e)=>setSelectedBrand(e.target.value)} className="form-control" >
                 
                  <option value="">Brand Model</option>
                  <option value="BMW">BMW</option>
                  <option value="Mercedes-Benz">Mercedes-Benz</option>
                  <option value="Audi">Audi</option>

                  <option value="Tesla">Tesla</option>
                  <option value="Ferrari">Ferrari</option>
                  <option value="Ford">Ford</option>
                  <option value="Porsche">Porsche</option>
                  <option value="Honda">Honda</option>
                  <option value="Lamborghini">Lamborghini</option>
                  <option value="Toyota">Toyota</option>
                  <option value="Bently">Bently</option>
                  <option value="Maserati">Maserati</option>
                  <option value="Jeep">Jeep</option>
                  <option value="Subaru">Subaru</option>
                  <option value="Cadillac">Cadillac</option>
                  <option value="Chrysler">Chrysler</option>
                  <option value="Chevrolet Corvette">Chevrolet Corvette</option>
                  <option value="Dodge">Dodge</option>
                  <option value="Hyundai">Hyundai</option>
                  <option value="Jaguar">Jaguar</option>
                  <option value="Mazda">Mazda</option>
                  <option value="Ford Mustand">Ford Mustand</option>
                  <option value="Nissan">Nissan</option>
                  <option value="Alfa Romeo">Alfa Romeo</option>
                                      {/* <option value="Bugatti">Bugatti</option>
                      <option value="Buick">Buick</option>
                      <option value="Lexus">Lexus</option>
                      <option value="Rolls-Royce">Rolls-Royce</option>
                      <option value="Acura">Acura</option>
                      <option value="Aston Martin">Aston Martin</option>
                      <option value="Chevrolet">Chevrolet</option>
                      <option value="Kia">Kia</option>
                      <option value="Volkswagen">Volkswagen</option>
                      <option value="Volvo">Volvo</option>
                      <option value="McLaren">McLaren</option>
                      <option value="Mitsubishi">Mitsubishi</option>
                      <option value="GMC">GMC</option>
                      <option value="Infiniti">Infiniti</option>
                      <option value="Lincoln">Lincoln</option>
                      <option value="Peugeot">Peugeot</option>
                      <option value="Pontiac">Pontiac</option>
                      <option value="Saab">Saab</option>
                      <option value="Genesis">Genesis</option>
                      <option value="Suzuki">Suzuki</option>
                      <option value="Citroen">Citroen</option>
                      <option value="Fiat">Fiat</option>
                      <option value="Lotus">Lotus</option>
                      <option value="Mini">Mini</option>
                      <option value="Peterbilt">Peterbilt</option>
                      <option value="Saturn">Saturn</option>
                      <option value="BMW M">BMW M</option>
                      <option value="General Motors">General Motors</option>
                      <option value="Kenworth">Kenworth</option>
                      <option value="KMT">KMT</option> */}
                </select>


      
                <div>
                  {
                    selectedBrand==="" ? null : <label htmlFor="Model" >Brand Model</label>
                  }
                  {selectedBrand === "Audi" && (
                    <select  id="selectedModel"  value={selectedModel}  onChange={(e) => setSelectedModel(e.target.value)} className="form-control "  >

                      <option value="">Select an Audi Model</option>
                      <option value="A3">A3</option>
                      <option value="A4">A4</option>
                      <option value="A5">A5</option>
                      <option value="A6">A6</option>
                      <option value="A7">A7</option>
                      <option value="A8">A8</option>
                      <option value="Q3">Q3</option>
                      <option value="Q5">Q5</option>
                      <option value="Q7">Q7</option>
                      <option value="Q8">Q8</option>
                      <option value="TT">TT</option>
                      <option value="R8">R8</option>
                      <option value="S3">S3</option>
                      <option value="S4">S4</option>
                      <option value="S5">S5</option>
                      <option value="S6">S6</option>
                      <option value="S7">S7</option>
                      <option value="S8">S8</option>
                      <option value="RS3">RS3</option>
                      <option value="RS4">RS4</option>
                      <option value="RS5">RS5</option>
                      <option value="RS6">RS6</option>
                      <option value="RS7">RS7</option>
                    </select>
                  )}

                  {selectedBrand === "BMW" && (
                     <select   id="selectedModel" value={selectedModel}   onChange={(e) => setSelectedModel(e.target.value)} className="form-control " >

                      <option value="">Brand Model</option>
                      <option value="X5">X5</option>
                      <option value="X3">X3</option>
                      <option value="3 series">Serie 3</option>
                      <option value="5 series">Serie 5</option>
                      <option value="7 series">Serie 7</option>
                      <option value="i8">i 8</option>
                    </select>
                  )}

                  {selectedBrand === "Mercedes-Benz" && (
                  <select  id="selectedModel" value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)} className="form-control " >

                      <option value="">Brand Model</option>
                      <option value="C-Class">C-Class</option>
                      <option value="E-Class">E-Class</option>
                      <option value="S-Class">S-Class</option>
                      <option value="GLC">GLC</option>
                      <option value="GLE">GLE</option>
                      <option value="GLS">GLS</option>
                      <option value="A-Class">A-Class</option>
                      <option value="CLA">CLA</option>
                      <option value="CLS">CLS</option>
                      <option value="GLA">GLA</option>
                      <option value="GLB">GLB</option>
                      <option value="GLC Coupe">GLC Coupe</option>
                      <option value="GLE Coupe">GLE Coupe</option>
                      <option value="GLS Coupe">GLS Coupe</option>
                      <option value="G-Class">G-Class</option>
                    </select>
                  )}

                  {selectedBrand === "Tesla" && (
                     <select   id="selectedModel" value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)}   className="form-control"  >

                      <option value="">Brand Model</option>
                      <option value="Model S">Model S</option>
                      <option value="Model 3">Model 3</option>
                      <option value="Model X">Model X</option>
                      <option value="Model Y">Model Y</option>
                    </select>
                  )}
                </div>

                <div>
                  <label htmlFor="qyteti">City</label>
                  <select className="form-control " name="" id="" value={qyteti} onChange={(e)=>setQyteti(e.target.value)}>
                  <option  value="" disabled >Select City</option>       
                 <option value="Tiranë">Tiranë</option>
                <option value="Durrës">Durrës</option>
                <option value="Vlorë">Vlorë</option>
                <option value="Shkodër">Shkodër</option>
                <option value="Korçë">Korçë</option>
                <option value="Fier">Fier</option>
                <option value="Elbasan">Elbasan</option>
                <option value="Berat">Berat</option>
                <option value="Lushnjë">Lushnjë</option>
                <option value="Kavajë">Kavajë</option>
                <option value="Pogradec">Pogradec</option>
                <option value="Lezhë">Lezhë</option>
                <option value="Gjirokastër">Gjirokastër</option>
                <option value="Sarandë">Sarandë</option>
                <option value="Peshkopi">Peshkopi</option>
                <option value="Kukës">Kukës</option>
                <option value="Burrel">Burrel</option>
                <option value="Patos">Patos</option>
                <option value="Krujë">Krujë</option>
 
                      {/* <option value="Tirane">Tirane</option>
                        <option value="Durres">Durres</option>
                        <option value="Vlore">Vlore</option>
                        <option value="Sarande">Sarande</option>
                        <option value="Pogradec">Pogradec</option>
                        <option value="Elbasan">Elbasan</option>
                        <option value="Shkoder">Shkoder</option>
                        <option value="Vore">Vore</option>
                        <option value="Fier">Fier</option>
                        <option value="Peshkopi">Peshkopi</option>
                        <option value="Korce">Korce</option>
                        <option value="Berat">Berat</option>
                        <option value="Lushnje">Lushnje</option>
                        <option value="Kavaje">Kavaje</option>
                        <option value="Lac">Lac</option>
                        <option value="Gjirokaster">Gjirokaster</option>
                        <option value="Lezhe">Lezhe</option>
                        <option value="Kukes">Kukes</option>

                        <option value="Kruje">Kruje</option>
                        <option value="Permet">Permet</option>
                        <option value="Librazhd">Librazhd</option>
                        <option value="Tepelene">Tepelene</option>

                        <option value="Mamurras">Mamurras</option>
                        <option value="Bajram Curri">Bajram Curri</option>
                        <option value="Peqin">Peqin</option>

                        <option value="Ura Vajgurore">Ura Vajgurore</option>

                        <option value="Rrogozhine">Rrogozhine</option>

                        <option value="Kamez">Kamez</option> */}

                  </select>

                </div>
                <h1 className="m-4">Engine Specs and Drivetrain</h1>
                <div>
                  <label htmlFor="fuel">Fuel Type</label>
                  <select className="form-control " name="" id="" value={selectedFuel} onChange={(e)=>setSelectedFuel(e.target.value)}>
                    <option value="" disabled > Select Fuel</option>
                  <option value="Gasoline">Gasoline</option>
                <option value="Diesel">Diesel</option>
                <option value="Electricity">Electricity</option>
                <option value="ElectricityPetrol">ElectricityPetrol</option>
                <option value="ElectricityDiesel">ElectricityDiesel</option>
                <option value="Gas">Gas</option>
                <option value="GasPetrol">GasPetrol</option>
                <option value="GasDiesel">GasDiesel</option>
                <option value="Hydrogen">Hydrogen</option>
                </select>
                </div>
                <div>
                  <label htmlFor="cylinderVolumeInLiters">
                  Engine displacement (optional)
                  </label>
                  <input type="number" className="form-control" id="cylinderVolumeInLiters" value={cylinderVolumeInLiters} onChange={(e) => setCylinderVolumeInLiters(e.target.value)} />
                </div>
                <div>
                  <label htmlFor="powerInHp">Power in HP (optional)</label>
                  <input type="number" className="form-control" id="powerInHp" value={powerInHp} onChange={(e) => setPowerInHp(e.target.value)} />
                  
                </div>
                <div>
                  <label htmlFor="co2EmissionsIgKm">Emission Standard  (optional)</label>
                  <input type="number" className="form-control" id="co2EmissionsIgKm" value={co2EmissionsIgKm } onChange={(e) => setCo2EmissionsIgKm(e.target.value)} />
                   
                </div>
                <div>
                  <label  htmlFor="gearbox">Gearbox</label>
                  <select className="form-control" name="" id="" value={gearbox} onChange={(e)=>setGearbox(e.target.value)}>
                    <option value="" disabled> Gearbox</option>
                    <option value="automatike">Automatic</option>
                    <option value="manuale">Manual</option>
                    <option value="Semi-automatic">Semi-automatic</option>
                  </select>
                </div>
              
                <div>
                  <label htmlFor="wheelDrive">Wheel Drive System</label>
                  <select className="form-control" name="" id="" value={wheelDrive} onChange={(e)=>setWheelDrive(e.target.value)}>
                    <option value="" disabled>Wheel drive</option>
                    <option value="front wheel drive">Front-wheel drive</option>
                    <option value="Rear wheel drive">Rear-wheel drive</option>
                    <option value="four wheel drive">Four-wheel drive</option>
                  </select>
                </div>
                        <h1 className="m-4">Car body</h1>

                        <div>
                  <label htmlFor="bodyType">Body Type</label>
                  <select className="form-control" name="" id="" value={bodyType} onChange={(e)=>setBodyType(e.target.value)}>
                    <option value="" disabled>Body Type</option>
                    <option value="Sedan">Sedan</option>
                    <option value="Coupe">Coupe</option>
                    <option value="Convertible">Convertible</option>
                    <option value="SUV/Offroad">SUV</option>
                    <option value="Station wagon">Station wagon</option>
                    <option value="Multipurpose vechile">Multipurpose vechile</option>
                    <option value="Combi 3-door">Combi 3-door</option>
                    <option value="Combi 5-door">Combi 5-door</option>
                    <option value="Pickup">Pickup</option>
                    <option value="Cash register">Cash register</option>
                    <option value="Other">Other</option>
                  </select>
                        </div>
                <div>
                  <label htmlFor="numberOfSeats">Number of Seats</label>
                  <input
                    type="number"
                    className="form-control"
                    id="numberOfSeats"
                    value={numberOfSeats}
                    onChange={(e) => setNumberOfSeats(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="numberOfDoors">Number of Doors</label>
                  <input
                    type="number"
                    className="form-control"
                    id="numberOfDoors"
                    value={numberOfDoors}
                    onChange={(e) => setNumberOfDoors(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="netWeightInKg">Net weight in KG</label>
                  <input
                    type="number"
                    className="form-control"
                    id="netWeightInKg"
                    value={netWeightInKg}
                    onChange={(e) => setNetWeightInKg(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="">Color</label>
                  <select className="form-control" name="" id="" value={mainColor} onChange={(e)=>setMainColor(e.target.value)}>
                    <option value="" disabled>Color</option>
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                    <option value="Red">Red</option>
                    <option value="Blue">Blue</option>
                    <option value="Green">Green</option>
                    <option value="Yellow">Yellow</option>
                    <option value="Orange">Orange</option>
                    <option value="Purple">Purple</option>
                    <option value="Pink">Pink</option>
                    <option value="Brown">Brown</option>
                    <option value="Grey">Grey</option>
                    <option value="Silver">Silver</option>
                    <option value="Gold">Gold</option>
                  </select>
                </div>
               
                <div>
                  <label htmlFor="interiorColor">Interior Color</label>
                  <input
                    type="text"
                    className="form-control"
                    id="interiorColor"
                    value={interiorColor}
                    onChange={(e) => setInteriorColor(e.target.value)}
                  />
                  <p className="">Eg: Titan Black, Black leather, Ultra White, Gray alcantara.</p>
                </div>
          
              </div>

                      {/* <div className="Equipment">

                     
                <div>
                  <h1 style={{ marginTop:"30px", marginBottom:"30px"}} >Equipment</h1>
                  <div>                 
                    <div className="d-flex justify-content-flex-start border-bottom">
                    <p  style={{textAlign:"left", marginTop:"30px", marginBottom:"30px"}}>Exterior (optional)</p>
                        <div style={{textAlign:"left", marginTop:"30px", marginBottom:"30px"}} >
                      <input className="m-2" type="checkbox" id="selectallExterior" name="selectallExterior" checked={exterior["selectAllExteriorCheckbox"]} onChange={handleSelectAllExterior} />
                      <label htmlFor="selectallExterior">Select all</label>
                        </div>
                      </div>  

                    <div className="row">

                      <div className="col-sm " style={{textAlign:"left", margin:"4px"}}>
                      <div >

                      <input className="m-2" type="checkbox" id="electricalMirrors"  value="electricalMirrors" name="electricalMirrors" checked={exterior["electricalMirrors"]} onChange={handleCheckboxChange} />
                      <label htmlFor="electricalMirrors">Electrical mirrors</label> 
                      </div>
                      <input className="m-2"  type="checkbox" id="hangerFixedHook"  name="hangerFixedHook" checked={exterior["hangerFixedHook"]} onChange={handleCheckboxChange} />
                      <label htmlFor="hangerFixedHook"> Hanger, fixed hook</label>
                     
                      <div>
                    
                      </div>
                      <div>
                      <input className="m-2"  type="checkbox" id="ledLights" name="ledLights" checked={exterior["ledLights"]} onChange={handleCheckboxChange} />
                      <label htmlFor="ledLights"> Led lights</label>

                      </div>
                      <div>
                      <input className="m-2"  type="checkbox" id="metallicPaint" name="metallicPaint" checked={exterior["metallicPaint"]} onChange={handleCheckboxChange} />
                      <label htmlFor="metallicPaint"> Metallic paint</label>
                      </div>
                      <div>
                      <input className="m-2" type="checkbox" id="lightweightRimWinter" name="lightweightRimWinter" checked={exterior["lightweightRimWinter"]} onChange={handleCheckboxChange} />
                      <label htmlFor="lightweightRimWinter">Lightweight. rim winter</label>

                        </div>
                      </div >



                      <div className="col-sm"  style={{textAlign:"left", margin:"4px"}} >
                      <div>
                      <input className="m-2"  type="checkbox" id="winterWheels" name="winterWheels" checked={exterior["winterWheels"]} onChange={handleCheckboxChange} />
                      <label htmlFor="winterWheels"> Winter wheels</label>
                      </div>
                      <div>
                      <input className="m-2" type="checkbox" id="roofRails" name="roofRails" checked={exterior["roofRails"]} onChange={handleCheckboxChange} />
                      <label htmlFor="roofRails">Roof rails</label>

                        </div>
                      <div>
                      <input className="m-2" type="checkbox" id="allSeasonTires" name="allSeasonTires" checked={exterior["allSeasonTires"]} onChange={handleCheckboxChange} />
                      <label htmlFor="allSeasonTires"> All-season tires</label>
                      </div>
                      <div>
                      <input className="m-2"  id="laserLight" type="checkbox" name="laserLight" checked={exterior["laserLight"]} onChange={handleCheckboxChange} />
                      <label htmlFor="laserLight"> Laser light</label>
                      </div>
                      <div>
                      <input className="m-2" id="cargoHolders" type="checkbox" name="cargoHolders" checked={exterior["cargoHolders"]} onChange={handleCheckboxChange} />
                      <label htmlFor="cargoHolders">Cargo holders</label>

                        </div>
                      </div>



                      <div className="col-sm"  style={{textAlign:"left", margin:"4px"}}>
                        <div>
                      <input className="m-2" id="lightweightRimSummer" type="checkbox" name="lightweightRimSummer" checked={exterior["lightweightRimSummer"]} onChange={handleCheckboxChange} />
                      <label  htmlFor="lightweightRimSummer">Light weight Rim Summer</label>

                        </div>
                        <div>
                      <input className="m-2" id="summerWheels" type="checkbox" name="summerWheels" checked={exterior["summerWheels"]} onChange={handleCheckboxChange} />
                      <label htmlFor="summerWheels">Summer wheels</label>
                        </div>
                        <div>
                      <input className="m-2" id="xenonLights" type="checkbox" name="xenonLights" checked={exterior["xenonLights"]} onChange={handleCheckboxChange} />
                      <label htmlFor="xenonLights">Xenon lights</label>
                        </div>
                        <div>
                      <input className="m-2" id="trailerAttachment" type="checkbox" name="trailerAttachment" checked={exterior["trailerAttachment"]} onChange={handleCheckboxChange} />
                      <label htmlFor="trailerAttachment">Trailer attachment</label>
         
                        </div>
                        
                       
                      </div>
                
                  </div>
               </div>
               </div>
                    
                    <div>
                    <div  className="d-flex justify-content-flex-start border-bottom">
                    <p  style={{textAlign:"left", marginTop:"30px", marginBottom:"30px"}}>Driver Assistance (optional)</p>

                          <div style={{textAlign:"left", marginTop:"30px", marginBottom:"30px"}}>
                          <input className="m-2" id="selectallDriverAssistance" type="checkbox" name="selectallDriverAssistance" checked={driverAssistance["selectAllDriverAssistanceCheckbox"]} onChange={handleSelectAllDriverAssistance} />
                          <label htmlFor="selectallDriverAssistance">Select all</label>
                          </div>
                      </div>
                    <div className="row">
                      <div className="col-sm" style={{textAlign:"left", margin:"4px"}}>
                      <div>
                      <input className="m-2" id="highBeamAssistant" type="checkbox" name="highBeamAssistant" checked={driverAssistance["highBeamAssistant"]} onChange={handleCheckboxChange1} />
                      <label htmlFor="highBeamAssistant">High beam assistant</label>
                      </div>
                      <div>
                      <input className="m-2" id="frontParkingSensor" type="checkbox" name="frontParkingSensor" checked={driverAssistance["frontParkingSensor"]} onChange={handleCheckboxChange1} />
                      <label htmlFor="frontParkingSensor">Front parking sensor</label>
                      </div>
                      </div>
                      <div className="col-sm" style={{textAlign:"left", margin:"4px"}}>
                      <div>
                      <input className="m-2" id="lightSensor" type="checkbox" name="lightSensor" checked={driverAssistance["lightSensor"]} onChange={handleCheckboxChange1} />
                      <label htmlFor="lightSensor">Light sensor</label>
                      </div>
                      <div>
                      <input className="m-2" id="rainSensor" type="checkbox" name="rainSensor" checked={driverAssistance["rainSensor"]} onChange={handleCheckboxChange1} />
                      <label htmlFor="rainSensor">Rain sensor</label>
                      </div>
                      </div>
                      <div className="col-sm" style={{textAlign:"left", margin:"4px"}}>

                      <div>
                      <input className="m-2" id="rearParkingSensor" type="checkbox" name="rearParkingSensor" checked={driverAssistance["rearParkingSensor"]} onChange={handleCheckboxChange1} />
                      <label htmlFor="rearParkingSensor">Rear parking sensor</label>
                      </div>
                      <div>
                      <input className="m-2" id="reversingCamera" type="checkbox" name="reversingCamera" checked={driverAssistance["reversingCamera"]} onChange={handleCheckboxChange1} />
                      <label htmlFor="reversingCamera">Reversing camera</label>
                      </div>
                      </div>
                      </div>
                      </div>

                    <div>
                    <div  className="d-flex justify-content-flex-start border-bottom">
                    <p  style={{textAlign:"left", marginTop:"30px", marginBottom:"30px"}}>Interior (optional)</p>
                    <div style={{textAlign:"left", marginTop:"30px", marginBottom:"30px"}}>
                          <input className="m-2" id="selectallInterior" type="checkbox" name="selectallInterior" checked={interior["selectAllInteriorCheckbox"]} onChange={handleSelectAllInterior} />
                          <label htmlFor="selectallInterior">Select all</label>
                          </div>
                      </div>
                    <div className="row">
                      <div className="col-sm" style={{textAlign:"left", margin:"4px"}}>
                      <div>
                      <input className="m-2" id="electricWindows" type="checkbox" name="electricWindows" checked={interior["electricWindows"]} onChange={handleCheckboxChange2} />
                      <label htmlFor="electricWindows">Electric windows</label>
                      </div>
                      <div>
                      <input className="m-2" id="seatsInFullLeather" type="checkbox" name="seatsInFullLeather" checked={interior["seatsInFullLeather"]} onChange={handleCheckboxChange2} />
                      <label htmlFor="seatsInFullLeather">Seats in full leather</label>
                      </div>
                    
                      </div>
                      <div className="col-sm" style={{textAlign:"left", margin:"4px"}}>
                      <div>
                      <input className="m-2" id="sunroofGlass" type="checkbox" name="sunroofGlass" checked={interior["sunroofGlass"]} onChange={handleCheckboxChange2} />
                      <label htmlFor="sunroofGlass">Sunroof/glass</label>
                      </div>
                      <div>
                      <input className="m-2" id="seatsInPartialLeather" type="checkbox" name="seatsInPartialLeather" checked={interior["seatsInPartialLeather"]} onChange={handleCheckboxChange2} />
                      <label htmlFor="seatsInPartialLeather">Seats in partial leather</label>
                      </div>
                      
                      </div>
                      <div className="col-sm" style={{textAlign:"left", margin:"4px"}}>

                      <div>
                      <input className="m-2" id="sportsSeats" type="checkbox" name="sportsSeats" checked={interior["sportsSeats"]} onChange={handleCheckboxChange2} />
                      <label htmlFor="sportsSeats">Sports seats</label>
                      </div>
                        <div>
                      <input className="m-2" id="darkWindowsBehind" type="checkbox" name="darkWindowsBehind" checked={interior["darkWindowsBehind"]} onChange={handleCheckboxChange2} />
                      <label htmlFor="darkWindowsBehind">Tinted Windows</label>
                      </div>
                      </div>
                      </div>
                      </div>

                    <div>
                    <div  className="d-flex justify-content-flex-start border-bottom">
                    <p  style={{textAlign:"left", marginTop:"30px", marginBottom:"30px"}}>Comfort (optional)</p>
                    <div style={{textAlign:"left", marginTop:"30px", marginBottom:"30px"}}>
                          <input className="m-2" id="selectallComfort" type="checkbox" name="selectallComfort" checked={comfort["selectAllComfortCheckbox"]} onChange={handleSelectAllComfort} />
                          <label htmlFor="selectallComfort">Select all</label>
                     </div>
                      </div>
                    <div className="row">
                      <div className="col-sm" style={{textAlign:"left", margin:"4px"}}>
                      <div>
                      <input className="m-2" id="airConditioning" type="checkbox" name="airConditioning" checked={comfort["airConditioning"]} onChange={handleCheckboxChange3} />
                      <label htmlFor="airConditioning">Air Conditioning</label>
                      </div>
                      <div>
                      <input className="m-2" id="cruiseControlAdaptive" type="checkbox" name="cruiseControlAdaptive" checked={comfort["cruiseControlAdaptive"]} onChange={handleCheckboxChange3} />
                      <label htmlFor="cruiseControlAdaptive">Cruise Control </label>
                      </div>
                      <div>
                      <input className="m-2" id="middleArms" type="checkbox" name="middleArms" checked={comfort["middleArms"]} onChange={handleCheckboxChange3} />
                      <label htmlFor="middleArms">The middle arms</label>
                      </div>
                      <div>
                      <input className="m-2" id="keylessStart" type="checkbox" name="keylessStart" checked={comfort["keylessStart"]} onChange={handleCheckboxChange3} />
                      <label htmlFor="keylessStart">Keyless start</label>
                      </div>
                      <div>
                      <input className="m-2" id="electricSeatWithMemory" type="checkbox" name="electricSeatWithMemory" checked={comfort["electricSeatWithMemory"]} onChange={handleCheckboxChange3} />
                      <label htmlFor="electricSeatWithMemory">Electric seat with memory</label>
                      </div>
                     
                      </div>
                      <div className="col-sm" style={{textAlign:"left", margin:"4px"}}>
                      
                       <div>
                      <input className="m-2" id="trunkCover" type="checkbox" name="trunkCover" checked={comfort["trunkCover"]} onChange={handleCheckboxChange3} />
                      <label htmlFor="trunkCover">Trunk cover</label>
                      </div>
                      <div>
                      <input className="m-2" id="cabinHeater" type="checkbox" name="cabinHeater" checked={comfort["cabinHeater"]} onChange={handleCheckboxChange3} />
                      <label htmlFor="cabinHeater">Cabin heater</label>
                      </div>
                      <div>
                      <input className="m-2" id="engineHeater" type="checkbox" name="engineHeater" checked={comfort["engineHeater"]} onChange={handleCheckboxChange3} />
                      <label htmlFor="engineHeater">Engine heater</label>
                      </div>
                      <div>
                      <input className="m-2" id="heatedSeats" type="checkbox" name="heatedSeats" checked={comfort["heatedSeats"]} onChange={handleCheckboxChange3} />
                      <label htmlFor="heatedSeats">heated seats</label>
                      </div>
                      </div>
                      <div className="col-sm" style={{textAlign:"left", margin:"4px"}}>
                        
                      <div>
                      <input className="m-2" id="cruiseControl" type="checkbox" name="cruiseControl" checked={comfort["cruiseControl"]} onChange={handleCheckboxChange3} />
                      <label htmlFor="cruiseControl">Cruise control</label>
                      </div>
                      <div>
                      <input className="m-2" id="electricSeatWithMemory" type="checkbox" name="electricSeatWithMemory" checked={comfort["electricSeatWithMemory"]} onChange={handleCheckboxChange3} />
                      <label htmlFor="electricSeatWithMemory">Electric seat with memory</label>

                      </div>
                      <div>
                      <input className="m-2" id="airSuspension" type="checkbox" name="airSuspension" checked={comfort["airSuspension"]} onChange={handleCheckboxChange3} />
                      <label htmlFor="airSuspension">Air suspension</label>

                      </div>
                      <div>
                      <input className="m-2" id="levelRegulation" type="checkbox" name="levelRegulation" checked={comfort["levelRegulation"]} onChange={handleCheckboxChange3} />
                      <label htmlFor="levelRegulation">Level regulation</label>
                      </div>
                      </div>

                      </div>
                      </div>

                    <div>
                    <div  className="d-flex justify-content-flex-start border-bottom">
                    <p  style={{textAlign:"left", marginTop:"30px", marginBottom:"30px"}}>Media & Entertainment (optional)</p>
                     <div style={{textAlign:"left", marginTop:"30px", marginBottom:"30px"}}>
                       <input className="m-2" id="selectallMediaEntertainment" type="checkbox" name="selectallMediaEntertainment" checked={mediaEntertainment["selectAllMediaEntertainmentCheckbox"]} onChange={handleSelectAllMediaEntertainment} />
                       <label htmlFor="selectallMediaEntertainment">Select all</label>
                         </div>
                      </div>
                    <div className="row">
                      <div className="col-sm" style={{textAlign:"left", margin:"4px"}}>
                      <div>
                      <input className="m-2" id="auxInput" type="checkbox" name="auxInput" checked={mediaEntertainment["auxInput"]} onChange={handleCheckboxChange4} />
                      <label htmlFor="auxInput">AUX input</label>
                      </div>
                      <div>
                      <input className="m-2" id="handsfreeScheme" type="checkbox" name="handsfreeScheme" checked={mediaEntertainment["handsfreeScheme"]} onChange={handleCheckboxChange4} />
                      <label htmlFor="handsfreeScheme">Handsfree scheme</label>
                      </div>
                      <div>
                      <input className="m-2" id="radioDABPlus" type="checkbox" name="radioDABPlus" checked={mediaEntertainment["radioDABPlus"]} onChange={handleCheckboxChange4} />
                      <label htmlFor="radioDABPlus">Radio DAB+</label>
                      </div>
                      <div>
                      <input className="m-2" id="bluetooth" type="checkbox" name="bluetooth" checked={mediaEntertainment["bluetooth"]} onChange={handleCheckboxChange4} />
                      <label htmlFor="bluetooth">Bluetooth</label>
                      </div>
                      </div>
                      <div className="col-sm"  style={{textAlign:"left", margin:"4px"}}>
                      <div>
                      <input className="m-2" id="headUpDisplay" type="checkbox" name="headUpDisplay" checked={mediaEntertainment["headUpDisplay"]} onChange={handleCheckboxChange4} />
                      <label htmlFor="headUpDisplay">Head up display</label>
                      </div>
                      <div>
                      <input className="m-2" id="navigationSystem" type="checkbox" name="navigationSystem" checked={mediaEntertainment["navigationSystem"]} onChange={handleCheckboxChange4} />
                      <label htmlFor="navigationSystem">Navigation system</label>
                      </div>
                      <div>
                      <input className="m-2" id="radioFM" type="checkbox" name="radioFM" checked={mediaEntertainment["radioFM"]} onChange={handleCheckboxChange4} />
                      <label htmlFor="radioFM">Radio FM</label>
                      </div>
                      <div>
                      <input className="m-2" id="cdPlayer" type="checkbox" name="cdPlayer" checked={mediaEntertainment["cdPlayer"]} onChange={handleCheckboxChange4} />
                      <label htmlFor="cdPlayer">CD player</label>
                      </div>
                      </div>
                      <div className="col-sm" style={{textAlign:"left", margin:"4px"}}>
                      <div>
                      <input className="m-2" id="cassettePlayer" type="checkbox" name="cassettePlayer" checked={mediaEntertainment["cassettePlayer"]} onChange={handleCheckboxChange4} />
                      <label htmlFor="cassettePlayer">Cassette player</label>
                      </div>
                      <div>
                        <input className="m-2" id="originalPhone" type="checkbox" name="originalPhone" checked={mediaEntertainment["originalPhone"]} onChange={handleCheckboxChange4} />
                        <label htmlFor="originalPhone">Original phone</label>
                        </div>
                      <div>
                        <input className="m-2" id="tvScreenInTheBackSeat" type="checkbox" name="tvScreenInTheBackSeat" checked={mediaEntertainment["tvScreenInTheBackSeat"]} onChange={handleCheckboxChange4} />
                        <label className="small" htmlFor="tvScreenInTheBackSeat">TV screen in the back seat</label>
                        </div>
                        <div>
                      <input className="m-2" id="multifunctionSteeringWheel" type="checkbox" name="multifunctionSteeringWheel" checked={mediaEntertainment["multifunctionSteeringWheel"]} onChange={handleCheckboxChange4} />
                      <label htmlFor="multifunctionSteeringWheel" className="small">Multifunction steering wheel</label>
                      </div>
                        </div>
                        </div>
                        </div>

                    <div>
                    <div  className="d-flex justify-content-flex-start border-bottom">
                    <p  style={{textAlign:"left", marginTop:"30px", marginBottom:"30px"}}>Engine & Drive (optional)</p>
                    <div style={{textAlign:"left", marginTop:"30px", marginBottom:"30px"}}>
                      <input className="m-2" id="selectallEngineDrive" type="checkbox" name="selectallEngineDrive" checked={engineDrive["selectAllEngineDriveCheckbox"]} onChange={handeSelectAllEngineDrive} />
                      <label htmlFor="selectallEngineDrive">Select all</label>
                        </div>
                      </div>
                    <div className="row">
                      <div className="col-sm" style={{textAlign:"left", margin:"4px"}}>
                      <div>
                      <input className="m-2" id="antiScratch" type="checkbox" name="antiScratch" checked={engineDrive["antiScratch"]} onChange={handleCheckboxChange5} />
                      <label htmlFor="antiScratch">Anti-scratch</label>
                      </div>
                      <div>
                      <input className="m-2" id="diffLock" type="checkbox" name="diffLock" checked={engineDrive["diffLock"]} onChange={handleCheckboxChange5} />
                      <label htmlFor="diffLock">Diff. lock</label>
                      </div>
                      </div>
                      <div className="col-sm" style={{textAlign:"left", margin:"4px"}}>
                      <div>
                      <input className="m-2" id="antiSpin" type="checkbox" name="antiSpin" checked={engineDrive["antiSpin"]} onChange={handleCheckboxChange5} />
                      <label htmlFor="antiSpin">Air suspension</label>
                      </div>
                      <div>
                      <input className="m-2" id="tripComputer" type="checkbox" name="tripComputer"checked={engineDrive["tripComputer"]} onChange={handleCheckboxChange5} />
                      <label htmlFor="tripComputer">Adaptive cruise control</label>
                      </div>
                      </div>
                      <div className="col-sm"  style={{textAlign:"left", margin:"4px"}}>
                      <div>
                      <input className="m-2" id="dieselParticulateFilter" type="checkbox" name="dieselParticulateFilter" checked={engineDrive["dieselParticulateFilter"]} onChange={handleCheckboxChange5} />
                      <label htmlFor="dieselParticulateFilter">Adaptive lighting</label>
                      </div>
                      <div>
                      <input className="m-2"  id="powerSteering" type="checkbox" name="powerSteering"checked={engineDrive["powerSteering"]} onChange={handleCheckboxChange5} />
                      <label htmlFor="powerSteering">Adaptive suspension</label>
                      </div>
                      </div>
                    
                      </div>
                      </div>


                    <div>
                    <div  className="d-flex justify-content-flex-start border-bottom">
                    <p  style={{textAlign:"left", marginTop:"30px", marginBottom:"30px"}}>Security (optional)</p>

                      <div style={{textAlign:"left", marginTop:"30px", marginBottom:"30px"}}>
                      <input className="m-2" id="selectallSecurity" type="checkbox" name="selectallSecurity" checked={security["selectAllSecurityCheckbox"]} onChange={handleSelectAllSecurity} />
                      <label htmlFor="selectallSecurity">Select all</label>
                      </div>

                        
                      </div>
                    <div className="row">
                      <div className="col-sm" style={{textAlign:"left", margin:"4px"}}>

       
                      <div>
                      <input className="m-2" id="absBrakes" type="checkbox" name="absBrakes" checked={security["absBrakes"]} onChange={handleCheckboxChange6} />
                      <label htmlFor="absBrakes">ABS breaks</label>
                      </div>
                      <div>
                      <input className="m-2" id="retrievalSystem" type="checkbox" name="retrievalSystem" checked={security["retrievalSystem"]} onChange={handleCheckboxChange6} />
                      <label htmlFor="retrievalSystem">Retrieval system</label>
                      </div>
                      <div>
                      <input className="m-2" id="isofix" type="checkbox" name="isofix" checked={security["isofix"]} onChange={handleCheckboxChange6} />
                      <label htmlFor="isofix">Isofix</label>
                      </div>
                      </div>
                      <div className="col-sm" id="sideAirbags" style={{textAlign:"left", margin:"4px"}}>
                      <div>
                      <input className="m-2" type="checkbox" name="sideAirbags" checked={security["sideAirbags"]} onChange={handleCheckboxChange6} />
                      <label htmlFor="sideAirbags">Side airbags</label>
                      </div>
                      <div>
                      <input className="m-2" id="immobilizer" type="checkbox" name="immobilizer" checked={security["immobilizer"]} onChange={handleCheckboxChange6} />
                      <label htmlFor="immobilizer">Immobilizer</label>
                      </div>
                      <div>
                      <input className="m-2" id="frontAirbag" type="checkbox" name="frontAirbag" checked={security["frontAirbag"]} onChange={handleCheckboxChange6} />
                      <label htmlFor="frontAirbag">Front airbag</label>
                      </div>
                      </div>
                      <div className="col-sm" style={{textAlign:"left", margin:"4px"}}>
                      <div>
                      <input className="m-2" id="alarm" type="checkbox" name="alarm" checked={security["alarm"]} onChange={handleCheckboxChange6} />
                      <label htmlFor="alarm">Alarm</label>
                      </div>
                      <div>
                      <input className="m-2"  id="centralLocking" type="checkbox" name="centralLocking" checked={security["centralLocking"]} onChange={handleCheckboxChange6} />
                      <label htmlFor="centralLocking">Central locking</label>
                      </div>
                      </div>
                      </div>
                      </div>
                     


                      </div> */}


                      <div>
                        <label htmlFor="">Kilometers</label>
                        <input type="number" className="form-control" id="kilometers" value={kilometrat} onChange={(e) => setKilometrat(e.target.value)}/ >
                         
                      </div>
                      <div>
                        <label htmlFor="carDamage">Car Damage</label>
                        <select className="form-control"  name="" id=""value={carDamage} onChange={(e)=>setCarDamage(e.target.value)} >
                          <option value=""> </option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                      <div>

                    
                      {
                        carDamage==="Yes" ? 
                        <div>
                        <label htmlFor="damageDetails">Damage Description</label>
                        <input type="textarea" className="form-control" id="damageDetails" value={damageDetails} onChange={(e) => setDamageDetails(e.target.value)} />
                        </div>
                        : null

                      }
                        </div>



            <div className="d-flex justify-content-evenly">

              {/* <label htmlFor="photos">Select photos (max 20)</label>
              <input
                type="file"
                id="photos"
                multiple
                accept="image/*"
                onChange={handleFileChange}
              />
              {selectedFiles.length > 0 && (
                <div className="preview-container">
                  {selectedFiles.map((file, index) => (
                    <div key={file.name}>
                      <img src={URL.createObjectURL(file)} alt={`Photo ${index + 1}`} style={{ width: "100px", height: "100px" }} />
                      <button onClick={() => removePhoto(index)}>Remove</button>
                    </div>
                  ))}
                </div>
              )}
              <button type="submit" disabled={selectedFiles.length === 0}>
                Upload Photos
              </button> */}
            </div>
            <div>
              <h1 className="m-4">Pictures and Description</h1>
              <div>
                <label htmlFor="image">Image</label>
                <input type="file" className="form-control" onChange={(e) => setImage(e.target.files[0])} placeholder="Please add one display image " />
              </div>
            </div>

                      {/* <div className="image">
                      <div>
                        <label htmlFor="image">Image</label>
                        <input type="file" className="form-control" id="image" onChange={(e)=>setImage(e.target.value)} />
                        {
                          image ? <img src={image} alt="car" style={{width:"100px", height:"100px"}} /> : null
                        }

                      </div>
                      </div> */}





                      <div>
                        <label htmlFor="description">Description</label>
                        <textarea type="textarea" className="form-control" id="description" rows="10" cols="100" value={description} onChange={(e)=>setDescription(e.target.value)} />
                      </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <label htmlFor="price">Price </label>
                             <div style={{ display: 'flex', alignItems: 'center' }}>
                                <input type="number" className="form-control" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                                <span style={{ marginLeft: '5px' }}>€</span>
                             </div>
                        </div>
                      <div>
                          <h1 className="m-4">Contact Info</h1>
                          <label htmlFor="streetAddress"> Street address</label>
                          <input type="text" className="form-control" id="streetAddress" value={streetAddress} onChange={(e)=>setStreetAddress(e.target.value)} />
                          </div>
                          <div>
                          <label htmlFor="phone">Phone Number</label>
                          <input type="number" className="form-control" id="phone" value={number} onChange={(e)=>setNumber(e.target.value)} />
                          </div>

                          <div className="Equipment">


<div>
  <h1 style={{ marginTop: "30px", marginBottom: "30px" }} >Equipment</h1>

  
                <div className="d-flex justify-content-flex-start border-bottom">
                   <p style={{ textAlign: "left", marginTop: "30px", marginBottom: "30px" }}>Comfort (optional)</p>
                  <div style={{ textAlign: "left", marginTop: "30px", marginBottom: "30px" }}>
                    <input className="m-2" id="selectallComfort" type="checkbox" name="selectallComfort" checked={comfort["selectAllComfortCheckbox"]} onChange={handleSelectAllComfort} />
                    <label htmlFor="selectallComfort">Select all</label>
                  </div> 
                </div>
                
                  
                <div className="checkbox-lineup">

  <div>
    <input className="m-2" id="airConditioning" type="checkbox" name="airConditioning" checked={comfort["airConditioning"]} onChange={handleCheckboxChange3} />
    <label htmlFor="airConditioning">Air Conditioning</label>
  </div>
  <div>
    <input className="m-2" id="cruiseControlAdaptive" type="checkbox" name="cruiseControlAdaptive" checked={comfort["cruiseControlAdaptive"]} onChange={handleCheckboxChange3} />
    <label htmlFor="cruiseControlAdaptive">Cruise Control </label>
  </div>
  <div>
    <input className="m-2" id="keylessStart" type="checkbox" name="keylessStart" checked={comfort["keylessStart"]} onChange={handleCheckboxChange3} />
    <label htmlFor="keylessStart">Keyless start</label>
  </div>
  <div>
    <input className="m-2" id="heatedSeats" type="checkbox" name="heatedSeats" checked={comfort["heatedSeats"]} onChange={handleCheckboxChange3} />
    <label htmlFor="heatedSeats">Heated Seats</label>
  </div>
  </div>

  <div className="checkbox-lineup">
  <div>
    <input className="m-2" id="sunroofGlass" type="checkbox" name="sunroofGlass" checked={comfort["sunroofGlass"]} onChange={handleCheckboxChange3} />
    <label htmlFor="sunroofGlass">Sunroof/glass</label>
  </div>
  <div>
    <input className="m-2" id="seatsInPartialLeather" type="checkbox" name="seatsInPartialLeather" checked={comfort["seatsInPartialLeather"]} onChange={handleCheckboxChange3} />
    <label htmlFor="seatsInPartialLeather">Leather Seats</label>
  </div>
  <div>
    <input className="m-2" id="electricSeatWithMemory" type="checkbox" name="electricSeatWithMemory" checked={comfort["electricSeatWithMemory"]} onChange={handleCheckboxChange3} />
    <label htmlFor="electricSeatWithMemory">Electric Seats with Memory</label>
  </div>
  <div>
    <input className="m-2" id="antiSpin" type="checkbox" name="antiSpin" checked={comfort["antiSpin"]} onChange={handleCheckboxChange3} />
    <label htmlFor="antiSpin">Air suspension</label>
  </div>
  </div>
  

  
                  <div className="d-flex justify-content-flex-start border-bottom">
                     <p style={{ textAlign: "left", marginTop: "30px", marginBottom: "30px" }}>Exterior (optional)</p>
                    <div style={{ textAlign: "left", marginTop: "30px", marginBottom: "30px" }} >
                      <input className="m-2" type="checkbox" id="selectallExterior" name="selectallExterior" checked={exterior["selectAllExteriorCheckbox"]} onChange={handleSelectAllExterior} />
                      <label htmlFor="selectallExterior">Select all</label>
                    </div>
                  </div>

                 
<div className="checkbox-lineup">


  <div>
    <input className="m-2" id="lightSensor" type="checkbox" name="lightSensor" checked={exterior["lightSensor"]} onChange={handleCheckboxChange1} />
    <label htmlFor="lightSensor">Light Sensor</label>
  </div>
  <div>
    <input className="m-2" id="rainSensor" type="checkbox" name="rainSensor" checked={exterior["rainSensor"]} onChange={handleCheckboxChange1} />
    <label htmlFor="rainSensor">Rain Sensor</label>
  </div>
  </div>
  <div className="checkbox-lineup">
  <div>
    <input className="m-2" id="rearParkingSensor" type="checkbox" name="rearParkingSensor" checked={exterior["rearParkingSensor"]} onChange={handleCheckboxChange1} />
    <label htmlFor="rearParkingSensor">Parking Sensors</label>
  </div>
  <div>
    <input className="m-2" id="reversingCamera" type="checkbox" name="reversingCamera" checked={exterior["reversingCamera"]} onChange={handleCheckboxChange1} />
    <label htmlFor="reversingCamera">Reversing Camera</label>
  </div>
  <div>
    <input className="m-2" id="darkWindowsBehind" type="checkbox" name="darkWindowsBehind" checked={exterior["darkWindowsBehind"]} onChange={handleCheckboxChange1} />
    <label htmlFor="darkWindowsBehind">Tinted Windows</label>
  </div>
  </div>
  


 
                <div className="d-flex justify-content-flex-start border-bottom">
                   <p style={{ textAlign: "left", marginTop: "30px", marginBottom: "30px" }}>Media & Entertainment (optional)</p>
                  <div style={{ textAlign: "left", marginTop: "30px", marginBottom: "30px" }}>
                    <input className="m-2" id="selectallMediaEntertainment" type="checkbox" name="selectallMediaEntertainment" checked={mediaEntertainment["selectAllMediaEntertainmentCheckbox"]} onChange={handleSelectAllMediaEntertainment} />
                    <label htmlFor="selectallMediaEntertainment">Select all</label>
                  </div>
                </div>
                
                  
                <div className="checkbox-lineup">
  <div>
    <input className="m-2" id="bluetooth" type="checkbox" name="bluetooth" checked={mediaEntertainment["bluetooth"]} onChange={handleCheckboxChange4} />
    <label htmlFor="bluetooth">Bluetooth</label>
  </div>
  <div>
    <input className="m-2" id="headUpDisplay" type="checkbox" name="headUpDisplay" checked={mediaEntertainment["headUpDisplay"]} onChange={handleCheckboxChange4} />
    <label htmlFor="headUpDisplay">Head up display</label>
  </div>
  <div>
    <input className="m-2" id="navigationSystem" type="checkbox" name="navigationSystem" checked={mediaEntertainment["navigationSystem"]} onChange={handleCheckboxChange4} />
    <label htmlFor="navigationSystem">Navigation system</label>
  </div>
  </div>
  <div className="checkbox-lineup">
  <div>
    <input className="m-2" id="radioFM" type="checkbox" name="radioFM" checked={mediaEntertainment["radioFM"]} onChange={handleCheckboxChange4} />
    <label htmlFor="radioFM">Radio FM</label>
  </div>
  
  <div>
    <input className="m-2" id="cdPlayer" type="checkbox" name="cdPlayer" checked={mediaEntertainment["cdPlayer"]} onChange={handleCheckboxChange4} />
    <label htmlFor="cdPlayer">CD player</label>
  </div>
  <div>
    <input className="m-2" id="auxInput" type="checkbox" name="auxInput" checked={mediaEntertainment["auxInput"]} onChange={handleCheckboxChange4} />
    <label htmlFor="auxInput">AUX input</label>
  </div>

  <div>
    <input className="m-2" id="tvScreenInTheBackSeat" type="checkbox" name="tvScreenInTheBackSeat" checked={mediaEntertainment["tvScreenInTheBackSeat"]} onChange={handleCheckboxChange4} />
    <label className="small" htmlFor="tvScreenInTheBackSeat">TV screen in the back seat</label>
  </div>
  </div>
  </div>




  
                 <div className="d-flex justify-content-flex-start border-bottom">
                  <p style={{ textAlign: "left", marginTop: "30px", marginBottom: "30px" }}>Security (optional)</p>

                  <div style={{ textAlign: "left", marginTop: "30px", marginBottom: "30px" }}>
                    <input className="m-2" id="selectallSecurity" type="checkbox" name="selectallSecurity" checked={security["selectAllSecurityCheckbox"]} onChange={handleSelectAllSecurity} />
                    <label htmlFor="selectallSecurity">Select all</label>
                  </div>


                </div> 
                
                  

                <div className="checkbox-lineup">
  <div>
    <input className="m-2" id="absBrakes" type="checkbox" name="absBrakes" checked={security["absBrakes"]} onChange={handleCheckboxChange6} />
    <label htmlFor="absBrakes">ABS System</label>
  </div>
  <div>
    <input className="m-2" id="centralLocking" type="checkbox" name="centralLocking" checked={security["centralLocking"]} onChange={handleCheckboxChange6} />
    <label htmlFor="centralLocking">Central Locking</label>
  </div>
  <div>
    <input className="m-2" id="alarm" type="checkbox" name="alarm" checked={security["alarm"]} onChange={handleCheckboxChange6} />
    <label htmlFor="alarm">Alarm</label>
  </div>
  </div>
 
  






</div>



</div>
                          


                          <button type="submit" className="btn btn-primary m-3">   Update</button>

                       </div>

          
      </form>
      <div>
    <Footer />
    </div>
    </>
  );
};

export default UpdateProduct;
