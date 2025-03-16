import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

  @Get('health')
  getHealth() {
    return {
      status: 'ok from genesys',
      timestamp: new Date().toISOString(),
    };
  }

}
