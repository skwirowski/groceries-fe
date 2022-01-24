import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export default function FirebaseAuthenticate(email: any, password: any) {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("User: ", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log("Error code: ", errorCode);
      console.log("Error message: ", errorMessage);
    });
}
