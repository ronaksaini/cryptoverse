import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'
const LineChart = ({historicalData}) => {

    const[data,setData]=useState(["Date","Price"]);

    useEffect(()=>{
        let dataCopy  = [["Date","Price"]];
        if(historicalData.prices){
            historicalData.prices.map((item)=>{
              const date = new Date(item[0]);
              const formattedDate = `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })}`;
              dataCopy.push([formattedDate, item[1]]);
            })
            setData(dataCopy);
        }
    },[historicalData]);
    const chartOptions = {
        
        backgroundColor: 'transparent',
        chartArea: {
          backgroundColor: 'transparent', 
        },
        hAxis: {
          title: 'Date',
          textStyle: {
            color: '#000', // Color for x-axis labels
            fontSize:"44px"
          },
          titleTextStyle: {
            color: '#000', // Vertical axis title text color
          },
        },
        vAxis: {
          title: 'Price',
          textStyle: {
            color: '#000', // Color for x-axis labels
          },
          titleTextStyle: {
            color: '#000', // Vertical axis title text color
          },
        },
        colors: ['ff33e8'],
        curveType: 'function'
      };
  return (
    <div className='chart'>
      <Chart
      chartType='LineChart'
      data={data}
      height="500px"
      width="100%"
      options={chartOptions}
      />
    </div>
  )
}

export default LineChart
