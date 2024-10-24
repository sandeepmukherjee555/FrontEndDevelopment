var teacher = "Sandeep"; // teacher -> global -> Sandeep
function ask(question) { // ask -> gloabl , question -> ask
    console.log(teacher, question); // Sandeep ,Why
}
function fun() { // fun -> global
    var teacher = "Sushil"; // teacher -> fun -> Sushil
    ask("Why");
}
fun();