export interface IProfessional {
  userId: number;
  userName: string;
  name: string;
  surname: string;
  emailAddress: string;
  sex: 1;
  phoneNumber: string;
  profession: string;
  organization: string;
  credentials: string;
  isVerified: boolean;
  isActive: boolean;
  id?: string;
}

export interface IProfessionalRegister {
  userName: string;
  name: string;
  surname: string;
  password: string;
  emailAddress: string;
  sex: number;
  phoneNumber: string;
  profession: string;
  organization: string;
  credentials: string;
  isVerified: boolean;
  isActive: boolean;
}
