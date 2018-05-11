$(function(){

  const box = $('#box');

  let arr = [];
  for(let i = 0;i < 15;i ++){
    arr.push([])
  }
  for(let j = 0;j < 15;j ++){
    for(let a = 0;a < 15;a ++){
      arr[j].push([]);
    }
  }
  for(let i = 0;i < 15;i ++){
    box.append('<div class="hang"></div>');
  }
  for(let j = 0;j < 15;j ++){
    $('.hang').append('<p class="danyuan"></p>');
  }
  let first = false;
  let canXiaZi = true;
  $('p').click(function(){
    if(canXiaZi){
      const parentIndex = $(this).parent().index() * 1;
      const childIndex = $(this).index() * 1;
      if(!(this.a)){
        if(first){
          $(this).css({background:'deeppink'});
          arr[parentIndex][childIndex].push('deeppink');
          this.a = true;
          count(arr);
        }else{
          $(this).css({background:'deepskyblue'});
          arr[parentIndex][childIndex].push('deepskyblue');
          this.a = true;
          count(arr);
        }
        first = !first;
      }else{
        alert('不能重复下子');
      }
    }
  });

  function count(arr){
    for(let i = 0;i < arr.length;i ++){
      for(let j = 0;j < arr[i].length;j++){
        if(arr[i][j].length <= 0){
          continue;
        }else{
          //横向判断
          if(arr[i][j][0] === 'deeppink'
            && arr[i][j + 1][0] === 'deeppink'
            && arr[i][j + 2][0] === 'deeppink'
            && arr[i][j + 3][0] === 'deeppink'
            && arr[i][j + 4][0] === 'deeppink'){
            alertName('粉');

          }else if(arr[i][j][0] === 'deepskyblue'
            && arr[i][j + 1][0] === 'deepskyblue'
            && arr[i][j + 2][0] === 'deepskyblue'
            && arr[i][j + 3][0] === 'deepskyblue'
            && arr[i][j + 4][0] === 'deepskyblue'){
            alertName('蓝');
          }
          //纵向
          if(arr[i][j][0] === 'deeppink'
            && arr[i + 1][j][0] === 'deeppink'
            && arr[i + 2][j][0] === 'deeppink'
            && arr[i + 3][j][0] === 'deeppink'
            && arr[i + 4][j][0] === 'deeppink'){
            alertName('粉');
          }else if(arr[i][j][0] === 'deepskyblue'
            && arr[i + 1][j][0] === 'deepskyblue'
            && arr[i + 2][j][0] === 'deepskyblue'
            && arr[i + 3][j][0] === 'deepskyblue'
            && arr[i + 4][j][0] === 'deepskyblue'){
            alertName('蓝');
          }
          //左倾斜
          if(arr[i][j][0] === 'deeppink'
            && arr[i + 1][j + 1][0] === 'deeppink'
            && arr[i + 2][j + 2][0] === 'deeppink'
            && arr[i + 3][j + 3][0] === 'deeppink'
            && arr[i + 4][j + 4][0] === 'deeppink'){
            alertName('粉');
          }else if(arr[i][j][0] === 'deepskyblue'
            && arr[i + 1][j + 1][0] === 'deepskyblue'
            && arr[i + 2][j + 2][0] === 'deepskyblue'
            && arr[i + 3][j + 3][0] === 'deepskyblue'
            && arr[i + 4][j + 4][0] === 'deepskyblue'){
            alertName('蓝');
          }
          //右倾斜
          if(arr[i][j][0] === 'deeppink'
            && arr[i + 1][j - 1][0] === 'deeppink'
            && arr[i + 2][j - 2][0] === 'deeppink'
            && arr[i + 3][j - 3][0] === 'deeppink'
            && arr[i + 4][j - 4][0] === 'deeppink'){
            alertName('粉');
          }else if(arr[i][j][0] === 'deepskyblue'
            && arr[i + 1][j - 1][0] === 'deepskyblue'
            && arr[i + 2][j - 2][0] === 'deepskyblue'
            && arr[i + 3][j - 3][0] === 'deepskyblue'
            && arr[i + 4][j - 4][0] === 'deepskyblue'){
            alertName('蓝');
          }
        }
      }
    }
  }

  function alertName(a){
    if(confirm(a + '棋胜利了，是否继续？')){
      window.location.reload();
    }else{
      canXiaZi = false;
      return false;
    }
  }

  $('#btn').click(function(){
    window.location.reload();
  })

});