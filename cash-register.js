function strip(number) {
    return (parseFloat(number.toPrecision(12)));
}
function checkCashRegister(price, cash, cid) {
  let curr = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  }
  let obj = {
    status: obj,
    change: []
  }

  let change = cash - price;
  console.log("change is " + change)
  for (let i = cid.length - 1; i >= 0; i--) {

    if (change >= curr[cid[i][0]] && cid[i][1] !== 0) {

      let multpCount = parseInt(change / curr[cid[i][0]]);
      let add = 0;
      while (multpCount > 0) {
        add = strip(add + curr[cid[i][0]]) ;
        cid[i][1] = strip(cid[i][1] - curr[cid[i][0]]) ;
        multpCount--;
        if (cid[i][1] == 0) {
          break;
        }
      }
      change = strip(change - add);

      obj.change.push([cid[i][0], add])
    }
  }
  
  if (change != 0) {
    obj.status = "INSUFFICIENT_FUNDS";
    obj.change = [];
  }
  else if (cid.every(x => x[1] == 0)) {
    obj.status = "CLOSED";
    cid.filter(x => {
      if(!obj.change.some(y => y[0] == x[0])){    // to exclude the same array elements in both cid and object.change array.
        obj.change.push(x)
      }
    })
  }
  else obj.status = "OPEN";

  console.log(obj)
 
  return obj;
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
