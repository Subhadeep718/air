// form-top tips
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

//modal 
document.addEventListener('DOMContentLoaded',function () {
    const modalbtn1 = document.querySelector('#modal-btn1');
    const modalbox1 = document.querySelector('#modal-box1');

    modalbtn1.addEventListener('click', () => {
        modalbox1.style.display = 'flex';
    });
});

