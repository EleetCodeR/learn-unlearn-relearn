//Complexity : O(n) Time | O(1) Space 
function subarraySort(array) {
	let min = Infinity;
	let max = -Infinity;
	for(let i = 0; i<array.length;i++){
		const num = array[i];
		if(isOutOfOrder(i,num,array)){
			min = Math.min(min,num);		
			max = Math.max(max,num);
		}
	}
	if(min === Infinity){
		return [-1,-1];
	}
	let subArrLeftIdx = 0 ;
	while(min >= array[subArrLeftIdx]){
		subArrLeftIdx++;
	}
	
	let subArrRightIdx = array.length-1;
	while(max <= array[subArrRightIdx]){
		subArrRightIdx--;
	}
	
	return [subArrLeftIdx,subArrRightIdx]
}

function isOutOfOrder(i,num,array){
	if(i=== 0) return num > array[i+1];
	if(i === array.length-1) return num < array[i-1];
	return num > array[i+1] || num < array[i-1];
}

