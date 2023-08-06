import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

// component
import Layout from "../layout/Layout";
import UpdateTotalUI from "../components/PostProductWriting/UpdateTotalUI";

// image
import PostingUpload from "../assets/post_uproad.svg";

// API
import { postGetUpdateAPI } from "../api/post";
import { postPutAPI } from "../api/post";

// Recoil
import loginToken from "../recoil/loginToken";
import accountname from "../recoil/accountname";

export default function PostUpdate() {
  const token = useRecoilValue(loginToken);
  const { posting_id } = useParams();
  const navigate = useNavigate();

  const account_name = useRecoilValue(accountname);
  const myProfile = `/profile/${account_name}`

  const [loading, setLoading] = useState(false);
  const [userErrorMessage, setUserErrorMessage] = useState([]);

  const [imageWrap, setImageWrap] = useState([]);
  const [post, setPost] = useState(null);
  const [data, setData] = useState({
    id: "",
    content: "",
    image: ""
  });

  useEffect(() => {
    const fetchPostingData = async () => {
      try {
        const response = await postGetUpdateAPI(token, posting_id);
        setPost(response.post);
        setData({
          id: response.post.id,
          content: response.post.content,
          image: response.post.image
        })
        setImageWrap(response.post.image.split(","));
      } catch (error) {
        console.error("게시글 정보 호출 실패", error);
      }
    };
    fetchPostingData();
  }, []);

  useEffect(() => {
    setData({ ...data, image: imageWrap.join(",") });
  }, [imageWrap]);

  const joinData = async (e) => {
    e.preventDefault();

    const errors = [];
    if (data.content === "" || !data.content) {
      errors.push("게시글을 입력해주세요");
    }
    setUserErrorMessage(errors);

    if (errors.length > 0) {
      setUserErrorMessage(errors);
      return;
    }

    const putData = {
      post: {
        id: data.id,
        content: data.content,
        image: data.image,
      },
    };

    await postPutAPI(token, posting_id, putData);

    navigate(myProfile);
  };

  return (
    <Layout reduceTop="true">
      <UpdateTotalUI
        src={PostingUpload}
        subtext="게시물을 수정해주세요"
        imageWrap={imageWrap}
        description={data.content}
        userErrorMessage={userErrorMessage}
        joinData={joinData}
        loading={loading}
        setLoading={setLoading}
        setImageWrap={setImageWrap}
        setData={setData}
        data={data}
      />
    </Layout>
  );
}