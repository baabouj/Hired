import { Category, Company } from ".";
import JobType from "../constants/job-type";

export type Job = {
  id: number;
  company_id: number;
  category_id: number;
  position: string;
  description: string;
  type: JobType;
  salary: number;
  location: string;
  experience_level: string;
  created_at: string;
  updated_at: string;
  company: Company;
  category: Category;
};
