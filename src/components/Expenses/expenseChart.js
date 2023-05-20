import React from 'react';
import Chart from '../chart/chart';
const ExpensesChart=(props)=>{
const chartDataPoints=[
    {label:'Jan',value:0},
    {label:'feb',value:0},
    {label:'mar',value:0},
    {label:'apr',value:0},
    {label:'may',value:0},
    {label:'Jun',value:0},
    {label:'Jul',value:0},
    {label:'aug',value:0},
    {label:'sep',value:0},
    {label:'oct',value:0},
    {label:'nov',value:0},
    {label:'dec',value:0}];

    for(const expense of props.expenses)
    {
        const expenseMonth=expense.date.getMonth();
        chartDataPoints[expenseMonth].value= chartDataPoints[expenseMonth].value+expense.amount;
    }
   

return <Chart dataPoints={chartDataPoints}></Chart>
}

export default ExpensesChart;