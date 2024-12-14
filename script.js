// Particle Effect Generation for Perfume Emojis
function createPerfumeParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.textContent = '💐'; // Perfume emoji (or any other emoji)
    particle.style.color = `#${Math.floor(Math.random()*16777215).toString(16)}`; // Random color
    particle.style.left = `${Math.random() * 100}vw`; // Random horizontal position
    particle.style.fontSize = `${Math.random() * 30 + 10}px`; // Random size
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 5000); // Remove the particle after 5 seconds
}

// Create floating hearts effect
function createHeartEffect() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '💖'; // Heart emoji
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 3000); // Remove heart after 3 seconds
}

// Trigger sound effect on hover
document.getElementById("catImage").addEventListener("mouseover", function() {
    const sound = document.getElementById("apologySound");
    sound.play();
});

// Trigger particle and heart creation every few seconds
setInterval(createPerfumeParticle, 1000);  // Create perfume particles every second
setInterval(createHeartEffect, 2000); // Create hearts every 2 seconds
