console.log('aplicacion calculadora');
let contador = 0;
let valor = 0;
let valor1 = 0;
let valor2 = 0;
let resu = 0;
let pass = 1;

function cargar() {

    const divNumeros = document.getElementById('numeros');
    const br = document.createElement('br');

    for (let a = 0; a < 10; a++) {
        const btns = document.createElement("button");
        const br = document.createElement('br');
        if (contador < 3) {
            btns.id = a;
            btns.type = 'button';
            btns.textContent = a;
            btns.onclick = function () {
                mostrar(this.id);
                registrar(this.id);
            };
            divNumeros.appendChild(btns);
            contador++;
        } else {
            console.log(contador);
            divNumeros.appendChild(br);
            contador = 0;
        }

    }

    var btn = document.createElement('button');
    btn.id = 'clear';
    btn.type = 'button';
    btn.textContent = 'C';
    btn.onclick= function(){
        valor1=0;
        valor2=0;
        resu=0;
        pass=1;
        document.getElementById('label1').innerHTML = '0';
    }
    document.getElementById('numeros').appendChild(btn);
}

function mostrar(val) {
    let valor = Number(val);
    let res = 0;
    res = valor + res;
    document.getElementById('label1').innerHTML = res;
    // console.log(btn.id);
    // document.getElementById('label1').innerHTML = this.id;;
}

function registrar(val) {


    if (isNaN(val) == false) {
        valor = Number(val);
        if (pass == 1) {
            valor1 = valor;
            console.log(valor1);
            pass = 2;
        }
        else {
            valor2 = valor;
            document.getElementById('label1').innerHTML =valor1+opera+valor2;
            console.log(valor2);
            pass = 1;
        }
    }
    else {
        console.log(val, valor1, valor2);
        switch (val) {
            case '+':
                opera = '+';
                break;

            case '-':
                opera = '-';
                break;
            case '*':
                opera = '*';
                break;

            case '/':
                opera = '/';
                break;

            case '=':
                let fn = valor1 + opera + valor2;
                document.getElementById('label1').innerHTML = evaluaArimetica(fn);
                function evaluaArimetica(fn) {
                    return new Function('return ' + fn)();
                }
                valor1 = evaluaArimetica(fn);
                pass = 2;
                valor2 = 0;
                break;
        }

    }




}

function sumar() {
    const forma = document.getElementById('forma');
    console.log(forma);
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let suma = parseInt(operandoA.value) + parseInt(operandoB.value);

    if (isNaN(suma)) {
        suma = 'la operación no contiene números'
    }

    document.getElementById('resultado').innerHTML = `resultado: ${suma}`;
}

cargar();