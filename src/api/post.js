import { authInstance } from './instance';

//게시글 작성
export const postUploadAPI = async (postData) => {
  try {
    const response = await authInstance.post('/post', postData)
    return response.data;
  } catch (error) {
    console.log(error)
    throw error;
  }
};

//게시글 목록
export const postListAPI = async ({ accountname }) => {
  try {
    const response = await authInstance.get(`/post/${accountname}/userpost`)
    return response.data;
  } catch (error) {
    throw error;
  }
};

//게시글 수정
export const postPutAPI = async (token, id, putData) => {
  try {
    const response = await authInstance.put(`/post/${id}`, putData)
    return response.data;
  } catch (error) {
    throw error;
  }
};

//게시글 수정 시에 불러오기
export const postGetUpdateAPI = async (token, id) => {
  try {
    const reponse = await authInstance.get(`/post/${id}`)
    return reponse.data;
  } catch (error) {
    throw error;
  }
}

//게시글 삭제
export const postDeleteAPI = async (id, token) => {
  try {
    const response = await authInstance.delete(`/post/${id}`, token)
    return response.data;
  } catch (error) {
    throw error;
  }
};

