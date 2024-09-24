// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

// adding the function to the counter decreasing, increasing, resetting
btns.forEach(function (button) {
    button.addEventListener('click', function (event) {
        const styles = event.currentTarget.classList;
        if(styles.contains("decrease")) {
            count--;
        } else if(styles.contains('increase')){
            count++;
        } else {
            count = 0;
        }
        // when we increase the number above 0 the number will turn green
        if(count > 0){
            value.style.color = "green";
        }
        // when we decrease the number below 0 the number will turn red
        if(count < 0){
            value.style.color = "red";
        }
        // when we reset the number or decrease or increase it to 0 , the color of the number will be black
        if (count === 0){
            value.style.color = "#222"
        }
        value.textContent = count;
    })
})