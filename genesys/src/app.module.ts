import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { InteractionSchema, Interaction } from './schemas/interaction.schema';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI ?? ''),
    MongooseModule.forFeature([{ name: Interaction.name, schema: InteractionSchema }]),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
