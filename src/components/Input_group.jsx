export default function Input_group({ onChangeValue, initalInput }) {
  //   const [initalInput, setInput] = useState({
  //     initalInvestment: 100000,
  //     annualInvestment: 5000,
  //     expevtedReturn: 5,
  //     duration: 3,
  //   });
  //   function handleChange(inputItem, inputValue) {
  //     setInput((preInput) => {
  //       console.log(inputItem);
  //       console.log(inputValue);
  //       return {
  //         ...preInput,
  //         [inputItem]: inputValue,
  //       };
  //     });
  //   }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITAL INVESTMENT</label>
          <input
            type="number"
            required
            value={initalInput.initialInvestment}
            onChange={(e) => onChangeValue("initialInvestment", e.target.value)}
          />
        </p>

        <p>
          <label>ANNUAL INVESTMENT</label>
          <input
            type="number"
            required
            value={initalInput.annualInvestment}
            onChange={(e) => onChangeValue("annualInvestment", e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input
            type="number"
            required
            value={initalInput.expectedReturn}
            onChange={(e) => onChangeValue("expectedReturn", e.target.value)}
          />
        </p>

        <p>
          <label>DURATION</label>
          <input
            type="number"
            required
            value={initalInput.duration}
            onChange={(e) => onChangeValue("duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
