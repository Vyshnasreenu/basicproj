import React, { useRef, useState } from 'react'
import { Popover } from 'antd'
import { Button } from '@mui/material'
import { DownloadTableExcel, useDownloadExcel } from 'react-export-table-to-excel'

const CustomHighView = ({ daysInMonth, noOfdaysInMonth }) => {
  // console.log(daysInMonth)
  const state = {
    dates: noOfdaysInMonth, daysOfWeek: daysInMonth,
  }

  console.log(state)

  const attendanceDTO = ["P", "P", "P", "A", "P", "P", "H", "P", "P", "P", "A", "P", "P", "H", "H", "P", "P", "P", "L", "L", "H", "P", "P", "P", "A", "P", "L", "H", "P", "P", "P",]

  const PopoverContent = (
    attendanceDTO.map((item, index) => ({

    }))
  )

  const tableRef = useRef(null)

  // const  {onLoadExcelSheet}  = useDownloadExcel({
  //   filename:'attendance data2', 
  //         sheet:'EmpAttendace',
  //         currentTableRef: tableRef.current 
  // })

  return (
    <div>
      <div>

      </div>
      <div className='container-fluid mt-5 border'>
        <div className='row p-2'>
          <div className='col-md-3'>
            <h2>Augest-2023</h2>
          </div>
          <div className="col-md-3">
            <DownloadTableExcel
              filename='Attendance sheet'
              sheet='EmpAttendance'
              currentTableRef={tableRef.current}
            >

              <Button variant='contained' color="success">Export</Button>
            </DownloadTableExcel>

          </div>
        </div>

        <div className='row p-1 border'>
          <div className='col table table-responsive'>
            <table className='table table-bordered' ref={tableRef}>
              <thead>
                <tr>
                  <th rowSpan={2} className='bg-info'>Employee Name</th>
                  {state.daysOfWeek.map((item) =>
                    <th>{item}</th>
                  )}
                </tr>
                <tr>
                  {
                    state.dates.map((item) => {
                      return (
                        <th>{item}</th>
                      )
                    })
                  }
                </tr>
                <tr>
                  <th className='text-start'>
                    <div>
                      <span>Sreenivasulu</span> <br />
                      <span>123 </span>
                    </div>
                  </th>
                  {
                    attendanceDTO.map((item, index) => <th className={item === "P" ? "text-success" : item === "L" ? "text-warning" : item === "A" ? "text-danger" : "text-info"}>
                      {/* <Popover content={PopoverContent} title="Title"> */}
                      <Button >{item}</Button>

                      {/* </Popover> */}
                    </th>)
                  }
                </tr>
                <tr>
                  <th className=' '>Seeta</th>
                  {
                    attendanceDTO.map((item) => <th className={item === "P" ? "text-success" : item === "L" ? "text-warning" : item === "A" ? "text-danger" : "text-info"}>{item}</th>)
                  }
                </tr>
                <tr>
                  <th>Geetha</th>
                  {
                    attendanceDTO.map((item) => <th className={item === "P" ? "text-success" : item === "L" ? "text-warning" : item === "A" ? "text-danger" : "text-info"}>{item}</th>)
                  }
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div >
  )
}

export default CustomHighView