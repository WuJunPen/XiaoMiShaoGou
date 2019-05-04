var tabs=document.getElementById("tabs").getElementsByTagName("li");
console.log(tabs);
var lists=document.getElementById("lists").getElementsByTagName("ul");
console.log(lists);
var scrollTop = document.body.scrollTop;
console.log(scrollTop);
for(var i = 0; i < tabs.length; i++){
    tabs[i].onclick=showlist;
}
function showlist(){
    for(var i=0;i<tabs.length;i++){
        if(tabs[i]==this){
            tabs[i].className="active";
            lists[i].className="clearfix active"
        }
        else{
            tabs[i].className=" ";
            lists[i].className="clearfix";
        }
    }
}

window.onscroll = function(){
    var scrollTop = document.body.scrollTop;
    if(scrollTop>=269){
        document.getElementById("seckill-nav").className="seckill-nav seckill-navfixed";
    }
    else{
        document.getElementById("seckill-nav").className="seckill-nav";
    }
}
