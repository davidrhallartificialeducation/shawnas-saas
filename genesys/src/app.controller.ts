import { Controller, Get } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Interaction } from './schemas/interaction.schema';

@Controller()
export class AppController {
  constructor(
    @InjectModel(Interaction.name) private readonly interactionModel: Model<Interaction>,
  ) {}

  @Get('health')
  getHealth() {
    return {
      status: 'ok from genesys',
      timestamp: new Date().toISOString(),
    };
  }

  @Get('interactions')
  async getInteractions() {
    return await this.interactionModel.find().exec();
  }
}
