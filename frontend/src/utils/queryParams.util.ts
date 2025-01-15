export const getQueryParams = (param: string, search: string): string => {
  const sp = new URLSearchParams(search);
  return sp.get(param) || "/";
};
