// • Create a function that takes another function as an argument and calls it after 3 seconds (HOF + Callback).
function abcd(fn){
    setTimeout(fn, 3000);
}

abcd(function(){
    console.log("hello");
    
});


// • Implement your own version of *.map()' as a higher-order function.
var arr = [1, 2, 3, 45, 67];

function shah(array, fn) {
    var nearr = [];
    for (var i = 0; i < array.length; i++) {
        nearr.push(fn(array[i])); 
    }
    return nearr;
}

var ans = shah(arr, function (value) {
    return value + 2;
});

console.log(ans); 


// • Write a function that uses closures to create a counter.
function counter(){
    let count = 0;
    return function(){
        count ++;
        console.log(count);
        
    }
}

var fn = counter();
fn();

// • Implement a function that limits how many times another function can be called (Closure + HOF).

function funlimits(fn, limit) {
    let total =0;
    return function(){
        if(total < limit){
            total++;
            fn();
        }
        else{
            console.error("Limit Reached by Pro Pack for Limit!");
        };
    };
};

var called = funlimits(function(){
    console.log("Hello World");
    
},2);

called();

// 1 API Rate Limiting
// Suppose kisi API endpoint pe limited requests allow hain.
// Is function ka use karke ek user ko fixed calls tak limit kar sakte hain.
const apiLimiter = funlimits(() => {
    console.log("API Call Successful ✅");
}, 5);

apiLimiter(); 
apiLimiter(); 
apiLimiter(); 
apiLimiter(); 
apiLimiter(); 
apiLimiter(); // "Limit Reached by Pro Pack for Limit!"
//  Use Case: Agar ek free user sirf 5 requests/day kar sakta hai, to ye function ye ensure karega ki 6th request fail ho jaye.

// 2 Button Click Spam Prevention
// Kabhi kabhi users spam click kar dete hain, jisse unwanted server requests generate ho jati hain.
// Is function ka use karke hum ek button ko limited clicks tak restrict kar sakte hain.
const buttonClick = funlimits(() => {
    console.log("Button Clicked 🎯");
}, 3);

document.getElementById("myButton").addEventListener("click", buttonClick);
// Use Case: Suppose ek user ko sirf 3 baar submit button click karne dena hai, uske baad warning dikhani hai.

// 3️ Limited Trial Access
// Agar SaaS product hai jisme free plan users sirf 10 reports generate kar sakte hain, to hum is function ka use kar sakte hain.
// Real-World Example:
// Free Plan: Sirf 10 reports generate kar sakta hai.
// Pro Plan: Unlimited reports generate kar sakta hai.
const generateReport = funlimits(() => {
    console.log("Report Generated 📊");
}, 10);

generateReport(); 
generateReport(); 

generateReport(); // "Limit Reached by Pro Pack for Limit!"

