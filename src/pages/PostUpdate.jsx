import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

// component
import Layout from "../layout/Layout";

// image
import PostBackground from "../assets/post_bg.jpg";
import PostingUpload from "../assets/post_uproad.svg";

// API
import postingAPI from "../api/postingAPI";
import putPostingAPI from "../api/putPosting";

// Recoil
import loginToken from "../recoil/loginToken";
import PostUpdateWriting from "../components/Post/PostUpdateWriting";
import accountname from "../recoil/accountname";

export default function PostUpdate() {
  const navigate = useNavigate();
  const { posting_id } = useParams();
  const token = useRecoilValue(loginToken);
  const [getImage, setGetImage] = useState(null);
  const [getContent, setGetContent] = useState("");
  const [loading, setLoading] = useState(false);

  const account_name = useRecoilValue(accountname);
  const myProfile = `/profile/${account_name}`

  useEffect(() => {
    const fetchPostingData = async () => {
      try {
        setLoading(true);
        const response = await postingAPI(token, posting_id);
        const data = response.post;
        // console.log(response);
        setGetImage(data.image.split(","));
        setGetContent(data.content);
        setLoading(false);
      } catch (error) {
        console.error("Account API 에러가 발생했습니다", error);
      }
    };
    fetchPostingData();
  }, []);

  // 데이터 합치기
  const joinData = (e) => {
    e.preventDefault();
    const putData = {
      post: {
        content: getContent,
        image: getImage.join(),
      },
    };

    putPosting(token, posting_id, putData);
  };

  // 수정된 파일 전송
  const putPosting = async (token, id, putData) => {
    const response = await putPostingAPI(token, id, putData);
    console.log(response);
    navigate(myProfile);
  };

  return (
    <Layout reduceTop="true">
      {loading ? (
        <div>로딩중</div>
      ) : (
        <PostPostingLayout>
          <PostUpdateWriting
            joinData={joinData}
            setGetContent={setGetContent}
            getContent={getContent}
            getImage={getImage}
            setGetImage={setGetImage}
            src={PostingUpload}
            subtext="게시물을 수정해주세요"
            buttonText="게시물 수정하기"
          />
        </PostPostingLayout>
      )}
    </Layout>
  );
}

const PostPostingLayout = styled.div`
  padding-top: 100px;
  background: url(${PostBackground}) no-repeat #fafafa;
  padding-bottom: 40px;
`;
