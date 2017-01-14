import React, { PropTypes } from 'react'
import ExpenseItem from './ExpenseItem'
import { Table, Col } from 'react-bootstrap'
import CenterPanel from './CenterPanel'
import TotalExpense from './TotalExpense'

const ExpenseList = (props) => {
  const totalAmount = props.expenses.reduce((a, b) => a + b.amount, 0)

  return (
    <CenterPanel >
      <Col mdOffset={1} md={10}>
        <h4>My expenses</h4>
        <Table style={{marginLeft: 'auto', marginRight: 'auto'}} responsive >
          <tbody >
            {props.expenses.map(expense =>
              <ExpenseItem
                key={expense._id}
                {...expense}
                onDeleteClick={() => props.onDeleteClick(expense._id)} />
            )}
          </tbody >
        </Table >
      </Col>

      <TotalExpense totalAmount={totalAmount}/>

    </CenterPanel>
  )
}

ExpenseList.propTypes = {
  expenses : PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    expenseType: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
  }).isRequired).isRequired,
  onDeleteClick: PropTypes.func.isRequired
}

export default ExpenseList
