import { goodiFetchInstance } from './instance';

export const loginUserPath = '/user/login';
export const loginUser = async ({ email, password }) => {
  const data = await goodiFetchInstance.post(loginUserPath, {
    user: {
      email,
      password
    }
  })

  return data;
};

// test 계정 정보 : suritest@test.com / suritest