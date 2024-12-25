import { Response } from "express";

type TData<T> = {
  statusCode: number;
  success: boolean;
  message?: string;
  data: T;
};

export const sendResponse = <T>(res: Response, data: TData<T>) => {
  const { data: responseData, statusCode, message, success } = data;

  res.status(statusCode).json({
    message,
    success,
    data: responseData,
  });
  return;
};
