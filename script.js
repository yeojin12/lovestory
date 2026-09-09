/* ==================================================
   나의 티켓 팝업
================================================== */

const ticketDialog = document.querySelector("#ticket-dialog");
const ticketOpenButton = document.querySelector("[data-open-ticket]");
const ticketCloseButton = ticketDialog.querySelector(".close");

/* 나의 티켓 버튼을 누르면 팝업 열기 */
ticketOpenButton.addEventListener("click", () => {
  ticketDialog.showModal();
});

/* × 버튼을 누르면 팝업 닫기 */
ticketCloseButton.addEventListener("click", () => {
  ticketDialog.close();
});

/* 팝업 바깥쪽 어두운 영역을 누르면 닫기 */
ticketDialog.addEventListener("click", (event) => {
  if (event.target === ticketDialog) {
    ticketDialog.close();
  }
});


/* ==================================================
   뮤지컬 시놉시스 열기와 닫기
================================================== */

document.querySelectorAll("[data-expand]").forEach((button) => {
  button.addEventListener("click", () => {
    const panelId = button.dataset.expand;
    const panel = document.getElementById(panelId);
    const symbol = button.querySelector("span");

    panel.classList.toggle("open");

    /* 열려 있으면 −, 닫혀 있으면 ＋ 표시 */
    if (panel.classList.contains("open")) {
      symbol.textContent = "−";
    } else {
      symbol.textContent = "＋";
    }
  });
});


/* ==================================================
   등장인물 정보
================================================== */

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


/* 등장인물 팝업 안의 요소 가져오기 */
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


/* 등장인물 카드를 누르면 해당 정보로 팝업 열기 */
document.querySelectorAll("[data-character]").forEach((profile) => {
  profile.addEventListener("click", () => {
    const characterId = profile.dataset.character;
    const character = characters[characterId];

    if (!character) {
      return;
    }

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


/* 등장인물 팝업 × 버튼 */
characterCloseButton.addEventListener("click", () => {
  characterDialog.close();
});


/* 등장인물 팝업 바깥쪽을 누르면 닫기 */
characterDialog.addEventListener("click", (event) => {
  if (event.target === characterDialog) {
    characterDialog.close();
  }
});


/* ==================================================
   로비플레이 상세 정보
================================================== */

const plays = {
  fourcut: {
    number: "01",
    icon: "▣",
    title: "인생네컷",
    summary: "새로운 친구와 함께 오늘의 추억을 남겨요.",
    description:
      "여우사이에서 만난 새로운 친구와 함께 사진을 찍고, 오늘의 추억을 네 컷으로 남기는 포토 체험입니다.",
    steps: [
      "함께 사진을 찍을 친구를 찾아보세요.",
      "촬영 공간에서 원하는 소품을 골라주세요.",
      "화면 안내에 맞춰 네 컷을 촬영하세요.",
      "완성된 사진을 확인하고 추억으로 간직하세요."
    ]
  },

  mirror: {
    number: "02",
    icon: "◇",
    title: "포토존",
    summary: "전신거울 앞에서 우리만의 사진을 남겨요.",
    description:
      "잘 꾸며진 여우사이 전신거울 포토존에서 새로운 친구와 함께 자유롭게 사진을 남기는 체험입니다.",
    steps: [
      "거울 주변의 소품과 문구를 살펴보세요.",
      "함께 촬영할 친구와 원하는 포즈를 정하세요.",
      "전신거울을 이용해 자유롭게 촬영하세요.",
      "다음 사람을 위해 소품을 제자리에 놓아주세요."
    ]
  },

  scratch: {
    number: "03",
    icon: "✦",
    title: "스크래치카드",
    summary: "카드를 긁어 오늘의 메시지를 확인해요.",
    description:
      "마음이 가는 카드를 한 장 고르고 스크래치 부분을 긁어, 오늘 나에게 찾아온 작은 메시지를 확인하는 체험입니다.",
    steps: [
      "마음이 가는 스크래치카드를 골라주세요.",
      "카드의 은색 부분을 천천히 긁어보세요.",
      "카드에 나타난 메시지를 읽어보세요.",
      "확인한 카드는 추억으로 가져가세요."
    ]
  },

  guestbook: {
    number: "04",
    icon: "✎",
    title: "방명록",
    summary: "오늘의 마음과 하고 싶은 말을 남겨요.",
    description:
      "행사에 들어가기 전 잠시 멈춰, 오늘의 마음과 누군가에게 하고 싶은 말을 자유롭게 기록하는 공간입니다.",
    steps: [
      "준비된 방명록이나 카드를 골라주세요.",
      "오늘의 마음과 하고 싶은 말을 자유롭게 적어주세요.",
      "작성한 글을 안내된 공간에 남겨주세요."
    ]
  },

  personalcolor: {
    number: "05",
    icon: "◐",
    title: "퍼스널컬러",
    summary: "나에게 어울리는 색을 찾아보는 시간.",
    description:
      "나는 웜톤일까요, 쿨톤일까요? 다양한 색을 얼굴 가까이에 대보며 나에게 잘 어울리는 퍼스널컬러를 가볍게 알아봅니다.",
    steps: [
      "준비된 여러 색상의 천이나 카드를 살펴보세요.",
      "각 색상을 얼굴 가까이에 대보세요.",
      "얼굴이 더 밝고 생기 있어 보이는 색을 찾아보세요.",
      "친구와 서로 어울리는 색을 이야기해보세요."
    ]
  },

  pharmacy: {
    number: "06",
    icon: "＋",
    title: "마음의 약국",
    summary: "지금 내 마음에 필요한 처방을 받아요.",
    description:
      "현재 나의 마음이 어떤 상태인지 돌아보고, 마음에 따라 필요한 위로와 응원의 메시지를 처방받는 체험입니다.",
    steps: [
      "지금 내 마음과 가장 가까운 항목을 골라주세요.",
      "안내에 따라 마음을 천천히 진단해보세요.",
      "나에게 맞는 마음 처방을 받아보세요.",
      "처방 메시지를 천천히 읽고 가져가세요."
    ]
  },

  shrinkles: {
    number: "07",
    icon: "♧",
    title: "슈링클스",
    summary: "직접 꾸민 그림을 작은 소품으로 만들어요.",
    description:
      "그림이나 문구를 직접 그리고 열을 가해, 작고 단단한 나만의 소품으로 만드는 체험입니다. 자세한 진행 방식은 추후 안내될 예정입니다.",
    steps: [
      "준비된 도안 중 원하는 모양을 골라주세요.",
      "도안에 원하는 그림이나 글을 표현해보세요.",
      "완성한 도안을 진행자에게 전달해주세요.",
      "완성된 슈링클스 소품을 받아가세요."
    ]
  },

  jenga: {
    number: "08",
    icon: "▥",
    title: "대형 젠가",
    summary: "새로운 친구들과 젠가 게임 한 판!",
    description:
      "오메, 젠가가 크다! 커다란 블록을 한 개씩 빼고 다시 쌓으며 친구들과 함께 즐기는 대형 젠가 게임입니다.",
    steps: [
      "함께 게임할 친구들과 순서를 정해주세요.",
      "자신의 차례에 블록 하나를 조심스럽게 빼세요.",
      "뺀 블록을 젠가의 가장 위에 올려주세요.",
      "젠가가 무너지면 안전하게 함께 정리해주세요."
    ]
  },

  draw: {
    number: "09",
    icon: "?",
    title: "대왕 종이판 뽑기",
    summary: "레트로 감성의 대형 뽑기 게임.",
    description:
      "커다란 종이판에서 마음이 가는 칸을 골라 뽑고, 그 안에 숨겨진 결과와 상품을 확인하는 레트로 감성의 뽑기 게임입니다.",
    steps: [
      "참여 방법과 남아 있는 뽑기 칸을 확인해주세요.",
      "마음이 가는 칸 하나를 골라주세요.",
      "선택한 종이판을 열어 결과를 확인하세요.",
      "당첨된 상품은 안내에 따라 받아가세요."
    ]
  },

  musicalboard: {
    number: "10",
    icon: "♡",
    title: "뮤지컬 소개판",
    summary: "공연을 보기 전 인물과 이야기를 먼저 만나요.",
    description:
      "오늘 공연되는 뮤지컬 ‘찾아 주셔서 고맙습니다’의 등장인물과 이야기, 공연의 주요 내용을 미리 살펴볼 수 있는 소개 공간입니다.",
    steps: [
      "뮤지컬의 전체 이야기를 먼저 읽어보세요.",
      "등장인물과 각 인물의 분실물을 살펴보세요.",
      "마음에 남는 인물이나 문장을 찾아보세요.",
      "소개 내용을 떠올리며 뮤지컬을 관람해보세요."
    ]
  }
};


/* ==================================================
   로비플레이 상세 화면 열기
================================================== */

const detailPage = document.querySelector("#play-detail");

const detailIcon =
  detailPage.querySelector(".detail-icon");

const detailKicker =
  detailPage.querySelector(".detail-kicker");

const detailTitle =
  detailPage.querySelector(".detail-title");

const detailSummary =
  detailPage.querySelector(".detail-summary");

const detailDescription =
  detailPage.querySelector(".detail-description");

const detailSteps =
  detailPage.querySelector(".detail-steps");


/* 선택한 로비플레이 내용으로 상세 화면 표시 */
function openPlayDetail(id, updateHistory = true) {
  const play = plays[id];

  if (!play) {
    return;
  }

  detailIcon.textContent = play.icon;
  detailKicker.textContent = `${play.number} · LOBBY PLAY`;
  detailTitle.textContent = play.title;
  detailSummary.textContent = play.summary;
  detailDescription.textContent = play.description;

  detailSteps.innerHTML = play.steps
    .map((step) => `<li>${step}</li>`)
    .join("");

  detailPage.classList.add("open");
  detailPage.setAttribute("aria-hidden", "false");

  document.body.classList.add("detail-open");

  /* 상세 화면의 스크롤 위치를 맨 위로 이동 */
  detailPage.scrollTop = 0;

  /* 주소에 선택한 로비플레이 이름 기록 */
  if (updateHistory) {
    history.pushState(
      { play: id },
      "",
      `#play/${id}`
    );
  }
}


/* 로비플레이 상세 화면 닫기 */
function closePlayDetail(updateAddress = true) {
  detailPage.classList.remove("open");
  detailPage.setAttribute("aria-hidden", "true");

  document.body.classList.remove("detail-open");

  if (updateAddress) {
    history.replaceState(null, "", "#play");
  }
}


/* 로비플레이 카드에 클릭 기능 연결 */
document.querySelectorAll("[data-play]").forEach((card) => {
  card.addEventListener("click", () => {
    openPlayDetail(card.dataset.play);
  });
});


/* 상세 화면의 뒤로가기 버튼 */
document
  .querySelector(".detail-back")
  .addEventListener("click", () => {
    if (location.hash.startsWith("#play/")) {
      history.back();
    } else {
      closePlayDetail();
    }
  });


/* 상세 화면의 홈 버튼 */
document
  .querySelector(".detail-home")
  .addEventListener("click", () => {
    closePlayDetail(false);
    location.hash = "home";
  });


/* 브라우저 자체 뒤로가기 버튼 대응 */
window.addEventListener("popstate", () => {
  const matchedPlay =
    location.hash.match(/^#play\/(.+)$/);

  if (matchedPlay) {
    openPlayDetail(matchedPlay[1], false);
  } else {
    closePlayDetail(false);
  }
});


/* 로비 상세 주소로 사이트에 바로 들어온 경우 */
const initialPlay =
  location.hash.match(/^#play\/(.+)$/);

if (initialPlay) {
  openPlayDetail(initialPlay[1], false);
}