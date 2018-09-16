import {imageMaxSize, acceptedFileTypesArray} from '../../Constants/constants';

const verifyFile = (files) => {
  if (files && files.length > 0) {
    const currentFile = files[0];
    const currentFileType = currentFile.type;
    const currentFileSize = currentFile.size;
    if (currentFileSize > imageMaxSize) {
      alert(`This File is too big. Max size is ${imageMaxSize} bytes`);
      return false;
    }
    if (!acceptedFileTypesArray.includes(currentFileType)) {
      alert('Incorrect file type. Only images allowed');
      return false;
    }
    return true;
  }
};

export default verifyFile;