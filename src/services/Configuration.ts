/**
 * Configuration Class
 * Responsible for All The Api Configuration for the Application
 */

export const Configuration= {
  BASE_URL: process.env.REACT_APP_BASE_URL,
  

  // end points url
   endPoints : {

      
  },

   statusCode : {
    success: 200,
    error: 422,
    generalError: 500,
    refreshToken: 401,
  },

   DefaultDirection :"ltr",

  /**
   * Function To Check if the user is Authenticated or not
   * @returns {boolean}
   */
 
}

export default Configuration;
