import React from "react";
import { render } from "react-dom";
import { alphabet, AlphabetType } from "./alphabets/chop_rus";

import App from "./App";

const rootElement = document.getElementById("root");

render(<App />, rootElement);

// const container: any = document.getElementById("container");

function imgCreate(src: string, alt: string = "", title: string = "") {
  var img = document.createElement("img");
  img.src = src;
  if (alt != null) img.alt = alt;
  if (title != null) img.title = title;
  return img;
}

(async () => {
  setTimeout(() => {
    Object.keys(alphabet).forEach((char: string) => {
      const { titleEng, titleRus, src, rusChar } = alphabet[char];

      if (src) {
        const image = imgCreate(src);
        image.style.width = "7rem";
        image.style.height = "7rem";

        let dataSkbtn: any = "";
        try {
          dataSkbtn = document.querySelectorAll(`[data-skbtn='${char}']`)[0];
        } catch (error) {}

        if (dataSkbtn) {
          dataSkbtn.style.width = "7rem";
          dataSkbtn.style.height = "7rem";
          dataSkbtn.style["max-width"] = "fit-content";
          dataSkbtn.style["max-height"] = "fit-content";

          dataSkbtn.firstChild?.replaceWith(image);
        }
        // console.info("Index [0]", { dataSkbtn });
      }
    });
  }, 1000);
})();
