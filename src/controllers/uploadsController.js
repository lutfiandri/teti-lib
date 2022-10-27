import { minifyAndSaveImage } from '../helpers/imageSaver.js';
import { parseUploadUrl } from '../helpers/parseUploadUrl.js';
import { httpBadRequest } from '../helpers/httpExceptionBuilder.js';
import { successResponseBuilder } from '../helpers/responseBuilder.js';

export const uploadImage = async (req, res, next) => {
  try {
    if (!req?.files?.image?.data) throw httpBadRequest();
    const imageName = await minifyAndSaveImage(req.files.image.data);
    res
      .status(201)
      .json(successResponseBuilder({ imageUrl: parseUploadUrl(imageName) }));
  } catch (err) {
    next(err);
  }
};
