"use client";
import { useState } from "react";
import {useRouter} from "next/navigation";

export default function CreatePatient(fields: any[]) {
    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[gender, setGender] = useState("");
    const[email, setEmail] = useState("");
    const[phoneNumber, setPhoneNumber] = useState("");
    const[dateOfBirth, setDateOfBirth] = useState("");
    const[streetAddress, setStreetAddress] = useState("");      
    const[city, setCity] = useState("");
    const[state, setState] = useState("");
    const[zipCode, setZipCode] = useState(""); 
    const[country, setCountry] = useState("");
    const[bloodType, setBloodType] = useState("");
    const[height, setHeight] = useState("");
    const[weight, setWeight] = useState("");
    const[allergies, setAllergies] = useState("");
    const[currentMedications, setCurrentMedications] = useState("");
    const[medicalConditions, setMedicalConditions] = useState("");
    const[medicationDosages, setMedicationDosages] = useState("");
    const[currentConditions, setCurrentConditions] = useState("");
    const[pastSurgeries, setPastSurgeries] = useState("");
    const[insuranceProvider, setInsuranceProvider] = useState("");
    const[policyNumber, setPolicyNumber] = useState("");
    const[groupNumber, setGroupNumber] = useState("");  
    const[preferredDate, setPreferredDate] = useState("");
    const[preferredTime, setPreferredTime] = useState("");
    const[reasonForVisit, setReasonForVisit] = useState("");
    const[passportNumber, setPassportNumber] = useState("");
    const[nationality, setNationality] = useState("");
    const[arrivalDate, setArrivalDate] = useState("");
    const[departureDate, setDepartureDate] = useState("");
    const[hotelPreference, setHotelPreference] = useState("");
    const[cardholderName, setCardholderName] = useState("");
    const[cardNumber, setCardNumber] = useState("");
    const[expirationDate, setExpirationDate] = useState("");
    const[cvv, setCvv] = useState("");
    const[billingAddress, setBillingAddress] = useState("");
    const[medicalHistory, setMedicalHistory] = useState("");        
    const[surgeryDates, setSurgeryDates] = useState("");
    const[familyMedicalHistory, setFamilyMedicalHistory] = useState("");
    const[emergencyContactName, setEmergencyContactName] = useState("");
    const[emergencyContactPhone, setEmergencyContactPhone] = useState("");
    const[emergencyContactRelationship, setEmergencyContactRelationship] = useState("");         
    const[error, setError] = useState("");

    export const personalInfoFields = [
  { name: "firstName", label: "First Name", placeholder: "Enter first name", value: firstName, onChange: (e) => setFirstName(e.target.value) },
  { name: "lastName", label: "Last Name", placeholder: "Enter last name", value: lastName, onChange: (e) => setLastName(e.target.value) },
  { name: "dateOfBirth", label: "Date of Birth", placeholder: "Enter date of birth", value: dateOfBirth, onChange: (e) => setDateOfBirth(e.target.value) },
  { name: "gender", label: "Gender", placeholder: "Enter gender", value: gender, onChange: (e) => setGender(e.target.value) },
  { name: "phone", label: "Phone Number", placeholder: "Enter phone number", value: phoneNumber, onChange: (e) => setPhoneNumber(e.target.value) },
  { name: "email", label: "Email", placeholder: "Enter email", value: email, onChange: (e) => setEmail(e.target.value) },
];

export const addressFields = [
  { name: "street", label: "Street Address", placeholder: "Enter street address", value: streetAddress, onChange: (e) => setStreetAddress(e.target.value) },
  { name: "city", label: "City", placeholder: "Enter city", value: city, onChange: (e) => setCity(e.target.value) },
  { name: "state", label: "State", placeholder: "Enter state", value: state, onChange: (e) => setState(e.target.value) },
  { name: "zipCode", label: "Zip Code", placeholder: "Enter zip code", value: zipCode, onChange: (e) => setZipCode(e.target.value) },
  { name: "country", label: "Country", placeholder: "Enter country", value: country, onChange: (e) => setCountry(e.target.value)     },
];

 export const emergencyContactFields = [
  { name: "emergencyContactName", label: "Emergency Contact Name", placeholder: "Enter emergency contact name", value: emergencyContactName, onChange: (e) => setEmergencyContactName(e.target.value) },
  { name: "emergencyContactPhone", label: "Emergency Contact Phone", placeholder: "Enter emergency contact phone", value: emergencyContactPhone, onChange: (e) => setEmergencyContactPhone(e.target.value) },
  { name: "emergencyContactRelationship", label: "Relationship", placeholder: "Enter relationship", value: emergencyContactRelationship, onChange: (e) => setEmergencyContactRelationship(e.target.value) },    
];

export const medicalInfoFields = [
  { name: "bloodType", label: "Blood Type", placeholder: "Enter blood type", value: bloodType, onChange: (e) => setBloodType(e.target.value) },
  { name: "allergies", label: "Allergies", placeholder: "Enter allergies", value: allergies, onChange: (e) => setAllergies(e.target.value) },
  { name: "currentMedications", label: "Current Medications", placeholder: "Enter current medications", value: currentMedications, onChange: (e) => setCurrentMedications(e.target.value) },
  { name: "medicalConditions", label: "Medical Conditions", placeholder: "Enter medical conditions", value: medicalConditions, onChange: (e) => setMedicalConditions(e.target.value) },
  { name: "pastSurgeries", label: "Past Surgeries", placeholder: "Enter past surgeries", value: pastSurgeries, onChange: (e) => setPastSurgeries(e.target.value) },
];

export const insuranceFields = [
  { name: "insuranceProvider", label: "Insurance Provider", placeholder: "Enter insurance provider", value: insuranceProvider, onChange: (e) => setInsuranceProvider(e.target.value) },
  { name: "policyNumber", label: "Policy Number", placeholder: "Enter policy number", value: policyNumber, onChange: (e) => setPolicyNumber(e.target.value) },
  { name: "groupNumber", label: "Group Number", placeholder: "Enter group number", value: groupNumber, onChange: (e) => setGroupNumber(e.target.value) },
];

export const appointmentFields = [
  { name: "preferredDate", label: "Preferred Date", placeholder: "Enter preferred date", value: preferredDate, onChange: (e) => setPreferredDate(e.target.value) },
  { name: "preferredTime", label: "Preferred Time", placeholder: "Enter preferred time", value: preferredTime, onChange: (e) => setPreferredTime(e.target.value) },
  { name: "reasonForVisit", label: "Reason for Visit", placeholder: "Enter reason for visit", value: reasonForVisit, onChange: (e) => setReasonForVisit(e.target.value) },
];

export const travelInfoFields = [
  { name: "passportNumber", label: "Passport Number", placeholder: "Enter passport number", value: passportNumber, onChange: (e) => setPassportNumber(e.target.value) },
  { name: "nationality", label: "Nationality", placeholder: "Enter nationality", value: nationality, onChange: (e) => setNationality(e.target.value) },
  { name: "arrivalDate", label: "Arrival Date", placeholder: "Enter arrival date", value: arrivalDate, onChange: (e) => setArrivalDate(e.target.value) },
  { name: "departureDate", label: "Departure Date", placeholder: "Enter departure date", value: departureDate, onChange: (e) => setDepartureDate(e.target.value) },
  { name: "hotelPreference", label: "Hotel Preference", placeholder: "Enter hotel preference", value: hotelPreference, onChange: (e) => setHotelPreference(e.target.value) },
];

export const paymentFields = [
  { name: "cardholderName", label: "Cardholder Name", placeholder: "Enter cardholder name", value: cardholderName, onChange: (e) => setCardholderName(e.target.value) },
  { name: "cardNumber", label: "Card Number", placeholder: "Enter card number", value: cardNumber, onChange: (e) => setCardNumber(e.target.value) },
  { name: "expirationDate", label: "Expiration Date", placeholder: "Enter expiration date", value: expirationDate, onChange: (e) => setExpirationDate(e.target.value) },
  { name: "cvv", label: "CVV", placeholder: "Enter CVV", value: cvv, onChange: (e) => setCvv(e.target.value) },
  { name: "billingAddress", label: "Billing Address", placeholder: "Enter billing address", value: billingAddress, onChange: (e) => setBillingAddress(e.target.value) },
];

    const router = useRouter();


    async function handleSubmit() {  
    
    const res = await fetch("/api/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        dateOfBirth: dateOfBirth,
        streetAddress: streetAddress,
        city: city,
        state: state,
        zipCode: zipCode,
        bloodType: bloodType,
        height: height,
        weight: weight,
        allergies: allergies,
        currentMedications: currentMedications,
        medicationDosages: medicationDosages,
        currentConditions: currentConditions,
        pastSurgeries: pastSurgeries,
        surgeryDates: surgeryDates,
        familyMedicalHistory: familyMedicalHistory,
        emergencyContactName: emergencyContactName,
        emergencyContactPhone: emergencyContactPhone,
        emergencyContactRelationship: emergencyContactRelationship  
    })
        
    })
    
        if (!res.ok) {
    const errorData = await res.text();
    setError(errorData);

        }

    else {
        setError("");

        router.refresh();

    }
}

function getPatientInfo(fields: any[]) {
return fields.map(function(field) {
    return (
      <input
        key={field.name}
        name={field.name}
        placeholder={field.placeholder}
        value={field.value}
        onChange={(e) => field.onChange(e)}
      />
    );
  });
}


return <div className="flex flex-col gap3 max-w-sm">
<form onSubmit={handleSubmit}>

  <getPatientInfo(fields={fields}) />
</form>

<button 
    onClick={handleSubmit} 
    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Create User
        </button>
        {error && <p className="text-red-500">{error}</p>}
</div>
}

