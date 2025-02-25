(<HTMLButtonElement>document.getElementById('add')).addEventListener('click', (event) => {
    {
        event.preventDefault();
        const a: number = parseFloat((<HTMLInputElement>document.getElementById('num1')).value);
        const b: number = parseFloat((<HTMLInputElement>document.getElementById('num2')).value);
        if (isNaN(a) || isNaN(b)) {
            (<HTMLInputElement>document.getElementById('result')).value = 'Please enter a valid value';
            (<HTMLInputElement>document.getElementById('num1')).value = '';
            (<HTMLInputElement>document.getElementById('num2')).value = '';
        } else {
            (<HTMLInputElement>document.getElementById('result')).value = `${a} + ${b} = ${(a + b).toString()}`;
            (<HTMLInputElement>document.getElementById('num1')).value = '';
            (<HTMLInputElement>document.getElementById('num2')).value = '';
            (<HTMLButtonElement>document.getElementById('copy-to-clipboard')).disabled = false;
            (<HTMLButtonElement>document.getElementById('copy-to-clipboard')).addEventListener('click', () => {
                navigator.clipboard.writeText((a + b).toString()).then(() => {
                    console.log('Success: copied to clipboard');
                }, (err) => {
                    console.error('Error: could not copy to clipboard: ', err);
                });
            });
        }
    }
});
(<HTMLButtonElement>document.getElementById('sub')).addEventListener('click', (event) => {
    {
        event.preventDefault();
        const a: number = parseFloat((<HTMLInputElement>document.getElementById('num1')).value);
        const b: number = parseFloat((<HTMLInputElement>document.getElementById('num2')).value);
        if (isNaN(a) || isNaN(b)) {
            (<HTMLInputElement>document.getElementById('result')).value = 'Please enter a valid value';
            (<HTMLInputElement>document.getElementById('num1')).value = '';
            (<HTMLInputElement>document.getElementById('num2')).value = '';
        } else {
            (<HTMLInputElement>document.getElementById('result')).value = `${a} - ${b} = ${(a - b).toString()}`;
            (<HTMLInputElement>document.getElementById('num1')).value = '';
            (<HTMLInputElement>document.getElementById('num2')).value = '';
            (<HTMLButtonElement>document.getElementById('copy-to-clipboard')).disabled = false;
            (<HTMLButtonElement>document.getElementById('copy-to-clipboard')).addEventListener('click', () => {
                navigator.clipboard.writeText((a - b).toString()).then(() => {
                    console.log('Success: copied to clipboard');
                }, (err) => {
                    console.error('Error: could not copy to clipboard: ', err);
                });
            });
        }
    }
});
(<HTMLButtonElement>document.getElementById('mul')).addEventListener('click', (event) => {
    {
        event.preventDefault();
        const a: number = parseFloat((<HTMLInputElement>document.getElementById('num1')).value);
        const b: number = parseFloat((<HTMLInputElement>document.getElementById('num2')).value);
        if (isNaN(a) || isNaN(b)) {
            (<HTMLInputElement>document.getElementById('result')).value = 'Please enter a valid value';
            (<HTMLInputElement>document.getElementById('num1')).value = '';
            (<HTMLInputElement>document.getElementById('num2')).value = '';
        } else {
            (<HTMLInputElement>document.getElementById('result')).value = `${a} × ${b} = ${(a * b).toString()}`;
            (<HTMLInputElement>document.getElementById('num1')).value = '';
            (<HTMLInputElement>document.getElementById('num2')).value = '';
            (<HTMLButtonElement>document.getElementById('copy-to-clipboard')).disabled = false;
            (<HTMLButtonElement>document.getElementById('copy-to-clipboard')).addEventListener('click', () => {
                navigator.clipboard.writeText((a * b).toString()).then(() => {
                    console.log('Success: copied to clipboard');
                }, (err) => {
                    console.error('Error: could not copy to clipboard: ', err);
                });
            });
        }
    }
});
(<HTMLButtonElement>document.getElementById('div')).addEventListener('click', (event) => {
    {
        event.preventDefault();
        const a: number = parseFloat((<HTMLInputElement>document.getElementById('num1')).value);
        const b: number = parseFloat((<HTMLInputElement>document.getElementById('num2')).value);
        if (isNaN(a) || isNaN(b)) {
            (<HTMLInputElement>document.getElementById('result')).value = 'Please enter a valid value';
            (<HTMLInputElement>document.getElementById('num1')).value = '';
            (<HTMLInputElement>document.getElementById('num2')).value = '';
        } else if (b === 0) {
            (<HTMLInputElement>document.getElementById('result')).value = 'Cannot devide by zero';
            (<HTMLInputElement>document.getElementById('num1')).value = '';
            (<HTMLInputElement>document.getElementById('num2')).value = '';
        } else {
            (<HTMLInputElement>document.getElementById('result')).value = `${a} ÷ ${b} = ${(a / b).toString()}`;
            (<HTMLInputElement>document.getElementById('num1')).value = '';
            (<HTMLInputElement>document.getElementById('num2')).value = '';
            (<HTMLButtonElement>document.getElementById('copy-to-clipboard')).disabled = false;
            (<HTMLButtonElement>document.getElementById('copy-to-clipboard')).addEventListener('click', () => {
                navigator.clipboard.writeText((a / b).toString()).then(() => {
                    console.log('Success: copied to clipboard');
                }, (err) => {
                    console.error('Error: could not copy to clipboard: ', err);
                });
            });
        }
    }
});