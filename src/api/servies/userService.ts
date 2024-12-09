import { authInstanceAxios } from "../axiosInstense";

export const userRegister = async (endPoint:string, userData:any) => {
  const response = await authInstanceAxios.post(`${endPoint}`, userData);
  return response;
};

export const verifyOTP = async (endPoint:string, data:any) => {
    const response = await authInstanceAxios.post(`${endPoint}`, data);
    return response
  };

  export const resendOtp = async (endPoint:string, email:string) => {
    const response = await authInstanceAxios.get(`${endPoint}?email=${email}`,);
    return response
  }

  export const createBlog = async (endPoint:string, datas:any, config:any) => {
    const response = await authInstanceAxios.post(`${endPoint}`, datas, config);
    return response.data
  }