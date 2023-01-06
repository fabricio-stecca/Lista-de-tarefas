
let buttonadd = document.getElementById(`buttonadd`)

buttonadd.addEventListener(`click`, adicionar)

var ordem = 0

function adicionar() {

    var texto = document.getElementById(`texto`).value
    var resultado = document.getElementById(`resultado`)

    if(texto == ``) {

    } else {

    
                let res = document.createElement(`div`)
                res.setAttribute(`id`, `res${ordem}`)
                res.setAttribute(`class`, `res`)
                


                let checkbox = document.createElement(`input`)
                checkbox.setAttribute(`type`, `checkbox`)
                checkbox.setAttribute(`id`, `checkbox${ordem}`)
                checkbox.setAttribute(`class`, `checkbox`)
                checkbox.setAttribute(`onclick`, `checkboxf(${ordem})`)


                let div = document.createElement(`div`)
                div.setAttribute(`id`, `div${ordem}`)
                div.setAttribute(`class`, `caixalista`)



                let p = document.createElement(`p`)
                let txt = document.createTextNode(`${texto}`)
                p.setAttribute(`ìd`, `p${ordem}`)
                


                let button = document.createElement(`input`)
                button.setAttribute(`type`, `button`)
                button.setAttribute(`value`, `\uD83D\uDDD1\uFE0F`)
                button.setAttribute(`id`, `button${ordem}`)
                button.setAttribute(`class`, `button`)
                button.setAttribute(`onclick`, `deletar(${ordem})`)

                var estilop = document.createAttribute(`style`)
                estilop.value = ``


                resultado.appendChild(res)
                p.appendChild(txt)
                div.appendChild(p)
                res.appendChild(checkbox)
                res.appendChild(div)
                res.appendChild(button)

                ordem = ordem + 1
                document.getElementById(`texto`).value = ``
                document.getElementById(`texto`).focus()

    }

                    

    }

    function deletar(cont) {

        var resex = window.document.getElementById(`res${cont}`)
        resex.remove()
        

    }

    function checkboxf(cont2) {

        var check = window.document.getElementById(`checkbox${cont2}`)
        var resex = window.document.getElementById(`res${cont2}`)
        var divex = window.document.getElementById(`div${cont2}`)


        if(check.checked) {
            divex.style.textDecoration = "line-through";
            divex.style.backgroundColor= "rgb(175, 175, 255)";
        } else {
            divex.style.textDecoration = "none";
            divex.style.backgroundColor= "rgb(97, 97, 255)"
        }


 
  


    }


   



