function carregar(){ 
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    if(hora >= 5 && hora < 12){
        msg.innerHTML = `Hoje è ${data}`
        img.src="img/fotomanha.png"
        document.body.style.background= "#96C6D9"
    }
    else if(hora >= 12 && hora < 18){
        msg.innerHTML = `Hoje è ${data}`
        img.src="img/fototarde.png"
        document.body.style.background= "#F28444"
    }
    else{
        msg.innerHTML = `Hoje è ${data}`
        img.src="img/fotonoite.png"
        document.body.style.background= "#141F26"
    }
}