import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

import { firestore } from "@/services/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

type Service = {
  date: string,
  cpf: string,
  cnpj: string,
  observation: string,
  phoneNumber: string,
  fullName: string,
  category: string,
  serviceType: string,
  city: string,
  attendantId: string,
  attendantFirstName: string,
  attendantLastName: string,
  attendantEmail: string,
  attendantInitials: string,
}

type GetServicesResponse = {
  id: string,
  date: string,
  cpf: string,
  cnpj: string,
  observation: string,
  phoneNumber: string,
  fullName: string,
  category: string,
  serviceType: string,
  city: string,
  attendantId: string,
  attendantFirstName: string,
  attendantLastName: string,
  attendantEmail: string,
  attendantInitials: string,
}

export async function GET(req: NextApiRequest, res: NextApiResponse) {
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
      return new NextResponse(JSON.stringify({
        status: 200,
        responseArray
      }))

    } else {
      console.log("No such document")
      return new NextResponse(JSON.stringify({
        status: 404,
        message: "No such document"
      }))
    }
  } catch (err) {
    return new NextResponse(JSON.stringify({
      status: 500,
      message: "Failed to fetch services",
      err
    }))
  }
}