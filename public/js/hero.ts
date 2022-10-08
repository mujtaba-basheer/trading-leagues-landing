import { TypingDetail } from "../../types";

const delay: (time: number) => Promise<null> = (time: number) => {
  return new Promise((res) => {
    setTimeout(() => res(null), time);
  });
};

export const animateType = async (TypeEl: HTMLHeadingElement) => {
  TypeEl.textContent = "";
  const text: TypingDetail[] = [
    {
      w1: "Trade",
      w2: " On!",
    },
    {
      w1: "Game",
      w2: " On!",
    },
  ];

  if (TypeEl) {
    while (true) {
      const spanEls: HTMLSpanElement[] = [];

      for (let i = 0; i < 2; i++) {
        const { w1, w2 } = text[i];

        // adding letters elements
        {
          for (let i = 0; i < w1.length; i++) {
            const spanEl = document.createElement("span");
            spanEl.classList.add("w1");
            spanEl.textContent = w1[i];
            spanEls.push(spanEl);
          }

          for (let i = 0; i < w2.length; i++) {
            const spanEl = document.createElement("span");
            spanEl.classList.add("w2");
            spanEl.textContent = w2[i];
            spanEls.push(spanEl);
          }
        }

        // appending letters
        {
          for (let i = 0; i < spanEls.length; i++) {
            TypeEl.appendChild(spanEls[i]);
            await delay(200 * ((i + 1) / spanEls.length / 0.5));
          }
        }

        // deleting letters
        {
          for (let i = spanEls.length - 1; i > -1; i--) {
            spanEls[i].remove();
            spanEls.pop();
            await delay(100);
          }
        }
      }
    }
  }
};
