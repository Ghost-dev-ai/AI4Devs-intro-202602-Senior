// script.js
(() => {
  const els = {
    input: document.getElementById("textInput"),
    inputShell: document.getElementById("inputShell"),
    outputCard: document.getElementById("outputCard"),
    result: document.getElementById("result"),
    neutral: document.getElementById("neutral"),
    metrics: document.getElementById("metrics"),
    wordCount: document.getElementById("wordCount"),
    charCount: document.getElementById("charCount"),
  };

  const MIN_LEN = 3;

  function reverseText(text) {
    return text.split("").reverse().join("");
  }

  function countWords(text) {
    const normalized = text.trim();
    if (!normalized) return 0;
    return normalized.split(/\s+/).length;
  }

  function countChars(text) {
    return text.length;
  }

  function setMetrics(words, chars) {
    els.wordCount.textContent = String(words);
    els.charCount.textContent = String(chars);
  }

  function showResult(reversed) {
    els.result.textContent = reversed;

    const words = countWords(reversed);
    const chars = countChars(reversed);

    setMetrics(words, chars);

    els.metrics.classList.remove("is-hidden");
    els.outputCard.classList.remove("is-empty");
    els.outputCard.classList.add("is-ready");
    els.outputCard.setAttribute("aria-busy", "false");
  }

  function resetUI() {
    els.result.textContent = "";
    setMetrics(0, 0);

    els.metrics.classList.add("is-hidden");
    els.outputCard.classList.add("is-empty");
    els.outputCard.classList.remove("is-ready");
    els.outputCard.removeAttribute("aria-busy");
  }

  function setInputState(state) {
    // state: idle | active | valid
    els.inputShell.setAttribute("data-state", state);
  }

  function onInput() {
    const raw = els.input.value;
    const trimmed = raw.trim();

    if (!trimmed) {
      setInputState("idle");
      resetUI();
      return;
    }

    setInputState("active");

    if (trimmed.length <= MIN_LEN) {
      resetUI();
      return;
    }

    setInputState("valid");

    const reversed = reverseText(trimmed);
    showResult(reversed);
  }

  els.input.addEventListener("input", onInput);

  // Estado inicial consistente
  resetUI();
  setInputState("idle");
})();