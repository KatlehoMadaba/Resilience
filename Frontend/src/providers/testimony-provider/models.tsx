export interface ITestimony {
  personId: string;
  title: string;
  content: string;
  tags: string[];
  isAnonymous: boolean;
}
export interface ITestimonyResponse {
  personId: string;
  title: string;
  content: string;
  tags: string[];
  isAnonymous: true;
  id: string;
}
