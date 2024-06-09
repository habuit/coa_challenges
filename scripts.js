// Optional: Add any JavaScript functionality if needed

// For example, you could add a function to dynamically load images
document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector('.gallery');

    // Example of dynamically adding a photo
    const newPhoto = document.createElement('div');
    newPhoto.className = 'photo';
    
    gallery.appendChild(newPhoto);
});