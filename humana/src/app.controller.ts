import { Controller, Get } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { Interaction } from './interaction';

@Controller()
export class AppController {

  constructor(private readonly httpService: HttpService) {}

  @Get('health')
  getHealth() {
    return {
      status: 'ok from humana',
      timestamp: new Date().toISOString(),
    };
  }

  @Get('interactions')
  async getInteractions() {
    const response: AxiosResponse<Interaction[]> = await this.httpService.axiosRef.get(`${process.env.GENESYS_API_URL}/interactions`);
    const interactions: Interaction[] = response.data;
    return interactions;
  }

}
