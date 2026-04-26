// Ampliación de clases nativas
/*
Las clases nativas como Array, Map y otras también son extensibles.
Por ejemplo, aquí PowerArray hereda del Array nativo
 */

class PowerArray extends Array {
  isEmpty(){
    return this.lenght === 0;
  }
}

let arr = new PowerArray(1, 2, 5, 10, 50);
alert(arr.isEmpty()); // falso

let filteredArr = arr.filter(item => item >= 10);
alert(filteredArr); // 10, 50
alert(filteredArr.isEmpty()); // falso





