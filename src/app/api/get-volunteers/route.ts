import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

import { firestore } from "@/services/firebase";
import { collection, getDocs } from "firebase/firestore";

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

export async function POST(req: NextApiRequest, res: NextApiResponse) {
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
      message: "Failed to fetch volunteers"
    }))
  }
}