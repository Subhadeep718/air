document.addEventListener('DOMContentLoaded', function () {
    const labels = document.querySelectorAll('.tips');

    labels.forEach((label) => {
        label.addEventListener('click', function () {
           
            labels.forEach((l) => l.classList.remove('active'));

            
            label.classList.add('active');

            
            const radioInput = label.querySelector('input[type="radio"]');
            if (radioInput) {
                radioInput.checked = true;
            }
        });
    });
});
