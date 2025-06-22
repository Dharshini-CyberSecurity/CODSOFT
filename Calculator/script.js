const display = document.getElementById("display");

let expr = '0';


    const divs = document.getElementsByClassName('btn');

Array.from(divs).forEach(element => {
        element.addEventListener('click' , () => {
            expression(element.textContent);
        })
    });

function expression(char)
{
    if(expr === '0' && char !== '.')
    {
        expr = char;
    }
    else{
        expr += char;
    }

    display.innerText = expr;
}

document.getElementById("ce").addEventListener('click' , () =>
{
        if(expr.length === 1)
        {
            expr = 0;
            display.innerText = expr;
        }

        if(!/[\d.]+$/.test(display.Text))
        {
            expr = 0;
            display.innerText = expr;
        }

        expr = expr.replace(/[\d.]+$/, '');
        display.innerText = expr;
})

document.getElementById("ca").addEventListener('click' , () => 
{
    display.innerText = '0';
    expr = '0';
})

document.getElementById("bs").addEventListener('click', () =>
{

    if(expr.length === 1)
    {
        expr= '0';
        display.innerText = expr;
    }

    if(display.innerText == 'Error')
    {
        expr = '0';
        display.innerText = expr;
    }

    if(expr !== '0' && expr.length != 1)
    {
        expr = expr.slice(0,-1);
        display.innerText = expr;
    }
    
})

document.getElementById("cal").addEventListener('click' , () => 
{
    try{
        expr = eval(expr).toString();
        display.innerText = expr;
    }
    catch(error)
    {
        display.innerText = 'Error';
        expr = '';
    }
})
