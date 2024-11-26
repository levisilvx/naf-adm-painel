import { firestore } from "@/services/firebase";
import { doc, getDoc } from "firebase/firestore";

type Volunteer = {
  id: string,
  email: string,
  attendantFirstName: string,
  attendantLastName: string,
  initials: string
}

export async function GetVolunteerById<Volunteer>(id: string){
  const docRef = doc(firestore, "atendentes", id);

  try {
    const docSnapshot = await getDoc(docRef);
    const volunteer = {
      id: docSnapshot.id,
      ...docSnapshot.data()
    }
    console.log(volunteer)
    return volunteer

  } catch (err) {
    console.log(err)
    return(err)
  }
}