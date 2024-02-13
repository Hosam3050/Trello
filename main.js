function move(dt) {
    dt.dataTransfer.setData("text", dt.target.id);
}
function carry(dt) {
    dt.preventDefault();
}
function put(dt) {
    var carried = dt.dataTransfer.getData("text");
    console.log(dt.target);

    dt.target.appendChild(document.getElementById(carried))
}
