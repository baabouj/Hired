import { Job } from "./job";

export type Category = {
  id: number;
  name: string;
  jobs?: Job[];
};
