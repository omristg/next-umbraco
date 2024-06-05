import type { AxiosResponse } from "axios";

export const transformData = <T>({ data }: AxiosResponse<T>) => data;
