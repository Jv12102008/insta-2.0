import "./posts.css";
import rafa from "../../../img/rafa.jpeg";
import alex from "../../../img/Alex.jpeg";
import adriana from "../../../img/Adriana.jpeg";
import mara from "../../../img/Mara.jpeg";
import andre_luis from "../../../img/Andre_1.jpeg";
import andreluiz from "../../../img/Andre_2.jpeg";
import andreluiz_ from "../../../img/Andre_3.jpeg";
import adri_zig from "../../../img/Adriana_zig.jpeg";
import zig from "../../../img/Zig.jpeg";
import jaiminho from "../../../img/Jaiminho.jpeg";
import vini from "../../../img/vini.jpeg";
import img_post_alex from "../../../img/WhatsApp Image 2024-09-30 at 12.55.42.jpeg";
import img_post_mara from "../../../img/WhatsApp Image 2024-10-02 at 01.21.17.jpeg";
import img_post_andre from "../../../img/WhatsApp Image 2024-10-02 at 14.43.58.jpeg";
import heart_post from "../../../img/heart-outline.svg";
import chatbubble_post from "../../../img/chatbubble-outline.svg";
import bookmark_post from "../../../img/bookmark-outline.svg";
import ellipsisrt_post from "../../../img/ellipsis-horizontal.svg";
import paper_post from "../../../img/paper-plane-outline.svg";

const api_post = [
  {
    id:1,
    img_account: rafa,
    name_account: "rafasimasguitarra",
    url_img: "https://static5.depositphotos.com/1005454/486/i/450/depositphotos_4868838-stock-photo-man-playing-electrical-guitar-black.jpg",
    img_liked: andreluiz,
    name_liked: "AndreLuiz",
  },
  {
    id:2,
    img_account: alex,
    name_account: "a2_pessoal",
    url_img: img_post_alex,
    img_liked: rafa,
    name_liked: "rafasimasguitarra",
  },
  {
    id:3,
    img_account: adriana,
    name_account: "Adriana",
    url_img: "https://www.feriasbrasil.com.br/fotosfb/835320241-MOB.jpg",
    img_liked: andreluiz_,
    name_liked: "Andre-Luiz",
  },
  {
    id:4,
    img_account: mara,
    name_account: "Mara",
    url_img: img_post_mara,
    img_liked: adriana,
    name_liked: "Adriana",
  },
  {
    id:5,
    img_account: andre_luis,
    name_account: "Andre_Luiz",
    url_img: img_post_andre,
    img_liked: mara,
    name_liked: "Mara",
  },
  {
    id:6,
    img_account: adri_zig,
    name_account: "drileahy",
    url_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkkONDaLOxPHQufRBq8Wrs2nhQK8crHgOFUw&s",
    img_liked: andre_luis,
    name_liked: "Andre_Luiz",
  },
  {
    id:7,
    img_account: zig,
    name_account: "guileahy09",
    url_img: "https://i.ytimg.com/vi/YMvJrwJquvc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCnpiERkyBTXOjGVnliJ0CVUo-FDQ",
    img_liked: adri_zig,
    name_liked: "drileahy",
  },
  {
    id:8,
    img_account: jaiminho,
    name_account: "jaiminhomoedas",
    url_img: "https://t.ctcdn.com.br/EQYv3V-iLosDLVqBJo4vF9WkOIU=/640x360/smart/i238599.jpeg",
    img_liked: zig,
    name_liked: "guileahy09",
  },
  {
    id:9,
    img_account: vini,
    name_account: "_vini.nery",
    url_img: "https://occ-0-8407-90.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABd3Pmtpet40yr5vkdSarCHVpgqhrZ_y9xPZwhoxLYguuFEhEtxRDYg1m-iz81XULP-OiMWDNKjM-HnJHeqiWZnsIb1bOipdUPthF.jpg?r=d10",
    img_liked: zig,
    name_liked: "guileahy09",
  },
];

export function Posts() {
  return (
    <div className="posts">
      {api_post.map((item) => (
          <div className="post" key={item.id}>
            <div className="menu">
              <div className="profile">
                <img src={item.img_account} alt="imagem do perfil" />
                <div className="title">{item.name_account}</div>
              </div>
              <div>
                <img className="more" src={ellipsisrt_post} alt="imagem para mais informações" />
              </div>
            </div>
            <img className="img_post" src={item.url_img} alt="imagem do post" />
            <div className="interactions">
              <div className="interaction">
                <img className="icons" src={heart_post} alt="curtir" />
                <img className="icons" src={chatbubble_post} alt="comentar" />
                <img className="icons" src={paper_post} alt="compartilha" />
              </div>
              <div className="save">
                <img src={bookmark_post} alt="salvamento" />
              </div>
            </div>
            <div className="likes">
              <img src={item.img_liked} alt="imagem do perfil que curtiu o post"/>
              <p>
                Curtido por <strong>{item.name_liked}</strong> e
                <strong> outras 101.523 pessoas</strong>
              </p>
            </div>
          </div>
      ))}
    </div>
  );
}
