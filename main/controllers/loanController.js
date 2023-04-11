const Loan = require('../models/loanSchema')

exports.getData = async (req, res) => {
  try {
    const loans = await Loan.find()
    return {
      loans
    }
  } catch (err) {
    console.error(err)
    return {
      error: 'An error occurred while fetching the data'
    }
  }
}


