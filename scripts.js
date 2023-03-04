// let dragElems = document.querySelectorAll(".item");
// let dropElem = document.querySelector(".drop-elem");

// for (const elem of dragElems) {
//     elem.ondragstart = (e) =>{
//         console.log(e.dataTransfer);
//         e.dataTransfer.setData("id", e.target.getAttribute("id"));
//     }
// }

// dropElem.ondragover = (e) =>{
//     e.preventDefault();
// }


// dropElem.ondrop = (e) =>{
//     let id = e.dataTransfer.getData("id");
//     let elem = document.getElementById(id);
//     dropElem.append(elem);
// }

let icon = document.querySelector(".box .icon i");
let input = document.querySelector(".box input");
let tBody = document.querySelector("tbody");



icon.addEventListener("click", function () {
    input.click();
})


input.addEventListener("change", function (e) {
    for (const file of e.target.files) {
        let reader = new FileReader();

        reader.onloadend = (event) => {
            let base64 = event.currentTarget.result;
            tBody.innerHTML += `
            <tr>
            <td> <img src="${base64}" alt=""></td>
            <td>${file.name}</td>
            <td>${file.size/1024}</td>
            <td class="icon"> x </td>
            </tr>
            `
           let xIcons = document.querySelectorAll(".icon");
           for (const icon of xIcons)     {
             icon.addEventListener("click",function(){
                console.log(this.parentNode);
                this.parentNode.remove();
             })
           }
        }
        reader.readAsDataURL(file);
    }
})
