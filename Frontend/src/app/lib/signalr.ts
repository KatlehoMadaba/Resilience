// lib/signalr.ts
import { IChatMessage } from "@/providers/chat-provider/models";
import * as signalR from "@microsoft/signalr";

// Define the shape of your message if known
export interface ChatMessageDto {
    message: string;
    sender: string;
    timestamp?: string;
}

let connection: signalR.HubConnection | null = null;

export const startConnection = async () => {
    if (!connection) {
        connection = new signalR.HubConnectionBuilder()
            .withUrl("https://localhost:44311/signalr", {
                transport: signalR.HttpTransportType.WebSockets,
                skipNegotiation: true
            })// Adjusted endpoint
            .withAutomaticReconnect()
            .build();
    }

    if (connection.state === signalR.HubConnectionState.Disconnected) {
        try {
            await connection.start();
        } catch (error) {
            console.error("SignalR connection failed:", error);
        }
    }
};

export const onReceiveTaxiUpdate = (
    callback: (chatDto: IChatMessage) => void
) => {
    if (connection) {
        connection.on("ReceiveTaxiUpdate", callback);
    }
};
