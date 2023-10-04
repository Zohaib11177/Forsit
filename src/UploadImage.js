import { app } from './Config';
import { getAuth } from 'firebase/auth';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from 'firebase/storage';
// import uniqid from 'uniqid';

export { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

const storage = getStorage();

export const uploadSingleImage = async (file, saveToMongoDb) => {
  try {
    const response = await fetch(file);
    const blob = await response.blob();
    const storageRef = ref(storage, `productsimages/${(blob.size)}`);
    const uploadTask = uploadBytesResumable(storageRef, blob);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      },
      (error) => {
        console.log('error occured during uploading');
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log(downloadURL);
          saveToMongoDb(downloadURL);
        });
      }
    );
  } catch (err) {
    console.log(err);
  }
};

export const uploadGalleryImages = async (
  galleryImages,
  saveURl,
  saveToDatabase
) => {
  try {
    const galleryImagesUrl = [];
    const promises = [];
    galleryImages.forEach(async (image) => {
      console.log(image);
      if (image.startsWith('blob')) {
        const response = await fetch(image);
        const blob = await response.blob();
        const storageRef = ref(storage, `productsimages/${(blob.size)}`);
        const uploadTask = uploadBytesResumable(storageRef, blob);

        promises.push(uploadTask);
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
          },
          (err) => {
            console.log('error occured during uploading gallery images');
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
              galleryImagesUrl.push(downloadUrl);
              saveURl(galleryImagesUrl);
            });
          }
        );
      }
    });

    await Promise.all(promises);
  } catch (err) {
    console.log(err);
  }
};
// 11111
export const handleUploadImages = async ({
  images,
}) => {
  console.log("images234",images)
  const promises = [];
  
  images.forEach(async (el, i) => {
    if (el?.image === null) return;
    const promise = new Promise((resolve, reject) => {
      // const fetchImage = fetch(el.image);
      // fetchImage.then((resImage) => {
        // resImage.blob().then((blob) => {
          const storageRef = ref(storage, `items/images/${Math.random()+""+el.image.size}`);

          uploadBytes(storageRef, el.image)
            .then((snapshot) => {
              getDownloadURL(snapshot?.ref)
                .then((downLoadURI) => {
                  resolve(downLoadURI);
                })
                .catch((err) => reject(err));
            })
            .catch((err) => reject(err));
        // });
      // });
    });

    promises.push(promise);
  });

  return Promise.all(promises);
};
// 11111
export const auth = getAuth();