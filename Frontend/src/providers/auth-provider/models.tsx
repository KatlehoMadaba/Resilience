import { ReflistRecoveryPhase } from "@/enums/ReflistRecoveryPhase";
import { ReflistSex } from "@/enums/ReflistSex";

export interface IAuth {
  id?: string;
  userName?: string;
  name?: string;
  surname?: string;
  emailAddress?: string;
  role: string;
  //Person
  anonymousId?: string;
  displayName?: string;
  useDisplayNameOnly?: boolean;
  sex?: ReflistSex;
  phoneNumber?: string;
  password: string;
  isAnonymous?: boolean;
  isActive?: boolean;
  incidentDate?: Date;
  //ImmediateSurvivor
  hasReceivedMedicalAttention?: boolean;
  hasReportedToAuthorities?: boolean;
  //Past Survivor
  hasDisclosedBefore?: boolean;
  timeElapsedInDays?: number; // Time since incident
  recoveryPhase?: ReflistRecoveryPhase;
  //GeneralSupporter
  supportMotivation?: string;
  isSubscribedToUpdates?: string;
  areasOfInterest?: string[];
  //Professional
  profession?: string;
  organization?: string;
  credentials?: string;
  isVerified?: boolean;
}

export interface ISignInRequest {
  userNameOrEmailAddress: "string";
  password: "string";
  rememberClient: true;
}
export interface IEmergencySignIn {
  anonymousId: string;
  date: Date;
}
export interface ISignInResponse {
  result: {
    accessToken: string;
  };
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

export interface IPastSurvivorRegsister {
  userName: string;
  name: string;
  surname: string;
  password: string;
  emailAddress: string;
  displayName: string;
  useDisplayNameOnly: boolean;
  sex: number;
  phoneNumber: string;
  anonymousId?: string;
  isAnonymous?: boolean;
  incidentDate?: Date;
  hasDisclosedBefore: boolean;
  timeElapsedInDays: number;
  recoveryPhase: number;
}