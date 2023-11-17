import React, { useState, useEffect } from 'react';
import LoanDataSource from "./../../components/EmiLoan/LoanDataSource";
import RangeSlider from "../../components/UI/RangeSlider/RangeSlider";

const EMICalculator = () => {
    const RANGESLIDERDATA = [
        {
            label: "Loan Amount",
            minValue: 10000,
            maxValue: 100000000,
            defaultValue: 2500000,
            id: "loanAmount"
        },
        {
            label: "Tenure (Years)",
            minValue: 1,
            maxValue: 30,
            defaultValue: 30,
            id: "tenure"
        },
        {
            label: "Interest Rate (% P.A.)",
            minValue: 0.5,
            maxValue: 15,
            defaultValue: 8.5,
            id: "monthlyPayment"
        },
    ];

    const [loanAmount, setLoanAmount] = useState(2500000);
    const [tenure, setTenure] = useState(30);
    const [interestRate, setInterestRate] = useState(8.5);
    const [emi, setEmi] = useState(0);

    useEffect(() => {
        const principal = loanAmount;
        const monthlyInterestRate = interestRate / 12 / 100;
        const numberOfPayments = tenure * 12;
        const emiValue = principal * monthlyInterestRate *
            Math.pow(1 + monthlyInterestRate, numberOfPayments) /
            (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

        setEmi(emiValue.toFixed(2));
    }, [loanAmount, tenure, interestRate]);

    return (
        <>
            <section className="emiCalculator-section grid grid-cols-2 divide-x">
                <div className="p-5">
                    <h1 className="mb-2 text-4xl font-bold text-gray-800">Home Loan EMI Calculator</h1>
                    <p className="mb-5 text-sm font-normal text-gray-400">Home Loan EMI Calculator assists in the calculation of the loan installment i.e., EMI towards your home loan. It is an easy-to-use calculator and acts as a financial planning tool for a home buyer.</p>
                    {
                        RANGESLIDERDATA.map((item, index) => {
                            return (
                                <RangeSlider
                                    key={index}
                                    label={item.label}
                                    minValue={item.minValue}
                                    maxValue={item.maxValue}
                                    defaultValue={item.defaultValue}
                                    id={item.id}
                                    onChange={(value) => {
                                        if (item.id === 'loanAmount') {
                                            setLoanAmount(value);
                                        } else if (item.id === 'tenure') {
                                            setTenure(value);
                                        } else if (item.id === 'monthlyPayment') {
                                            setInterestRate(value);
                                        }
                                    }}
                                />
                            );
                        })
                    }
                </div>
                <div className="bg-indigo-600 p-5">
                    <LoanDataSource loanAmount={loanAmount} tenure={tenure} emi={emi} />
                </div>
            </section>
        </>
    );
}

export default EMICalculator;
