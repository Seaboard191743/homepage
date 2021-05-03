const slides = document.querySelectorAll(".slide");
const timelinePoints = document.querySelectorAll(".timeline__point");
const timelinePointsHor = document.querySelectorAll(".timeline__point--hor");

const removeClass = (points) =>
  points.forEach((point) => point.classList.remove("timeline__point--active"));

const showSlide = (num = 0) => {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - num)}%)`;
  });
  removeClass(timelinePoints);
  removeClass(timelinePointsHor);
  timelinePoints[num].classList.add("timeline__point--active");
  timelinePointsHor[num].classList.add("timeline__point--active");
};
showSlide();

const handlePointClick = (point, index) =>
  point.addEventListener("click", () => {
    showSlide(index);
  });

timelinePoints.forEach((point, i) => {
  handlePointClick(point, i);
});
timelinePointsHor.forEach((point, i) => {
  handlePointClick(point, i);
});
