let output = document.querySelector('h1');
        let accum = [];
        let accum2 = [];
        let indicator = 0;
        let num1 = '';
        let num2 = '';
        
        
        let but1 = document.querySelector('.but1');
        but1.onclick = function(){
            accum.push(1);
            displayAccum();
        }
        let but2 = document.querySelector('.but2');
        but2.onclick = function(){
            accum.push(2);
            displayAccum();
        }
        let but3 = document.querySelector('.but3');
        but3.onclick = function(){
            accum.push(3);
            displayAccum();
        }
        let but4 = document.querySelector('.but4');
        but4.onclick = function(){
            accum.push(4);
            displayAccum();
        }
        let but5 = document.querySelector('.but5');
        but5.onclick = function(){
            accum.push(5);
            displayAccum();
        }
        let but6 = document.querySelector('.but6');
        but6.onclick = function(){
            accum.push(6);
            displayAccum();
        }
        let but7 = document.querySelector('.but7');
        but7.onclick = function(){
            accum.push(7);
            displayAccum();
        }
        let but8 = document.querySelector('.but8');
        but8.onclick = function(){
            accum.push(8);
            displayAccum();
        }
        let but9 = document.querySelector('.but9');
        but9.onclick = function(){
            accum.push(9);
            displayAccum();
        }
        let but0 = document.querySelector('.but0');
        but0.onclick = function(){
            accum.push(0);
            displayAccum();
        }

        function displayAccum(){
            let display = '';
            for (const iterator of accum) {
                display += iterator+' ';
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
                    output.textContent = num1+num2;
                    break;
                case 2:
                    output.textContent = num1-num2;
                    break;
                case 3:
                    output.textContent = num1*num2;
                    break;
                case 4:
                    output.textContent = num1/num2;
                    break;
                default:
                    break;
            }

            
            
        }

