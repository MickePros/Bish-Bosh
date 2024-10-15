document.querySelector("#bish").addEventListener('input', function (e) {
    bishBosh();
});
document.querySelector("#bosh").addEventListener('input', function (e) {
    bishBosh();
});
document.querySelector("#loop").addEventListener('input', function (e) {
    bishBosh();
});

function bishBosh(){
    let output = document.querySelector("#bishbosh");
    output.innerHTML = "";
    output.style.color = "black";
    const bish = document.querySelector("#bish").value;
    const bosh = document.querySelector("#bosh").value;
    const loop = document.querySelector("#loop").value;
    if (bish.trim() == "" || bosh.trim() == "" || loop.trim() == ""){
        node('Bish, Bosh och Längd får inte vara tomma.');
        output.style.color = "red";
        return;
    }
    if (bish != Math.round(bish) || bosh != Math.round(bosh) || loop != Math.round(loop)){
        node('Bish, Bosh och Längd ange endast heltal.');
        output.style.color = "red";
        return;
    }
    if (!(Number(bish) >= 0) || !(Number(bosh) >= 0) || !(Number(loop) >= 0)){
        node('Bish, Bosh och Längd måste vara positiva heltal');
        output.style.color = "red";
        return;
    }
    for (let i = 1; i <= loop; i++) {
        if (i % bish == 0) {
            if (i % bosh == 0) {
                node('Bish-Bosh');
            }
            else
            {
                node('Bish');
            }
        }
        else if (i % bosh == 0) {
            node('Bosh');
        }
        else {
            node(i);
        }
    }
}

function node(text){
    let output = document.querySelector("#bishbosh");
    let node = document.createElement("li");
    let textnode = document.createTextNode(text);
    node.appendChild(textnode);
    output.appendChild(node);
}