import { useState } from "react";
export function MemeBoard() {
  const [meme, setMeme] = useState({
    topLine: "Meanwhile...",
    bottomLine: "This is business",
  });
  function changetext(event) {
    const e = event.currentTarget;
    const name = e.name;
    const value = e.value;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }
  return (
    <>
      <div>
        <label htmlFor="topLine">TopLine</label>
        <input id="topLine" type="text" onChange={changetext} name="topLine" />
        <h1>{meme.topLine}</h1>
      </div>
      <div>
        <label htmlFor="bottomLine">bottomLine</label>
        <input
          id="bottomLine"
          type="text"
          onChange={changetext}
          name="bottomLine"
        />
        <h3>{meme.bottomLine}</h3>
      </div>
    </>
  );
}
