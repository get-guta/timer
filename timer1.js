const time = process.argv.slice(2);
time.sort();
if(!time){
  return
}else{ 
for(let i = 0; i < time.length; i++){
  console.log(isNaN(time[i]));
  if(time[i] < 0 || isNaN(time[i])){
    continue;
  }else{
    setTimeout(() => {
    process.stdout.write('\x07');
    
  }, time[i] * 1000);

  }
  
}
}
