import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {
    @Input() currGesture: String;
    flag: number = 1;

    ngOnInit() {}

    ngOnChanges(changes: SimpleChanges) {
        if (this.currGesture == 'Open Hand') {
            (<HTMLInputElement>document.getElementById("b1")).click();
        } else if (this.currGesture == 'Two Open Hands') {
            (<HTMLInputElement>document.getElementById("b2")).click();
        } else if (this.currGesture == 'Closed Hand') {
            (<HTMLInputElement>document.getElementById("b3")).click();
        } else if (this.currGesture == 'Two Closed Hands') {
            (<HTMLInputElement>document.getElementById("b4")).click();
        } else if (this.currGesture == 'Hand Pointing') {
            (<HTMLInputElement>document.getElementById("b5")).click();
        } else if (this.currGesture == 'Two Hands Pointing') {
            (<HTMLInputElement>document.getElementById("b6")).click();
        } else if (this.currGesture == 'One Closed Hand & One Hand Pointing') {
            (<HTMLInputElement>document.getElementById("b7")).click();
        } else if (this.currGesture == 'One Open Hand & One Closed Hand') {
            (<HTMLInputElement>document.getElementById("b8")).click();
        } else if (this.currGesture == 'One Open Hand & One Hand Pointing') {
            (<HTMLInputElement>document.getElementById("b9")).click();
        }
    }

    // check win condition
    myfunc() {
        // Setting DOM to all boxes or input field
        var b1, b2, b3, b4, b5, b6, b7, b8, b9;
        b1 = (<HTMLInputElement>document.getElementById("b1")).value;
        b2 = (<HTMLInputElement>document.getElementById("b2")).value;
        b3 = (<HTMLInputElement>document.getElementById("b3")).value;
        b4 = (<HTMLInputElement>document.getElementById("b4")).value;
        b5 = (<HTMLInputElement>document.getElementById("b5")).value;
        b6 = (<HTMLInputElement>document.getElementById("b6")).value;
        b7 = (<HTMLInputElement>document.getElementById("b7")).value;
        b8 = (<HTMLInputElement>document.getElementById("b8")).value;
        b9 = (<HTMLInputElement>document.getElementById("b9")).value;
    
        // Checking if Player X won or not and after
        // that disabled all the other fields
        if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
            b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
            (<HTMLInputElement>document.getElementById("print"))
                .innerHTML = "Player X won";
            let val = localStorage.getItem('x');
            if (val == null) {
                localStorage.setItem('x', String(1));
            } else {
                let increment = Number(val) + 1;
                localStorage.setItem('x', String(increment));
            }
            (<HTMLInputElement>document.getElementById("b4")).disabled = true;
            (<HTMLInputElement>document.getElementById("b5")).disabled = true;
            (<HTMLInputElement>document.getElementById("b6")).disabled = true;
            (<HTMLInputElement>document.getElementById("b7")).disabled = true;
            (<HTMLInputElement>document.getElementById("b8")).disabled = true;
            (<HTMLInputElement>document.getElementById("b9")).disabled = true;
        }
        else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
            b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
            (<HTMLInputElement>document.getElementById("print"))
                .innerHTML = "Player X won";
                let val = localStorage.getItem('x');
            if (val == null) {
                localStorage.setItem('x', String(1));
            } else {
                let increment = Number(val) + 1;
                localStorage.setItem('x', String(increment));
            }
            (<HTMLInputElement>document.getElementById("b2")).disabled = true;
            (<HTMLInputElement>document.getElementById("b3")).disabled = true;
            (<HTMLInputElement>document.getElementById("b5")).disabled = true;
            (<HTMLInputElement>document.getElementById("b6")).disabled = true;
            (<HTMLInputElement>document.getElementById("b8")).disabled = true;
            (<HTMLInputElement>document.getElementById("b9")).disabled = true;
        }
        else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' ||
            b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
            (<HTMLInputElement>document.getElementById("print"))
                .innerHTML = "Player X won";
                let val = localStorage.getItem('x');
            if (val == null) {
                localStorage.setItem('x', String(1));
            } else {
                let increment = Number(val) + 1;
                localStorage.setItem('x', String(increment));
            }
            (<HTMLInputElement>document.getElementById("b1")).disabled = true;
            (<HTMLInputElement>document.getElementById("b2")).disabled = true;
            (<HTMLInputElement>document.getElementById("b3")).disabled = true;
            (<HTMLInputElement>document.getElementById("b4")).disabled = true;
            (<HTMLInputElement>document.getElementById("b5")).disabled = true;
            (<HTMLInputElement>document.getElementById("b6")).disabled = true;
        }
        else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' ||
            b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
            (<HTMLInputElement>document.getElementById("print"))
                .innerHTML = "Player X won";
                let val = localStorage.getItem('x');
            if (val == null) {
                localStorage.setItem('x', String(1));
            } else {
                let increment = Number(val) + 1;
                localStorage.setItem('x', String(increment));
            }
            (<HTMLInputElement>document.getElementById("b1")).disabled = true;
            (<HTMLInputElement>document.getElementById("b2")).disabled = true;
            (<HTMLInputElement>document.getElementById("b4")).disabled = true;
            (<HTMLInputElement>document.getElementById("b5")).disabled = true;
            (<HTMLInputElement>document.getElementById("b7")).disabled = true;
            (<HTMLInputElement>document.getElementById("b8")).disabled = true;
        }
        else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' ||
            b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
            (<HTMLInputElement>document.getElementById("print"))
                .innerHTML = "Player X won";
                let val = localStorage.getItem('x');
            if (val == null) {
                localStorage.setItem('x', String(1));
            } else {
                let increment = Number(val) + 1;
                localStorage.setItem('x', String(increment));
            }
            (<HTMLInputElement>document.getElementById("b2")).disabled = true;
            (<HTMLInputElement>document.getElementById("b3")).disabled = true;
            (<HTMLInputElement>document.getElementById("b4")).disabled = true;
            (<HTMLInputElement>document.getElementById("b6")).disabled = true;
            (<HTMLInputElement>document.getElementById("b7")).disabled = true;
            (<HTMLInputElement>document.getElementById("b8")).disabled = true;
        }
        else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' ||
            b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
            (<HTMLInputElement>document.getElementById("print"))
                .innerHTML = "Player X won";
                let val = localStorage.getItem('x');
            if (val == null) {
                localStorage.setItem('x', String(1));
            } else {
                let increment = Number(val) + 1;
                localStorage.setItem('x', String(increment));
            }
            (<HTMLInputElement>document.getElementById("b1")).disabled = true;
            (<HTMLInputElement>document.getElementById("b2")).disabled = true;
            (<HTMLInputElement>document.getElementById("b4")).disabled = true;
            (<HTMLInputElement>document.getElementById("b6")).disabled = true;
            (<HTMLInputElement>document.getElementById("b8")).disabled = true;
            (<HTMLInputElement>document.getElementById("b9")).disabled = true;
        }
        else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' ||
            b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
            (<HTMLInputElement>document.getElementById("print"))
                .innerHTML = "Player X won";
                let val = localStorage.getItem('x');
            if (val == null) {
                localStorage.setItem('x', String(1));
            } else {
                let increment = Number(val) + 1;
                localStorage.setItem('x', String(increment));
            }
            (<HTMLInputElement>document.getElementById("b1")).disabled = true;
            (<HTMLInputElement>document.getElementById("b3")).disabled = true;
            (<HTMLInputElement>document.getElementById("b4")).disabled = true;
            (<HTMLInputElement>document.getElementById("b6")).disabled = true;
            (<HTMLInputElement>document.getElementById("b7")).disabled = true;
            (<HTMLInputElement>document.getElementById("b9")).disabled = true;
        }
        else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' ||
            b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
            (<HTMLInputElement>document.getElementById("print"))
                .innerHTML = "Player X won";
                let val = localStorage.getItem('x');
            if (val == null) {
                localStorage.setItem('x', String(1));
            } else {
                let increment = Number(val) + 1;
                localStorage.setItem('x', String(increment));
            }
            (<HTMLInputElement>document.getElementById("b1")).disabled = true;
            (<HTMLInputElement>document.getElementById("b2")).disabled = true;
            (<HTMLInputElement>document.getElementById("b3")).disabled = true;
            (<HTMLInputElement>document.getElementById("b7")).disabled = true;
            (<HTMLInputElement>document.getElementById("b8")).disabled = true;
            (<HTMLInputElement>document.getElementById("b9")).disabled = true;
        }
    
        // Checking of Player X finish
        // Checking for Player 0 starts, Is player 0 won or
        // not and after that disabled all the other fields
        else if ((b1 == '0' || b1 == '0') && (b2 == '0' ||
            b2 == '0') && (b3 == '0' || b3 == '0')) {
            (<HTMLInputElement>document.getElementById("print"))
                .innerHTML = "Player 0 won";
                let val = localStorage.getItem('o');
            if (val == null) {
                localStorage.setItem('o', String(1));
            } else {
                let increment = Number(val) + 1;
                localStorage.setItem('o', String(increment));
            }
            (<HTMLInputElement>document.getElementById("b4")).disabled = true;
            (<HTMLInputElement>document.getElementById("b5")).disabled = true;
            (<HTMLInputElement>document.getElementById("b6")).disabled = true;
            (<HTMLInputElement>document.getElementById("b7")).disabled = true;
            (<HTMLInputElement>document.getElementById("b8")).disabled = true;
            (<HTMLInputElement>document.getElementById("b9")).disabled = true;
        }
        else if ((b1 == '0' || b1 == '0') && (b4 == '0' ||
            b4 == '0') && (b7 == '0' || b7 == '0')) {
            (<HTMLInputElement>document.getElementById("print"))
                .innerHTML = "Player 0 won";
                let val = localStorage.getItem('o');
                if (val == null) {
                    localStorage.setItem('o', String(1));
                } else {
                    let increment = Number(val) + 1;
                    localStorage.setItem('o', String(increment));
                }
            (<HTMLInputElement>document.getElementById("b2")).disabled = true;
            (<HTMLInputElement>document.getElementById("b3")).disabled = true;
            (<HTMLInputElement>document.getElementById("b5")).disabled = true;
            (<HTMLInputElement>document.getElementById("b6")).disabled = true;
            (<HTMLInputElement>document.getElementById("b8")).disabled = true;
            (<HTMLInputElement>document.getElementById("b9")).disabled = true;
        }
        else if ((b7 == '0' || b7 == '0') && (b8 == '0' ||
            b8 == '0') && (b9 == '0' || b9 == '0')) {
            (<HTMLInputElement>document.getElementById("print"))
                .innerHTML = "Player 0 won";
                let val = localStorage.getItem('o');
                if (val == null) {
                    localStorage.setItem('o', String(1));
                } else {
                    let increment = Number(val) + 1;
                    localStorage.setItem('o', String(increment));
                }
            (<HTMLInputElement>document.getElementById("b1")).disabled = true;
            (<HTMLInputElement>document.getElementById("b2")).disabled = true;
            (<HTMLInputElement>document.getElementById("b3")).disabled = true;
            (<HTMLInputElement>document.getElementById("b4")).disabled = true;
            (<HTMLInputElement>document.getElementById("b5")).disabled = true;
            (<HTMLInputElement>document.getElementById("b6")).disabled = true;
        }
        else if ((b3 == '0' || b3 == '0') && (b6 == '0' ||
            b6 == '0') && (b9 == '0' || b9 == '0')) {
            (<HTMLInputElement>document.getElementById("print"))
                .innerHTML = "Player 0 won";
                let val = localStorage.getItem('o');
                if (val == null) {
                    localStorage.setItem('o', String(1));
                } else {
                    let increment = Number(val) + 1;
                    localStorage.setItem('o', String(increment));
                }
            (<HTMLInputElement>document.getElementById("b1")).disabled = true;
            (<HTMLInputElement>document.getElementById("b2")).disabled = true;
            (<HTMLInputElement>document.getElementById("b4")).disabled = true;
            (<HTMLInputElement>document.getElementById("b5")).disabled = true;
            (<HTMLInputElement>document.getElementById("b7")).disabled = true;
            (<HTMLInputElement>document.getElementById("b8")).disabled = true;
        }
        else if ((b1 == '0' || b1 == '0') && (b5 == '0' ||
            b5 == '0') && (b9 == '0' || b9 == '0')) {
            (<HTMLInputElement>document.getElementById("print"))
                .innerHTML = "Player 0 won";
                let val = localStorage.getItem('o');
                if (val == null) {
                    localStorage.setItem('o', String(1));
                } else {
                    let increment = Number(val) + 1;
                    localStorage.setItem('o', String(increment));
                }
            (<HTMLInputElement>document.getElementById("b2")).disabled = true;
            (<HTMLInputElement>document.getElementById("b3")).disabled = true;
            (<HTMLInputElement>document.getElementById("b4")).disabled = true;
            (<HTMLInputElement>document.getElementById("b6")).disabled = true;
            (<HTMLInputElement>document.getElementById("b7")).disabled = true;
            (<HTMLInputElement>document.getElementById("b8")).disabled = true;
        }
        else if ((b3 == '0' || b3 == '0') && (b5 == '0' ||
            b5 == '0') && (b7 == '0' || b7 == '0')) {
            (<HTMLInputElement>document.getElementById("print"))
                .innerHTML = "Player 0 won";
                let val = localStorage.getItem('o');
                if (val == null) {
                    localStorage.setItem('o', String(1));
                } else {
                    let increment = Number(val) + 1;
                    localStorage.setItem('o', String(increment));
                }
            (<HTMLInputElement>document.getElementById("b1")).disabled = true;
            (<HTMLInputElement>document.getElementById("b2")).disabled = true;
            (<HTMLInputElement>document.getElementById("b4")).disabled = true;
            (<HTMLInputElement>document.getElementById("b6")).disabled = true;
            (<HTMLInputElement>document.getElementById("b8")).disabled = true;
            (<HTMLInputElement>document.getElementById("b9")).disabled = true;
        }
        else if ((b2 == '0' || b2 == '0') && (b5 == '0' ||
            b5 == '0') && (b8 == '0' || b8 == '0')) {
            (<HTMLInputElement>document.getElementById("print"))
                .innerHTML = "Player 0 won";    let val = localStorage.getItem('o');
                if (val == null) {
                    localStorage.setItem('o', String(1));
                } else {
                    let increment = Number(val) + 1;
                    localStorage.setItem('o', String(increment));
                }
            (<HTMLInputElement>document.getElementById("b1")).disabled = true;
            (<HTMLInputElement>document.getElementById("b3")).disabled = true;
            (<HTMLInputElement>document.getElementById("b4")).disabled = true;
            (<HTMLInputElement>document.getElementById("b6")).disabled = true;
            (<HTMLInputElement>document.getElementById("b7")).disabled = true;
            (<HTMLInputElement>document.getElementById("b9")).disabled = true;
        }
        else if ((b4 == '0' || b4 == '0') && (b5 == '0' ||
            b5 == '0') && (b6 == '0' || b6 == '0')) {
            (<HTMLInputElement>document.getElementById("print"))
                .innerHTML = "Player 0 won";
                let val = localStorage.getItem('o');
                if (val == null) {
                    localStorage.setItem('o', String(1));
                } else {
                    let increment = Number(val) + 1;
                    localStorage.setItem('o', String(increment));
                }
            (<HTMLInputElement>document.getElementById("b1")).disabled = true;
            (<HTMLInputElement>document.getElementById("b2")).disabled = true;
            (<HTMLInputElement>document.getElementById("b3")).disabled = true;
            (<HTMLInputElement>document.getElementById("b7")).disabled = true;
            (<HTMLInputElement>document.getElementById("b8")).disabled = true;
            (<HTMLInputElement>document.getElementById("b9")).disabled = true;
        }
    
        // Checking of Player 0 finish
        // Here, Checking about Tie
        else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
            || b2 == '0') && (b3 == 'X' || b3 == '0') &&
            (b4 == 'X' || b4 == '0') && (b5 == 'X' ||
            b5 == '0') && (b6 == 'X' || b6 == '0') &&
            (b7 == 'X' || b7 == '0') && (b8 == 'X' ||
            b8 == '0') && (b9 == 'X' || b9 == '0')) {
            (<HTMLInputElement>document.getElementById("print"))
                    .innerHTML = "Match Tie";
                    let val = localStorage.getItem('tie');
                    if (val == null) {
                        localStorage.setItem('tie', String(1));
                    } else {
                        let increment = Number(val) + 1;
                        localStorage.setItem('tie', String(increment));
                    }
        }
        else {
    
            // Here, Printing Result
            if (this.flag == 1) {
                (<HTMLInputElement>document.getElementById("print"))
                    .innerHTML = "Player X Turn";
            }
            else {
                (<HTMLInputElement>document.getElementById("print"))
                    .innerHTML = "Player 0 Turn";
            }
        }
    }

    // reset
    myfunc_2() {
        (<HTMLInputElement>document.getElementById("b1")).value = '';
        (<HTMLInputElement>document.getElementById("b2")).value = '';
        (<HTMLInputElement>document.getElementById("b3")).value = '';
        (<HTMLInputElement>document.getElementById("b4")).value = '';
        (<HTMLInputElement>document.getElementById("b5")).value = '';
        (<HTMLInputElement>document.getElementById("b6")).value = '';
        (<HTMLInputElement>document.getElementById("b7")).value = '';
        (<HTMLInputElement>document.getElementById("b8")).value = '';
        (<HTMLInputElement>document.getElementById("b9")).value = '';
        (<HTMLInputElement>document.getElementById("b1")).disabled = false;
        (<HTMLInputElement>document.getElementById("b2")).disabled = false;
        (<HTMLInputElement>document.getElementById("b3")).disabled = false;
        (<HTMLInputElement>document.getElementById("b4")).disabled = false;
        (<HTMLInputElement>document.getElementById("b5")).disabled = false;
        (<HTMLInputElement>document.getElementById("b6")).disabled = false;
        (<HTMLInputElement>document.getElementById("b7")).disabled = false;
        (<HTMLInputElement>document.getElementById("b8")).disabled = false;
        (<HTMLInputElement>document.getElementById("b9")).disabled = false;
        (<HTMLInputElement>document.getElementById("print")).innerText = 'Player X Turn';
        this.flag = 1;
    }
 
    // functions 3 - 11 places the X's and O's
    myfunc_3() {
        if (this.flag == 1) {
            (<HTMLInputElement>document.getElementById("b1")).value = 'X';
            (<HTMLInputElement>document.getElementById("b1")).disabled = true;
            this.flag = 0;
        }
        else {
            (<HTMLInputElement>document.getElementById("b1")).value = '0';
            (<HTMLInputElement>document.getElementById("b1")).disabled = true;
            this.flag = 1;
        }
    }

    myfunc_4() {
        if (this.flag == 1) {
            (<HTMLInputElement>document.getElementById("b2")).value = 'X';
            (<HTMLInputElement>document.getElementById("b2")).disabled = true;
            this.flag = 0;
        }
        else {
            (<HTMLInputElement>document.getElementById("b2")).value = '0';
            (<HTMLInputElement>document.getElementById("b2")).disabled = true;
            this.flag = 1;
        }
    }

    myfunc_5() {
        if (this.flag == 1) {
            (<HTMLInputElement>document.getElementById("b3")).value = 'X';
            (<HTMLInputElement>document.getElementById("b3")).disabled = true;
            this.flag = 0;
        }
        else {
            (<HTMLInputElement>document.getElementById("b3")).value = '0';
            (<HTMLInputElement>document.getElementById("b3")).disabled = true;
            this.flag = 1;
        }
    }

    myfunc_6() {
        if (this.flag == 1) {
            (<HTMLInputElement>document.getElementById("b4")).value = 'X';
            (<HTMLInputElement>document.getElementById("b4")).disabled = true;
            this.flag = 0;
        }
        else {
            (<HTMLInputElement>document.getElementById("b4")).value = '0';
            (<HTMLInputElement>document.getElementById("b4")).disabled = true;
            this.flag = 1;
        }
    }

    myfunc_7() {
        if (this.flag == 1) {
            (<HTMLInputElement>document.getElementById("b5")).value = 'X';
            (<HTMLInputElement>document.getElementById("b5")).disabled = true;
            this.flag = 0;
        }
        else {
            (<HTMLInputElement>document.getElementById("b5")).value = '0';
            (<HTMLInputElement>document.getElementById("b5")).disabled = true;
            this.flag = 1;
        }
    }

    myfunc_8() {
        if (this.flag == 1) {
            (<HTMLInputElement>document.getElementById("b6")).value = 'X';
            (<HTMLInputElement>document.getElementById("b6")).disabled = true;
            this.flag = 0;
        }
        else {
            (<HTMLInputElement>document.getElementById("b6")).value = '0';
            (<HTMLInputElement>document.getElementById("b6")).disabled = true;
            this.flag = 1;
        }
    }

    myfunc_9() {
        if (this.flag == 1) {
            (<HTMLInputElement>document.getElementById("b7")).value = 'X';
            (<HTMLInputElement>document.getElementById("b7")).disabled = true;
            this.flag = 0;
        }
        else {
            (<HTMLInputElement>document.getElementById("b7")).value = '0';
            (<HTMLInputElement>document.getElementById("b7")).disabled = true;
            this.flag = 1;
        }
    }

    myfunc_10() {
        if (this.flag == 1) {
            (<HTMLInputElement>document.getElementById("b8")).value = 'X';
            (<HTMLInputElement>document.getElementById("b8")).disabled = true;
            this.flag = 0;
        }
        else {
            (<HTMLInputElement>document.getElementById("b8")).value = '0';
            (<HTMLInputElement>document.getElementById("b8")).disabled = true;
            this.flag = 1;
        }
    }

    myfunc_11() {
        if (this.flag == 1) {
            (<HTMLInputElement>document.getElementById("b9")).value = 'X';
            (<HTMLInputElement>document.getElementById("b9")).disabled = true;
            this.flag = 0;
        }
        else {
            (<HTMLInputElement>document.getElementById("b9")).value = '0';
            (<HTMLInputElement>document.getElementById("b9")).disabled = true;
            this.flag = 1;
        }
    }
}
