//функції:
   
// завдання 1
   function swapText() {
        // Отримуємо елементи блоків 1 та 6
        const block1 = document.querySelector('.block1');
        const block6 = document.querySelector('.block6');

        // Зберігаємо тексти блоків
        const block1Text = block1.textContent;
        const block6Text = block6.textContent;

        // Змінюємо текст блоків місцями
        block1.textContent = block6Text;
        block6.innerHTML = block1Text;
    }
// завдання 2
    function CircleSquare(a)
    {
        const square = Math.PI*a**2
        const block5 = document.querySelector('.block5');
        block5.innerHTML += `<br>
        <span class = "square">${square}</span>`;
    }
// завдання 3
let valuesArray = document.cookie.toString();
window.onload = () => 
    {
        console.log(document.cookie);
	if(valuesArray == "True"){
        const form = document.querySelector('.InputForm');

        form.style.display = 'none';
		if (confirm("Delete cookies ?"))
             {
			document.cookie = "cookieEnabled=False;"
		}else{
			alert("COOKIES ARE HERE ! Reload page or no 1000 from Zelenskyy");
		}
	}
};
    function FindSmallestNum()
    {
        var minDigit = 9;
        const inputNum = document.querySelector('.inputNumber');
        const num = parseInt(inputNum.value);
        const digits = num.toString().split('');
        for(const digit of digits)
        {
            var value = Number(digit);
            if(value < minDigit)
            {
                minDigit = value;
            }
        }
        console.log(minDigit);
        document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "True;";
    }


     CircleSquare(2);
     swapText();