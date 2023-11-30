import {
  LOGIN_SUCESS,
  USER_OBJECT,
  IS_ADMIN_USER,
  WORKFLOW_OBJECT,
  MULTISTEP_FORM_OBJECT
} from "./types";

export const saveLoginSuccess = (result) => ({
  type: LOGIN_SUCESS,
  payload: result,
});

export const setUserObject = (result) => ({
  type: USER_OBJECT,
  payload: result,
});

export const setAdminUser = (result) => ({
  type: IS_ADMIN_USER,
  payload: result,
});

export const setWorkflowObject = (result) => ({
  type: WORKFLOW_OBJECT,
  payload: result,
});
// export const setMultistepFormObject = (result) => ({
//   type: MULTISTEP_FORM_OBJECT,
//   payload: result,
// });

export const setMultistepFormObject = (newObject) => ({
  type: MULTISTEP_FORM_OBJECT,
  payload: {
    newObject,
  },
});