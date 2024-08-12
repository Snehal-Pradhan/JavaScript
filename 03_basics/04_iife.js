// Immediately Invoked Function Expression (IIFE)

(
    function somu(){
        // named iife => iife with a name
        console.log(`DB CONNECTED`)
    }
)();
// often times there is difficulty in assinging variables due to the variables present at global scope;
// to avoid this pollution a completely diiferent scope is given by iife
// ()()

// iife is envoked but does know when to stop context and a semicolon is required.

( (name)=> {
    // may be parameters.
    // simple unnamed iife
    console.log(`DB Connected 2 ${name}`);
})('somu');

// to write 2 iife in a go ()()   ()(), we need a semicolon inbetween 
// like ()();  ()()