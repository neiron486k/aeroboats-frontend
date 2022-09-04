export default interface ListResponse<T> {
  links: {
    previous?: string;
    next?: string;
  };
  total: number;
  pages: number;
  page: number;
  results: T[];
}
