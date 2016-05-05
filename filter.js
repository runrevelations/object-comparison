var trueObj = {
	name: 'Chris',
	age: 26,
	eye: 'Brown'
};

var falseObj = {
    age: '',
    eye: '',
    name: '',
    birthDate: ''
};

var filter = {
	age: '',
	eye: '',
	name: '',
};



function reqCompareKeys(object, filterObj) {
    
    var objectProps = Object.getOwnPropertyNames(object).sort();
    var filterProps = Object.getOwnPropertyNames(filterObj).sort();
    var answer;
    
    for (var i in objectProps){

    	if (objectProps[i] === filterProps[i]){
            answer = true;
    	} else {
            answer = false;
    	};

    };

    return answer;

};

// should return true
console.log(reqCompareKeys(trueObj, filter));
// should return false
console.log(reqCompareKeys(falseObj, filter));
