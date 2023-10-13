import React from 'react';

const LoanDataSource = ({ loanAmount, tenure, emi }) => {
  const roundedLoanAmount = Math.ceil(loanAmount);
  const interestAmount = Math.ceil(emi * tenure * 12) - roundedLoanAmount;
  const totalAmountPayable = roundedLoanAmount + interestAmount;

  return (
    <>
      <div href="#" className="block max-w-sm">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-black-700">Monthly Home Loan EMI</h5>
        <p className="text-gray-700 text-4xl font-bold text-white">₹{Math.ceil(emi)}</p>
      </div>
      <div className='flex border rounded mt-10'>
        <div href="#" className="block max-w-sm text-center border-r py-2 px-3 pl-4">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-black-700">Principal Amount</h5>
          <p className="text-gray-700 text-2xl font-bold text-white">₹{roundedLoanAmount}</p>
        </div>
        <div href="#" className="block max-w-sm text-center border-r py-2 px-3">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-black-700">Interest Amount</h5>
          <p className="text-gray-700 text-2xl font-bold text-white">₹{Math.ceil(interestAmount)}</p>
        </div>
        <div href="#" className="block max-w-sm text-center py-2 px-3 pr-4">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-black-700">Total Amount Payable</h5>
          <p className="text-gray-700 text-2xl font-bold text-white">₹{Math.ceil(totalAmountPayable)}</p>
        </div>
      </div>
    </>
  );
};

export default LoanDataSource;
