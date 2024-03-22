let numeros = prompt('ingrese los numeros', '');
let numerosSeparados = numeros.split(" ");
let num1 = numerosSeparados[0];
let num2 = numerosSeparados[1];

SepararSumar(RanPri(Rangos(num1,num2))).forEach(function(value, index){
    document.write(value + ' ');
});

function EsPrimo(num){
    let flag = true;
    for(let i = 2; i < num; i++){
        if(num%i == 0){
            flag = false;
        }
    }
    return flag;
}

function RanPri(vec){
    let VecRanPri = new Array()
    for(let i = 0; i < vec.length; i++){
        if(EsPrimo(vec[i])){
            VecRanPri.push(vec[i])
        }
    }
    return VecRanPri;
}


function Rangos(n1,n2){
    let VecRan = new Array()
    for(let i = n1; i <= n2; i++){
        VecRan.push(i);
    }
    return VecRan;
}

function SepararSumar(vec){
    let numero = new Array()
    let separar;
    let sumar;
    for(let i = 0; i < vec.length; i++){
        separar = vec[i].toString().split("");
        sumar = separar.reduce((a,c) => a + parseInt(c), 0);
        if(EsPrimo(sumar)){
            numero.push(vec[i]);
        }
    }
    return numero;
}