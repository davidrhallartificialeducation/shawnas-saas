import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

  @Get('health')
  getHealth() {
    return {
      status: 'ok from humana',
      timestamp: new Date().toISOString(),
    };
  }

}
