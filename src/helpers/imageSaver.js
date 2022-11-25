// import imagemin from 'imagemin';
// import imageminWebp from 'imagemin-webp';
// import fs from 'fs';
// import { customAlphabet } from 'nanoid';
// import { FILE_UPLOADS_BASEPATH } from './constants.js';

// const nanoid = customAlphabet(
//   '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
//   16
// );

// export const minifyAndSaveImage = async (imageBuffer) => {
//   try {
//     const image = await imagemin.buffer(imageBuffer, {
//       plugins: [imageminWebp({ size: 256 * 1024 })],
//     });

//     const fileName = nanoid() + '.webp';

//     fs.writeFile(
//       `${FILE_UPLOADS_BASEPATH}/${fileName}`,
//       image,
//       'binary',
//       function (err) {
//         if (err) throw err;
//       }
//     );

//     return fileName;
//   } catch (error) {
//     return error;
//   }
// };
