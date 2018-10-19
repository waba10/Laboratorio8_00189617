const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {

            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.3}s`;
            }

        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/

var cont = 1;
var bitacoras = [];
var formulario = document.getElementById("bitacora");

console.log(formulario);
//La variable formulario contiene 

formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let bitacora = {
        cant: cont,
        fecha: formulario[1].value,
        descripcion: formulario[2].value,
        cantidad: formulario[3].value
    }
    bitacoras.push(bitacora);
    cont++;
    mostrar();
});



//El metodo preventDEfault 

//console.log(formulario[x]);
//formulario[x] contiene

const crearElemento = (bitacora, tbody) => {
    let tr = document.createElement("tr");
    console.log('tr');
    console.log(tr);
    Object.values(bitacora).forEach(item => {
        let td = document.createElement("td");
        console.log('td');
        console.log(td);
        let content = document.createTextNode(item);
        console.log('content');
        console.log(content);
        td.appendChild(content);
        tr.appendChild(td);
    });
    tbody.appendChild(tr);
    console.log('tbody');
    console.log(tbody);
}

const eliminar = (tbody) => {
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
    console.log(tbody);
}

//Lo que .FirstChild hace

//El elemento tbody luego del while queda 

const agregar = () => {
    var eventtr = document.querySelectorAll(".click");
    eventtr.forEach((item, index) => {
        item.addEventListener("click", () => {
            document.querySelector("#fecha").value = item.childNodes[0].textContent;
            console.log(item.childNodes[0].textContent);
            document.querySelector("#descp").value = item.childNodes[1].textContent;
            document.querySelector("#cant").value = item.childNodes[2].textContent;
        });
    })
}

//Cuando se ejecuta item.childNodes[i].textContent; 

const mostrar = () => {
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0) {
        eliminar(document.querySelector(".tabla-btc tbody"));
    }
    bitacoras.forEach(item => {
        crearElemento(item, document.querySelector(".tabla-btc tbody"));
    });
    agregar();
}