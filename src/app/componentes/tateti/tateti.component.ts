import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-tateti',
    templateUrl: './tateti.component.html',
    styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {


    image1 = new Image();;
    image2 = new Image();
    i = 0;
    band = false;
    nivel = 1; myway; mynextmove;
    tmp; listo; finalizo; content = null;
    gan = [0, 0, 0, 0];
    ganusuario = [0, 0, 0, 0];
    empates = [0, 0, 0, 0];
    playerstarts = true;
    movidas = new Array();
    tateti = new Array(9);
    opciones = [11, 12, 13, 21, 22, 23, 31, 32, 33];
    esquinas = [11, 13, 31, 33];
    tatetis = new Array();

    constructor(private router: Router) {
        this.image1.src = "../../../assets/imagenes/nothing.gif";
        this.image2.src = "../../../assets/imagenes/nothing.gif";
        this.tatetis[1] = [0, 11, 12, 13];
        this.tatetis[2] = [0, 21, 22, 23];
        this.tatetis[3] = [0, 31, 32, 33];
        this.tatetis[4] = [0, 11, 21, 31];
        this.tatetis[5] = [0, 12, 22, 32];
        this.tatetis[6] = [0, 13, 23, 33];
        this.tatetis[7] = [0, 11, 22, 33];
        this.tatetis[8] = [0, 13, 22, 31];
    }

    valores() {
        window.location.reload();
    }

    init() {
        let oktoplay = true;
        let finalizo = false;
        let listo = 0;
        this.writetext(4);
        this.movidas[11] = 0; this.movidas[12] = 0; this.movidas[13] = 0; this.movidas[21] = 0; this.movidas[22] = 0; this.movidas[23] = 0; this.movidas[31] = 0; this.movidas[32] = 0; this.movidas[33] = 0;
        for (let i = 0; i <= 8; i++) {

            document.images['rc' + this.opciones[i]].src = "../../../assets/imagenes/nothing.gif";
            document.images['rc' + this.opciones[i]].alt = "";
            this.tateti[i] = 0;
        }
        if (!this.playerstarts) this.pcturn();
    }

    writetext(num) {
        switch (num) {
            case 1:
                this.content = 'Has empatado al tateti.';
                this.band = true;
                break;
            case 2:
                this.content = 'Has perdido el tateti.';
                this.band = true;
                break;
            case 3:
                this.content = 'Ganaste el tateti.';
                this.band = true;
                break;
            case 4: //this.content = 'Nivel: ' + this.nivel + '<br>Juegos perdidos:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Este&nbsp;nivel-&nbsp;' + this.gan[this.nivel] + '&nbsp;&nbsp;(Total:&nbsp;' + (this.gan[0] + this.gan[1] + this.gan[2] + this.gan[3]) + ')<br>Juegos ganados:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Este nivel-&nbsp;' + this.ganusuario[this.nivel] + '&nbsp;&nbsp;(Total: ' + (this.ganusuario[0] + this.ganusuario[1] + this.ganusuario[2] + this.ganusuario[3]) + ')<br>Juegos empatados:&nbsp;&nbsp;Este nivel- ' + this.empates[this.nivel] + '&nbsp;&nbsp;(Total: ' + (this.empates[0] + this.empates[1] + this.empates[2] + this.empates[3]) + ')';
                break;
        }

    }

    setnivel(x) {
        if (this.nivel != x) {
            this.nivel = x;
            this.init();
        }
    }

    setbutton(cellnum) {
        if (!this.finalizo) {
            if (this.movidas[cellnum] == 0) {
                document.images['rc' + cellnum].src = "../../../assets/imagenes/x.gif";
                document.images['rc' + cellnum].alt = " X ";
                this.movidas[cellnum] = 1;
                this.tateti[this.listo] = cellnum;
                this.listo++;
                this.findwinner(true);
            }
        }
    }

    pcstrategy(istowin) {
        if (this.nivel > 0) {
            var str = (istowin) ? 2 : 1;
            for (let n = 1; n <= 8; n++) {
                if ((this.movidas[this.tatetis[n][1]] == str) && (this.movidas[this.tatetis[n][2]] == str) && (this.movidas[this.tatetis[n][3]] == 0)) this.tmp = this.tatetis[n][3];
                if ((this.movidas[this.tatetis[n][1]] == str) && (this.movidas[this.tatetis[n][3]] == str) && (this.movidas[this.tatetis[n][2]] == 0)) this.tmp = this.tatetis[n][2];
                if ((this.movidas[this.tatetis[n][2]] == str) && (this.movidas[this.tatetis[n][3]] == str) && (this.movidas[this.tatetis[n][1]] == 0)) this.tmp = this.tatetis[n][1];
            }
        }
    }


    selecCorner(which) {
        if (which == "empty") {
            do {
                this.tmp = this.esquinas[Math.floor(Math.random() * 4)];
            } while (this.movidas[this.tmp] != 0);
        }
        else
            this.tmp = this.esquinas[Math.floor(Math.random() * 4)];
    }


    pcdontlose() {
        let dlta, op0, op1, op2;
        if (!this.playerstarts) {
            if (this.listo == 0) {
                this.tmp = this.opciones[2 * Math.floor(Math.random() * 5)];
                if (this.tmp == 22) this.myway = 1;
                else this.myway = 2;
            }
            else if (this.listo == 2) {
                if (this.myway == 1) {
                    if (this.tateti[1] == 11 || this.tateti[1] == 13 || this.tateti[1] == 31 || this.tateti[1] == 33)
                        this.tmp = 44 - this.tateti[1];
                    else {
                        dlta = 22 - this.tateti[1];
                        op0 = 22 + dlta + (10 / dlta);
                        op1 = 22 + dlta - (10 / dlta);
                        this.tmp = eval("op" + Math.floor(Math.random() * 2));
                    }
                }
                else if (this.myway == 2) {
                    if (this.tateti[1] == 22) {
                        this.tmp = 44 - this.tateti[0];
                        this.myway = 21;
                    }
                    else if (this.tateti[1] == 11 || this.tateti[1] == 13 || this.tateti[1] == 31 || this.tateti[1] == 33) {
                        this.selecCorner("empty");
                        this.myway = 22;
                    }
                    else {
                        this.tmp = 22;
                        this.myway = 23;
                    }
                }
            }
            else if (this.listo == 4) {
                if (this.myway == 22) {
                    for (let i = 0; i < 4; i++) {
                        if (this.movidas[this.esquinas[i]] == 0) {
                            this.tmp = this.esquinas[i];
                        }
                    }
                }
                else if (this.myway == 23) {
                    dlta = this.tateti[1] - this.tateti[0];
                    op0 = 44 - (this.tateti[1] + dlta);
                    op1 = (op0 + this.tateti[0]) / 2;
                    this.tmp = eval("op" + Math.floor(Math.random() * 2));
                }
                else if (this.myway == 1)
                    this.tmp = 44 + this.tateti[2] - (2 * this.tateti[3]);
            }
        }
    }


    findwinner(isplayer) {
        let me = (isplayer) ? 1 : 2;
        for (let n = 1; n <= 8; n++) {
            if ((this.movidas[this.tatetis[n][1]] == me) && (this.movidas[this.tatetis[n][2]] == me) && (this.movidas[this.tatetis[n][3]] == me)) {
                this.finalizo = true;
                break;
            }
        }
        console.log("fuera del for + " + this.i);
        if (this.finalizo) {
            if (isplayer) {
                this.ganusuario[this.nivel]++;
                this.playerstarts = true;
                this.writetext(3);
            } else {
                this.gan[this.nivel]++;
                this.playerstarts = false;
                this.writetext(2);
            }
        } else {
            if (this.listo > 8) {
                this.empates[this.nivel]++;
                this.playerstarts = !this.playerstarts;
                console.log("empato");
                this.writetext(1);
                console.log("empato2");
            } else if (isplayer) {
                console.log("else if" + this.i);
                this.pcturn();
            }
        }
    }

    pcrandom() {
        let j = 0;
        do {
            this.tmp = this.opciones[Math.floor(Math.random() * 9)];
            console.log("dowhile");
            j++;
            if (j > 100) {
                this.content = "Has empatado al tateti.";
                return;
            }
        } while (this.movidas[this.tmp] != 0);
    }

    pcturn() {
        this.tmp = '00';
        this.pcstrategy(true);
        if (this.tmp == '00') { console.log("1if"); this.pcstrategy(false); }
        if (this.tmp == '00' && this.nivel > 1) { console.log("2if"); this.pcdontlose(); }
        if (this.tmp == '00') { console.log("3if"); this.pcrandom(); }
        this.movidas[this.tmp] = 2;
        this.tateti[this.listo] = this.tmp;
        document.images['rc' + this.tmp].src = "../../../assets/imagenes/o.gif";
        document.images['rc' + this.tmp].alt = " O ";
        this.listo++;
        this.findwinner(false);
    }

    ngOnInit() {
        let ns4
        //this.variables();
        this.init();
        /*window.onresize=function(){
           if(ns4)setTimeout('history.go(0)',400);
         }*/
    }



}