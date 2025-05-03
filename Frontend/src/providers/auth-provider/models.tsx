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
  Sex?: ReflistSex;
  phoneNumber?: string;
  password: string;
  IsAnonymous?: boolean;
  isActive?: boolean;
  IncidentDate?: Date;
  //ImmediateSurvivor
  HasReceivedMedicalAttention?: boolean;
  HasReportedToAuthorities?: boolean;
  //Past Survivor
  HasDisclosedBefore?: boolean;
  TimeElapsedInDays?: number; // Time since incident
  RecoveryPhase?: ReflistRecoveryPhase;
  //GeneralSupporter
  SupportMotivation?: string;
  IsSubscribedToUpdates?: string;
  AreasOfInterest?: string[];
  //Professional
  Profession?: string;
  Organization?: string;
  Credentials?: string;
  IsVerified?: boolean;
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
