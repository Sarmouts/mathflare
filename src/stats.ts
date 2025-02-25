var storage: any = window.localStorage;
window.addEventListener('load', () => {
    loadStats();
});
const loadStats = () => {
    const pageviews = storage.getItem("pageCount");
    const equations = storage.getItem("equation");
    const formulas = storage.getItem("formulas");
    const ineq = storage.getItem("ineq");
    (<HTMLParagraphElement>document.getElementById('page-views')).innerText = pageviews!;
    (<HTMLParagraphElement>document.getElementById('equations-solved')).innerText = equations!;
    (<HTMLParagraphElement>document.getElementById('formulas-views')).innerText = formulas!;
    (<HTMLParagraphElement>document.getElementById('ineq')).innerText = ineq!;
    if (!storage.getItem("statCount")) {
        storage.setItem("statCount", 1);
    } else {
        let statCount: any = storage.getItem("statCount");
        statCount = parseFloat(statCount) + 1;
        storage.setItem("statCount", statCount);
    }
}
const clearStats = () => {
    storage.clear();
    reload();
};
const reload = () => {
    location.reload();
};