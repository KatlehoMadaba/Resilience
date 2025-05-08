import { ReflistSex } from "@/enums/ReflistSex";

export interface MedicalAssistanceRecord {
  id?: string;
  details?: string;
}

export interface ProgressTracker {
  id?: string;
  progress?: string;
}
export interface ICrowdfundingCampaign {
  id?: string;
}
export interface IReport {
  id?: string;
}
export interface IStory {
  id?: string;
}
export interface ITestimony {
  id?: string;
}
export interface IPetiton {
  id?: string;
}
export interface ISavedResource {
  id?: string;
}
export interface ISupportSession {
  id?: string;
}

export interface ISurvivorRegister {
  userName: string;
  name: string;
  surname: string;
  password: string;
  emailAddress: string;
  displayName: string;
  useDisplayNameOnly: boolean;
  sex: number;
  phoneNumber: string;
  anonymousId: string;
  isAnonymous: boolean;
  incidentDate: Date;
  hasReceivedMedicalAttention: boolean;
  hasReportedToAuthorities: boolean;
}
export interface ISurvivor {
  userId: number;
  userName?: string;
  name?: string;
  surname?: string;
  emailAddress?: string;
  displayName?: string;
  useDisplayNameOnly?: boolean;
  sex?: ReflistSex;
  phoneNumber?: string;
  supportSessions?: ISupportSession[];
  reports?: IReport[];
  stories?: IStory[];
  petitions?: IPetiton[];
  crowdfundingCampaigns?: ICrowdfundingCampaign[];
  progressTracker?: ProgressTracker | null;
  savedResources?: ISavedResource[];
  testimonies?: ITestimony[];
  anonymousId?: string;
  isAnonymous?: boolean;
  incidentDate?: Date | null;
  hasReceivedMedicalAttention?: boolean;
  hasReportedToAuthorities?: boolean;
  medicalAssistanceRecord?: MedicalAssistanceRecord | null;
  id: string;
}
export interface ISurvivorRegisteration {
  userName?: string;
  name?: string;
  surname?: string;
  password?: string;
  emailAddress?: string;
  displayName?: string;
  useDisplayNameOnly?: boolean;
  sex?: ReflistSex;
  phoneNumber?: string;
  anonymousId?: string;
  isAnonymous?: boolean;
  incidentDate?: Date;
  hasReceivedMedicalAttention?: boolean;
  hasReportedToAuthorities?: boolean;
}
export interface UpdateSurvivorDto {
  userName?: string;
  name?: string;
  surname?: string;
  password?: string;
  emailAddress?: string;
  displayName?: string;
  useDisplayNameOnly?: boolean;
  sex?: ReflistSex;
  phoneNumber?: string;
  anonymousId?: string;
  isAnonymous?: boolean;
  incidentDate?: string;
  hasReceivedMedicalAttention?: boolean;
  hasReportedToAuthorities?: boolean;
}


