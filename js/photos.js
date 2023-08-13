// gallery.js

function openImage(imageSrc) {
    var modal = document.getElementById('image-modal');
    var modalImage = document.getElementById('modal-image');

    modalImage.src = imageSrc;
    modal.style.display = 'block';

    // Center the modal image both horizontally and vertically
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
}

function closeImageModal() {
    var modal = document.getElementById('image-modal');
    var modalImage = document.getElementById('modal-image');
    modal.style.display = 'none';
}
