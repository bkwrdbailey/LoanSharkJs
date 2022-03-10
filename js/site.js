// Gets values from user and passes them onto other functions
function getValues() {
    let loanAmt = document.getElementById("loanAmt").value;
    let loanTerm = document.getElementById("termAmt").value;
    let intRate = document.getElementById("interestRate").value;

    loanAmt = parseInt(loanAmt)
    loanTerm = parseInt(loanTerm);
    intRate = parseInt(intRate);

    // Acquires monthly pay by passing in the user's inputted loan amount, loan term, and the interest rate
    let mthlyPay = monthlyPayments(loanAmt, loanTerm, intRate);

    // Function displays table formatted results based on the monthly pay variable
    displayTableResults(mthlyPay, loanTerm, loanAmt, intRate);
}

// Calculates the monthly payments someone would have to make based on loan amount, term amount, and the interest rate
function monthlyPayments(amt, term, rate) {

    monthlyPay = Math.round((amt * (rate/1200)) / (1 - Math.pow((1 + rate/1200), -term)) * 100) / 100;

    return monthlyPay;
}

// Outputs the total results for monthly pay, principal, interest, and cost
function displayTotalResults(mthlyPay, loanAmt, totalInt) {

    document.getElementById("monthlyPayments").innerHTML = "";
    document.getElementById("monthlyPayments").innerHTML = `$${mthlyPay.toString()}`;

    document.getElementById("totalPrincipal").innerHTML = "";
    document.getElementById("totalPrincipal").innerHTML = `$${loanAmt.toString()}`;

    document.getElementById("totalInterest").innerHTML = "";
    document.getElementById("totalInterest").innerHTML = `$${totalInt.toString()}`;

    let totalCost = totalInt + loanAmt;

    document.getElementById("totalCost").innerHTML = "";
    document.getElementById("totalCost").innerHTML = `$${totalCost.toString()}`;

}

// Outputs results in a table format of the total loan being paid overtime with added interest
function displayTableResults(mthlyPay, totalMonths, balance, intRate) {
    
    let mthlyIntPay = Math.round(loanAmt * (intRate/1200) * 100) / 100;
    let mthlyPrincPay = Math.round((mthlyPay - intPay) * 100) / 100;
    let totalInt = mthlyIntPay;
    let remainBal = balance;
    let table = "";

    for (let i = 0; i <= totalMonths; i++) {

        remainBal = Math.round((remainBal - princPay) * 100) / 100;

        table += `<tr><th scope="row">${i}<th><td>${mthlyPay}<td><td>${princPay}<td><td>${intPay}<td><td>${totalInt}<td><td>${remainBal}<td><tr>`;
        
        mthlyIntPay = Math.round((remainBal * (intRate/1200)) * 100) / 100;
        mthlyPrincPay = Math.round((mthlyPay - intPay) * 100) / 100;
        totalInt = Math.round((totalInt + intPay) * 100) / 100;
    }

    displayTotalResults(mthlyPay, balance, totalInt,)

    document.getElementById("resultsBody").innerHTML = table;

}