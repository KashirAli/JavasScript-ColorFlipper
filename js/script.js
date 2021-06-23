colorArr = ['#ffdd87','#c3fa84','#999'];
let n=0;
document.querySelector('.btn').addEventListener('click',()=>{
    n=(n+1)%colorArr.length;
    document.querySelector('body').style.background=colorArr[n]
    document.querySelector('span').innerHTML=colorArr[n];
});