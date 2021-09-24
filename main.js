addEventListener("DOMContentLoaded", async(e)=>{
    const peticion = await fetch("config.json");
    const data = await peticion.json();
    console.log(data);
    //Logo
    document.querySelector('.logo').insertAdjacentText('afterbegin', data.Header.Logo.Nombre);
    //Menu de navegacion
        let menu = `
        <li><a href="${data.Header.Menu[0]['Valor']}" class="active">${data.Header.Menu[0]['Nombre']}</a></li>
        <li><a href="${data.Header.Menu[1]['Valor']}">${data.Header.Menu[1]['Nombre']}</a></li>
        <li><a href="${data.Header.Menu[2]['Valor']}">${data.Header.Menu[2]['Nombre']}</a></li>
        <li><a href="${data.Header.Menu[3]['Valor']}">${data.Header.Menu[3]['Nombre']}</a></li>
        `;
    document.querySelector(".navigation").insertAdjacentHTML('afterbegin', menu);
    //Text Box
    let textBox = `
    <h2>${data.content.textBox[0]['Titulo']}</h2>
    <p>
    ${data.content.textBox[1]['Parrafo']}
    </p>
    <a href="#">${data.content.textBox[2]['Boton']}</a>
    `;
    document.querySelector(".textBox").insertAdjacentHTML('afterbegin', textBox);
    //Imagen
    // let link = document.createElement('LINK');
    // let myLinkObj = {
    //     rel: "shorcut icon",
    //     href: data.Header.Logo,
    //     type: "image.jpg"
    // }
    // Object.assign(link, myLinkObj);
    let img = document.createElement('IMG');
    let myimgObj = {
        src: data.content.imgBox,
        className:"fruits"
    }
    Object.assign(img,myimgObj);
    // img.src = data.content.imgBox
    // img.class ="fruits";
    document.querySelector(".imgBox").insertAdjacentElement('afterbegin', img);
    //Thumb
    let thumb = `
    <li data-text="${data.thumb['data-text'][0]}" class="active"><img src="${data.thumb.imagenes[0]['Valor']}" onclick="imgSlider('${data.thumb.imagenes[0]['Valor']}'); changeBgColor('${data.thumb.colores[0]}')"></li>
    <li data-text="${data.thumb['data-text'][1]}"><img src="${data.thumb.imagenes[1]['Valor']}" onclick="imgSlider('${data.thumb.imagenes[1]['Valor']}'); changeBgColor('${data.thumb.colores[1]}')"></li>
    <li data-text="${data.thumb['data-text'][2]}"><img src="${data.thumb.imagenes[2]['Valor']}" onclick="imgSlider('${data.thumb.imagenes[2]['Valor']}'); changeBgColor('${data.thumb.colores[2]}')"></li>
    <li data-text="${data.thumb['data-text'][3]}"><img src="${data.thumb.imagenes[3]['Valor']}" onclick="imgSlider('${data.thumb.imagenes[3]['Valor']}'); changeBgColor('${data.thumb.colores[3]}')"></li>
    <li data-text="${data.thumb['data-text'][4]}"><img src="${data.thumb.imagenes[4]['Valor']}" onclick="imgSlider('${data.thumb.imagenes[4]['Valor']}'); changeBgColor('${data.thumb.colores[4]}')"></li>
    `;
    document.querySelector(".thumb").insertAdjacentHTML('afterbegin', thumb);
    //Sci
    let sci=`
    <li><a href="#"><img src="${data.sci.Facebook}"></a></li>
    <li><a href="#"><img src="${data.sci.Twitter}"></a></li>
    <li><a href="#"><img src="${data.sci.Instagram}"></a></li>
    `;
    document.querySelector(".sci").insertAdjacentHTML('afterbegin', sci);


    let menuToggle = document.querySelector('.toggle');
        let navigation = document.querySelector('.navigation');
        menuToggle.onclick = function(){
            menuToggle.classList.toggle('active');
            navigation.classList.toggle('active');
        }

        
        //Agreagar clase activa en thumbnails
        let el = document.querySelectorAll('.thumb li');
        for (let i=0; i< el.length; i++){
            el[i].onclick = function(){
                var c= 0;
                while(c<el.length){
                    el[c++].className = 'check';
                }
                el[i].className = 'check active';
            }
        }
    })   


//Cambiar imagen en click
function imgSlider(anything){
    document.querySelector('.fruits').src=anything;
}
//Cambiar color de fondo
function changeBgColor(color){
    const bg = document.querySelector('.bg');
    bg.style.background = color;
}