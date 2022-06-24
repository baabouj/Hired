export type PaginationInfo = {
  total: number;
  current_page: number;
  next_page: number | null;
  prev_page: number | null;
  last_page: number;
  per_page: number;
};
