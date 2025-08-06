document.addEventListener("DOMContentLoaded", () => {
    let page = document.querySelector('.container');
    let button = document.querySelector('.button');

    button.addEventListener("click", (e) => {
        page.innerHTML = "";
        let drawSizeX = document.querySelector(".x").value
        let drawSizeY = document.querySelector(".y").value
        if(drawSizeX > 100 || drawSizeY > 100 || drawSizeX < 0 || drawSizeY < 0){
            return alert("Choose between 1 and 100");
        }
        e.preventDefault();
        for(let i = 0; i < drawSizeY; i++){
            let y = document.createElement('div');
            y.className = "pix-row";
            page.appendChild(y);

            for(let j = 0; j < drawSizeX; j++){
                let x = document.createElement('div')
                x.className = "pix";
                let r = rgbV();
                let g = rgbV();
                let b = rgbV();
                let a = 0.1;

                x.addEventListener('mouseenter', () =>{
                    a = Math.min(a + 0.1, 1);
                    x.style.backgroundColor = `rgba(${r},${g},${b}, ${a})`;
                });

                y.appendChild(x);
            };
        };
    });
});

function rgbV (){
    return Math.floor(Math.random() * 256);
};