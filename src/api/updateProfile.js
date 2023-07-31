// const updateProfile = async (profileData, token) => {
//   try {
//     const UPDATEPROFILE = "https://api.mandarin.weniv.co.kr/user"

//     const response = await fetch(UPDATEPROFILE, {
//       method: 'PUT',
//       headers: {
//         "Authorization": `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(profileData),
//     });

//     if (!response.ok) {
//       throw new Error('프로필 수정에 실패했습니다.');
//     }

//     // 프로필 수정이 성공한 경우
//     console.log('프로필이 성공적으로 수정되었습니다.');
//   } catch (error) {
//     console.error('프로필 수정 오류:', error);
//   }
// };

// export default updateProfile;

import axios from 'axios';

const updateProfile = async (profileData, token) => {
  const UPDATE_PROFILE_URL = "https://api.mandarin.weniv.co.kr/user";
  try {
    const response = await axios.put(UPDATE_PROFILE_URL, profileData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('프로필 수정에 실패했습니다.');
    }

    // 프로필 수정이 성공한 경우
    console.log('프로필이 성공적으로 수정되었습니다.');
  } catch (error) {
    console.error('프로필 수정 오류:', error);
    throw error;
  }
};

export default updateProfile;

