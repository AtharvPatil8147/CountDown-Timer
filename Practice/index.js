let fpara = document.getElementById("fpara");

function changeStyle() {
    fpara.style.backgroundColor="red";
}

fpara.addEventListener('doubleclick',changeStyle);
fpara.addEventListener('mouseover',function() {
    fpara.style.color="blue";
});

