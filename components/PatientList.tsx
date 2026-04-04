export default function PatientLists({patients}) {    
     return(
    <div>
        {patients.map((patient: any) => (
       <div key={patient.id}>
        {patient.name} - {patient.email} - {patient.phoneNumber}
        </div>
        ))}
    </div>
    )
}
