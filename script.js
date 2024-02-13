// alert("connected");
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const galleryImgs = document.querySelectorAll('.gallery-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

// Open modal when an image is clicked
galleryImgs.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        modal.style.display = 'block';
        modalImg.src = img.src;
    });
});

// Close modal when close button is clicked
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when user clicks outside the modal
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Next button functionality
nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= galleryImgs.length) {
        currentIndex = 0;
    }
    modalImg.src = galleryImgs[currentIndex].src;
});

// Previous button functionality
prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = galleryImgs.length - 1;
    }
    modalImg.src = galleryImgs[currentIndex].src;
});


// Auto play songs
document.body.addEventListener('click', function() {
    var audio = document.getElementById('birthdayAudio');
    audio.play();
    var paper = document.getElementsByClassName('paper').style.
    // Remove event listener after first click
    document.body.removeEventListener('click', arguments.callee);
});