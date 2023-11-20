import React, { useState } from "react";
import FanFan from "./FanFan";
import fakedata from "fakedata.json";
import {
  MyStyled,
  BtnStyle,
  Fanletterstyle,
  Navstyle,
} from "components/styled";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

function Home() {
  const [Fans, setFans] = useState(fakedata);

  const [name, setname] = useState("");
  const [content, setcontent] = useState("");
  const [selectedValue, setSelectedValue] = useState("이수현");

  const currentDateTime = new Date();

  const formattedDateTime = currentDateTime.toLocaleString();

  const Soosfan = Fans.filter(function (fan) {
    return fan.writedTo === "이수현";
  });
  const chansfan = Fans.filter(function (fan) {
    return fan.writedTo === "이찬혁";
  });
  const [soofan, setsoo] = useState(Soosfan);
  const [chanfan, setchan] = useState(chansfan);

  const [isFanLetterValid, setIsFanLetterValid] = useState(false);

  const validateFanLetter = (nickname, content) => {
    const isValid = nickname.trim() !== "" && content.trim() !== "";
    setIsFanLetterValid(isValid);
  };
  <FanFan Fans={Fans} />;
  return (
    <div>
      {" "}
      <Navstyle>
        <div>악동뮤지션</div>
        <div>
          {" "}
          <MyStyled>
            <ul>
              <BtnStyle
                onClick={() => {
                  setsoo(Soosfan);
                  setchan([]);
                }}
              >
                이수현
              </BtnStyle>

              <BtnStyle
                onClick={() => {
                  setchan(chansfan);
                  setsoo([]);
                }}
              >
                이찬혁
              </BtnStyle>
            </ul>{" "}
          </MyStyled>
        </div>
      </Navstyle>
      <div>
        <form
          onSubmit={function (e) {
            e.preventDefault();
            const addFan = {
              createdAt: formattedDateTime,
              nickname: name,
              avatar:
                "https://upload.wikimedia.org/wikipedia/ko/thumb/a/a6/Pok%C3%A9mon_Pikachu_art.png/200px-Pok%C3%A9mon_Pikachu_art.png",
              content: content,
              writedTo: selectedValue,
              id: uuidv4(),
              isVisible: true,
            };

            setFans([...Fans, addFan]);
          }}
        >
          닉네임 :{" "}
          <input
            type="text"
            placeholder="최소1자 최대 20자"
            value={name}
            maxLength="20"
            onChange={(e) => {
              validateFanLetter(String(e.target.value), content);
              return setname(String(e.target.value));
            }}
          />
          <br />
          내용:{" "}
          <input
            type="text"
            placeholder="최소1자 최대 50자"
            value={content}
            maxLength="50"
            onChange={(e) => {
              validateFanLetter(name, String(e.target.value));
              return setcontent(String(e.target.value));
            }}
          />
          <br />
          누구에게 보낼 거임?
          <select
            value={selectedValue}
            onChange={(e) => {
              return setSelectedValue(e.target.value);
            }}
          >
            <option value="이수현">이수현</option>
            <option value="이찬혁">이찬혁</option>
          </select>
          <br />
          <button disabled={!isFanLetterValid}>팬레터 등록</button>
        </form>
      </div>
      <div>
        {soofan.map((item) => {
          return (
            <Link to={`/fanfan/${item.id}`}>
              <div key={item.id}>
                <Fanletterstyle>
                  {" "}
                  <img src={item.avatar} alt="" />
                  <br />
                  <div>{item.nickname}</div>
                  <br />
                  <div>{item.createdAt}</div>
                  <br />
                  <div>
                    {item.content.length <= 30
                      ? item.content
                      : `${item.content.slice(0, 30)} …`}
                  </div>
                  <br />{" "}
                </Fanletterstyle>
              </div>
            </Link>
          );
        })}
        {chanfan.map((item) => {
          return (
            <div key={item.id}>
              <Link to={`/fanfan/${item.id}`}>
                <Fanletterstyle>
                  <img src={item.avatar} alt="" />
                  <br />
                  <div>{item.nickname}</div>
                  <br />

                  <div>{item.createdAt}</div>
                  <br />
                  <div>
                    {item.content.length <= 30
                      ? item.content
                      : `${item.content.slice(0, 30)} …`}
                  </div>
                  <br />
                </Fanletterstyle>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
