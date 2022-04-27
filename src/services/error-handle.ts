import request from 'axios';
import { toast } from 'react-toastify';

import { ErrorType } from '../types/error';

export enum HttpCode {
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
}

export const errorHandle = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const {response} = error;

  if (response) {
    switch (response.status) {
      case HttpCode.BadRequest:
        toast.info(response.data.error);
        break;
      case HttpCode.Unauthorized:
        toast.info(response.data.error);
        break;
      case HttpCode.NotFound:
        break;
    }
  }
};
