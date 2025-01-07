
// Add event listeners for dropdown menu functionality and confirmation notification
document.querySelectorAll('.dropdown-btn').forEach(button => {
    button.addEventListener('click', function () {
        // Close all other dropdowns
        document.querySelectorAll('.dropdown-content').forEach(menu => {
            if (menu !== this.nextElementSibling) {
                menu.style.display = 'none';
            }
        });

        // Toggle the dropdown menu
        const dropdownContent = this.nextElementSibling;
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });
});

// Close dropdowns when clicking outside
document.addEventListener('click', function (event) {
    if (!event.target.matches('.dropdown-btn')) {
        document.querySelectorAll('.dropdown-content').forEach(menu => {
            menu.style.display = 'none';
        });
    }
});

// Confirmation message on menu item click
document.querySelectorAll('.dropdown-content li a').forEach(link => {
    link.addEventListener('click', function () {
        const confirmationMessage = document.getElementById('confirmation-message');
        confirmationMessage.classList.remove('hidden');
        setTimeout(() => {
            confirmationMessage.classList.add('hidden');
        }, 3000);
    });
});
