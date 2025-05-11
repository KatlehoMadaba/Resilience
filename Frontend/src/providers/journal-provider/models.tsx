export interface IJournalEntry {
  personId: string;
  content: string;
  entryDate: string; // ISO 8601 formatted string
  tags: string[];
  isPrivate: boolean;
}
