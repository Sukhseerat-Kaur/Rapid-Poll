import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { PollType } from "../interfaces/PollType";

const getPoll = async (key: string) => {
  const docRef = doc(db, "polls", key);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) return null;
  return {
    key: docSnap.id,
    ...docSnap.data(),
  } as PollType;
};

export default getPoll;
