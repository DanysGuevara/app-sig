import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '@/firebase/firebaseConfig';

const uploadFile = async (file: File): Promise<string> => {
  if (!file) {
    throw new Error('No file provided');
  }

  const storageRef = ref(storage, `roms/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Puedes agregar aquí lógica para mostrar el progreso de la subida
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        // Manejo de errores
        reject(error);
      },
      async () => {
        // Subida completada con éxito
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        resolve(downloadURL);
      }
    );
  });
};

export default uploadFile;