"use server"
import { firestore } from "@/services/firebase";
import {  collection, getDocs, query } from "firebase/firestore";

export async function getVolunteers() {
  const volunteersRef = collection(firestore, "atendentes")
  const snapshot = await getDocs(volunteersRef)

  console.log(snapshot)
  return { 
    1: "A",
    2: "B"
  }
}