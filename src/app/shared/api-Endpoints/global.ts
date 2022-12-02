import { environment } from "src/environments/environment";
export const API_URL: string = environment.api_url;
export const API_ENDPOINTS = {

    //auth
    loginIn: `${API_URL}Authentication/login`,
    signUp: `${API_URL}Authentication/Register`,
    deleteEmpolyeeByID:`${API_URL}Empolyee`,
    getAllempolyees:`${API_URL}Empolyee`,
    userSearch: `${API_URL}Empolyee/`,
    updateEmpolyee:`${API_URL}Empolyee/UpdateEmployee`,
    newEmpolyee:`${API_URL}Empolyee`
}
