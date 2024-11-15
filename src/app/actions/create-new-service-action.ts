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
  attendant: string
}

export async function createNewServiceAction(data: createNewServiceFormData) {
  const formData = JSON.parse(JSON.stringify(data))
  const servicesRef = collection(firestore, "atendimentos")

  try {
    const docRef = await addDoc(servicesRef, {
      date: formData.date,
      cpf: formData?.cpf,
      cnpj: formData?.cnpj,
      observation: formData?.observation,
      phoneNumber: formData?.phoneNumber,
      fullName: formData.fullName,
      category: formData.category,
      serviceType: formData.serviceType,
      city: formData.city,
      attendant: "atendentes/kKSayud0t80FozvJgei6"
    })

    console.log(docRef)
    return (Promise.resolve("success"))
  } catch (err){
    console.log(err)
    return (err)
  }
}