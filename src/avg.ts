//copyright (c) 2021 MathFlare LLC.
(document.getElementById('button') as HTMLButtonElement).addEventListener('click', (event) => {
    event.preventDefault();
    let input: string = (<HTMLInputElement>document.getElementById('input')).value!;
    input = input.replace(' ', '');
    if (input == "" || input.charAt(0) == "," || input.charAt(input.length - 1) == ",") {
        (document.getElementById('output') as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value and use the correct format as shown in the example</p>`;
        (<HTMLInputElement>document.getElementById('input')).value = "";
        console.error('empty or not correct format');
    } else {
        const array = input.split(',');
        let isInvalid: boolean = false;
        for (let i = 0; i < array.length; i++) {
            if (isNaN(parseFloat(array[i]))) {
                isInvalid = true;
                break;
            }
        }
        if (isInvalid) {
            (document.getElementById('output') as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value and use the correct format as shown in the example</p>`;
            (<HTMLInputElement>document.getElementById('input')).value = "";
            console.error('NaN');
        } else {
            const array = input.split(',').map(Number);
            let total: number = 0;
            for (var i: any = 0; i < array.length; i++) {
                total += array[i];
            }
            const avg: number = total / array.length;
            if (isNaN(avg)) {
                (document.getElementById('output') as HTMLElement).innerHTML = `<p class="text-warning">Please enter a valid value and use the correct format as shown in the example</p>`;
                (<HTMLInputElement>document.getElementById('input')).value = "";
            } else {
                (document.getElementById('output') as HTMLElement).innerHTML = `<p class="text-success">The average of all these numbers is ${avg}</p>`;
                (<HTMLInputElement>document.getElementById('input')).value = "";
            }
        }
    }
});
//copyright (c) 2021 MathFlare LLC.