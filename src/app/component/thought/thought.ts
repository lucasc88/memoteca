export interface Thought {
  id?: number;//it's not required when created
  content: string;
  authorship: string;
  model: string;
}
