
let SecA = document.querySelector('.a');
let SecB = document.querySelector('.b');
let SecC = document.querySelector('.c');
let SecD = document.querySelector('.d');
let SecE = document.querySelector('.e');
let SecF = document.querySelector('.f');
let SecG = document.querySelector('.g');
let SecH = document.querySelector('.h');
let SecI = document.querySelector('.i');

let move = 1; 
let count = 1;
let apply = true;
let Something = true;

let a = b = c = d = e = f = g = h = i = true;

let aa,bb,cc,dd,ee,ff,gg,hh,ii;

// let TheList = [];


function TheMove(Section, Something){
    let Box;
    
    

    if(move % 2 === 0 &&  Something === true){
        Section.innerHTML = `<center><img class = "Move" src="Icons/O.png" alt=""></center>`;
        Something = false;
        move++;

        Box =  'O';


    }else if(move %2 !== 0 && Something === true){
        Section.innerHTML = `<center><img class = "Move" src="Icons/X.png" alt=""></center>`;
        Something = false;
        move++

        Box = 'X';

        
    }
   
    if(Section === SecA){
        localStorage.setItem('a', JSON.stringify(Box));
    }else if(Section === SecB){
        localStorage.setItem('b', JSON.stringify(Box));
    }else if(Section === SecC){
        localStorage.setItem('c', JSON.stringify(Box));
    }else if(Section === SecD){
        localStorage.setItem('d', JSON.stringify(Box));
    }else if(Section === SecE){
        localStorage.setItem('e', JSON.stringify(Box));
    }else if(Section === SecF){
        localStorage.setItem('f', JSON.stringify(Box));
    }else if(Section === SecG){
        localStorage.setItem('g', JSON.stringify(Box));
    }else if(Section === SecH){
        localStorage.setItem('h', JSON.stringify(Box));
    }else if(Section === SecI){
        localStorage.setItem('i', JSON.stringify(Box));
    }


    if(Box === 'X'){
        document.querySelector('.Turn').innerHTML = "Player 2 turn"
    }else{
        document.querySelector('.Turn').innerHTML = "Player 1 turn"
    }

    

}

SecA.addEventListener('click', () => {
    let Something = true;  

    if(a === true){
        TheMove(SecA,Something);
        a = false;
        Something = false;
        Gets();
        
    }else{
        Something = false;

    }
    Show();
});

SecB.addEventListener('click', () => {
    let Something = true;
    if(b === true){
        TheMove(SecB, Something)
        Something = false;
        b = false;
        Gets();
    }else{
        Something = false;

    }
    Show();
    
});
SecC.addEventListener('click', () => {
    let Something = true;
    if(c === true){
        TheMove(SecC, Something)
        Something = false;
        c = false;
        Gets();
    }else{
        Something = false;
    }

    Show();
});
SecD.addEventListener('click', () => {
    let Something = true;
    if(d === true){
        TheMove(SecD, Something)
        Something = false;
        d = false;
        Gets();
    }else{
        Something = false;
    }
    Show();
});
SecE.addEventListener('click', () => {
    let Something = true;
    if(e === true){
        TheMove(SecE, Something)
        Something = false;
        e = false;
        Gets();
    }else{
        Something = false;
    }

    Show();
});
SecF.addEventListener('click', () => {
    let Something = true;
    if(f === true){
        TheMove(SecF, Something)
        Something = false;
        f = false;
        Gets();
    }else{
        Something = false;
    }
    Show();
});
SecG.addEventListener('click', () => {
    let Something = true;
    if(g === true){
        TheMove(SecG, Something)
        Something = false;
        g = false;
        Gets();
    }else{
        Something = false;
    }
    Show();
});
SecH.addEventListener('click', () => {
    let Something = true;
    if(h === true){
        TheMove(SecH, Something)
        Something = false;
        h = false;
        Gets();
    }else{
        Something = false;
    }
    Show();
});
SecI.addEventListener('click', () => {
    let Something = true;
    if(i === true){
        TheMove(SecI, Something)
        Something = false;
        i = false;
        Gets();
    }else{
        Something = false;
    }
    Show();
});


let TheList = [];

function Reset(){
    localStorage.clear();
    a = b = c = d = e = f = g = h = i = false;
    console.log(TheList);
}

function Clear(){
    localStorage.clear();
    TheList = [];
    move = 1;
    SecA.innerHTML = SecB.innerHTML = SecC.innerHTML = SecD.innerHTML = SecE.innerHTML = SecF.innerHTML = SecG.innerHTML = SecH.innerHTML = SecI.innerHTML = ``;
    a = b = c = d = e = f = g = h = i = true;
}

document.querySelector('.Reset').addEventListener('click',() => {
    console.log('testing');
    Clear();
    document.querySelector('.Winner').innerHTML = ``;
});

document.body.addEventListener('keydown', (event) => {
    if(event.key === 'r'){
        localStorage.clear();
        Clear();
        document.querySelector('.Winner').innerHTML = ``;
        document.querySelector('.Turn').innerHTML = ``;
    }
} )

function Show(){
    TheList.forEach(function(ArrObj){
        const {aa, bb, cc, dd, ee, ff, gg, hh, ii} = ArrObj;

        


      if(cc === 'X' && ee === 'X' && gg === 'X'){
        Reset();
        document.querySelector('.Winner').innerHTML = `<style>.Winner{background-color: #009E60;} .Sections{cursor: default;}</style>Player 1 Won!`;
        document.querySelector('.Turn').innerHTML = ``;

      }else if(cc === 'O' && ee === 'O' && gg === 'O'){
        Reset();
        document.querySelector('.Winner').innerHTML = `<style>.Winner{background-color: #009E60;} .Sections{cursor: default;}</style>Player 2 Won!`;
        document.querySelector('.Turn').innerHTML = ``;

      }else if(ii === 'X' && ee === 'X' && aa === 'X'){
        Reset();
        document.querySelector('.Winner').innerHTML =`<style>.Winner{background-color: #009E60;} .Sections{cursor: default;}</style>Player 1 Won!`;
        document.querySelector('.Turn').innerHTML = ``;
        
      }else if(ii === 'O' && ee === 'O' && aa === 'O'){
        Reset();
        document.querySelector('.Winner').innerHTML = `<style>.Winner{background-color: #009E60;} .Sections{cursor: default;}</style>Player 2 Won!`;
        document.querySelector('.Turn').innerHTML = ``;

      }else if(cc === 'X' && bb === 'X' && aa === 'X'){
        Reset();
        document.querySelector('.Winner').innerHTML =`<style>.Winner{background-color: #009E60;} .Sections{cursor: default;}</style>Player 1 Won!`;
        document.querySelector('.Turn').innerHTML = ``;

      }else if(cc === 'O' && bb === 'O' && aa === 'O'){
        Reset();
        document.querySelector('.Winner').innerHTML =`<style>.Winner{background-color: #009E60;} .Sections{cursor: default;}</style>Player 2 Won!`;
        document.querySelector('.Turn').innerHTML = ``;

      }else if(ff === 'X' && ee === 'X' && dd === 'X'){
        Reset();
        document.querySelector('.Winner').innerHTML =`<style>.Winner{background-color: #009E60;} .Sections{cursor: default;}</style>Player 1 Won!`;
        document.querySelector('.Turn').innerHTML = ``;

      }else if(ff === 'O' && ee === 'O' && dd === 'O'){
        Reset();
        document.querySelector('.Winner').innerHTML =`<style>.Winner{background-color: #009E60;} .Sections{cursor: default;}</style>Player 2 Won!`;
        document.querySelector('.Turn').innerHTML = ``;

      }else if(ii === 'X' && hh === 'X' && gg === 'X'){
        Reset();
        document.querySelector('.Winner').innerHTML =`<style>.Winner{background-color: #009E60;} .Sections{cursor: default;}</style>Player 1 Won!`;
        document.querySelector('.Turn').innerHTML = ``;

      }else if(ii === 'O' && hh === 'O' && gg === 'O'){
        Reset();
        document.querySelector('.Winner').innerHTML =`<style>.Winner{background-color: #009E60;} .Sections{cursor: default;}</style>Player 2 Won!`;
        document.querySelector('.Turn').innerHTML = ``;

      }else if(cc === 'X' && ff === 'X' && ii === 'X'){
        Reset();
        document.querySelector('.Winner').innerHTML =`<style>.Winner{background-color: #009E60;} .Sections{cursor: default;}</style>Player 1 Won!`;
        document.querySelector('.Turn').innerHTML = ``;

      }else if(cc === 'O' && ff === 'O' && ii === 'O'){
        Reset();
        document.querySelector('.Winner').innerHTML =`<style>.Winner{background-color: #009E60;} .Sections{cursor: default;}</style>Player 2 Won!`;
        document.querySelector('.Turn').innerHTML = ``;

      }else if(bb === 'X' && ee === 'X' && hh === 'X'){
        Reset();
        document.querySelector('.Winner').innerHTML =`<style>.Winner{background-color: #009E60;} .Sections{cursor: default;}</style>Player 1 Won!`;
        document.querySelector('.Turn').innerHTML = ``;

      }else if(bb === 'O' && ee === 'O' && hh === 'O'){
        Reset();
        document.querySelector('.Winner').innerHTML =`<style>.Winner{background-color: #009E60;} .Sections{cursor: default;}</style>Player 2 Won!`;
        document.querySelector('.Turn').innerHTML = ``;

      }else if(aa === 'X' && dd === 'X' && gg === 'X'){
        Reset();
        document.querySelector('.Winner').innerHTML =`<style>.Winner{background-color: #009E60;} .Sections{cursor: default;}</style>Player 1 Won!`;
        document.querySelector('.Turn').innerHTML = ``;

      }else if(aa === 'O' && dd === 'O' && gg === 'O'){
        Reset();
        document.querySelector('.Winner').innerHTML =`<style>.Winner{background-color: #009E60;} .Sections{cursor: default;}</style>Player 2 Won!`;
        document.querySelector('.Turn').innerHTML = ``;

      }else if (move === 10){
            Reset();
            document.querySelector('.Winner').innerHTML =`<style>.Winner{background-color: #009E60;} .Sections{cursor: default;}</style>Tie!`;
            document.querySelector('.Turn').innerHTML = ``;
    }
       
    })

}


function Gets(){
    let TheA = JSON.parse(localStorage.getItem('a'));
    let TheB = JSON.parse(localStorage.getItem('b'));
    let TheC = JSON.parse(localStorage.getItem('c'));
    let TheD = JSON.parse(localStorage.getItem('d'));
    let TheE = JSON.parse(localStorage.getItem('e'));
    let TheF = JSON.parse(localStorage.getItem('f'));
    let TheG = JSON.parse(localStorage.getItem('g'));
    let TheH = JSON.parse(localStorage.getItem('h'));
    let TheI = JSON.parse(localStorage.getItem('i'));

    TheList.push({
        aa: TheA,
        bb: TheB,
        cc: TheC,
        dd: TheD,
        ee: TheE,
        ff: TheF,
        gg: TheG,
        hh: TheH,
        ii: TheI
    })

}


