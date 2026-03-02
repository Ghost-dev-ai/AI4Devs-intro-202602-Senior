// script.js
(() => {
  "use strict";

  const inputEl = document.querySelector("#textInput");
  const outputCardEl = document.querySelector("#outputCard");
  const resultEl = document.querySelector("#result");
  const metricsEl = document.querySelector("#metrics");
  const wordCountEl = document.querySelector("#wordCount");
  const charCountEl = document.querySelector("#charCount");

  const MIN_LENGTH = 3;

  function reverseText(text) {
    return [...text].reverse().join("");
  }

  function countWords(text) {
    const normalized = text.trim().replace(/\s+/g, " ");
    if (!normalized) return 0;
    return normalized.split(" ").length;
  }

  function countCharacters(text) {
    return [...text].length;
  }

  function setNeutralState() {
    resultEl.textContent = "";
    wordCountEl.textContent = "0";
    charCountEl.textContent = "0";

    metricsEl.classList.add("is-hidden");
    outputCardEl.classList.remove("is-active");
    outputCardEl.classList.add("is-empty");
  }

  function setActiveState(reversed) {
    const words = countWords(reversed);
    const chars = countCharacters(reversed);

    resultEl.textContent = reversed;
    wordCountEl.textContent = String(words);
    charCountEl.textContent = String(chars);

    metricsEl.classList.remove("is-hidden");
    outputCardEl.classList.add("is-active");
    outputCardEl.classList.remove("is-empty");
  }

  function handleInput() {
    const value = inputEl.value ?? "";

    if (value.length <= MIN_LENGTH) {
      setNeutralState();
      return;
    }

    const reversed = reverseText(value);
    setActiveState(reversed);
  }

  inputEl.addEventListener("input", handleInput);
  setNeutralState();
})();