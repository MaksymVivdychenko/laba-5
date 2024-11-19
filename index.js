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
// завдання 3.1
let cookieValue = document.cookie.toString();
if(cookieValue == "True");
{
    const form = document.querySelector('.InputForm');
    form.style.display = 'none';
    const button = document.querySelector('.taskButton');
    button.style.display = 'none';
}
window.onload = () => 
    {
	if(cookieValue == "True")
        {
		if (confirm("Delete cookies ?"))
        {
            form.style.display = 'grid';
            button.style.display = 'flex';
			document.cookie = "False";
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
        alert(minDigit);
        console.log(minDigit);
		document.cookie = "True";
    }


     CircleSquare(2);
     swapText();