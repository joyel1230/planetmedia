import React, { useEffect, useState } from "react";
import { getPosts } from "../../api/apiCall";
import Loading from "../loading/Loading";
import { Link } from "react-router-dom";
export interface Post {
  id: number;
  title: {
    rendered: string;
  };
}
const AllBlogs = () => {
  let count = 0;
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    getPosts()
      .then((res) => {
        setPosts(res?.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return posts.length === 0 ? (
    <div className="h-screen">
      <Loading />
    </div>
  ) : (
    <div className="pt-2 flex flex-wrap">
      {posts.map((post) => {
        let divStyle = "";
        if (count <= 1) {
          count++;
        } else {
          divStyle = "flex-row-reverse";
          count++;
          if (count === 4) {
            count = 0;
          }
        }
        return (
          <div className={`w-1/2 flex ${divStyle}`} key={post.id}>
            <div className="w-1/2 bg-[#842A3A] ">
              <Link to={`/blog/${post.id}`}>
                <div className="font-extrabold font-serif text-xs lg:text-2xl h-full px-2 ps-5 pb-5 flex flex-col justify-end">
                  <span className="font-thin text-xs mb-3">SKIN CARE</span>
                  {post.title.rendered}
                </div>
              </Link>
            </div>
            <div className="w-1/2">
              <img src="/blog1.png" alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllBlogs;
