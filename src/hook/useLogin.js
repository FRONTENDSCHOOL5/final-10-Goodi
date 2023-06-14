import { useEffect, useState } from 'react'
import { loginUser } from '../api/login';

export const useLogin = () => {
  const [loginResult, setLoginResult] = useState(null);
  const [errorResult, setErrorResult] = useState(null);
  const [mutateInfo, callMutate] = useState(null);
  const [bounce, setBounce] = useState(false);

  const callLogin = async (userlogin) => {
    const { data } = await loginUser(userlogin);

    return data;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await callLogin(mutateInfo);
        setLoginResult(data);
      } catch (e) {
        const data = e.response.data;
        setErrorResult(data);
      } finally {
        setBounce(false);
      }
    }
    if (bounce && mutateInfo != null) {
      fetchData()
    }
  }, [mutateInfo, setLoginResult])

  useEffect(() => {
    if (!bounce) {
      setBounce(true)
    }
  }, [bounce, callMutate])

  return { loginResult, errorResult, callMutate }
}