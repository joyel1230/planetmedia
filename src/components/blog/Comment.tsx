import React from "react";
import Button from "../micros/Button";
import { BsReply } from "react-icons/bs";

const Comment = () => {
  return (
    <div className="p-12">
      <div className="p-10 bg-[#842A3A] rounded-2xl">
        <h1 className="text-xl font-bold">Comments</h1>
        <p className="mt-10">Comments</p>
        <textarea
          placeholder="What are your thoughts?"
          className="px-5 py-3 h-24 rounded-lg w-full bg-transparent border"
        ></textarea>
        <div className="w-[15%] my-5">
          <Button title="POST A COMMENT" />
        </div>
        <hr />
        <div className="mt-5">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 w-10 text-center font-bold rounded-full bg-violet-300">
              C
            </div>
            <h1 className="text-lg font-medium">Candice Wu</h1>
          </div>
          <p className="font-thin opacity-70">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
            ex voluptatum sapiente laborum tempore in alias ducimus placeat
            tempora qui distinctio, magni dolore fugit ipsum vitae. Dolorum quis
            fugit, excepturi, veritatis error, dolores rerum ratione doloremque
            iusto accusamus amet ex corporis quae consequatur velit aliquam.
            Neque eius explicabo beatae repudiandae?
          </p>
          <div className="flex items-center gap-3 font-thin opacity-70"><BsReply/><p>Reply</p></div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
