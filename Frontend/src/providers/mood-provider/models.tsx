import { ReflistMoodType } from "@/enums/ReflistMoodType";

export interface IMoodEntry {
  // id: string;
  personId?: string;
  rating: number;
  moodType: ReflistMoodType;
  notes: string;
  entryDate: Date;
}
