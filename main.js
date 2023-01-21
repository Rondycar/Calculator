let output = document.querySelector('h1');
        let accum = [];
        let accum2 = [];
        let indicator = 0;
        let num1 = '';
        let num2 = '';
        let counter = 0;
        



        let but1 = document.querySelector('.but1');
        but1.onclick = function(){
            accumPush(1);
        }
        let but2 = document.querySelector('.but2');
        but2.onclick = function(){
            accumPush(2);
        }
        let but3 = document.querySelector('.but3');
        but3.onclick = function(){
            accumPush(3);
        }
        let but4 = document.querySelector('.but4');
        but4.onclick = function(){
            accumPush(4);
        }
        let but5 = document.querySelector('.but5');
        but5.onclick = function(){
            accumPush(5);
        }
        let but6 = document.querySelector('.but6');
        but6.onclick = function(){
            accumPush(6);
        }
        let but7 = document.querySelector('.but7');
        but7.onclick = function(){
            accumPush(7);
        }
        let but8 = document.querySelector('.but8');
        but8.onclick = function(){
            accumPush(8);
        }
        let but9 = document.querySelector('.but9');
        but9.onclick = function(){
            accumPush(9);
        }
        let but0 = document.querySelector('.but0');
        but0.onclick = function(){
            if (accum.length > 0) {
                accumPush(0);
            }
        }

        function accumPush(e){
            if (accum.length<10) {
                accum.push(e);
            }
            displayAccum();
        }

        function displayAccum(){
            let display = ' ';
            for (const iterator of accum) {
                display += iterator+'';
            }
            output.textContent = display;
        }

        let butPlus = document.querySelector('.butPlus');
        butPlus.onclick = function(){
            accum2 = accum;
            accum = [];
            indicator = 1;
        }
        let butMinus = document.querySelector('.butMinus');
        butMinus.onclick = function(){
            accum2 = accum;
            accum = [];
            indicator = 2;
        }
        let butUmnoz = document.querySelector('.butUmnoz');
        butUmnoz.onclick = function(){
            accum2 = accum;
            accum = [];
            indicator = 3;
        }
        let butDeli = document.querySelector('.butDeli');
        butDeli.onclick = function(){
            accum2 = accum;
            accum = [];
            indicator = 4;
        }
        let butRavno = document.querySelector('.butRavno');
        butRavno.onclick = function(){
            if (counter==0) {
                for (const iterator of accum) {
                    num2 += iterator;
                }
                num2 = Number(num2);
                for (const iterator of accum2) {
                    num1 += iterator;
                }
                num1 = Number(num1);
                
                switch (indicator) {
                    case 1:
                        if ((num1+num2)>999999999) {
                            output.textContent = 'too mutch!';
                        } else {
                            output.textContent = num1+num2;
                        }
                        break;
                    case 2:
                        output.textContent = num1-num2;
                        break;
                    case 3:
                        if ((num1*num2)>999999999) {
                            output.textContent = 'too mutch!';
                        } else {
                            output.textContent = num1*num2;
                        }
                        break;
                    case 4:
                        output.textContent = num1/num2;
                        break;
                    default:
                        break;
                }
                num1 = '';
                num2 = '';
                counter++;
            } else {
                for (const iterator of accum) {
                    num2 += iterator;
                }
                num2 = Number(num2);
                num1 = Number(output.textContent);
                
                switch (indicator) {
                    case 1:
                        if ((num1+num2)>999999999) {
                            output.textContent = 'too mutch!';
                        } else {
                            output.textContent = num1+num2;
                        }
                        break;
                    case 2:
                        output.textContent = num1-num2;
                        break;
                    case 3:
                        if ((num1*num2)>999999999) {
                            output.textContent = 'too mutch!';
                        } else {
                            output.textContent = num1*num2;
                        }
                        break;
                    case 4:
                        output.textContent = num1/num2;
                        break;
                    default:
                        break;
                }
                num1 = '';
                num2 = '';
                counter++;
            }


            
            
        }

        let butReset = document.querySelector('.butReset');
        butReset.onclick = function(){
            accum = [];
            accum2 = [];
            num1 = '';
            num2 = '';
            output.textContent = '0';
        }
        
