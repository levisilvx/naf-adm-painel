"use server"
import { firestore } from "@/services/firebase";
import { addDoc, collection } from "firebase/firestore";

interface createNewServiceFormData {
  date: Date,
  cpf?: string,
  cnpj?: string,
  observation?: string,
  phoneNumber?: string,
  fullName: string,
  category: string,
  serviceType: string,
  city: string,
  attendantEmail: string
}

export async function createNewServiceAction(data: createNewServiceFormData) {
  const servicesRef = collection(firestore, "atendimentos")

  try {
    const docRef = await addDoc(servicesRef, {
      date: data.date,
      cpf: data?.cpf,
      cnpj: data?.cnpj,
      observation: data?.observation,
      phoneNumber: data?.phoneNumber,
      fullName: data.fullName,
      category: data.category,
      serviceType: data.serviceType,
      city: data.city,
      attendantEmail: "atendentes/kKSayud0t80FozvJgei6"
    })

    console.log(docRef)
    return (Promise.resolve("success"))
  } catch (err){
    console.log(err)
    return (err)
  }
}