import React from "react";

function Food({ name }) {
  return <h1>I like {name}</h1>;
}

const foodIlike = [
  {
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkembap_02.jpg",
  },
  {
    name: "Samgyeopsal",
    image:
      "https://post-phinf.pstatic.net/MjAyMDAzMDNfMTcg/MDAxNTgzMTkwNjA3ODQ5.kUXPHqGJ2xPDSu_3FiEoFC3kY9QyQ_g9CziCGrFSDuEg.LpCfOTbc5qth9d-GKzGv9jwj2VKhcqmPHp5cp1KJYEsg.JPEG/IM_food02.jpg?type=w1200",
  },
  {
    name: "Bibimbap",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/2880px-Dolsot-bibimbap.jpg",
  },
  {
    name: "Doncasu",
    image:
      "http://th2.tmon.kr/thumbs/image/423/336/e17/1b1492318_700x700_95_FIT.jpg",
  },
  {
    name: "kimbap",
    image: "https://craftlog.com/m/i/5805364=s1280=h960.webp",
  },
];

function App() {
  return (
    <div>
      {foodIlike.map((dish) => (
        <Food name={dish.name} />
      ))}
    </div>
  );
}

export default App;
