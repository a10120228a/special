$(function(){
    class PhotoList {
        constructor(){
            this.ele = $('#box');//要插入到的节点
            this.list = []; // 图片列表
            this.maxW = window.innerWidth - 300;
            this.maxH = window.innerHeight - 400;
            this.style = {};
            this.count = 23;
        }
        init(){
            for(let i = 1;i < this.count;i ++){
                this.list.push({
                    url:'./img/' + i + '.jpeg',
                    alt:'美女',
                    title:'美女图片'
                })
            }
            for(let i = 0;i < this.list.length;i ++){
                let a = this.list[i];
                this.style = {
                    position:'absolute',
                    left : Math.floor(Math.random() * this.maxW) + 50 + 'px',
                    top : Math.floor(Math.random() * this.maxH) + 100 + 'px',
                    width : '300px',
                    height : 'auto',
                    transform : 'rotate(' + (Math.random() > 0.5 ? Math.floor(Math.random() * 90) : -(Math.floor(Math.random() * 90))) + 'deg)',
                    border : '4px solid #' + Math.floor(Math.random() * 0xffffff),
                    zIndex : i,
                    borderRadius:'8px'
                };
                let child = $('<img src="' + a.url + '" alt="' + a.alt + '" title="' + a.title + '"/>');
                child.css(this.style);
                this.ele.append(child);
                this.mouseOver(i);
            }
        }
        mouseOver(index){
            const child = $('img')[index];
            const childStyle = child.style;
            const childZindex = childStyle.zIndex;
            const myrotates = parseInt(childStyle.transform.split('(')[1].split(')')[0].split("deg")[0]);
            child.onmouseover = function(){
                clearInterval(this.timer);
                clearInterval(this.mytime);
                this.status = true;
                let rotates = myrotates;
                this.timer = setInterval(function(){
                    if(rotates > 0){
                        rotates -= 1
                    }else if(rotates < 0){
                        rotates += 1
                    }else{
                        clearInterval(this.timer);
                    }
                    $(child).css({
                        zIndex:9999,
                        transform:'rotate(' + rotates + 'deg) scale(2)'
                    })
                },20);
            };
            child.onmouseout = function(){
                if(this.status){
                    this.status = false;
                    clearInterval(this.timer);
                    let rotates = myrotates;
                    let oldRotate = 0;
                    this.mytime = setInterval(function(){
                        if(rotates > oldRotate){
                            oldRotate += 1
                        }else if(rotates < oldRotate){
                            oldRotate -= 1
                        }else{
                            clearInterval(this.mytime);
                        }
                        $(child).css({
                            zIndex:childZindex,
                            transform:'rotate(' + oldRotate + 'deg) scale(1)'
                        })
                    },20);
                }else{
                    console.log('还没进来就想出去？想的美')
                }
            }
        }
    }
    const newPhoto = new PhotoList();
    newPhoto.init();







})