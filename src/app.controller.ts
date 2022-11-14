import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/cities')
  getCities() {
    return this.appService.getAllCities()
  }

  @Get('/city/:id')
  getCity(@Param() params) {
    const { id } = params;

    return this.appService.getCityById(Number(id))
  }
}
