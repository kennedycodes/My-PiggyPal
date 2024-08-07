


//menu tab pages
function openPage(pageName, elmnt) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");

    for(i=0; i<tabcontent.length; i++)
    {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
      }

      document.getElementById(pageName).style.display = "block";
      elmnt.style.backgroundColor = color;
}

//calculating goal amounts for tables
function calcBudget() {
    // Assuming a 50/30/20 budget split
    var preTax = document.getElementById("annualIncome").value;
    var postTax;
    var federalTax;
    var socialTax = preTax * .062;
    var medicareTax = preTax * .0145;

    if (preTax <= 11600) {
      federalTax = preTax * 0.1;
        } else if (preTax <= 47150) {
      federalTax =  11600 * 0.1 + (preTax - 11600) * 0.12;
        } else if (preTax <= 100525) {
      federalTax= 11600 * 0.1 + (47150 - 11600) * 0.12 + (preTax - 47150) * 0.22;
        } else if (preTax <= 191951) {
      federalTax =  11600 * 0.1 + (47150 - 11600) * 0.12 + (100525 - 47150) * 0.22 + (preTax - 100525) * 0.24;
        } else if (preTax <= 243725) {
      federalTax =  11600 * 0.1 + (47150 - 11600) * 0.12 + (100525 - 47150) * 0.22 + (191951 - 100525) * 0.24 + (preTax - 191951) * 0.32;
        } else if (preTax <= 609350) {
      federalTax =  11600 * 0.1 + (47150 - 11600) * 0.12 + (100525 - 47150) * 0.22 + (191951 - 100525) * 0.24 + (243725 - 191951) * 0.32 + (preTax - 243725) * 0.35;
        } else {
      federalTax =  11600 * 0.1 + (47150 - 11600) * 0.12 + (100525 - 47150) * 0.22 + (191951 - 100525) * 0.24 + (243725 - 191951) * 0.32 + (609350 - 243725) * 0.35 + (preTax - 609350) * 0.37;
        }

      postTax = preTax - federalTax - socialTax - medicareTax;
      document.getElementById("post-tax").innerHTML = ("Estimated Post-Tax Income: ");
      document.getElementById("post-tax2").innerHTML = postTax.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

      document.getElementById("post-tax2").style.display = "block";

      document.getElementById("tax-amount").innerHTML = ("Estimated Tax Liabilities: ");
      document.getElementById("tax-amount2").innerHTML = ((federalTax + socialTax + medicareTax).toLocaleString('en-US', { style: 'currency', currency: 'USD' }));

      document.getElementById("tax-amount2").style.display = "block";



      //alert("Total annual tax: " + (federalTax + socialTax +medicareTax) );

    //rent calculations
    var rentMax = (postTax * 0.20 / 12); // 30% of annual income, divided by 12 months
    document.getElementById("rentMax").innerHTML = rentMax.toLocaleString('en-US', { style: 'currency', currency: 'USD' });;
    var rentGoal = ((postTax * .15)/12);
    document.getElementById("rentGoal").innerHTML = rentGoal.toLocaleString('en-US', { style: 'currency', currency: 'USD' });;

    //utilities
    var utilMax = (postTax * 0.15 * .50 / 12);
    var utilGoal = (postTax * 0.10 *.5 / 12);
    document.getElementById("utilMax").innerHTML = utilMax.toLocaleString('en-US', { style: 'currency', currency: 'USD' });;
    document.getElementById("utilGoal").innerHTML = utilGoal.toLocaleString('en-US', { style: 'currency', currency: 'USD' });;

    //car
    var carMax = (postTax * 0.10   / 12);
    var carGoal = (postTax * 0.15 * .50 / 12);
    document.getElementById("carMax").innerHTML = carMax.toLocaleString('en-US', { style: 'currency', currency: 'USD' });;
    document.getElementById("carGoal").innerHTML = carGoal.toLocaleString('en-US', { style: 'currency', currency: 'USD' });;

    //insurance
    var insurMax = (postTax * 0.15 * .50 / 12);
    var insurGoal = (postTax * 0.10 * .5 / 12);
    document.getElementById("insurMax").innerHTML = insurMax.toLocaleString('en-US', { style: 'currency', currency: 'USD' });;
    document.getElementById("insurGoal").innerHTML = insurGoal.toLocaleString('en-US', { style: 'currency', currency: 'USD' });;

    //groceries
    var grocMax = (postTax * 0.15 * .50 / 12);
    var grocGoal = (postTax * 0.10 * .50 / 12);
    document.getElementById("grocMax").innerHTML = grocMax.toLocaleString('en-US', { style: 'currency', currency: 'USD' });;
    document.getElementById("grocGoal").innerHTML = grocGoal.toLocaleString('en-US', { style: 'currency', currency: 'USD' });;

    
    //total max
    var totalNeedsMax = (parseFloat(rentMax) + parseFloat(utilMax) + parseFloat(carMax) + parseFloat(insurMax) + parseFloat(grocMax)).toLocaleString('en-US', { style: 'currency', currency: 'USD' });;
    document.getElementById("totalNeedsMax").innerHTML = totalNeedsMax;

    //total goal
    var totalNeedsGoal = (parseFloat(rentGoal) + parseFloat(utilGoal) + parseFloat(carGoal) + parseFloat(insurGoal) + parseFloat(grocGoal)).toLocaleString('en-US', { style: 'currency', currency: 'USD' });;
    document.getElementById("totalNeedsGoal").innerHTML = totalNeedsGoal;

    //wants------------------------------------

    //phone
    var phoneMax = (postTax * 0.15 * .30 / 12).toFixed(2);
    var phoneGoal = (postTax * 0.10 * .30 / 12).toFixed(2);
    document.getElementById("phoneMax").innerHTML = `$${phoneMax}`;
    document.getElementById("phoneGoal").innerHTML = `$${phoneGoal}`;

    //eating out
    var eatingMax = (postTax * 0.15 * .50 / 12).toFixed(2);
    var eatingGoal = (postTax * 0.10 * .50 / 12).toFixed(2);
    document.getElementById("eatingMax").innerHTML = `$${eatingMax}`;
    document.getElementById("eatingGoal").innerHTML = `$${eatingGoal}`;

    //pet care
    var petMax = (postTax * 0.15 * .50 / 12).toFixed(2);
    var petGoal = (postTax * 0.10 * .50 / 12).toFixed(2);
    document.getElementById("petMax").innerHTML = `$${petMax}`;
    document.getElementById("petGoal").innerHTML = `$${petGoal}`;

    //streaming
    var streamingMax = (postTax * 0.15 * .50 / 12).toFixed(2);
    var streamingGoal = (postTax * 0.10 * .50 / 12).toFixed(2);
    document.getElementById("streamingMax").innerHTML = `$${streamingMax}`;
    document.getElementById("streamingGoal").innerHTML = `$${streamingGoal}`;

    //gym
    var gymMax = (postTax * 0.15 * .50 / 12).toFixed(2);
    var gymGoal = (postTax * 0.10 * .50 / 12).toFixed(2);
    document.getElementById("gymMax").innerHTML = `$${gymMax}`;
    document.getElementById("gymGoal").innerHTML = `$${gymGoal}`;

    //misc
    var miscMax = (postTax * 0.15 * .50 / 12).toFixed(2);
    var miscGoal = (postTax * 0.10 * .50 / 12).toFixed(2);
    document.getElementById("miscMax").innerHTML = `$${miscMax}`;
    document.getElementById("miscGoal").innerHTML = `$${miscGoal}`;

      //total max
      var totalWantsMax = (parseFloat(phoneMax) + parseFloat(eatingMax) + parseFloat(petMax) + parseFloat(streamingMax) + parseFloat(gymMax) + parseFloat(miscMax)).toFixed(2);
    document.getElementById("totalWantsMax").innerHTML = `$${totalWantsMax}`;

      //total goal
      var totalWantsGoal = (parseFloat(phoneGoal) + parseFloat(eatingGoal) + parseFloat(petGoal) + parseFloat(streamingGoal) + parseFloat(gymGoal) + parseFloat(miscGoal)).toFixed(2);
    document.getElementById("totalWantsGoal").innerHTML = `$${totalWantsGoal}`;

    //savings----------------------------------
    
    //retirement
    var retireGoal = (preTax * 0.15 / 12);
    document.getElementById("retireGoal").innerHTML = retireGoal.toLocaleString('en-US', { style: 'currency', currency: 'USD' });;

    //savings
    var savings = (preTax * 0.05 / 12);
    document.getElementById("savings").innerHTML = savings.toLocaleString('en-US', { style: 'currency', currency: 'USD' });;

    


    
  }

document.addEventListener("DOMContentLoaded", function() {

    //personal info accordion block
    var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

    document.querySelector(".tablink.active").click();

    //total actual needs

    //var totalNeedsActual = document.getElementById("rentActual").value + document.getElementById("carActual").value + document.getElementById("utilitiesActual").value + document.getElementById("insuranceActual").value + document.getElementById("groceriesActual").value;
    //totalNeedsActual = totalNeedsActual.toFixed(2);
    //document.getElementById("totalNeedsActual").value = totalNeedsActual; 

    //total actual wants

    //total actual savings
});

document.addEventListener('input',function(){

  var preTax = document.getElementById("annualIncome").value;
    var postTax;
    var federalTax;
    var socialTax = preTax * .062;
    var medicareTax = preTax * .0145;

    if (preTax <= 11600) {
      federalTax = preTax * 0.1;
        } else if (preTax <= 47150) {
      federalTax =  11600 * 0.1 + (preTax - 11600) * 0.12;
        } else if (preTax <= 100525) {
      federalTax= 11600 * 0.1 + (47150 - 11600) * 0.12 + (preTax - 47150) * 0.22;
        } else if (preTax <= 191951) {
      federalTax =  11600 * 0.1 + (47150 - 11600) * 0.12 + (100525 - 47150) * 0.22 + (preTax - 100525) * 0.24;
        } else if (preTax <= 243725) {
      federalTax =  11600 * 0.1 + (47150 - 11600) * 0.12 + (100525 - 47150) * 0.22 + (191951 - 100525) * 0.24 + (preTax - 191951) * 0.32;
        } else if (preTax <= 609350) {
      federalTax =  11600 * 0.1 + (47150 - 11600) * 0.12 + (100525 - 47150) * 0.22 + (191951 - 100525) * 0.24 + (243725 - 191951) * 0.32 + (preTax - 243725) * 0.35;
        } else {
      federalTax =  11600 * 0.1 + (47150 - 11600) * 0.12 + (100525 - 47150) * 0.22 + (191951 - 100525) * 0.24 + (243725 - 191951) * 0.32 + (609350 - 243725) * 0.35 + (preTax - 609350) * 0.37;
        }

      postTax = preTax - federalTax - socialTax - medicareTax;
      
  //total needs
  const actualNeed = document.querySelectorAll('.actualNeeds');
  let total = 0;

  actualNeed.forEach( actualNeeds => {
    const value = parseFloat(actualNeeds.value);
    if(!isNaN(value)){
      total += value;
    }
  });

  showTotal = "$"+ total.toFixed(2);
  document.getElementById('totalNeedsActual').textContent = showTotal;

  //total wants
  const actualWant = document.querySelectorAll('.actualWants');
  total = 0;

  actualWant.forEach( actualWants => {
    const value = parseFloat(actualWants.value);
    if(!isNaN(value)){
      total += value;
    }
  });

  showTotal = "$"+ total.toFixed(2);
  document.getElementById('totalWantsActual').textContent = showTotal;

  //total savings
  const actualSaving = document.querySelectorAll('.actualSavings');
  total = 0;

  actualSaving.forEach( actualSavings => {
    const value = parseFloat(actualSavings.value);
    if(!isNaN(value)){
      total += value;
    }
  });

  showTotal = "$"+ total.toFixed(2);
  document.getElementById('totalSavingsActual').textContent = showTotal;

  var needsExcess = (((postTax*.50)/12) - parseFloat(document.getElementById("totalNeedsActual").innerHTML.replace(/[^0-9.-]+/g,""))).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    var excessText = ("Over-Budget By: " + needsExcess);

    if (needsExcess<0){
      document.getElementById("needsExcess").innerHTML = excessText;
    }
    else{
      excessText = "Under-Budget By: " + needsExcess;
      document.getElementById("needsExcess").innerHTML = excessText;
    }

    var wantsExcess = (((postTax*.30)/12) - parseFloat(document.getElementById("totalWantsActual").innerHTML.replace(/[^0-9.-]+/g,""))).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    excessText = ("Over-Budget By: " + wantsExcess);

    if (wantsExcess<0){
      document.getElementById("wantsExcess").innerHTML = excessText;
    }
    else{
      excessText = "Under-Budget By: " + wantsExcess;
      document.getElementById("wantsExcess").innerHTML = excessText;
    }

    var savingsExcess = ((preTax*.20)/12).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    excessText = ("Expected Savings: " + savingsExcess);
    document.getElementById("savingsExcess").innerHTML = excessText;

//    if (savingsExcess<0){
   //   document.getElementById("savingsExcess").innerHTML = excessText;
  //  }
  //  else{
  //    excessText = "Under-Budget By: $" + savingsExcess;
  //    document.getElementById("savingsExcess").innerHTML = excessText;
  //  }

});
  
  function calculateSplurge() {
      const inputValue = document.getElementById('totalAmount').value;
      const totalAmount = parseFloat(inputValue.replace(/[^0-9.]/g, ''));
  
      let result = '';
  
      if (isNaN(totalAmount) || totalAmount <= 0) {
          result = 'Please enter a valid total amount needed.';
      } else {
          const plans = [
              { period: '3 months', months: 3 },
              { period: '6 months', months: 6 },
              { period: '1 year', months: 12 },
              { period: '2 years', months: 24 },
              { period: '3 years', months: 36 },
              { period: '5 years', months: 60 },
              { period: '10 years', months: 120 }
          ];
  
          result += '<ul>';
          plans.forEach(plan => {
              const amountPerMonth = totalAmount / plan.months;
              result += `<li>${plan.period}: $${amountPerMonth.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} per month</li>`;
          });
          result += '</ul>';
      }
  
      document.getElementById('result').innerHTML = result;
      document.getElementById('result').style.display = 'block';
  }

  //debt management---------------------------------------
  let debts = [];

  document.getElementById('debtAmount').addEventListener('input', function (e) {

    let value = e.target.value;
    value = value.replace(/[^0-9.]/g, '');
    e.target.value = value;
  })
  
  function addDebt() {
    const debtType = document.getElementById('debtType').value;
    const debtAmount = parseFloat(document.getElementById('debtAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const minMonthly = parseFloat(document.getElementById('minMonthly').value);


    if (isNaN(debtAmount) || debtAmount <= 0) {
        alert('Please enter a valid debt amount.');
        return;
    }

    else if (isNaN(interestRate) || interestRate <= 0) {
      alert('Please enter a valid interest rate.');
      return;
  }

  else if (isNaN(minMonthly) || minMonthly <= 0) {
    alert('Please enter a valid minimum monthly payment.');
    return;
}

    debts.push({ type: debtType, amount: debtAmount, rate: interestRate, minM: minMonthly });

    updateDebtList();
}

function updateDebtList() {
  //const debtItems = document.getElementById('debtItems');
    //debtItems.innerHTML = ''; // Clear the current list

    //debts.forEach(debt => {
      //const debtItem = document.createElement('div');
      //debtItem.classList.add('debt-item');
       // const debtDetails = `${debt.type}: ${debt.amount.toLocaleString()}<br>
        //Interest Rate: ${debt.rate.toLocaleString()}%<br>
        //Min. Monthly Payment: ${debt.minM.toLocaleString()}`;
        
       // debtItem.innerHTML = debtDetails;
      //  debtItems.appendChild(debtItem);
   // });
   // document.getElementById('debtItems').style.display = 'block';
   const debtItems = document.getElementById('debtItems');
   debtItems.innerHTML = '';

   debts.forEach(debt => {
       const li = document.createElement('li');
       const debtDetails = `${debt.type}: <br>Balance: $${debt.amount.toLocaleString()}<br>
       Interest Rate: ${debt.rate.toLocaleString()}%<br>
       Min. Monthly Payment: ${debt.minM.toLocaleString()}`;
       li.innerHTML = debtDetails;
       debtItems.appendChild(li);
   });
}

let credits = [];

document.getElementById('creditBalance').addEventListener('input', function (e) {

  let value = e.target.value;
  value = value.replace(/[^0-9.]/g, '');
  e.target.value = value;
})

function addCredit(){

  /*const creditName = document.getElementById('creditName').value;
  const creditBalance = document.getElementById('creditBalance').value;
  const creditLimit = document.getElementById('creditLimit').value;
  const creditRate = document.getElementById('creditRate').value;
  const closingDate = document.getElementById('closingDate').value;
  const dueDate = document.getElementById('dueDate').value;

  if(creditName <= 0){
    alert('Please enter a valid credit name.');
        return;
  }
  else if (isNaN(creditBalance) || creditBalance <= 0) {
    alert('Please enter a valid credit balance.');
    return;
}
else if (isNaN(creditLimit) || creditLimit <= 0) {
  alert('Please enter a valid credit limit.');
  return;
}

else if (isNaN(creditRate) || creditRate <= 0) {
  alert('Please enter a valid credit rate.');
  return;
}
else if (closingDate<=0) {
  alert('Please enter a valid closing date.');
  return;
}
else if (dueDate <= 0) {
  alert('Please enter a valid due date.');
  return;
}

  credits.push({name: creditName, balance: creditBalance, limit: creditLimit, rate: creditRate, closing: closingDate, due: dueDate});

updateCreditList();*/

const creditName = document.getElementById('creditName').value;
        const creditBalance = document.getElementById('creditBalance').value;
        const creditLimit = document.getElementById('creditLimit').value;
        const creditRate = document.getElementById('creditRate').value;
        const closingDate = document.getElementById('closingDate').value;
        const dueDate = document.getElementById('dueDate').value;

        const creditUtilizationRate = ((creditBalance / creditLimit) * 100).toFixed(2);

        if(creditName <= 0){
          alert('Please enter a valid credit name.');
              return;
        }
        else if (isNaN(creditBalance) || creditBalance <= 0) {
          alert('Please enter a valid credit balance.');
          return;
      }
      else if (isNaN(creditLimit) || creditLimit <= 0) {
        alert('Please enter a valid credit limit.');
        return;
      }
      
      else if (isNaN(creditRate) || creditRate <= 0) {
        alert('Please enter a valid credit rate.');
        return;
      }
      else if (closingDate<=0) {
        alert('Please enter a valid closing date.');
        return;
      }
      else if (dueDate <= 0) {
        alert('Please enter a valid due date.');
        return;
      }        

        // Create a new list item
        const li = document.createElement('li');
        const creditDetails = `Name: ${creditName}<br> 
        Balance: $${creditBalance}<br> 
        Limit: $${creditLimit}<br>
        Rate: ${creditRate}%<br>
        Closing Date: ${closingDate}<br>
        Due Date: ${dueDate}<br>
        Credit Utilization Rate: ${creditUtilizationRate}%`;

        li.innerHTML=creditDetails;
        
        // Append the new list item to the credit items list
        document.getElementById('creditItems').appendChild(li);

        // Clear the form inputs after adding the credit card
        document.getElementById('creditForm').reset();
}

function updateCreditList(){

  const creditItems = document.getElementById('creditItems');
  creditItems.innerHTML = '';

  credits.forEach(credit => {
    const list = document.createElement('li');
    const creditDetails = `${credit.name}:<br>
    Balance: $${credit.balance.toLocaleString()}<br>
    Limit: $${credit.limit.toLocaleString()}<br>
    Interest Rate: ${credit.rate}%<br>
    Closing Date: ${credit.closing.toLocaleString()}<br>
    Due Date: ${credit.due.toLocaleString()}`;

    list.innerHTML = creditDetails;

    creditItems.appendChild(list);
  });
}

function selectMethod(method) {
  if (debts.length === 0) {
      alert('Please add your debts first.');
      return;
  }

  let sortedDebts = [];

  if (method === 'snowball') {
      sortedDebts = debts.sort((a, b) => a.amount - b.amount);
  } else if (method === 'avalanche') {
      sortedDebts = debts.sort((a, b) => b.rate - a.rate);
  }

  const priorityList = document.getElementById('priorityList');
  priorityList.innerHTML = '';

  sortedDebts.forEach(debt => {
      const li = document.createElement('li');
      //li.textContent = `${debt.type}: $${debt.amount.toLocaleString()}`;
      //priorityList.appendChild(li);
      const debtDetails = `${debt.type}: <br>Balance: $${debt.amount.toLocaleString()}<br>
       Interest Rate: ${debt.rate.toLocaleString()}%<br>
       Min. Monthly Payment: ${debt.minM.toLocaleString()}`;
       li.innerHTML = debtDetails;
       priorityList.appendChild(li);
  });

  document.getElementById('debtResults').style.display = 'block';
}

//investment calculations

function calculateInvestment(){

  const initialAmount = parseFloat(document.getElementById('initialAmount').value);
        const annualReturn = parseFloat(document.getElementById('annualReturn').value) / 100;
        const years = parseInt(document.getElementById('years').value);
        const contributionType = document.getElementById('contributionType').value;
        const contributionAmount = parseFloat(document.getElementById('contributionAmount').value);
        
        if (isNaN(initialAmount) || isNaN(annualReturn) || isNaN(years) || isNaN(contributionAmount)) {
            alert('Please enter valid values.');
            return;
        }

        const n = contributionType === 'monthly' ? 12 : 1;
        const r = annualReturn / n;
        const nt = n * years;

        const futureValue = initialAmount * Math.pow((1 + r), nt) + contributionAmount * ((Math.pow((1 + r), nt) - 1) / r);

  const message = `After ${years} years, your investment will grow to ${futureValue.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}.`;

  document.getElementById('investmentResult').innerHTML = message;
}

let chart;

function createChart() {
  const ctx = document.getElementById('budgetChart').getContext('2d');

  chart = new chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Needs','Wants','Savings'],
      datasets: [{
        label: 'Budget Distribution',
        data:[0,0,0],
        backgroundColor: ['#ff6384','#36a2eb','#cc65fe'],
        hoverOffset: 4
      }]
    },
    options:{
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Budget Distribution'
        }
      }
    }
  });

  alert('got here');
}

function updateChart() {
  const needs = parseFloat(document.getElementById('totalNeedsActual').value) || 0;
  const wants = parseFloat(document.getElementById('totalWantsActual').value) || 0;
  const savings = parseFloat(document.getElementById('totalSavingsActual').value) || 0;

  chart.data.datasets[0].data = [needs, wants, savings];
  chart.update();
}

document.addEventListener('DOMContentLoaded', function() {
  createChart();

  const inputs = document.querySelectorAll('table input[type="number"]');
  inputs.forEach(input => {
    input.addEventListener('input',updateChart);
  });

  alert('got here');
});