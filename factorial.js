let factorial = 4;
let fact=1;
let fact1=1;

for(let i=1;i<=factorial;i++){


    fact=fact*i;
}
console.log(fact);

//while loop
let i=1;
while (i<=factorial){


    //factorial using recursion




    fact1=fact1*i;
    i++;
}
console.log(fact1);



function factFunction(n){


    if (n==1){

        return 1;}
    else{

        return n*factFunction(n-1);
    }
}

console.log(factFunction(4));
//


function  fibo(n){

var fibo=[0,1];
    for(let i=2;i<=n;i++){

        fibo[i]=fibo[i-1]+fibo[i-2]
    }
    return fibo;
}

console.log(fibo(5))

function  fiborecursion(x){

  if(x==0){
      return 0;
  }
    if(x==1){

        return 1;

    }

    else{

        return fiborecursion(x-1)+fiborecursion(x-2);
    }
}
console.log(fiborecursion(5));