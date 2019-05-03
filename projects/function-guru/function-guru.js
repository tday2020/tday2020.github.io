//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    var arr =[];

  for (var key in object){
    arr.push(object[key]);
  }
return arr;
} 


//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(data) {
    /*
    Input:z[Obect] object- any object
    Output:[String]- keys seperated with a space
    Constructs: (methods, functions, iteration, conditionals)
    -OBject.keys(data);
    -arr.join("")
    Edge Cases: 
    */
    var keysArray = Object.keys(data);
    var keysStr = keysArray.join(" ");
    
    return keysStr;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
   var arr = [];
   
   for(var key in object){
       
       if(typeof object[key] === 'string'){
       
       arr.push(object[key]);
       }
   }
   
   return arr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
 if(Array.isArray(collection)){
     return "array";
 }else if(typeof collection === "object"){
     return "object";
 }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var arr = string.split(" ");
    for (var i = 0;i < arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    var name; capitalizedName = capitalizeAllWords(object.name);
    /* very close Tiana! You need to do the same thing that you did
    below in profile Info. First, get the capitalized name:
    
        var capitalizedName = capitalizeWord(object.name);
    
    Then return 
    
        return "Welcome " + capitalizedName + "!";
    */
    return "Welcome " + capitalizedName + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    var capitalizedName = capitalizeWord(object.name);
    var capitalSpecies = capitalizeWord(object.species);
    return capitalizedName + " is a " + capitalSpecies;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if(Array.isArray(object.noises)){
        if(object.noises.length > 1){
            return object.noises.join(" ");
        }else{
            return "there are no noises";
        }
    }
    return "there are no noises";
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    return string.includes(word);
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend(name, object) {
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    if(object.friends){
        for(var i = 0; i < object.friends.length; i++){
            if(object.friends[i] === name){
                return true;
            }
        }
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    var friendsList = [];
    
    for(var index in array){
        friendsList.push(array[index].name);
    }   
var result = [];

for(var i = 0; i < array.length; i++){
    if(array[i].name === name){
        for(var k = 0; k < friendsList.length; k++){
            if(array[i].friends.indexOf(friendsList[k]) > -1){
                
            }else if(friendsList[k] === array[i].name && array[i].name === name){
                
            }else{
                result.push(friendsList[k]);
             }
           }
        }
     }
   return result;

}
 

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
     for(var i in array){
         var x = array[i];
         delete object[x];
     }
     return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    var newArray = array.sort();
    var result = [];
    for(var i = 0; i < newArray.length; i++){
        if(newArray[i + 1] !== newArray[i]){
            result.push(array[i]);
        }
    }
    return result;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}