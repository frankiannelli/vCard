
const imageMaxSize = 1000000000; //bytes
const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg';
const acceptedFileTypesArray = acceptedFileTypes.split(',').map((item) => { return item.trim(); });

export {
  imageMaxSize,
  acceptedFileTypes,
  acceptedFileTypesArray
};
