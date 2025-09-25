// Mapping for Arabic letters (Abjad values as an example)
const abjad = {
  ا: 1,
  ب: 2,
  ج: 3,
  د: 4,
  ه: 5,
  و: 6,
  ز: 7,
  ح: 8,
  ط: 9,
  ي: 10,
  ك: 20,
  ل: 30,
  م: 40,
  ن: 50,
  س: 60,
  ع: 70,
  ف: 80,
  ص: 90,
  ق: 100,
  ر: 200,
  ش: 300,
  ت: 400,
  ث: 500,
  خ: 600,
  ذ: 700,
  ض: 800,
  ظ: 900,
  غ: 1000,
};

function calculateAbjad(sentence) {
  let sum = 0;
  for (let char of sentence) {
    if (abjad[char]) {
      sum += abjad[char];
    }
  }
  return sum;
}

// Example usage:
document.getElementById("calculateBtn").onclick = function () {
  let input = document.getElementById("yourInput").value.trim();
  let words = input.split(/\s+/);
  let details = [];
  let total = 0;

  for (let word of words) {
    let wordValue = calculateAbjad(word);
    details.push(`${word} = ${wordValue}`);
    total += wordValue;
  }

  document.getElementById("result").innerHTML =
    details.join("<br>") + `<br><strong>المجموع: ${total}</strong>`;
};
function renderAbjadList() {
  let html =
    "<strong>قيمة كل حرف:</strong><ul style='list-style:none;padding:0;margin:0'>";
  for (const [letter, value] of Object.entries(abjad)) {
    html += `<li>${letter} = ${value}</li>`;
  }
  html += "</ul>";
  document.getElementById("abjad-list").innerHTML = html;
}
renderAbjadList();

document.getElementById("smallAbjadBtn").onclick = function () {
  let input = document.getElementById("yourInput").value.trim();
  let words = input.split(/\s+/);
  let details = [];
  let total = 0;

  for (let word of words) {
    let wordSmallSum = 0;
    for (let char of word) {
      if (abjad[char]) {
        wordSmallSum += abjad[char] % 12;
      }
    }
    details.push(`${word} = ${wordSmallSum}`);
    total += wordSmallSum;
  }

  document.getElementById(
    "result"
  ).innerHTML = `<br><strong>حساب الجمل الصغير: ${total}</strong>`;
};
