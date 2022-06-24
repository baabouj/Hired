import { Job } from "./job";

export type Company = {
  id: number;
  name: string;
  website?: string;
  address?: string;
  jobs?: Job[];
};
