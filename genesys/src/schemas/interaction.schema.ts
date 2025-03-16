import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type InteractionDocument = HydratedDocument<Interaction>;

@Schema()
export class Interaction {

  @Prop()
  direction: string;

  @Prop({ type: Object })
  participant_data: ParticipantData;

}

export interface ParticipantData {
    sourceId: string;
    sourceName: string;
}

export const InteractionSchema = SchemaFactory.createForClass(Interaction); 