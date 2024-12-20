"use server"
import { firestore } from "@/services/firebase"
import { collection, getDocs } from "firebase/firestore"

export type Volunteer = {
  email: string,
  attendantFirstName: string,
  attendantLastName: string,
  initials: string
}

export type GetVolunteersResponse = {
  id: string,
  email: string,
  attendantFirstName: string,
  attendantLastName: string,
  initials: string
}

export async function GetVolunteers() {
  const volunteersRef = collection(firestore, "atendentes")
  try {
    const responseArray: GetVolunteersResponse[] = [];
    const querySnapshot = await getDocs(volunteersRef)
    if (querySnapshot.size > 0) {
      querySnapshot.forEach((doc) => {
        const data = doc.data() as Volunteer;
        const responseObject: GetVolunteersResponse = {
          id: doc.id,
          ...data
        };
        responseArray.push(responseObject);
      });

      console.log(responseArray)
      return JSON.parse(JSON.stringify(responseArray));

    } else {
      console.log("No such document")
      return "No such document"
    }
  } catch (err) {
    if (err instanceof Error){
      console.log(err.message)
     return err.message
    }
  }
}