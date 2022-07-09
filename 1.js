//找标签
let firstUl = document.getElementById("firstUl");
let li = firstUl.children;
//定义事件函数
function doEnter(){
	let ul = this.children[1];
		if(!ul){
			return null;
		}
		ul.classList.add("show");
}
function doLeave(){
	let ul = this.children[1];
		if(ul==undefined){
			return null;
		}
		ul.classList.remove("show");
}
//添加事件监听
for(let i = 0; i<=li.length-1;i++){
	li[i].addEventListener("mouseenter",doEnter);
	li[i].addEventListener("mouseleave",doLeave);
}
//轮播
let li2 = document.querySelectorAll("#loopUl>li");
let dots = document.getElementById("dots");
let span = [];
function  init(){
    for(let i=0; i<=li2.length-1 ; i++ ){
        // 动态生成轮播的控制点
        let newSpan = document.createElement("span");
        dots.appendChild(newSpan);
        span.push(newSpan);
        if( i===0 ){
            newSpan.className = "on";
        }
        // 给每个 li 添加 animationend 事件
        li2[i].addEventListener("animationend",function(event){
            if( event.animationName === "hideAni"){
                this.classList.remove("show");
            }
        });
    }
    showTag(li2[0]);
}
// 显示某个标签
function showTag(tag){
    tag.classList.add("show");
    tag.style.animation = `showAni 0.5s both`;
}
// 隐藏某个标签
function hideTag(tag){
    tag.style.animation = `hideAni 0.5s both`;
}

init(); // 初始化函数
// 给 span 添加事件
for(let i=0 ; i<= span.length-1; i++){
    span[i].addEventListener("click",function(){
        this.classList.add("on");
        showTag(li2[i]);
        // 其余的点去掉 on，其余的 li 隐藏。
        for(let j=0 ; j<=span.length-1 ; j++ ){
            if( j!==i){
                span[j].classList.remove("on");
                hideTag(li2[j]);
            }
        }
    });
}


{
    let pic = document.getElementById("pic");
    let arr = ["img/ka.webp" ,"img/72.jpeg" ,"img/b.jpg" ,"img/kk.webp" ,"img/kz.jpg" , "img/yz.webp"];
    let changePic = function(){
        let i = Number( this.getAttribute("data-i"));  // 获取当前的次数
        i++;
        this.setAttribute("data-i",i);
        this.src = arr [ i%6 ] ;
    };
    pic.addEventListener("click" , changePic );
}


//轮播 end

