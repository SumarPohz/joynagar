// script.js
const dayButtons = document.querySelectorAll('.day-button');
const imageContainer = document.getElementById('image-container');
const videoContainer = document.getElementById('video-container');
const winnerInfo = document.getElementById('winner-info');

// Array to store winner information for each day
const winners = [
    '1. Young Boys (02-00)\n2. Young FC (02-03)\n3. Zorolian Girls (02-00)\n4. OHS Fc (00-02)', // Day 1 winner
    '1. Vomthat (01-10)\n2. Sobiri (01-00)\n3. Kishan Sport Club (00-04)\n4. Bombastick Fc (01-00)\n5. Morning Star Fc (win by cross goal)', // Day 2 winner
    '1. Superstar (01-00)\n2. New TopA (00-01)\n3. Vangkhua Fc (00-01)\n4. Nobincherra (00-01)\n5. Anangten (00-03)'  // Day 3 winner
  ];

// Map of video URLs for each day
const videoUrls = [
  '', // Placeholder for Day 0 (since day numbers start from 1)
  'https://www.youtube.com/watch?v=uW6ZNgfVINo', // Day 1 video URL
  'https://www.youtube.com/watch?v=WTJSt4wP2ME', // Day 2 video URL
  'https://www.youtube.com/watch?v=zJK2pLDeft4'  // Day 3 video URL
  // Add more video URLs for additional days if needed
];

dayButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedDay = parseInt(button.getAttribute('data-day'));
    showMedia(selectedDay);
    showWinner(selectedDay);
  });
});

function showMedia(day) {
  // Load and show the image for the selected day
  const imagePath = `images/day${day}.jpg`;

  imageContainer.style.display = 'block';
  imageContainer.src = imagePath;

  // Check if a video URL is available for the selected day
  const videoUrl = videoUrls[day];
  const videoContainer = document.getElementById('video-container');
  
    if (videoUrl) {
    // Embed the YouTube video using Plyr
    videoContainer.innerHTML = `<iframe src="${videoUrl}" allowfullscreen allowtransparency allow="autoplay"></iframe>`;

    // Initialize Plyr
    const player = new Plyr(videoContainer, {
      controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen']
    });
  } else {
    // Display "Coming Soon" text
    videoContainer.innerHTML = '<p>Video Coming Soon</p>';
  }
}


function showWinner(day) {
    // Show winner information for the selected day
    winnerInfo.textContent = `Day ${day} Winners: ${winners[day - 0]}`;
  }

  function showWinner(day) {
    // Show winner information for the selected day
    winnerInfo.textContent = `Day ${day} Winners: ${winners[day - 1]}`;
  }
