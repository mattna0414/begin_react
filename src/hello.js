import React from "react";

function Hello({ color, name, isSpecial }) {
  return (
    <div
      style={{
        color
      }}
    >
      {isSpecial && <b>*</b>}
      안녕하세요 {name}
    </div>
  );
}

Hello.defaultProps = {
  //특정값을 빠뜨렸을 때 기본적으로 사용할 값 정하기
  name: "이름없음",
};

export default Hello;
