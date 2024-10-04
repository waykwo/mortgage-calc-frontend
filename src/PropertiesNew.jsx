import { useState, useEffect } from "react";

export function PropertiesNew({ onCreate }) {

  const [purchase_price, setPurchasePrice] = useState("500000");
  const [down_payment, setDownPayment] = useState("20");
  const [interest_rate, setInterestRate] = useState("5");
  const [amortization, setAmortization] = useState("25");
  const [loan_amount, setLoanAmount] = useState("0");
  const [monthlyPayment, setMonthlyPayment] = useState();

  const calculateMonthly = () => {
    const rate = parseFloat(interest_rate / (100 * 12));
    const paymentMonths = parseFloat(amortization * 12);
    const loan_amount = purchase_price - (purchase_price * down_payment / 100);
    const monthlyPayment = 
      loan_amount * 
      ((rate * (1 + rate) ** paymentMonths) / 
      ((1 + rate) ** paymentMonths - 1));
    setLoanAmount(loan_amount);
    setMonthlyPayment(monthlyPayment.toFixed(2));


    // const numerator = percent_interest * Math.pow((1 + percent_interest), numPayments);
    // const denominator = Math.pow((1 + percent_interest), numPayments) - 1;
    // const m = loan * (numerator / denominator);
    // console.log(m)
    // setMonthlyPayment(m);
  }

  useEffect(calculateMonthly);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onCreate(params, () => event.target.reset());
    console.log(event.target);
  };

  return (
    <div>
      <h1>Mortgage Calculator</h1>
      <form onSubmit={handleSubmit}>
        <div>
          
          <div>
            <div>
              <label htmlFor="purchase_price">Purchase Price</label>
            </div>
            <div className="slider_container">
              <input
                type="range"
                min="10000"
                max="2000000"
                step="10000"
                defaultValue="500000"
                name="purchase_price"
                id="purchase_price"
                onChange={(event) => setPurchasePrice(event.target.value)}
              />
              <div className="slider_value">{purchase_price}</div>
            </div>
          </div>

          <div>
            <div>
              <label htmlFor="down_payment">% Down Payment</label>
            </div>
           <div className="slider_container">             
              <input
                type="range"
                min="5"
                max="80"
                step="5"
                defaultValue="20"
                name="down_payment"
                id="down_payment"
                onChange={(event) => setDownPayment(event.target.value)}
              />
              <div className="slider_value">{down_payment}%</div>
           </div>
          </div>

          <div>
            <div>
              <label htmlFor="amortization">Amortization (Term)</label>
            </div>
            <div className="slider_container">
              <input
                type="range"
                min="5"
                max="30"
                step="1"
                defaultValue="25"
                name="amortization"
                id="amortization"
                onChange={(event) => setAmortization(event.target.value)}
              />
              <div className="slider_value">{amortization}</div>
            </div>
          </div>

          <div>
            <div>
              <label htmlFor="interest_rate">Interest Rate</label>
            </div>
            <div>
            {/* <div className="slider_container"> */}
              <input
                name="interest_rate"
                type="number"
                defaultValue="5"
                onChange={(event) => setInterestRate(event.target.value)}
              />
              {/* <input
                type="range"
                min="0.1"
                max="10"
                step="0.11"
                defaultValue="5"
                name="interest_rate"
                id="interest_rate"
                onChange={(event) => setInterestRate(event.target.value)}
              /> */}
              {/* <div className="slider_value">{interest_rate}%</div> */}
            </div>
          </div>

          <hr />

          <div>
            <div>
              <label>Purchase Price</label>
            </div>
            <div>
              ${Number(purchase_price).toLocaleString()}
              </div>
            <div>
              <label>Down Payment</label>
            </div>
            <div>${Number(purchase_price * down_payment / 100).toLocaleString()}</div>
            <div>
              <label>Interest Rate</label>
            </div>
            <div>
              {interest_rate}%
            </div>
            <div>
              <label>Amortization (Term)</label>
            </div>
            <div>
              {amortization} years
            </div>
            <div>
              <label>Loan Amount</label>
            </div>
            <div>
              ${Number(loan_amount).toLocaleString()}
            </div>
            <div>
              <label>Monthly Payments</label>
            </div>
            <div>
              ${Number(monthlyPayment).toLocaleString()}
            </div>
          </div>

          <div>
            <p>If you would like to save your results to make it easier to compare multiple properties, please fill out the following fields and press <strong>Save</strong>.</p>
          </div>
          <div>
            <label htmlFor="address">Address</label>
          </div>
          <div>
            <input name="address" type="text" />
          </div>
          <div>
            <label htmlFor="notes">Notes</label>
          </div>
          <div>
            <input name="notes" type="text" />
          </div>
          <div>
            <label htmlFor="property_tax">Property Tax</label>
          </div>
          <div>
            <input name="property_tax" type="text" />
          </div>
          <button>Save</button>
        </div>
      </form>
    </div>
  );
}