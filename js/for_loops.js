(function () {

    function wait(ms)
    {
        var d = new Date();
        var d2 = null;
        do { d2 = new Date(); }
        while(d2-d < ms);
    }


    /*
    Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

    For example, showMultiplicationTable(7) should output


    7 x 1 = 7
    7 x 2 = 14
    7 x 3 = 21
    7 x 4 = 28
    7 x 5 = 35
    7 x 6 = 42
    7 x 7 = 49
    7 x 8 = 56
    7 x 9 = 63
    7 x 10 = 70
    */



function showMultiplicationTable(num) {

    for(var i = 1; i<11; i++){
        console.log(num + " X " + i + " = " + (num*i));
    }

}

for (var i =0; i< 13; i++){
    showMultiplicationTable(i);

}

/*
Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:
* */

// x= Math.floor(Math.random() * 5) + 1;

for (var i = 10 ; i >= 0 ; i--){
    x = Math.floor(Math.random() * 180) + 20;
    if(x%2==0){
        console.log(x + " is even");
        continue;
    }
    console.log(x + " is odd");
}

/*
* Create a for loop that uses console.log to create the output shown below.


1
22
333
4444
55555
666666
7777777
88888888
999999999
*/

for (var i =1; i <10; i++){
    var x = i;
    while (x>0){
        console.log(i);
        x--;
    }
}

/*Create a for loop that uses console.log to create the output shown below.


100
95
90
85
80
75
70
65
60
55
50
45
40
35
30
25
20
15
10
5*/

for (var i = 100; i >=5 ; i=i - 5){
    console.log(i);
    wait(2000)
}


// end of for-loops
}());