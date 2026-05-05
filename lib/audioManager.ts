import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, getDoc, setDoc, collection, getDocs } from 'firebase/firestore';
import { storage, db } from './firebase';

export interface AudioRecord {
  questionId: string;
  audioUrl: string;
}

export const uploadAudioForQuestion = async (
  questionId: string,
  file: File,
  onProgress?: (progress: number) => void
): Promise<string> => {
  const storageRef = ref(storage, `pronunciation/${questionId}.mp3`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        if (onProgress) onProgress(progress);
      },
      (error) => {
        console.error("Audio upload failed:", error);
        reject(error);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        // Save to Firestore
        await setDoc(doc(db, 'audio_urls', questionId), {
          questionId,
          audioUrl: downloadURL,
          updatedAt: new Date().toISOString()
        });
        resolve(downloadURL);
      }
    );
  });
};

export const getAudioUrlForQuestion = async (questionId: string): Promise<string | null> => {
  try {
    const docRef = doc(db, 'audio_urls', questionId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data().audioUrl;
    }
    return null;
  } catch (error) {
    console.error("Failed to get audio URL", error);
    return null;
  }
};

export const getAllAudioUrls = async (): Promise<Record<string, string>> => {
  const audioMap: Record<string, string> = {};
  try {
    const querySnapshot = await getDocs(collection(db, 'audio_urls'));
    querySnapshot.forEach((doc) => {
      const data = doc.data() as AudioRecord;
      audioMap[data.questionId] = data.audioUrl;
    });
  } catch (error) {
    console.error("Failed to fetch all audio URLs", error);
  }
  return audioMap;
};
