const mongoose = require('mongoose');

const Form = new mongoose.Schema({
    targa: String,
    shasia: String,
    vitiProdhimit: {
        type: Number,
       
        //required: [true, 'required']
    },
    brandi: {
        type: String,
        enum: ["BMW", "Tesla", "Ferrari", "Ford", "Porsche", "Honda","Lamborghini", "Toyota",
        "Bently", "Maserati", "Audi", "Jeep", "Subaru", "Cadillac", "Chrysler", 
        "Chevrolet Corvette", "Dodge", "Hyundai", "Jaguar", "Mazda", "Ford Mustand",
        "Nissan", "Alfa Romeo", "Bugatti", "Buick", "Lexus", "Rolls-Royce", "Acura",
        "Aston Martin", "Chevrolet", "Kia", "Mercedes-Benz", "Volkswagen", "Volvo", "McLaren",
        "Mitsubishi", "GMC", "Infiniti", "Lincoln", "Peugeot", "Pontiac", "Saab", "Genesis",
        "Suzuki", "Citroen", "Fiat", "Lotus", "Mini", "Peterbilt", "Saturn", "BMW M",
        "General Motors", "Kenworth", "KMT"],
        //required: [true, 'required']
    },
    modeli: {
        type: String,
        //required: [true, 'required'],
        validate: {
            validator: function(value) {
                const selectedBrand = this.brandi;
                const validModels = {
                    "BMW": ["X5", "X3", "3 Series", "5 Series", "7 Series", "i8"],
                    "Tesla": ["Model S", "Model 3", "Model X", "Model Y"],
                    "Mercedes-Benz": ["C-Class", "E-Class", "S-Class", "GLC", "GLE", "GLS", "A-Class", "CLA", "CLS", "GLA", "GLB", "GLC Coupe", "GLE Coupe", "GLS Coupe", "G-Class"],
                    "Audi": ["A3", "A4", "A5", "A6", "A7", "A8", "Q3", "Q5", "Q7", "Q8", "TT", "R8", "S3", "S4", "S5", "S6", "S7", "S8", "RS3", "RS4", "RS5", "RS6", "RS7"]
                };
                return validModels[selectedBrand].includes(value);
            },
            message: props => `${props.value} is not a valid model for the selected brand`
        }
    },
    qyteti: {
        type: String,
        enum: [
            "Tiranë", "Durrës", "Vlorë", "Shkodër", "Korçë", 
            "Fier", "Elbasan", "Berat", "Lushnjë", "Kavajë", 
            "Pogradec", "Lezhë", "Gjirokastër", "Sarande", 
            "Peshkopi", "Kukës", "Burrel", "Patos", "Krujë" 
        ],
        //required: [true, 'required']
    },
    fuel: {
        type: String,
        enum: [
            "Gasoline", "Diesel", "Electricity", "ElectricityPetrol","ElectricityDiesel",
            "Gas","GasPetrol","GasDiesel","Hydrogen" 
        ],
        //required: [true, 'required']
    },
    cylinderVolumeInLiters: Number,
    powerInHp: Number,
    co2EmissionsIgKm: 
    {
        String,
    

    },

    gearbox: 
    {
        type: String,
        enum: ["automatic", "manual", "Semi-automatic"],
        //required: [true, 'required']
    },
    gearboxDesignation: String,
    wheelDrive: {
        type: String,
        enum: ["Rear wheel drive", "four wheel drive", "front wheel drive"],
        //required: [true, 'required']
    },
    wheelDriveDesignation: String,
    bodyType: {
        type: String,
        enum: ["Convertible", "Coupe", "Multipurpose vehicle", "Cash register",
        "Combi 3-door", "Combi 5-door", "Pickup", "SUV/Offroad", "Sedan",
        "Station wagon", "Other"],
        //required: [true, 'required']
    },
    numberOfSeats: {
        type: Number,
        //required: [true, 'required']
    },
    numberOfDoors: Number,
    netWeightInKg: Number,
    mainColor: {
        type: String,
        enum: [
            "White", "Black", "Red", "E gjelbër", "Blue", 
            "Green", "Yellow", "E vjollcë", "Orange", "Purple", 
            "Pink", "Brown", "Grey", "Silver", "Gold",
        ],
    },
    colorDescription: {
        type: String,
        //required: [true, 'required']
    },
    interiorColor: String,
    exterior: {
        // electricalMirrors: {
        //     type: Boolean,
        // },
        // hangerFixedHook: {
        //     type: Boolean,
        // },
        // ledLights: {
        //     type: Boolean,
        // },
        // metallicPaint: {
        //     type: Boolean,
        // },
        // winterWheels: {
        //     type: Boolean,
        // },
        // allSeasonTires: {
        //     type: Boolean,
        // },
        // laserLight: {
        //     type: Boolean,
        // },
        // lightweightRimSummer: {
        //     type: Boolean,
        // },
        // summerWheels: {
        //     type: Boolean,
        // },
        // xenonLights: {
        //     type: Boolean,
        // },
        // trailerAttachment: {
        //     type: Boolean,
        // },
        // cargoHolders: {
        //     type: Boolean,
        // },
        // lightweightRimWinter: {
        //     type: Boolean,
        // },
        // roofRails: {
        //     type: Boolean,
        // }
        frontParkingSensor: {
            type: Boolean,
            default: false
        },
        lightSensor: {
            type: Boolean,
            default: false
        },
        rainSensor: {
            type: Boolean,
            default: false
        },
        rearParkingSensor: {
            type: Boolean,
            default: false
        },
        reversingCamera: {
            type: Boolean,
            default: false
        },
        darkWindowsBehind: {
            type: Boolean,
            default: false
        },



    },
    driverAssistance: {
        // highBeamAssistant: {
        //     type: Boolean,
        //     default: false
        // },
      
    },
    interior: {
        // electricWindows: {
        //     type: Boolean,
        //     default: false
        // },
        // seatsInFullLeather: {
        //     type: Boolean,
        //     default: false
        // },
      
        
       
        // sportsSeats: {
        //     type: Boolean,
        //     default: false
        // }
    },
    comfort: {
        airConditioning: {
            type: Boolean,
            default: false
        },
        seatsInPartialLeather: {
            type: Boolean,
            default: false
        },
        antiSpin: {
            type: Boolean,
            default: false
        },
        cruiseControlAdaptive: {
            type: Boolean,
            default: false
        },
        // middleArms: {
        //     type: Boolean,
        //     default: false
        // },
        keylessStart: {
            type: Boolean,
            default: false
        },
        sunroofGlass: {
            type: Boolean,
            default: false
        },
        // trunkCover: {
        //     type: Boolean,
        //     default: false
        // },
        electricalSeatWithMemory: {
            type: Boolean,
            default: false
        },
        // cabinHeater: {
        //     type: Boolean,
        //     default: false
        // },
        // engineHeater: {
        //     type: Boolean,
        //     default: false
        // },
        heatedSeats: {
            type: Boolean,
            default: false
        },
        cruiseControl: {
            type: Boolean,
            default: false
        },
        electricSeatWithMemory: {
            type: Boolean,
            default: false
        },
        airSuspension: {
            type: Boolean,
            default: false
        },
        // levelRegulation: {
        //     type: Boolean,
        //     default: false
        // }
    },
    mediaEntertainment: {
        auxInput: {
            type: Boolean,
            default: false
        },
        // handsfreeScheme: {
        //     type: Boolean,
        //     default: false
        // },
        // multifunctionSteeringWheel: {
        //     type: Boolean,
        //     default: false
        // },
        // radioDABPlus: {
        //     type: Boolean,
        //     default: false
        // },
        bluetooth: {
            type: Boolean,
            default: false
        },
        headUpDisplay: {
            type: Boolean,
            default: false
        },
        navigationSystem: {
            type: Boolean,
            default: false
        },
        radioFM: {
            type: Boolean,
            default: false
        },
        cdPlayer: {
            type: Boolean,
            default: false
        },
        // cassettePlayer: {
        //     type: Boolean,
        //     default: false
        // },
        // originalPhone: {
        //     type: Boolean,
        //     default: false
        // },
        tvScreenInTheBackSeat: {
            type: Boolean,
            default: false
        }
    },
    engineDrive: {
        // antiScratch: {
        //     type: Boolean,
        //     default: false
        // },
        // diffLock: {
        //     type: Boolean,
        //     default: false
        // },
       
        // tripComputer: {
        //     type: Boolean,
        //     default: false
        // },
        // dieselParticulateFilter: {
        //     type: Boolean,
        //     default: false
        // },
        // powerSteering: {
        //     type: Boolean,
        //     default: false
        // }
    },
    security: {
        absBrakes: {
            type: Boolean,
            default: false
        },
        // retrievalSystem: {
        //     type: Boolean,
        //     default: false
        // },
        // sideAirbags: {
        //     type: Boolean,
        //     default: false
        // },
        // frontAirbag: {
        //     type: Boolean,
        //     default: false
        // },
        // isofix: {
        //     type: Boolean,
        //     default: false
        // },
        // immobilizer: {
        //     type: Boolean,
        //     default: false
        // },
        alarm: {
            type: Boolean,
            default: false
        },
        centralLocking: {
            type: Boolean,
            default: false
        }
    },    
    kilometrat: {
        type: Number,
        
        //required: [true, 'required']
    },

    carDamage: {
        type: String,
        enum: ["Yes", "No"],
        //required: [true, 'required']
    },
    damageDetails: {
        type: String,
        required: function() {
            return this.carDamage === "Yes";
        }
    },
    image: {
   
        type: String,
    },
    imageDescription: {
        type: String,
        //required: [true, 'required']
    },
    description: String,
    
    price: {
        type: Number,
        //required: [true, 'required']
    },
    contactInfo: String,
    streetAddress: String,
    number: String,
   
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    eLire:{
        type: Boolean,
        default: true
    },
  
    
}, { timestamps: true });

module.exports = mongoose.model('Form', Form);
