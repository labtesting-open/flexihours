// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZheGbJGewxHIxjX7FxbFx5VL0g784lt4",
  authDomain: "flexitest-auth.firebaseapp.com",
  projectId: "flexitest-auth",
  storageBucket: "flexitest-auth.appspot.com",
  messagingSenderId: "999680484747",
  appId: "1:999680484747:web:14e08108ff799069497b8e"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };


// // Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCLA4vnLFaVow25ylLUkb57NhmnN6qk1vE",
//   authDomain: "fir-auth-65294.firebaseapp.com",
//   projectId: "fir-auth-65294",
//   storageBucket: "fir-auth-65294.appspot.com",
//   messagingSenderId: "105428798939",
//   appId: "1:105428798939:web:49a9375f32ea94d4dfebfe"
// };

// // Initialize Firebase
// let app;
// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app()
// }

// const auth = firebase.auth()

// export { auth };