import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
//component
import Layout from "../layout/Layout";
import PostUploadWriting from "./../components/Post/PostUploadWriting";

//이미지
import PostBackground from "../assets/post_bg.jpg";
import postUproad from "../assets/post_upload.svg";

//API
import postingAPI from "../api/posting";

//recoil
import loginToken from "../recoil/loginToken";
import accountname from "../recoil/accountname";
import WritingUI from "../components/PostProductTest/WritingUI";

// 작성중 다른곳으로 나가려고 할때 모달
// 작성 완료시 업로드 할것인지 모달
// 모든 작성 공간은 필수

export default function PostUpload() {
  const navigate = useNavigate();

  const account_name = useRecoilValue(accountname);
  const myProfile = `/profile/${account_name}`

  const [imageWrap, setImageWrap] = useState([]);
  const [userErrorMessage, setUserErrorMessage] = useState([]);

  // 입력 데이터
  const [postData, setPostData] = useState();

  // 유저 토큰
  const token = useRecoilValue(loginToken);

  const [data, setData] = useState({
    post: {
      content: "",
      image: "",
    },
  });

  const getPostData = (data) => {
    setPostData(data);
  };

  useEffect(() => {
    if (postData) {
      handlePost(postData, token);
    }
  }, [postData]);

  const handlePost = async (PostData, token) => {
    const response = await postingAPI(PostData, token);

    if (response.hasOwnProperty("post")) navigate(myProfile);
  };

  const handleError = (e) => {
    setData((prevState) => ({
      ...prevState,
      post: {
        ...prevState.post,
        image: imageWrap.join(),
      },
    }));
    const errors = [];
    if (data.post.image === "") {
      errors.push("게시글 이미지를 한개 이상 업로드 해주세요");
    } else {
      errors.push("");
    }
    setUserErrorMessage(errors);

    console.log("클릭");
  };

  console.log(data);

  return (
    <Layout reduceTop="true">
      <PostProductWrap>
        {/* <PostUploadWriting
          textareaLabel="게시글 내용"
          src={postUproad}
          subtext="당신의 게시글을 업로드 해보세요!"
          buttonText="게시글 업로드 하기"
          showInput={false}
          textareaHeight="300px"
          getPostData={getPostData}
        /> */}
        <WritingUI
          src={postUproad}
          subtext="당신의 게시글을 업로드 해보세요!"
          getData={getPostData}
          data={data}
          setData={setData}
          handleError={handleError}
          setImageWrap={setImageWrap}
          imageWrap={imageWrap}
          userErrorMessage={userErrorMessage}
        />
      </PostProductWrap>
    </Layout>
  );
}

const PostProductWrap = styled.div`
  padding-top: 100px;
  background: url(${PostBackground}) no-repeat #fafafa;
  padding-bottom: 40px;
`;