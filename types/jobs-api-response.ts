import { Job, PaginationInfo } from ".";

export type JobsApiResponse = {
  info: PaginationInfo;
  data: Job[];
};
