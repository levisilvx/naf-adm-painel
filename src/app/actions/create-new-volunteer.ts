"use server"
import { firestore } from "@/services/firebase";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";

interface createNewVolunteerFormData {
  attendantFirstName: string,
  attendantLastName: string,
  email: string
}

export async function createNewVolunteerAction(data: createNewVolunteerFormData) {
  const initials = data.attendantFirstName.charAt(0) + data.attendantLastName.charAt(0)

  const volunteersRef = collection(firestore, "atendentes")

  try {
    await addDoc(volunteersRef, {
      attendantFirstName: data.attendantFirstName,
      attendantLastName: data.attendantLastName,
      initials: initials,
      email: data.email
    })

    return (Promise.resolve("success"))
  } catch (err){
    console.log(err)
    return (err)
  }
}