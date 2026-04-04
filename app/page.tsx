import PatientList from "@/components/PatientList";  
import Createpatient from "@/components/CreatePatient";
import prisma from "@/lib/prisma";

export default async function Page(){
    const patients = await prisma .patient.findMany();
    const patientCount = await prisma.patient.count();

    return(

   

    <div>
        <Createpatient />
        <PatientList patients = {patients} />
        <h1>Total patients: {patientCount}</h1>
    </div>
    
)

}