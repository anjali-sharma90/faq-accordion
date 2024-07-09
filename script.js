const expandClass = 'faq-accordion__questions-card--expand';
const accordionsClass = '.faq-accordion__questions-card';
const accordions = document.querySelectorAll(accordionsClass);

const getTargetEl = e =>
  e.keycode === 13 ? e.target.closest(accordionsClass) : e.currentTarget;

const getOtherEls = (el, arr) => [...arr].filter(elm => elm !== el);

const showAnswer = e => {
  const targetEl = getTargetEl(e);
  const othersEl = getOtherEls(targetEl, accordions);

  targetEl.classList.toggle(expandClass);
  othersEl.forEach(others => others.classList.remove(expandClass));
};

accordions.forEach(acc => {
  acc.addEventListener('click', showAnswer);
  acc.addEventListener('keypress', showAnswer);
});
