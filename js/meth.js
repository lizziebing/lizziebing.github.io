
//快速排序
function quickSort(array){
	function sort(prev,numsize)
	{
		var noninus = prev;
		var j=numsize-1;
		var flag=array[prev];
		if((numsize-prev)>1)
			{
			while(nonius<j)
				{
				 for(;nonius<j;j++)
					 {
					 if(array[j]<flag)
					 { array[nonius++]=array[j]//a[i]=a[j];i+=1;
						 break;
					 }
					 }
				 for(;nonius<j;nonius++)
					{
					if(array[nonius]>flag)
						{
						array[j--]=array[nonius];
						break;
						}
					}
				}
			array[nonius]=flag;
			sort(0,nonius);
			sort(nonius+1,numsize);
			}		
	}
	sort(0,array.length);
	return array;
}
//二分查找

function binary(find,arr,low,high){
	if(low<=high)
		{
		if(arr[low]==find)
			{
			return low;
			}
		if(arr[high==find])
			{
			return high;
			}
		var mid=Math.ceil((high+low)/2);//执行向上舍入，即它总是将数值向上舍入为最接近的整数；
		if(arr[mid]==find)
			{
			return mid;
			}else if(arr[mid]>find)
				{
				return binary(find,arr,low,mid-1);
				}else{
					return binary(find,arr,mid+1,high);
				}
		}
	return -1;
}
binary(14,Arr,0,Arr.length-1);
//英文首字母大写
function changeCase(frmObj) { 
var index; 
var tmpStr; 
var tmpChar; 
var preString; 
var postString; 
var strlen; 
tmpStr = frmObj.value.toLowerCase(); 
strLen = tmpStr.length; 
if (strLen > 0) { 
for (index = 0; index < strLen; index++) { 
if (index == 0) { 
tmpChar = tmpStr.substring(0,1).toUpperCase(); 
postString = tmpStr.substring(1,strLen); 
tmpStr = tmpChar + postString; 
} 
else { 
tmpChar = tmpStr.substring(index, index+1); 
if (tmpChar == " " && index < (strLen-1)) { 
tmpChar = tmpStr.substring(index+1, index+2).toUpperCase(); 
preString = tmpStr.substring(0, index+1); 
postString = tmpStr.substring(index+2,strLen); 
tmpStr = preString + tmpChar + postString; 
} 
} 
} 
} 
frmObj.value = tmpStr; 
} 
//正则
function ReplaceFirstUper(str)  
{     
    str = str.toLowerCase();     
    return str.replace(/\b(\w)|\s(\w)/g, function(m){  
        return m.toUpperCase();  
    });    
}  