db = db.getSiblingDB('db');

db.interactions.insertMany([
    {
        direction: "outbound",
        participant_data: {
            sourceId: "00FF000000",
            sourceName: "IVR",
        }
    },
    {
        direction: "inbound",
        participant_data: {
            sourceId: "00FF111111",
            sourceName: "IVR",
        }
    },
    {
        direction: "outbound",
        participant_data: {
            sourceId: "550e8400-e29b-41d4-a716-446655440000",
            sourceName: "Debut",
        }
    },
    {
        direction: "inbound",
        participant_data: {
            sourceId: "123e4567-e89b-12d3-a456-426614174000",
            sourceName: "Debut",
        }
    }
]);