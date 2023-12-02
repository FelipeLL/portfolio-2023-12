export interface Job {
  title: string;
  date: string;
  description: string;
  activities?: string[];
  badges: string[];
  current?: boolean;
}
