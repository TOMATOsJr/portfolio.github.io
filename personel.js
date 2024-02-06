let r = document.querySelector(':root');

let currMode="light";

function changeMode() {
    if(currMode==="light")
    {
        r.style.setProperty('--black','black');
        r.style.setProperty('--white','white');
        r.style.setProperty('--backgd','rgb(28, 27, 27)');
        r.style.setProperty('--section','rgb(34, 56, 63)');
        r.style.setProperty('--highlight','rgb(34, 146, 221)');
        currMode="dark";
    }
    else
    {
        r.style.setProperty('--black','white');
        r.style.setProperty('--white','black');
        r.style.setProperty('--backgd','rgb(202, 221, 227)');
        r.style.setProperty('--section','rgb(88, 143, 159)');
        r.style.setProperty('--highlight','rgb(14, 61, 92)');
        currMode="light";
    }
}