//Q1.
var Minimal_Angle = (h, m) =>  
{ 
       let hangle =((h*360)/12 + (m*360)/ (12*60)); 
       let mangle =((m*360)/60); 
       let angle =Math.abs(hangle-mangle);
       if (angle>180){ 
         angle=360-angle; 
       } 
       return angle;
}; 

//Q2.
var Check_Leap = (year) => 
{
 
  if((0===year%4) && (0!=year%100) || (0===year%400)){
    return "Leap Year"
  }
  else{
    return "Non Leap Year"
  }

};

//Q3.
 
var Perfect_Check = (N) => 
{
    let sum =1 ;
    for(let i=1; i<=N/2; i++){
      if (N%i===0){
        sum=sum+1
      }
    }
    if(N===sum){
      return "YES"
    }
    else{
      return "NO"
    }
        
};

//Q4.
 
var Reverse_Number = (N) => 
{
  
rev =0;
while(N>0) {
  r=N%10;
  rev=rev*10+r;
  N=parseInt(N/10);
}
return rev
};

//Q5.

var Substring_Check = (S1, S2) => 
{
    const arr=S1.split(" ")
    
    for(let i=0; i < arr.length; i++){
      if (arr[i]===S2){
        return "YES"
      }
    }
    return "NO"
};

