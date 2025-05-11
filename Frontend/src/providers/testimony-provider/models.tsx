export interface ITestimony {
  personId: string;
  title: string;
  content: string;
  tags: string[];
  // creationTime: Date;
  isAnonymous: boolean;
}
export interface ITestimonyResponse {
  personId: string;
  title: string;
  content: string;
  tags: string[];
  isAnonymous: true;
  creationTime: Date;
  id: string;
}
