import React, { useState } from "react";

export default function RomanNumeralComponent() {
  const [calculatedAnswer, updateAnswer] = useState("Nulla");
  const [input, updateInput] = useState("");

  const addAndConvertToRomanNumerals = ints => {
    /* Implement me! */
    let number = 0;
    for (let i = 0; i < ints.length; i++) {
      number += ints[i];
    }
    let numberString = "";
    if (number > 1000) {
      return (
        <a style={{ backgroundColor: "#FF0000" }}>
          Number is geater than 1000! Please enter lower numbers!
        </a>
      );
    }

    const check = [1000, 500, 100, 50, 10, 5, 1, 0];
    const romanNumbers = ["M", "D", "C", "L", "X", "V", "I", "nulla"];

    for (let i = 0; i < check.length; i++) {
      if (number === check[i]) {
        return romanNumbers[i];
      }
    }
    let digits = number.toString().length;
    for (let i = 0; i < digits; i++) {
      if (digits - i == 3) {
        switch (number.toString()[i]) {
          case "9":
            numberString += "CM";
            break;
          case "8":
            numberString += "DCCC";
            break;
          case "7":
            numberString += "DCC";
            break;
          case "6":
            numberString += "DC";
            break;
          case "5":
            numberString += "D";
            break;
          case "4":
            numberString += "CD";
            break;
          case "3":
            numberString += "CCC";
            break;
          case "2":
            numberString += "CC";
            break;
          case "1":
            numberString += "C";
            break;
          default:
            break;
        }
      } else if (digits - i == 2) {
        switch (number.toString()[i]) {
          case "9":
            numberString += "XC";
            break;
          case "8":
            numberString += "LXXX";
            break;
          case "7":
            numberString += "LXX";
            break;
          case "6":
            numberString += "LX";
            break;
          case "5":
            numberString += "L";
            break;
          case "4":
            numberString += "XL";
            break;
          case "3":
            numberString += "XXX";
            break;
          case "2":
            numberString += "XX";
            break;
          case "1":
            numberString += "X";
            break;
          default:
            break;
        }
      } else {
        switch (number.toString()[i]) {
          case "9":
            numberString += "IX";
            break;
          case "8":
            numberString += "VIII";
            break;
          case "7":
            numberString += "VII";
            break;
          case "6":
            numberString += "VI";
            break;
          case "5":
            numberString += "V";
            break;
          case "4":
            numberString += "IV";
            break;
          case "3":
            numberString += "III";
            break;
          case "2":
            numberString += "II";
            break;
          case "1":
            numberString += "I";
            break;
          default:
            break;
        }
      }
    }

    return numberString;
  };

  const addNumbers = inputString => {
    const numbersStringArray = inputString.split(",");
    const numbers = numbersStringArray.map(numberAsString => {
      return parseInt(numberAsString, 10);
    });

    /* numbers is an array of ints. E.g. [1, 2, 3] */
    const answer = addAndConvertToRomanNumerals(numbers);

    return answer;
  };

  const handleChange = event => {
    updateInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const answer = addNumbers(input);
    updateAnswer(answer);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label style={{ paddingRight: "10px" }}>
          <span style={{ paddingRight: "10px" }}>
            Numbers (separated by commas):
          </span>
          <input type="text" name="input-form" onChange={handleChange} />
        </label>
        <input type="submit" value="Add Numbers" />
      </form>
      <div>Answer in Roman Numerals: {calculatedAnswer}</div>
    </div>
  );
}
