import { userLogin, userRegister } from "../redux/features/auth/authActions";
import store from "../redux/store";

export const handleLogin = (e, loginFormData) => {
  e.preventDefault();
  const { email, password } = loginFormData;

  try {
    if (!email || !password) {
      return alert("Please Provide All Feilds");
    }
    store.dispatch(userLogin({ email, password}));
  } catch (error) {
    console.log(error);
  }
};

// export const handleRegister = (
//   e,
//   name,
//   role,
//   email,
//   password,
//   phone,
//   organisationName,
//   address,
//   hospitalName,
//   website
// ) => {
//   e.preventDefault();
//   try {
//     store.dispatch(
//       userRegister({
//         name,
//         role,
//         email,
//         password,
//         phone,
//         organisationName,
//         address,
//         hospitalName,
//         website,
//       })
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };

export const handleRegister = (e, registerFormData) => {
  e.preventDefault();
  const { BusinessName, UserName, email, location, phone, password } = registerFormData;
  console.log("registerFormData:",registerFormData)

  try {
    store.dispatch(
      userRegister({
        BusinessName,
        UserName,
        email,
        location,
        phone,
        password
      })
    );
  } catch (error) {
    console.log(error);
  }
};
