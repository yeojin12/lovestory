const ticketDialog = document.querySelector("#ticket-dialog");
const ticketOpenButton = document.querySelector("[data-open-ticket]");
const ticketCloseButton = ticketDialog.querySelector(".close");

ticketOpenButton.addEventListener("click", () => {
  ticketDialog.showModal();
});

ticketCloseButton.addEventListener("click", () => {
  ticketDialog.close();
});

ticketDialog.addEventListener("click", (event) => {
  if (event.target === ticketDialog) {
    ticketDialog.close();
  }
});

document.querySelectorAll("[data-expand]").forEach((button) => {
  button.addEventListener("click", () => {
    const panel = document.getElementById(button.dataset.expand);
    const symbol = button.querySelector("span");

    panel.classList.toggle("open");
    symbol.textContent = panel.classList.contains("open") ? "−" : "＋";
  });
});

const characters = {
  haru: {
    symbol: "📱",
    type: "분실자 1",
    name: "심하루",
    meta: "20세 · 신입생",
    lost: "배터리가 1% 남은 스마트폰",
    quote:
      "“아, 왜 다 안 읽씹이지? 설마 나만 빼고 단톡방 새로 팠나?”",
    description:
      "단톡방 하트 하나에 세상을 다 가진 듯 기뻐하다가도, 읽씹 하나에 나라를 잃은 표정이 되는 갓 스무 살 신입생. 그녀에게 스마트폰 분실은 곧 사회적 투명인간 선고와 다름없다."
  },

  jeongseok: {
    symbol: "📘",
    type: "분실자 2",
    name: "강정석",
    meta: "복학생",
    lost: "교수님이 강조한 족보가 든 두꺼운 전공책",
    quote:
      "“효율이 생명입니다. 이번 학점 빵꾸나면 내년 계획까지 다 꼬이니까요.”",
    description:
      "1분 1초를 데이터로 계산하며 효율만을 따지는 차가운 팩트 폭격기. 시험을 앞두고 전공책을 잃어버리는 논리적으로 불가능한 상황에 직면하자 그의 머릿속은 완벽한 백지장이 되어버린다."
  },

  seoyeon: {
    symbol: "📄",
    type: "분실자 3",
    name: "이서연",
    meta: "4학년 · 취업준비생",
    lost: "얇디얇은 이력서 클리어 파일",
    quote:
      "“다들 저만치 앞서 있는데 나만 출발선에 서 있는 것 같아. 하루하루가 지옥 같아.”",
    description:
      "남들은 4년 동안 채운 스펙으로 취업 시장에 나가는데, 자신의 이력서만 텅 비어 있다고 느껴 늘 주눅 들어 있는 4학년 취업준비생. 무엇인가 해야 한다는 것은 알지만 어디서부터 시작해야 할지 막막하기만 하다."
  },

  station: {
    symbol: "🚊",
    type: "목격자",
    name: "역무원",
    meta: "안심행 열차 안내자",
    lost: "분실물 없음",
    quote:
      "“여기서 놓치면 아무도 안 찾아줍니다!”",
    description:
      "매일 아침 ‘안심행’으로 향하는 승객들을 안내하는 역무원. 바닥에 떨어진 청년들의 물건을 주워 유실물 센터로 이끄는 미스터리한 인물이다."
  },

  manager: {
    symbol: "☕",
    type: "미상",
    name: "관리인",
    meta: "유실물 센터 지킴이",
    lost: "알 수 없음",
    quote:
      "“너희가 오늘 진짜로 찾고 싶었던 건, 사실 이거 아니었을까?”",
    description:
      "바깥의 시끄러운 소음이 완벽하게 차단된 유실물 센터의 관리인. 잔뜩 굳어 떨고 있는 청년들의 손에 따뜻한 찻잔을 쥐여주며, 아무것도 증명하지 않아도 괜찮다는 평안을 선물한다. 세상의 잣대 대신 존재 그 자체를 사랑하는 그의 진짜 이름은 무엇일까?"
  }
};

const characterDialog = document.querySelector("#character-dialog");

const characterCloseButton =
  characterDialog.querySelector(".character-close");

const characterSymbol =
  characterDialog.querySelector(".character-symbol");

const characterType =
  characterDialog.querySelector(".character-type");

const characterName =
  characterDialog.querySelector(".character-name");

const characterMeta =
  characterDialog.querySelector(".character-meta");

const characterLost =
  characterDialog.querySelector(".character-lost");

const characterQuote =
  characterDialog.querySelector(".character-quote");

const characterDescription =
  characterDialog.querySelector(".character-description");

document.querySelectorAll("[data-character]").forEach((profile) => {
  profile.addEventListener("click", () => {
    const character = characters[profile.dataset.character];

    if (!character) return;

    characterSymbol.textContent = character.symbol;
    characterType.textContent = character.type;
    characterName.textContent = character.name;
    characterMeta.textContent = character.meta;
    characterLost.textContent = character.lost;
    characterQuote.textContent = character.quote;
    characterDescription.textContent = character.description;

    characterDialog.showModal();
  });
});

characterCloseButton.addEventListener("click", () => {
  characterDialog.close();
});

characterDialog.addEventListener("click", (event) => {
  if (event.target === characterDialog) {
    characterDialog.close();
  }
});

const plays = {
  photoBox: {
    number: "01",
    icon: "▣",
    title: "포토박스",
    place: "1번 부스",
    summary: "친구와 함께 오늘의 추억을 사진으로 남겨요.",
    description:
      "페스티벌에 빠질 수 없는 사진! 포토박스에서 친구와 함께 오늘의 추억을 사진으로 남겨보세요📸",
    steps: [
      "친구와 함께 포토박스에서 사진을 촬영해요.",
      "완성된 사진을 확인하고 오늘의 추억으로 간직해요!"
    ]
  },

  photoZone: {
    number: "02",
    icon: "◇",
    title: "포토존",
    place: "2번 부스",
    summary: "여우사이 포토존에서 특별한 사진을 남겨요.",
    description:
      "여우사이의 분위기가 담긴 포토존에서 친구와 함께 자유롭게 사진을 남기는 공간입니다📸",
    steps: [
      "친구와 함께 원하는 구도와 포즈를 정해요.",
      "포토존에서 자유롭게 사진을 촬영하고 추억을 남겨요!"
    ]
  },

  scratch: {
    number: "03",
    icon: "✦",
    title: "스크래치카드",
    place: "3번 부스",
    summary: "나의 생각은 남겨두고, 다른 생각도 꺼내봐요.",
    description:
      "나의 생각은 남겨두고, 다른 생각도 꺼내보자!",
    steps: [
      "여러 주제 중 하나의 질문에 대답을 적어 스크래치 카드 만들기",
      "만든 스크래치 카드는 넣어두고, 같은 질문의 다른 스크래치 카드를 긁어 생각 읽어보기!"
    ]
  },

  guestbook: {
    number: "04",
    icon: "✎",
    title: "방명록: 우리들의 이야기",
    place: "4번 부스",
    summary: "얼굴과 기대를 담은 순간을 기록해요.",
    description:
      "여우사이에 앞서, 방명록에 얼굴과 기대를 담은 순간을 기록하자!",
    steps: [
      "색칠도구로 도화지에 자유롭게 얼굴 그리기!",
      "나누고픈 기대와 소감도 함께! ♡"
    ]
  },

  pharmacy: {
    number: "05",
    icon: "＋",
    title: "마음의 약국",
    place: "5번 부스",
    summary: "지금 내 마음에 필요한 처방을 받아요.",
    description:
      "잃어버린 것을 찾아서 떠나는 뮤지컬 주인공처럼, 우리가 잃어버리며 살아가고 있는 게 무엇일까?",
    steps: [
      "마음진단서를 작성하며 나의 마음을 마주하기!",
      "달달한 약을 처방받고, 회복으로 나아가기♡"
    ]
  },

  shrinkles: {
    number: "06",
    icon: "♧",
    title: "슈링클스: 사랑을 굽다",
    place: "6번 부스",
    summary: "사랑을 그리고 구워 나만의 키링을 만들어요.",
    description:
      "네가 생각하는 사랑은 뭐야? 사랑을 그리고 구워 나만의 키링을 만들기!",
    steps: [
      "내가 생각하는 사랑을 슈링클스 판 위에 그리기",
      "판을 구워 키링으로 만들어 간직하기!"
    ]
  },

  jenga: {
    number: "07",
    icon: "▥",
    title: "Missionary Possible",
    place: "7번 부스",
    summary: "3단계 미션을 완수하고 미션요원이 되어봐요.",
    description:
      "3단계의 미션을 성공적으로 완수하여 미션요원 수료증을 얻자!",
    steps: [
      "3단계 미션은 >> 당일 공개 <<",
      "미션을 완수하고 미션 수료증과 선물을 받아가자!"
    ]
  },

  draw: {
    number: "08",
    icon: "?",
    title: "스탬프 카드 & 대왕 종이판 뽑기",
    place: "8번 부스",
    summary: "스탬프카드에 사인을 모아 뽑기에 도전해요.",
    description:
      "스탬프카드에 사인을 모아 뽑기에 도전하자!",
    steps: [
      "각 부스 앞에 배치된 스탬프 카드를 가지고 부스 체험이 끝날 때마다 사인을 받는다!",
      "모은 스탬프 카드를 뽑기 부스로 가지고 가서 뽑는다!",
      "스탬프 카드는 새 친구에게만 적용됩니다:)"
    ]
  },

  musicalboard: {
    number: "09",
    icon: "♡",
    title: "뮤지컬 소개 부스",
    place: "9번 부스",
    summary: "공연의 핵심 주제와 인물들을 먼저 만나요.",
    description:
      "뮤지컬 관람 전 극의 핵심 주제와 인물들에 대해 살펴보는 공간!",
    steps: [
      "뮤지컬을 더 잘 이해하며 관람하기 위해 뮤지컬 소개 부스는 필수♡",
      "뮤지컬 소개를 살펴본 뒤 ‘마음의 약국’ 체험까지 이어서 참여하기!"
    ]
  }
};

const playGroups = {
  photo: {
    title: "사진으로 남기기",
    items: ["photoBox", "photoZone"]
  },

  heart: {
    title: "마음 나누기",
    items: ["scratch", "guestbook", "pharmacy"]
  },

  make: {
    title: "직접 만들기",
    items: ["shrinkles"]
  },

  game: {
    title: "함께 놀기",
    items: ["jenga", "draw"]
  }
};

const detailPage = document.querySelector("#play-detail");
const detailIcon = detailPage.querySelector(".detail-icon");
const detailKicker = detailPage.querySelector(".detail-kicker");
const detailTitle = detailPage.querySelector(".detail-title");
const detailSummary = detailPage.querySelector(".detail-summary");
const detailDescription =
  detailPage.querySelector(".detail-description");

const detailPlace =
  detailPage.querySelector(".detail-place") ||
  detailPage.querySelector(
    ".detail-info > div:first-child strong"
  );

const detailSteps =
  detailPage.querySelector(".detail-steps");

function openPlayDetail(id, updateHistory = true) {
  const play = plays[id];

  if (!play) return;

  detailIcon.textContent = play.icon;
  detailKicker.textContent = `${play.number} · LOBBY PLAY`;
  detailTitle.textContent = play.title;
  detailSummary.textContent = play.summary;
  detailDescription.textContent = play.description;

  if (detailPlace) {
    detailPlace.textContent = play.place;
  }

  detailSteps.innerHTML = play.steps
    .map((step) => `<li>${step}</li>`)
    .join("");

  detailPage.classList.add("open");
  detailPage.setAttribute("aria-hidden", "false");
  detailPage.scrollTop = 0;

  document.body.classList.add("detail-open");

  if (updateHistory) {
    history.pushState(
      { play: id },
      "",
      `#play/${id}`
    );
  }
}

function closePlayDetail(updateAddress = true) {
  detailPage.classList.remove("open");
  detailPage.setAttribute("aria-hidden", "true");

  document.body.classList.remove("detail-open");

  if (updateAddress) {
    history.replaceState(null, "", "#play");
  }
}

const picker = document.querySelector("#play-picker");
const pickerTitle =
  picker.querySelector("#play-picker-title");
const pickerList =
  picker.querySelector(".picker-list");

function closePicker() {
  picker.classList.remove("open");
  picker.setAttribute("aria-hidden", "true");

  document.body.classList.remove("picker-open");
}

function openPicker(groupId) {
  const group = playGroups[groupId];

  if (!group) return;

  pickerTitle.textContent = group.title;

  pickerList.innerHTML = group.items
    .map((id) => {
      const item = plays[id];

      return `
        <button type="button" data-picker-play="${id}">
          <span class="picker-check">✓</span>

          <span>
            <b>${item.number} · ${item.title}</b>
            <small>${item.summary}</small>
          </span>

          <i aria-hidden="true">›</i>
        </button>
      `;
    })
    .join("");

  pickerList
    .querySelectorAll("[data-picker-play]")
    .forEach((playButton) => {
      playButton.addEventListener("click", () => {
        const playId = playButton.dataset.pickerPlay;

        closePicker();

        requestAnimationFrame(() => {
          openPlayDetail(playId);
        });
      });
    });

  picker.classList.add("open");
  picker.setAttribute("aria-hidden", "false");

  document.body.classList.add("picker-open");
}

document
  .querySelectorAll("[data-play-group]")
  .forEach((button) => {
    button.addEventListener("click", () => {
      openPicker(button.dataset.playGroup);
    });
  });

picker
  .querySelectorAll("[data-close-picker]")
  .forEach((button) => {
    button.addEventListener("click", closePicker);
  });

document.querySelectorAll("[data-play]").forEach((button) => {
  button.addEventListener("click", () => {
    openPlayDetail(button.dataset.play);
  });
});

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    picker.classList.contains("open")
  ) {
    closePicker();
  }
});

document
  .querySelector(".detail-back")
  .addEventListener("click", () => {
    if (location.hash.startsWith("#play/")) {
      history.back();
    } else {
      closePlayDetail();
    }
  });

document
  .querySelector(".detail-home")
  .addEventListener("click", () => {
    closePlayDetail(false);
    location.hash = "home";
  });

window.addEventListener("popstate", () => {
  const matchedPlay =
    location.hash.match(/^#play\/(.+)$/);

  if (matchedPlay) {
    openPlayDetail(matchedPlay[1], false);
  } else {
    closePlayDetail(false);
  }
});

const initialPlay =
  location.hash.match(/^#play\/(.+)$/);

if (initialPlay) {
  openPlayDetail(initialPlay[1], false);
}