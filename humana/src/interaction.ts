export interface Interaction {
    _id: string;
    direction: 'inbound' | 'outbound';
    participant_data: {
        sourceId: string;
        sourceType: 'IVR' | 'Debut'
    }
}