import { ReflistSex } from "@/enums/ReflistSex";
  
  export interface MedicalAssistanceRecord {
    id?: string;
    details?: string;
  }
  
 export  interface ProgressTracker {
    id?: string;
    progress?: string;
  }
  export interface ICrowdfundingCampaign{
    id?:string
  }
 export  interface IReport{
    id?:string
 }
 export interface IStory{
    id?:string
 }
 export interface ITestimony{
    id?:string
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
    supportSessions?: any[];
    reports?: IReport[];
    stories?: IStory[];
    petitions?: any[];
    crowdfundingCampaigns?:ICrowdfundingCampaign [];
    progressTracker?: ProgressTracker | null;
    savedResources?: any[];
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
  export interface UpdateSurvivorDto{
    userName?: string;
    name?: string;
    surname?: string;
    password?: string;
    emailAddress?: string;
    displayName?: string;
    useDisplayNameOnly?: boolean;
    sex?: ReflistSex ;
    phoneNumber?: string;
    anonymousId?: string;
    isAnonymous?: boolean;
    incidentDate?: Date;
    hasReceivedMedicalAttention?: boolean;
    hasReportedToAuthorities?: boolean;
  }