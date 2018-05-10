var cells = document.querySelectorAll('td');
var count = 0;
var count1 = 0;
var p1 = 0;
var p2 = 0;
var restart = document.querySelector("#Restart");

restart.addEventListener("click",clear);

function clear(){
  for(i=0;i<cells.length;i++)
  {
    cells[i].textContent = "";
  }
  count=countx=counto=0;
  document.querySelector("#header").textContent = "Welcome to Tic Tac Toe!";
}

for(i=0;i<cells.length;i++)
{
  cells[i].addEventListener('click',function(){
    if (document.querySelector("#header").textContent === "Welcome to Tic Tac Toe!") {
      if(this.textContent == "" && count%2 == 0)
      {
        this.textContent = "X";
        count++;
        count1=count;
        winner();
      }
      else if (this.textContent== "" && !count%2 == 0) {
        this.textContent = "O";
        count++;
        count1=count;
        winner();
      }
      else if(count1 == count)
      {
        this.textContent = ""
        count1=count1-2;
        count--;
      }
    }

  });
}

function winner()
{
  if((cells[0].textContent=="X" && cells[1].textContent=='X' && cells[2].textContent == "X")
  || (cells[0].textContent=="X" && cells[3].textContent=='X' && cells[6].textContent == "X")
  || (cells[3].textContent=="X" && cells[4].textContent=='X' && cells[5].textContent == "X")
  || (cells[6].textContent=="X" && cells[7].textContent=='X' && cells[8].textContent == "X")
  || (cells[1].textContent=="X" && cells[4].textContent=='X' && cells[7].textContent == "X")
  || (cells[2].textContent=="X" && cells[5].textContent=='X' && cells[8].textContent == "X")
  || (cells[0].textContent=="X" && cells[4].textContent=='X' && cells[8].textContent == "X"))
  {
    document.getElementById("header").textContent = "The Winner is Player 1" ;
    p1++;
    document.querySelector("#p1").value = p1;
  }
  else if ((cells[0].textContent=="O" && cells[1].textContent=='O' && cells[2].textContent == "O")
  || (cells[0].textContent=="O" && cells[3].textContent=='O' && cells[6].textContent == "O")
  || (cells[3].textContent=="O" && cells[4].textContent=='O' && cells[5].textContent == "O")
  || (cells[6].textContent=="O" && cells[7].textContent=='O' && cells[8].textContent == "O")
  || (cells[1].textContent=="O" && cells[4].textContent=='O' && cells[7].textContent == "O")
  || (cells[2].textContent=="O" && cells[5].textContent=='O' && cells[8].textContent == "O")
  || (cells[0].textContent=="O" && cells[4].textContent=='O' && cells[8].textContent == "O"))
  {
    document.getElementById("header").textContent = "The Winner is Player 2";
    p2++;
    document.querySelector("#p2").value = p2;
  }
}
