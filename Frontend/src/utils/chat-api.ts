import { ChatMessage } from "@/components/chat/ChatMessage";

export async function fetchMessagesWith(personId: string): Promise<ChatMessage[]> {
    const res = await fetch(`/api/services/app/Chat/GetMessagesWithPersonAsync?personId=${personId}`);
    const data = await res.json();
    return data.result;
}

export async function sendMessage(receiverPersonId: string, content: string) {
    const res = await fetch("/api/services/app/Chat/SendMessageAsync", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ receiverPersonId, content }),
    });

    if (!res.ok) throw new Error("Failed to send message");
}

export async function getMyPersonId(): Promise<string> {
    const res = await fetch("/api/services/app/Chat/GetMyPersonId");
    const data = await res.json();
    return data.result;
}
