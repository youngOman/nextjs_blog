import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import Image from 'next/image';
import { getRecentPosts, getSimilarPosts } from "../services";

// 在首頁的話這兩個props為undefined
const LatestPost = ({ categories, slug }) => { // 從[slug].js傳進來的

  const [recentPost, setRecentPost] = useState([]);

  useEffect(() => {
    if (slug) {
      // 有slug代表現在是在post_detail裡面所以側欄顯示類似文章
      getSimilarPosts(categories, slug) // GraphQL API 的function參數
        .then((response) => setRecentPost(response));
    } else {
      // 代表還在首頁，顯示最新文章
      getRecentPosts().then(
        (response) => setRecentPost((recentPost = response)) // 因為只有一個state可以不指定 直接把response丟給recentPost
      );
    }
  }, []);

  // console.log(slug);
  // console.log(recentPost);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b border-violet-500 pb-4">
        {/* 若slug存在 顯示related post 否則 recent post*/}
        {slug ? "你可能還會想看.." : "最新貼文"}
      </h3>
      {recentPost.map((post,index) => (
        <div key={index} className="flex items-center w-full mb-4 rounded-full transition duration-500 ease hover:-translate-x-5 hover:bg-cyan-400">
          {/* 縮圖 */}
          <div className="w-20 flex-none ">
            <Link href={`/post/${post.slug}`} key={index}>
              <Image
                key={index}
                alt={post.title}
                src={post.thumbnail.url}
                priority={true}
                unoptimized
                width={70}
                height={60}
                layout='responsive'
                className="align-middle rounded-full cursor-pointer"
              />
            </Link>
          </div>
          {/* 時間 */}
          <div className="flex-grow ml-4">
            <p className="text-gray-500 text-xs">
              {moment(post.createdAt).format("YYYY-MM-DD HH:mm")}
            </p>
            <Link href={`/post/${post.slug}`} key={post.title}>
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestPost;
