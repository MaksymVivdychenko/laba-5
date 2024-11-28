//функції:
   
// завдання 1
   function swapText() {
        // Отримуємо елементи блоків 1 та 6
        const block1 = document.querySelector('.headerText');
        const block6 = document.querySelector('.block6Text');

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
        <span class = "square">${square.toFixed(3)}</span>`;
    }
// завдання 3.1
window.onload = () => 
    {
        let cookieValue = document.cookie.toString();
        const form = document.querySelector('.InputForm');
        if(cookieValue == "True")
        {
            form.style.display = 'none';
            setTimeout(() => 
            {
                if (confirm("Delete cookies ?"))
                {
                    form.style.display = 'grid';
                    document.cookie = "False";
                }
                else
                {
                    alert("Перевантажте сторінку, щоб отримати доступ до форми, інакше - миска рис і кішка-дівчина")
                }
            }, 100);
        }
};
    function FindSmallestNum()
    {
        var minDigit = 9;
        const inputNum = document.querySelector('.inputNumber');
        const num = parseInt(inputNum.value);
        if(isNaN(num) == false)
        {
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
            document.cookie = "True";
        }
        else
        {
            alert("Field is empty!")
        }
    }
// завдання 4
function changeColor(){
	const smallBlockLeftTop = document.querySelector('.block6Text');
	const colorPicker = document.querySelector('.colorPicker');
	const savedColor = localStorage.getItem('block6TextColor');

   	if (savedColor) {
        smallBlockLeftTop.style.color = savedColor; 
    }

    smallBlockLeftTop.addEventListener('mouseup', function() {
	    const selectedColor = colorPicker.value;
	    smallBlockLeftTop.style.color = selectedColor;  

	    localStorage.setItem('block6TextColor', selectedColor);
	});
}
// завдання 5
const block =  document.querySelector('.block7')
block.addEventListener('mouseleave', () => 
    {
        if(!document.querySelector('table'))
        {
            createTable();
        }
    })
function createTable()
{
    const table = document.createElement('table');
      const cellCount = prompt("Введіть кількість клітинок у таблиці:", "4");
      const numCells = parseInt(cellCount);
      if (isNaN(numCells) || numCells <= 0 ) {
        alert("Невірна кількість клітинок");
        return;
      }
      const row1 = document.createElement('tr');
      const row2 = document.createElement('tr');

      if(numCells % 2 != 0)
      {
        for (let i = 0; i < numCells; i++) {
            const cell = document.createElement('td');
            cell.contentEditable = "true";
            cell.textContent = `Cell ${i + 1}`;
            row1.appendChild(cell)
          }
      }
      else
      {
        for (let i = 0; i < numCells; i++) {
            const cell = document.createElement('td');
            cell.style.border = '1px solid black';
            cell.style.textAlign = 'center';
            cell.contentEditable = "true";
            cell.textContent = `Cell ${i + 1}`;
            if (i % 2 == 0) {
              row1.appendChild(cell);
            } else {
              row2.appendChild(cell);
            }
          }
      }

      table.appendChild(row1);
      if (numCells > 1 && numCells % 2 === 0) {
        table.appendChild(row2);
      }

      block.appendChild(table);
}
     CircleSquare(2);
     swapText();
     changeColor();