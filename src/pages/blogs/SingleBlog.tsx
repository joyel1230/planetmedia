import React, { useEffect, useState, useRef } from "react";
import Header from "../../components/micros/Header";
import { useParams } from "react-router-dom";
import Comment from "../../components/blog/Comment";
import { getPost } from "../../api/apiCall";
import { Post } from "../../components/blog/AllBlogs";
import Loading from "../../components/loading/Loading";
interface Param {
  id: number;
}
const SingleBlog = () => {
  const param = useParams() as unknown as Param;
  const [post, setPost] = useState<Post>();
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    getPost(param?.id)
      .then((res) => {
        setPost(res?.data);
        setLoading(false);
        if (sectionRef.current) {
          sectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  }, [param?.id]);
  return (
    <>
      {loading && <Loading />}
      <div ref={sectionRef}></div>
      <Header title={post?.title.rendered} />
      <div className="flex justify-center py-10">
        <img src="/blog1B.png" className="w-[75rem]" alt="" />
      </div>
      <p className="text-[#842A3A] py-10 px-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ratione
        quo corrupti dicta temporibus quas nulla porro. Ipsa dolorem praesentium
        sit neque ipsum quis facilis molestiae perferendis facere fuga nemo rem,
        aut harum magnam molestias ipsam dolor veritatis, quaerat velit magni
        eos! Eveniet rerum ullam similique hic ipsam quisquam itaque eaque
        minus. Nam architecto iste nobis eligendi, dolorum hic quae nostrum,
        doloribus laboriosam aliquid culpa veniam maxime, maiores eos amet earum
        rem vitae quisquam! Eligendi dolore illo fuga quaerat non aliquam,
        laborum libero ipsam aperiam quod repudiandae distinctio possimus vero.
        Labore, inventore quaerat alias culpa obcaecati non magni fugiat optio
        ex exercitationem recusandae! Consequuntur fugiat reprehenderit velit
        reiciendis. Magnam praesentium soluta, sit officia iure, cupiditate
        dolorum aspernatur sequi enim, eligendi id repellendus veniam debitis
        beatae! Eos, maxime voluptatum natus quidem libero qui expedita
        aspernatur porro consequatur quasi quod? Repudiandae veritatis
        consectetur eligendi commodi temporibus itaque voluptatem corrupti
        adipisci exercitationem! Quibusdam necessitatibus suscipit, rerum,
        voluptate culpa excepturi cum fugiat labore totam in modi vitae eum
        saepe recusandae temporibus nemo. Maxime beatae veniam, suscipit
        assumenda rerum nostrum minima cum, dignissimos earum incidunt aperiam
        accusamus aliquid doloremque atque alias necessitatibus, ut temporibus?
        Eveniet sunt culpa totam eligendi soluta quod placeat iusto laudantium
        blanditiis quia suscipit vero ipsa aut repellendus, distinctio autem
        dolorem officiis veniam! Quia pariatur consequatur sit reiciendis labore
        ad tempora, ipsa quisquam ipsum ut. Eum dolore minus possimus velit quod
        est hic, consequuntur debitis, consequatur cupiditate amet, omnis ad
        facilis. Aspernatur, consequuntur odio nihil culpa tempora impedit,
        ullam asperiores quam, fugit iste tenetur. Quasi placeat voluptates,
        sapiente enim laudantium possimus rem exercitationem, deleniti quae
        blanditiis molestiae labore voluptas eius quo, corporis eum neque. Nihil
        accusamus repudiandae nam qui delectus placeat odit sunt quae ipsa
        deleniti sed fugiat autem sint suscipit, eaque odio dignissimos eum
        eveniet nostrum atque reprehenderit illo voluptates dolore. Fuga quos
        ducimus voluptates dolorum dignissimos est, quasi repellendus soluta
        cupiditate laboriosam voluptatibus aspernatur omnis, eius, eveniet amet.
        Ipsum, a alias dolore voluptatibus dolor maxime dignissimos soluta
        perferendis quos sint aperiam dolorum eaque, consequatur harum suscipit,
        pariatur aliquam. Rerum itaque maxime quas cum reiciendis provident
        laudantium, ea tenetur laboriosam quasi facere molestias tempora
        repellendus eligendi expedita. Quo, vel soluta voluptatum dignissimos
        quam, nobis ducimus minima ratione non in omnis aliquid eaque corrupti!
        Qui molestiae sunt voluptates aperiam unde modi officia doloribus hic in
        tempora. Maxime natus ratione eveniet eos facilis saepe doloribus
        laborum nostrum tempore ut dicta, adipisci odio harum libero sunt ipsa
        id! Ea, placeat alias voluptate fugit, laboriosam iste ut saepe enim
        maxime ipsum sequi error amet nisi corporis architecto possimus
        consequuntur cumque cum suscipit repellendus voluptates at veritatis.
        Qui, adipisci dolorum, voluptas vero voluptate eligendi et, minima nulla
        fugiat iure porro! Numquam natus accusamus illo voluptatum perspiciatis,
        aliquam nobis ratione earum ipsa ea saepe. Quaerat ea aperiam magni
        adipisci accusamus asperiores soluta veniam similique doloremque, beatae
        porro fugit harum illum voluptates repellat suscipit atque maiores
        sapiente, exercitationem ipsam ratione quo nulla quae. Nulla, sit
        impedit. Quis esse dolores assumenda dolorum autem accusantium sint ex
        eaque doloribus a.
      </p>
      <Comment />
    </>
  );
};

export default SingleBlog;
