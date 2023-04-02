import { ListComponent } from "@/components";
import {  PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
const prisma = new PrismaClient()

export default async function Login() {

  return <ListComponent />;
}
