/*
estructura html +
enlace al script +
funcion para loguear +
variables
tiene 3 intentos
debe tener usuario y contrasena
bucles +
condicionales
operadores logicos avanzados
alert +
prompt + 


*/

/*
function loguear(){
    let identificador = true;
    let intentos   = 1;



do{
 let usuario = prompt("ingresa tu usuario")
 if(usuario == null || usuario == ""){
    alert("no se reconoce el usuario, intente mas tarde")
    break;
 }
 if(usuario == "admin" && intentos<=3){
    let pass = prompt("ingresa tu contraseña")
    if(pass == null){
        break;
    }
    if(pass=="1234"){
        alert("bienvenido usuario", usuario);
        identificador = false;
    }else{
        alert("contraseña incorrecta")
            intentos++;
            if(intentos>3){
                alert("usted supero los 3 intentos, vuelva mas tarde");
                console.error("no se reconocer la pass");
                break;
            }
    }
 }

}while(identificador)

}

loguear()
*/

function cambio(){
    let identificador = true;
    let dolar = 0;

    do{
        let moneda = prompt("ingresa tu opcion de moneda, 1 pesos argentinos, 2 reales, 3 pesos chilenos");
        let valor = prompt("ingresa la cantidad de moneda");

       if(moneda == 1)
       {
        dolar = valor / 1070
        alert("el valor de conversion a dolar es: "+ dolar);
        identificador = false;

       }   
       if(moneda == 2)
        {
            dolar = valor / 176
            alert("el valor de conversion a dolar es: "+ dolar);
            identificador = false;
 
        } 
        if(moneda == 3)
            {
                dolar = valor / 940
                alert("el valor de conversion a dolar es: "+ dolar);  
                identificador = false;
     
            }  

    }while(identificador)

}


cambio();