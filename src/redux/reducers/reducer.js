import {
  LOGIN_SUCESS,
  USER_OBJECT,
  IS_ADMIN_USER,
  MULTISTEP_FORM_OBJECT,
} from "../types";

export const INITIAL_STATE = {
  isLoginSuccess: false,
  userObject: {},
  isAdminUser: false,
  multistepFormObject:[{}]
};

const LoginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCESS:
      return {
        ...state,
        isLoginSuccess: action.payload,
      };
    case USER_OBJECT:
      return {
        ...state,
        userObject: action.payload,
      };
    case IS_ADMIN_USER:
      return {
        ...state,
        isAdminUser: action.payload,
      };
      // case MULTISTEP_FORM_OBJECT:
      //   return {
      //     ...state,
      //     multistepFormObject: action.payload,
      //   };
        case MULTISTEP_FORM_OBJECT: {
          return {
            ...state,
            multistepFormObject: {
              ...state.multistepFormObject,
              [action.payload.newObject.id]: action.payload.newObject,
            },
          };
    
      
        }
    default:
      return state;
  }
};

export default LoginReducer;
