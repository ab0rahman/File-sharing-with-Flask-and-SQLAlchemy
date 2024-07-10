document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', event => {
            const inputs = form.querySelectorAll('input');
            let valid = true;
            inputs.forEach(input => {
                if (input.value.trim() === '') {
                    valid = false;
                    input.style.borderColor = 'red';
                } else {
                    input.style.borderColor = '#ccc';
                }
            });
            if (!valid) {
                event.preventDefault();
                alert('Please fill in all fields');
            }
        });
    });

    const filesList = document.querySelector('ul');
    if (filesList) {
        filesList.addEventListener('click', event => {
            if (event.target.tagName === 'A') {
                alert('Downloading ' + event.target.textContent);
            }
        });
    }
});
