
export interface IMedicalCentre {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  placeId: string;
  phoneNumber: string;
  operatingHours: string;
}

export interface ILocation {
  Latitude: number;
  Longitude: number;
}