function roundToNearestHalf(num) {
  return Math.round(num * 2) / 2;
}

function renderRatings(data) {
  const totalReviews = Object.values(data).reduce((a, b) => a + b, 0);

  let totalScore = 0;
  for (let star in data) {
    totalScore += star * data[star];
  }
  const average = (totalScore / totalReviews).toFixed(1);

  document.getElementById("averageRating").textContent = `${average} / 5.0`; 
  document.getElementById("totalReviews").textContent =
    `${totalReviews} reviews`;

  renderStars("averageStars", average);
  renderBreakdown(data, totalReviews);
}

function renderStars(containerId, rating) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  const roundedRating = roundToNearestHalf(rating);
  const fullStars = Math.floor(roundedRating);
  const hasHalfStar = roundedRating % 1 !== 0;

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      // Full star
      container.innerHTML += `<i class="fa-solid fa-star star"></i>`;
    } else if (i === fullStars + 1 && hasHalfStar) {
      // Half star (Font Awesome 6)
      container.innerHTML += `<i class="fa-solid fa-star-half-stroke star"></i>`;
    } else {
      // Empty star
      container.innerHTML += `<i class="fa-regular fa-star star-muted"></i>`;
    }
  }
}

function renderBreakdown(data, total) {
  const container = document.getElementById("ratingBreakdown");
  container.innerHTML = "";

  for (let i = 5; i >= 1; i--) {
    const count = data[i] || 0;
    const percentage = total ? (count / total) * 100 : 0;

    container.innerHTML += `
      <div class="rating-row">
        <div class="rating-label">${i} <i class="fa-solid fa-star star"></i></div>
        <div class="progress flex-grow-1 me-2">
          <div class="progress-bar bg-warning"
               style="width: ${percentage}%"></div>
        </div>
        <div>(${count})</div>
      </div>
    `;
  }
}

renderRatings(ratingsData);

const stars = document.querySelectorAll('.star-rating i');
let currentRating = 0;

stars.forEach(star => {
    star.addEventListener('click', () => {
        const selectedValue = Number(star.dataset.value);

        currentRating = (selectedValue === currentRating) ? 0 : selectedValue;

        stars.forEach(s => {
            const value = Number(s.dataset.value);
            s.classList.toggle('star', value <= currentRating);
            s.classList.toggle('star-muted', value > currentRating);
        });
    });
});


const submitReview = document.getElementById('reviewSubmit');
submitReview.addEventListener('click', () => {
submitReview.classList.add('running');

  setTimeout(() => {
    submitReview.classList.remove('running');

    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      theme: "dark",
      icon: "success",
      title: "Review berhasil terkirim!"
    });
  }, 500);
});

const readMore = document.getElementById('readMore');
const hiddenReview = document.getElementById('hiddenReview')
const readMoreText = document.getElementById('readMoreText')
const triangle = document.getElementById('readMoreTriangle')

readMore.addEventListener('click', () => {

  hiddenReview.classList.toggle('hidden');
  readMoreText.classList.toggle('showLess'); 
  triangle.classList.toggle('rotated');

  if (readMoreText.classList.contains('showLess')) {
    readMoreText.textContent = "Show Less..."
  } else {
    readMoreText.textContent = "Read More..."
  };
});
