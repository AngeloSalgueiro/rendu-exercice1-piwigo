const rows = 7;
const cols = 11;
const names = ["PHP 8.3", "PHP 8.2", "PHP 8.1", "PHP 8", "PHP 7.4", "PHP 7.3", "PHP 7.2"];

const table = document.getElementById("grid");

for (let r = 0; r < rows; r++) {
    const tr = document.createElement("tr");

    const td = document.createElement("td");
    td.textContent = names[r]
    td.className = "name"
    tr.appendChild(td)

    for (let c = 0; c < cols; c++) {
        const td = document.createElement("td");
        td.className = "grid";

        const circle = document.createElement("div");
        circle.style.borderRadius = "50%";
        circle.style.zIndex = "2";
        circle.style.position = "absolute"
        circle.title = "xxxxx installations"

        const size = Math.floor((Math.random() * 75) + 1);
        circle.style.width = size + "px";
        circle.style.height = size + "px";

        if (size <= 15) {
            circle.style.backgroundColor = "rgb(245, 245, 245)";
        } else if (size < 50){
            circle.style.opacity = "50%"
            circle.style.backgroundColor = "rgba(255, 149, 62, 1)";
        } else{
            circle.style.backgroundColor = "rgba(255, 149, 62, 1)";
        }
        

        td.appendChild(circle);
        tr.appendChild(td);
    }

    table.appendChild(tr);
}