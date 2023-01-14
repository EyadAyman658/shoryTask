import  { useContext } from "react";
import { get, post } from "../utils/request";
import { useHistory } from "react-router-dom";
import { getFromStorage } from '../utils/localStorage';
import userContext from "../store/userContext/context";
import {Configuration} from "./Configuration";
import { toast } from "react-toastify";

const useApi = () => {
  const { push } = useHistory();
  const userData = getFromStorage("@fixxPressUser");
  const {
    userState: {
      movies,
      lang,
    },
    setUserContext,
  } = useContext(userContext);
 

  // const postRequest = async (
  //   url: string,
  //   body?: any,
  //   showMessage?: boolean
  // ) => {
  //   let langSend = lang === null ? "en" : lang === "en" ? "en" : "ar";
  //   return await post(url, body langSend)
  //     .then((res) => {
  //       return res.data;
  //     })
  //     .catch((err) => {
  //       if (showMessage) {
  //         toast.error('Error Occured', {
  //           position: toast.POSITION.TOP_CENTER,
  //           autoClose: 5000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //           // theme: "light",
  //         });
  //       }
  //       return false;
  //     });
  // };
    const getRequest = async (
      url: string,
      showMessage?: boolean,
      tokenCache?: string
    ) => {
      let langSend = lang === null ? "en" : lang === "en" ? "en" : "ar";
      return await get(url, langSend)
        .then((res) => {
          return res.data;
          
        })
        .catch((err) => {
          console.log('err')
          if (showMessage) {
            toast.error('Error Occured', {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              // theme: "light",
            });
          }
          return false;
        });
    };
  return {
    getRequest,
    // postRequest,
  };
};

export default useApi;
