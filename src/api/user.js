import { unauthInstance } from "./instance";

const joinAPI = async (joinData) => {
  try {
    const response = await unauthInstance.post("/user", joinData);
    return response.data;
    console.log("회원가입 성공")
  } catch (error) {
    console.log("회원가입 실패")
    throw error;
  }
};

export default joinAPI;

