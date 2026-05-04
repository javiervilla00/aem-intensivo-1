document.addEventListener("DOMContentLoaded", function () {
  const impactNumbers = document.querySelectorAll(".impact-numbers__value");
  const runCounter = (counter) => {
    const target = +(counter.getAttribute("data-target") || 0);
    if (target === 0) {
      counter.innerText = "0";
      return;
    }
    let count = 0;
    const speed = 50;
    const increment = target / speed;
    const updateCount = () => {
      count += increment;
      if (count < target) {
        counter.innerText = "+" + Math.ceil(count);
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = '+' + target;
      }
    };
    updateCount();
  };
  const observerOptions = {
    root: null,
    threshold: 0.1
  };
  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        runCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  impactNumbers.forEach(counter => {
    counterObserver.observe(counter);
  });
});