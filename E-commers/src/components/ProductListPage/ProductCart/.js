export function comma(a)

{
  let t=a.toString();
  let s=''
  var n=t.length;
  s=t.substring(n-3,)
  n=n-3;
  while(n>=2){
    s=t.substring(n-2,n)+","+s
    n-=2

  }
  if(n!=0)
    s=t.substring(0,n)+","+s;

  return s
}