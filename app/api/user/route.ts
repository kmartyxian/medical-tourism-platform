import prisma from "@/lib/prisma";

export async function GET() {
    const patients = await prisma.patient.findMany();
    return Response.json(patients);
}

export async function POST(request: Request) {
    try {
         const errors = [];
        const body = await request.json();
        
        const{
        firstName,
        lastName,
        email,          
        phoneNumber,
        dateOfBirth,
        streetAddress,
        city,
        state,
        zipCode,
        bloodType,
        height,
        weight,
        allergies,
        currentMedications,
        medicationDosages,
        currentConditions,
        pastSurgeries,
        surgeryDates,
        familyMedicalHistory,
        emergencyContactName,
        emergencyContactPhone,
        emergencyContactRelationship
    } = body
        
// NAME (letters only, no spaces)
const nameRegex = /^[A-Za-z]+$/;
if (!nameRegex.test(firstName)) errors.push("Invalid first name");
if (!nameRegex.test(lastName)) errors.push("Invalid last name");

// EMAIL
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) errors.push("Invalid email");

// PHONE (10 digits only)
const phoneRegex = /^[0-9]{10}$/;
if (!phoneRegex.test(phoneNumber)) errors.push("Invalid phone number");

// DATE OF BIRTH (must exist + valid date)
if (!dateOfBirth || isNaN(Date.parse(dateOfBirth))) {
  errors.push("Invalid date of birth");
}

// ADDRESS
if (!streetAddress || streetAddress.trim() === "") {
  errors.push("Street address required");
}

if (!nameRegex.test(city)) {
  errors.push("Invalid city");
}

// STATE (2 letters like MN, CA)
const stateRegex = /^[A-Za-z]{2}$/;
if (!stateRegex.test(state)) {
  errors.push("Invalid state");
}

// ZIP (5 digits)
const zipRegex = /^[0-9]{5}$/;
if (!zipRegex.test(zipCode)) {
  errors.push("Invalid ZIP code");
}

// FINAL CHECK
if (errors.length > 0) {
  return new Response(errors.join(", "), { status: 400 });
}
else {
    const createpatient = await prisma.patient.create({
    data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        dateOfBirth: new Date(dateOfBirth),
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

    }
    });
    return new Response(JSON.stringify(createpatient));
}
    }

catch (error: any) {
    if(error.code === "P2002") {
        return new Response("patient with this email already exists", { status: 400 });
    }}
}