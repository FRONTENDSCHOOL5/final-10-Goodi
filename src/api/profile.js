import { authInstance } from './instance';

//내 프로필 정보
export const profileAPI = async (token) => {
  try {
    const response = await authInstance.get(`/user/myinfo`)
    return response.data;
  } catch (error) {
    console.error('프로필 겟 에러가 발생했습니다', error);
    throw error;
  }
};

//프로필 정보
export const accountProfileAPI = async (accountname, token) => {
  try {
    const response = await authInstance.get(`/profile/${accountname}`)
      return response.data;
  } catch (error) {
    console.error('어카운트프로필 에러가 발생했습니다', error);
    throw error;
  }
};

//프로필 수정
export const updateProfile = async (profileData, token) => {
  const UPDATE_PROFILE_URL = "https://api.mandarin.weniv.co.kr/user";
  try {
    const response = await authInstance.put(`/user`, profileData)
  } catch (error) {
    console.error('프로필 수정 오류:', error);
    throw error;
  }
};