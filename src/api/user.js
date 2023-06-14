import { goodiFetchInstance } from './instance';

export const postUserPath = '/user';
export const postUser = async ({
  username,
  email,
  password,
  accountname,
  intro,
  image,
}) => {
  // 요 생성된 기본 설정을 들고있는 Axios 인스턴스를 통해서, 회원가입 API 를 호출해주는 js 함수를 만들었어요.
  // 첫번째 인자에는 엔드포인트 뒤의 path 가 들어가고요,
  // 두번째 인자에는 Request Body 가 들어가요.
  // data 에는 Response 가 담겨있어요.
  const emailAccountName = email.split('@')[0];

  const data = await goodiFetchInstance.post(postUserPath, {

    user: {
      username,
      email,
      password,
      accountname: emailAccountName,
      intro,
      image
    }
  })

  return data;
};