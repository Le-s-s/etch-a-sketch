document.addEventListener("DOMContentLoaded", () => {
    let page = document.querySelector('.container')
    let button = document.querySelector('.button')

    button.addEventListener("click", (e) => {
        page.innerHTML = "";
        let drawSizeX = document.querySelector(".x").value
        let drawSizeY = document.querySelector(".y").value
        if(drawSizeX > 100 || drawSizeY > 100){
            return alert("Choose between 1 and 100");
        }
        if(drawSizeX < 0 || drawSizeY < 0){
            return alert("Choose between 1 and 100");
        }
        e.preventDefault();
        for(let i = 0; i < drawSizeY; i++){
            let y = document.createElement('div')
            y.className = "pix-row";
            page.appendChild(y)

            for(let j = 0; j < drawSizeX; j++){
                let x = document.createElement('div')
                x.className = "pix";
                y.appendChild(x)
            }
        }

        const pixels = document.querySelectorAll('.pix');
        //iterates through nodelist
        pixels.forEach(px => {

                // add listeners to button as it iterates over them
                px.addEventListener('mouseenter', () => {
                    px.style.backgroundColor = "black";
                });
            });
        });
});