//Raul Garcia Cespedes
const numeros:number[] = [1, 6, 4, 99, 20, 13, 56, 7, 75, 47];

function quicksort(array: number[]) : number[]{
    if (array.length <= 1) {return array;}

    const pivote:number = array[Math.floor(array.length/2)];

    const left = array.filter((elem:number) => elem < pivote);
    const right = array.filter((elem:number) => elem > pivote);

    return quicksort(left).concat(pivote, quicksort(right));
}

const arrayOrdenado:number[] = quicksort(numeros);
console.log(arrayOrdenado);