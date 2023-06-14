import { useState, useEffect } from 'react';
import { postUser } from '../api/user';
import { useNavigate } from 'react-router-dom';

// 우리는 API 의 결과값을 상태로 잘 관리할 수 있어야해요. 따라서 요 친구를 Hooks 로 만들었어요.
export const useJoin = () => {
  // 이 상태는 회원가입이 성공했을 때의 상태
  const [joinResult, setJoinResult] = useState(null);
  // 이 상태는 회원가입이 실패했을 때의 상태
  const [errorResult, setErrorResult] = useState(null);
  // 우리는 이 상태를 통해, API 를 호출할 때 사용할 Request Body 를 가지고 올 수 있어요.
  const [mutateInfo, callMutate] = useState(null);
  const [bounce, setBounce] = useState(false);
  const navigate = useNavigate();

  // 이 함수를 통해 API 를 호출하는 부분을 내부 메소드로 정의를 했어요.
  const callJoin = async (userInfo) => {
    const { data } = await postUser(userInfo)

    return data
  }

  useEffect(() => {
    // API 를 호출하는 함수에요. (useEffect 는 Async 함수를 다룰때 아래와 같이 다뤄요)
    const fetchData = async () => {
      try {
        // 성공한 케이스
        const data = await callJoin(mutateInfo)
        setJoinResult(data)
        if (data.message === "회원가입 성공") {
          navigate("/setprofile");
        }
      } catch (e) {
        // 서버에서 에러를 내려준 케이스
        const data = e.response.data
        setErrorResult(data)
      } finally {
        setBounce(false)
      }
    }

    // 만약 최초 시도이면서, callMutate 를 통해 데이터가 들어왔으면,
    if (bounce && mutateInfo != null) {
      // API 를 호출해요.
      fetchData()
    }
  }, [mutateInfo, setJoinResult])


  useEffect(() => {
    if (!bounce) {
      setBounce(true)
    }
  }, [bounce, callMutate])

  return { joinResult, errorResult, callMutate }
};