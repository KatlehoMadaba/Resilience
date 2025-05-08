export interface ISexualAssaultReport {
    id?: string;
  
    // Report Reference
    reportId?: string;
    report?: object;
  
    // Victim Details
    fullName?: string;
    idNumber?: string;
    dateOfBirth?: Date;
    address?: string;
    phoneNumber?: string;
    occupation?: string;
  
    // Incident Details
    incidentDateTime?: Date;
    location?: string;
    aloneOrWithSomeone?: boolean;
    leadingEventsDescription?: string;
  
    // Suspect Details
    isSuspectKnown?: boolean;
    suspectName?: string;
    suspectDescription?: string;
    weaponOrThreats?: string;
  
    // Assault Details
    assaultDescription?: string;
    injuries?: boolean;
    wordsSpokenBySuspect?: string;
  
    // Post-Incident Actions
    actionsTaken?: string;
    changedClothesOrShowered?: boolean;
    clothesKept?: boolean;
  
    // Witnesses and Evidence
    witnessPresent?: boolean;
    witnessDetails?: string;
    cctvAvailable?: boolean;
    isOtherEvidence?: boolean;
    otherEvidenceDescription?: string;
  
    // Medical
    receivedMedicalAttention?: boolean;
    willingForensicExam?: boolean;
  
    // Safety and Support
    feelsSafe?: boolean;
    wantsCounsellor?: boolean;
    prefersFemaleOfficer?: boolean;
  }
  