
// Add this to the beginning of your birthday-script.js file
document.addEventListener('DOMContentLoaded', function() {
  // Initially lock scrolling
  document.body.style.overflow = 'hidden';
  
  // Hide arrow-down initially
  const arrowDown = document.querySelector('.arrow-down');
  if (arrowDown) {
    arrowDown.style.display = 'none';
  }
  
  // Hide page2 initially
  const page2 = document.getElementById('page2');
  if (page2) {
    // page2.style.display = 'none';
  }
});

// Modify your existing celebrate() function to enable scrolling
// Add this to your celebrate() function in birthday-script.js
function celebrate() {
  document.querySelector('.message').style.display = 'block';
  
  // Fire confetti three times with enhanced density and size
  launchConfetti();
  
  setTimeout(launchConfetti, 700);
  
  setTimeout(launchConfetti, 1400);
  
  startHeartShower();
  
  // NEW CODE: Enable scrolling, show arrow and page2 after celebration
  setTimeout(function() {
    // Enable scrolling
    document.body.style.overflow = 'auto';
    
    // Show arrow-down
    const arrowDown = document.querySelector('.arrow-down');
    if (arrowDown) {
      arrowDown.style.display = 'block';
    }
    
    // Show page2
    const page2 = document.getElementById('page2');
    if (page2) {
      page2.style.display = 'block';
    }
  }, 2000); // Wait 2 seconds after celebration starts
}
// Wait for document to load
$(window).on('load', function () {
    setTimeout(() => {
      $('.loader-wrapper').css('transform-origin', 'center center').animate({
        opacity: 0,
        transform: 'scale(0.2)'
      }, {
        duration: 1000,
        step: function (now, fx) {
          if (fx.prop === 'transform') {
            $(this).css('transform', `scale(${now})`);
          }
        },
        complete: function () {
          $(this).hide();
        }
      });
    }, 3500);
  });
  
  // Image frame captions
  const imageLabels = [
    "My Mumma",
    "Juiiiiii",
    "Binnnniiiiiiiiiii",
    "Laddo",
    "Chinuuu",
    "Motki",
    "Bhetli",
    "Kuchupuuuu"
  ];
  
  // Image placeholder URLs (replace these with your actual image URLs)
  const imageUrls = [
    "pics/photo_1_2025-04-15_20-16-23.jpg",
    "pics/image_2023-03-24_04-05-53.jpg",
    "pics/image_2023-03-26_03-15-26.jpg",
    "pics/photo_2_2025-04-15_20-16-23.jpg",
    "pics/photo_3_2025-04-15_20-16-23.jpg",
    "pics/photo_4_2025-04-15_20-16-23.jpg",
    "pics/WIN_20221104_01_04_12_Pro.jpg",
    "pics/WIN_20230121_23_48_50_Pro.jpg"
  ];
  
  // Text box content
  const textBoxContent = [
    "Laddo",
    "Chinu",
    "Mummum",
    "Ghublush",
    "Guglu",
    "laddu "
  ];
  
  // function celebrate() {
  //   document.querySelector('.message').style.display = 'block';
    
  //   // Fire confetti three times with enhanced density and size
  //   launchConfetti();
    
  //   setTimeout(launchConfetti, 700);
    
  //   setTimeout(launchConfetti, 1400);
    
  //   startHeartShower();
  // }
  
  function launchConfetti() {
    // Enhanced confetti with more particles and larger size
    confetti({
      particleCount: 300, // 3x more particles
      spread: 100,
      origin: { y: 0.6 },
      scalar: 1.5 // 1.5x larger confetti pieces
    });
    const confettiSettings = {
      particleCount: 200,
      spread: 200,
      scalar: 2,  // Larger confetti size
      origin: { y: 0.6 },
      colors: ['#845ec2', '#d65db1', '#ff6f91', '#ff9671', '#ffb6b9', '#6a0572']
    };
  
    confetti(confettiSettings);
    setTimeout(() => confetti({ ...confettiSettings, spread: 240 }), 600);
    setTimeout(() => confetti({ ...confettiSettings, spread: 280 }), 1200);
  }
  
  function startHeartShower() {
    const hearts = ["❤️", "💖", "💘", "💕", "💞", "💗"];
    const interval = setInterval(() => {
      const heart = document.createElement('div');
      heart.classList.add('heart-fall');
      heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = (4 + Math.random() * 3) + 's';
      heart.style.fontSize = (25 + Math.random() * 25) + 'px';
  
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 7000);
    }, 180);
  
    setTimeout(() => clearInterval(interval), 10000);
  
    const colors = ['#ff4b91', '#f107a3', '#ff85b3', '#fcd3e6'];
    // Create 90 hearts (3x more than original)
    for (let i = 0; i < 90; i++) {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.style.left = Math.random() * 100 + 'vw';
      // Larger heart sizes - between 15px and 40px (increased from 10-30px)
      heart.style.fontSize = Math.random() * 25 + 15 + 'px';
      heart.style.animationDuration = Math.random() * 2 + 3 + 's';
      heart.style.top = '-50px';
      heart.style.color = colors[Math.floor(Math.random() * colors.length)];
      heart.innerText = '💖';
      document.body.appendChild(heart);
      setTimeout(() => {
        heart.remove();
      }, 5000);
    }
    
    // Create a second batch after a short delay to increase density effect
    setTimeout(() => {
      for (let i = 0; i < 90; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = Math.random() * 25 + 15 + 'px';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        heart.style.top = '-50px';
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        heart.innerText = '💖';
        document.body.appendChild(heart);
        setTimeout(() => {
          heart.remove();
        }, 5000);
      }
    }, 500);
  }
  
  function scrollToImages() {
    document.getElementById('page2').scrollIntoView({
      behavior: 'smooth'
    });
  }
  
  // Check if rectangles overlap to prevent collisions
  function checkOverlap(rect1, rect2) {
    // Add some margin
    const margin = 20;
    return !(
      rect1.right + margin < rect2.left || 
      rect1.left > rect2.right + margin || 
      rect1.bottom + margin < rect2.top || 
      rect1.top > rect2.bottom + margin
    );
  }
  
  // Place elements in non-overlapping positions
  function placeAllElements() {
    const container = document.getElementById('galleryContainer');
    const containerWidth = container.clientWidth;
    const containerHeight = 1200; // Fixed height for container
    
    container.innerHTML = ''; // Clear container
    
    const placedElements = [];
    
    // First place image frames
    for (let i = 0; i < imageLabels.length; i++) {
      const frameId = `frame-${i}`;
      const frame = document.createElement('div');
      frame.className = 'frame';
      frame.id = frameId;
      
      // Create the image element
      const img = document.createElement('img');
      img.src = imageUrls[i];
      img.alt = imageLabels[i];
      
      // Add the caption
      const caption = document.createElement('div');
      caption.className = 'caption';
      caption.textContent = imageLabels[i];
      
      frame.appendChild(img);
      frame.appendChild(caption);
      
      // Try to find a non-overlapping position
      let attempts = 0;
      let overlapping = true;
      let left, top;
      
      while (overlapping && attempts < 100) {
        left = Math.floor(Math.random() * (containerWidth - 320));
        top = Math.floor(Math.random() * (containerHeight - 320));
        
        // Set proposed position
        const rect = {
          left: left,
          top: top,
          right: left + 300,
          bottom: top + 300
        };
        
        overlapping = false;
        for (let j = 0; j < placedElements.length; j++) {
          if (checkOverlap(rect, placedElements[j])) {
            overlapping = true;
            break;
          }
        }
        
        attempts++;
      }
      
      // Position the frame
      frame.style.left = left + 'px';
      frame.style.top = top + 'px';
      container.appendChild(frame);
      
      // Record its position
      placedElements.push({
        left: left,
        top: top,
        right: left + 300,
        bottom: top + 300
      });
    }
    
    // Now place text boxes
    for (let i = 0; i < textBoxContent.length; i++) {
      const textBox = document.createElement('div');
      textBox.className = `text-box style${i+1}`;
      textBox.textContent = textBoxContent[i];
      
      // Get dimensions based on style
      let width, height;
      switch(i) {
        case 0: // Laddo
          width = 160; height = 100;
          break;
        case 1: // Chinu
          width = 120; height = 120;
          break;
        case 2: // Mummum
          width = 200; height = 80;
          break;
        case 3: // Ghublush
          width = 180; height = 140;
          break;
        case 4: // Guglu
          width = 150; height = 150;
          break;
        case 5: // Sweetu
          width = 220; height = 90;
          break;
        default:
          width = 180; height = 100;
      }
      
      // Try to find a non-overlapping position
      let attempts = 0;
      let overlapping = true;
      let left, top;
      
      while (overlapping && attempts < 100) {
        left = Math.floor(Math.random() * (containerWidth - width - 40));
        top = Math.floor(Math.random() * (containerHeight - height - 40));
        
        // Set proposed position
        const rect = {
          left: left,
          top: top,
          right: left + width,
          bottom: top + height
        };
        
        overlapping = false;
        for (let j = 0; j < placedElements.length; j++) {
          if (checkOverlap(rect, placedElements[j])) {
            overlapping = true;
            break;
          }
        }
        
        attempts++;
      }
      
      // Position the text box
      textBox.style.left = left + 'px';
      textBox.style.top = top + 'px';
      container.appendChild(textBox);
      
      // Record its position
      placedElements.push({
        left: left,
        top: top,
        right: left + width,
        bottom: top + height
      });
    }
  }
  
  // Initialize on page load
  window.onload = function() {
    placeAllElements();
    
    // Show navbar when scrolled to bottom
    window.addEventListener('scroll', function() {
      const navbar = document.getElementById('navbar');
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      
      // When near bottom of page
      if (scrollTop + clientHeight > scrollHeight - 150) {
        navbar.style.bottom = '0';
      } else {
        navbar.style.bottom = '-100px';
      }
    });
  };
  
  // Cursor effect with circles
  const coords = { x: 0, y: 0 };
  const circles = document.querySelectorAll(".circle");
  
  const colors = [
    "#ffb56b",
    "#fdaf69",
    "#f89d63",
    "#f59761",
    "#ef865e",
    "#ec805d",
    "#e36e5c",
    "#df685c",
    "#d5585c",
    "#d1525c",
    "#c5415d",
    "#c03b5d",
    "#b22c5e",
    "#ac265e",
    "#9c155f",
    "#950f5f",
    "#830060",
    "#7c0060",
    "#680060",
    "#60005f",
    "#48005f",
    "#3d005e"
  ];
  
  circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
  });
  
  window.addEventListener("mousemove", function(e){
    coords.x = e.clientX;
    coords.y = e.clientY;
  });
  
  function animateCircles() {
    let x = coords.x;
    let y = coords.y;
    
    circles.forEach(function (circle, index) {
      circle.style.left = x - 12 + "px";
      circle.style.top = y - 12 + "px";
      
      circle.style.scale = (circles.length - index) / circles.length;
      
      circle.x = x;
      circle.y = y;
  
      const nextCircle = circles[index + 1] || circles[0];
      x += (nextCircle.x - x) * 0.3;
      y += (nextCircle.y - y) * 0.3;
    });
   
    requestAnimationFrame(animateCircles);
  }
  
  animateCircles();
  
  // Sparkler effect
  const div = document.querySelector('#sparkler')
  
  function sparkle() {
    // add a spark to body
    var p = document.createElement('div')
    p.className = 'particle'
    p.style.left = div.getBoundingClientRect().x + 'px'
    p.style.top = div.getBoundingClientRect().y + 'px'
    let w = (Math.floor(Math.random() * 30)) + 20
    p.style.width = w + 'vh'
    p.style.transform = 'translateX('+((-1)*(w*.475))+'vh) rotate('+Math.random()*360+'deg)'
    document.body.appendChild(p)
    
    // get spark to remove it
    setTimeout(function(){
      let pp = document.querySelectorAll('.particle')[0]
      pp.remove()	
    }, 256)
  }
  
  // run the sparks
  let shiny = setInterval(sparkle, 16)
  
  // click to change color
  window.addEventListener('click', function() {
    let c = 'hsl('+Math.random()*360+'deg, 100%, 50%)'
    document.body.style.setProperty('--color-spark', c)
  })
  
  // track mouse location and move sparkler
  window.addEventListener('mousemove', function(e){
    let x = e.clientX,
        y = e.clientY
    
    div.style.left = x + 'px'
    div.style.top = y + 'px'
  })

  