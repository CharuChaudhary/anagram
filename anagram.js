function sort(s)
{
    var str=s.toLowerCase();
    /* converting string to array*/
    var ar=[];
    for(var i=0;i<str.length;i++)
    {
        ar.push(str[i]);
    }
    /* sorting the array alphabets*/
    for(var i =0;i<ar.length;i++)
    {
        for(var j=i+1;j<ar.length;j++)
        {
            if(ar[i]>ar[j])
            {
                temp=ar[i];
                ar[i]=ar[j];
                ar[j]=temp;
            }
        }
    }
    /* converting the array elements to a string */
    for(var i=0;i<ar.length;i++)
    {
        var string= string + ar[i];
    }
    
    return string;
}
var strng1=sort("lsiten");/* Firts Input*/
var strng2=sort("Tenlis");/* Second Input*/
len1=strng1.length;
len2=strng2.length;
if(strng1==strng2)
{
    console.log(" anagram");
}
else
{
    console.log(" not an anagram");
}
