"use server"
import { firestore } from "@/services/firebase";
import { addDoc, collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { GetVolunteerById } from "./get-volunteer-by-id";

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
  attendantId: string
}

type Volunteer = {
  email: string,
  attendantFirstName: string,
  attendantLastName: string,
  initials: string
}

type GetVolunteersResponse = {
  id: string,
  email: string,
  attendantFirstName: string,
  attendantLastName: string,
  initials: string
}

export async function createNewServiceAction(data: createNewServiceFormData) {
  const servicesRef = collection(firestore, "atendimentos")
  //const attendant = <GetVolunteersResponse>{}
  const date = data.date
  const now = new Date
  const hour = now.getHours()
  const min = now.getMinutes()
  const sec = now.getSeconds()
  date.setHours(hour, min, sec)

  const attendant = <GetVolunteersResponse>await GetVolunteerById(data.attendantId)

  try {
    const docRef = await addDoc(servicesRef, {
      date: date.toISOString(),
      cpf: data?.cpf,
      cnpj: data?.cnpj,
      observation: data?.observation,
      phoneNumber: data?.phoneNumber,
      fullName: data.fullName,
      category: data.category,
      serviceType: data.serviceType,
      city: data.city,
      attendantId: attendant.id,
      attendantFirstName: attendant.attendantFirstName,
      attendantLastName: attendant.attendantLastName,
      attendantEmail: attendant.email,
      attendantInitials: attendant.initials
    })

    console.log(docRef)
    return (Promise.resolve("success"))
  } catch (err){
    console.log(err)
    return (err)
  }
}