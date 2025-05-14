// Get modal elements
const copyModal = document.querySelector('.copy-modal');
const shareModal = document.querySelector('.share-modal');

// Get buttons
const copyButton = document.querySelector('.action-btns button:nth-child(2)');
const shareButton = document.querySelector('.action-btns button:nth-child(1)');
const confirmButton = document.querySelector('.confirm-btn');

// Copy button click handler
copyButton.addEventListener('click', () => {
  // Get the URL text
  const urlText = document.querySelector('.share-link-div p').textContent;
  
  // Copy to clipboard
  navigator.clipboard.writeText(urlText).then(() => {
    // Show copy success modal
    copyModal.style.display = 'flex';
    
    // Hide modal after 2 seconds
    setTimeout(() => {
      copyModal.style.display = 'none';
    }, 2000);
  });
});

// Share button click handler 
shareButton.addEventListener('click', () => {
  shareModal.style.display = 'flex';
});

// Confirm button click handler
confirmButton.addEventListener('click', () => {
  shareModal.style.display = 'none';
});

// Close modals when clicking outside
window.addEventListener('click', (e) => {
  if (e.target === shareModal) {
    shareModal.style.display = 'none';
  }
  if (e.target === copyModal) {
    copyModal.style.display = 'none';
  }
});
