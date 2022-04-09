
let getE = document.getElementById("txt");

/* How to add the unique number */
let count = 0;

function add_task(){
    
        
    
        let div = document.createElement("div");
        div.id = "div1";
        document.body.append(div);

        let ul = document.createElement("ul");
        div.appendChild(ul);
        count++
        let cbx = document.createElement("input");
        cbx.type = "checkbox";
        cbx.id = "checkBox"+count;
        cbx.onclick = function strike() {
            lab.classList.toggle("strike")
            
        };
        ul.appendChild(cbx);

        

        let lab = document.createElement("label");
        lab.setAttribute("for","checkBox"+count);
        lab.textContent = getE.value;
        ul.appendChild(lab);


        let sp = document.createElement("span");
        sp.classList.add("cont","far","fa-trash-alt","delete-icon");
        sp.addEventListener('click',() => {
            document.body.removeChild(div);
        })
        ul.appendChild(sp);

}

    

