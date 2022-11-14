import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  getAllCities() {
    return this.prisma.city.findMany()
  }

  getCityById(ID: number) {
    return this.prisma.city.findUnique({
      where: { ID },
      // select: {
      //   Name: true,
      //   Population: true
      // }
    })
  }
}
