import  { useContext } from "react";
import { get } from "../utils/request";
import userContext from "../store/userContext/context";
import { toast } from "react-toastify";

const useApi = () => {
  const {
    userState: {
      lang,
    },
  } = useContext(userContext);
 


    const getRequest = async (
      url: string,
      showMessage?: boolean,
      ) => {
      let langSend = lang === null ? "en" : lang === "en" ? "en" : "ar";
      return await get(url, langSend)
        .then((res) => {
          return res.data;
          
        })
        .catch((err) => {
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
