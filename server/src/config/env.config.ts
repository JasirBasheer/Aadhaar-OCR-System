import dotenv from 'dotenv'
dotenv.config()
import { EnvErrMsg, HttpResCode } from "@/constants";
import { CustomError } from "@/errors";


export const env = {
  get PORT(): number {
    const port = process.env.PORT;
    if (!port) {
      throw new CustomError(
        EnvErrMsg.PORT_UNDEFINED,
        HttpResCode.INTERNAL_SERVER_ERROR
      );
    }
    const portNumber = parseInt(port, 10);
    if (isNaN(portNumber)) {
      throw new CustomError(EnvErrMsg.PORT_INVALID, HttpResCode.BAD_REQUEST);
    }
    return portNumber;
  },

  get CLIENT_ORIGIN() {
    if (!process.env.CLIENT_ORIGIN) {
      throw new CustomError(
        EnvErrMsg.CLIENT_ORIGIN_UNDEFINED,
        HttpResCode.INTERNAL_SERVER_ERROR
      );
    }
    return process.env.CLIENT_ORIGIN;
  },

  get CLOUDINARY_CLOUD_NAME() {
    if (!process.env.CLOUDINARY_CLOUD_NAME) {
      throw new CustomError(
        EnvErrMsg.CLOUDINARY_CLOUD_NAME_UNDEFINED,
        HttpResCode.INTERNAL_SERVER_ERROR
      );
    }
    return process.env.CLOUDINARY_CLOUD_NAME;
  },

  get CLOUDINARY_API_KEY() {
    if (!process.env.CLOUDINARY_API_KEY) {
      throw new CustomError(
        EnvErrMsg.CLOUDINARY_API_KEY_UNDEFINED,
        HttpResCode.INTERNAL_SERVER_ERROR
      );
    }
    return process.env.CLOUDINARY_API_KEY;
  },

  get CLOUDINARY_API_SECRET() {
    if (!process.env.CLOUDINARY_API_SECRET) {
      throw new CustomError(
        EnvErrMsg.CLOUDINARY_API_SECRET_UNDEFINED,
        HttpResCode.INTERNAL_SERVER_ERROR
      );
    }
    return process.env.CLOUDINARY_API_SECRET;
  },
};
