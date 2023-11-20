import React, { useState } from "react";

import { Link, useLocation } from "react-router-dom";
import { Fanletterstyle } from "components/styled";
function FanFan({ Fans }) {
  //   const fan = Fans.find((Fan) => Fan.id === parseInt(id, 10));
  const currentDateTime = new Date();
  const location = useLocation();
  const formattedDateTime = currentDateTime.toLocaleString();

  const [fan, setfan] = useState([
    {
      createdAt: formattedDateTime,
      nickname: " name",
      avatar:
        "https://upload.wikimedia.org/wikipedia/ko/thumb/a/a6/Pok%C3%A9mon_Pikachu_art.png/200px-Pok%C3%A9mon_Pikachu_art.png",
      content:
        "이수현 Vitae recusandae tenetur debitis impedit ut dolorem atque reprehenderit magnam. Cum dolor magnam commodi qui perferendis. Vel temporibus soluta. Eum delectus blanditiis. Neque dicta non quod ex. Maiores aspernatur fuga reprehenderit a magni eaque fuga voluptatum hic.",
      writedTo: "selectedValue",
      id: "5",
      isVisible: true,
    },
  ]);

  return (
    <>
      <Fanletterstyle>
        {fan.map((item) => {
          return (
            <div>
              {" "}
              <img src={item.avatar} alt="" />
              <br />
              <div>{item.nickname}</div>
              <br />
              <div>{item.createdAt}</div>
              <br />
              <div>{item.content}</div>
              <div>
                <button
                  onClick={function () {
                    const deleted = fan.filter(function (item) {
                      return fan.isVisible === item.isVisible;
                    });

                    const realdelete =
                      window.confirm("정말로 삭제하시겠습니까?");

                    if (realdelete) {
                      setfan(deleted);
                      window.location.href = "/";
                    }
                  }}
                >
                  삭제하기
                </button>
                <button>수정하기</button>
              </div>
              <br />{" "}
            </div>
          );
        })}
      </Fanletterstyle>
      <Link to={"/"}>
        <button>돌아가기</button>
      </Link>
    </>
  );
}

export default FanFan;
