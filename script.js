const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("question");
const subtext = document.getElementById("subtext");
const image = document.getElementById("mainImage");

let noCount = 0;

const states = [
  {
    text: "yêu anh hong? ",
    sub: "vợ chọn đi",
    img: "https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif"
  },
  {
    text: "thiệt à 🥺",
    sub: "cho vợ chọn lại...",
    img: "https://media.giphy.com/media/ROF8OQvDmxytW/giphy.gif"
  },
  {
    text: "NOOOOOOOOO 😭",
    sub: "hết yêu anh r",
    img: "https://media.giphy.com/media/9Y5BbDSkSTiY8/giphy.gif"
  },
  {
    text: "không yêu anh à?",
    sub: "buồn thật đấy...",
    img: "https://media.giphy.com/media/BEob5qwFkSJ7G/giphy.gif"
  }
];

noBtn.addEventListener("click", () => {
  noCount++;

  const state = states[Math.min(noCount, states.length - 1)];
  question.textContent = state.text;
  subtext.textContent = state.sub;
  image.src = state.img;

  // Mỗi lần bấm Không, nút Có lớn hơn.
  const yesScale = 1 + noCount * 0.28;
  yesBtn.style.transform = `scale(${yesScale})`;

  // Thu nhỏ nút Không một chút.
  const noScale = Math.max(0.55, 1 - noCount * 0.1);
  noBtn.style.transform = `scale(${noScale})`;

  if (noCount >= 4) {
    noBtn.textContent = "Thôi mà 🥺";
  }

  if (noCount >= 6) {
    noBtn.style.display = "none";
    yesBtn.style.transform = "scale(2)";
    question.textContent = "CÓ YÊU KO???";
    subtext.textContent = "VỢ THỐI";
  }
});

yesBtn.addEventListener("click", () => {
  question.textContent = "Anh biết mà! chồng cũng iu vợ ❤️";
  subtext.textContent = "iu em nhiều lắm! 🥰";
  image.src = "https://media.giphy.com/media/26FLdmIp6wJr91JAI/giphy.gif";

  yesBtn.textContent = "iu vợ thúiii
  noBtn.style.display = "none";
  yesBtn.style.transform = "scale(1.15)";

  document.querySelector(".card").classList.add("success");

  for (let i = 0; i < 30; i++) {
    setTimeout(createHeart, i * 80);
  }
});

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = ["❤️", "💕", "💗", "💖", "💘"][Math.floor(Math.random() * 5)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (2 + Math.random() * 2) + "s";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 4000);
}
