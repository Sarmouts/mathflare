"use strict";
document.getElementById('sqrtcalc').addEventListener('click', (event) => {
    event.preventDefault();
    const num = parseFloat(document.getElementById('sqrtrad').value);
    if (isNaN(num)) {
        document.getElementById('sqrtout').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('sqrtrad').value = "";
    }
    else if (num < 0) {
        document.getElementById('sqrtout').innerHTML = `<p class="text-warning">The radicand must be a postive number</p>`;
        document.getElementById('sqrtrad').value = "";
    }
    else {
        if (Math.sqrt(num) === Math.floor(Math.sqrt(num))) {
            document.getElementById('sqrtout').innerHTML = `<p class="text-success">&#8730;${num} = ${Math.sqrt(num)}</p>`;
            document.getElementById('sqrtrad').value = "";
        }
        else {
            document.getElementById('sqrtout').innerHTML = `<p class="text-success">&#8730;${num} = ${Math.sqrt(num)} (&#8764; ${Math.sqrt(num).toFixed(3)})</p>`;
            document.getElementById('sqrtrad').value = "";
        }
    }
});
