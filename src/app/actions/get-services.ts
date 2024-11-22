"use server"
import { firestore } from "@/services/firebase"
import { collection, getDocs, orderBy, query } from "firebase/firestore"

type Service = {
  attendant: string,
  category: string,
  city: string,
  cnpj: string,
  cpf: string,
  date: Date,
  fullName: string,
  observation: string,
  phoneNumber: string,
  serviceType: string
}

type GetServicesResponse = {
  id: string,
  attendant: string,
  category: string,
  city: string,
  cnpj: string,
  cpf: string,
  date: Date,
  fullName: string,
  observation: string,
  phoneNumber: string,
  serviceType: string
}

export async function getServices() {
  const servicesRef = collection(firestore, "atendimentos")
  try {
    const responseArray: GetServicesResponse[] = [];
    const q = query(servicesRef, orderBy("date", "desc"))
    const querySnapshot = await getDocs(q)
    if (querySnapshot.size > 0) {
      querySnapshot.forEach((doc) => {
        const data = doc.data() as Service;
        const responseObject: GetServicesResponse = {
          id: doc.id,
          ...data
        };
        responseArray.push(responseObject);
      });

      console.log(responseArray)
      return responseArray;

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