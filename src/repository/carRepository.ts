import prisma from "../config/database.js";
import { Car } from "@prisma/client";

async function getCars() {
  return await prisma.car.findMany();
}

async function getCar(id: number) {
  return await prisma.car.findUnique({ where: { id } });
}

async function getCarWithLicensePlate(licensePlate: string) {
  return await prisma.car.findUnique({ where: { licensePlate } });
}

type CreateCar = Omit<Car, "id" | "createAt">;

async function createCar(data: CreateCar) {
  await prisma.car.create({ data });
}

async function deleteCar(id: number) {
  await prisma.car.delete({ where: { id } });
}

async function updateCar(id: number, data: Partial<CreateCar>) {
  await prisma.car.update({ where: { id }, data });
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  deleteCar,
  updateCar,
};

export default carRepository;
