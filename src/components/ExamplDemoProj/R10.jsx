// import React from 'react';
// import { Table } from 'antd';

// const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// const dates=["1","2","3","4","5","6","7","8","9",10]
// const dataSource =[

// ]

// const columns = [
//   {
//     title: 'Special Column',
//     dataIndex: 'special',
//     key: 'special',
//     rowSpan:'2',
//     children: [days.map((day) => ({
//       title: day,
//         dataIndex: day.toLowerCase(),
//           key: day.toLowerCase(),
//     })),
//    dates.map((item)=>({
//      title:item,dataIndex:item
//    }))
//   ],

//   },
// ];

// // Add the special column with a custom render function
// // columns.push({
// //   title: 'Special Column',
// //   dataIndex: 'special',
// //   key: 'special',
// //   render: (text, record, index) => {
// //     const span = index === 0 ? 2 : 0; // Set span to 2 for the first row, 0 for others
// //     return {
// //       children: <span>{text}</span>,
// //       props: {
// //         rowSpan: span,
// //       },
// //     };
// //   },
// // });

// function MyTable() {
//   return (
//     <Table dataSource={dataSource} columns={columns} />
//   );
// }

// export default MyTable;
import React, { useState } from 'react';
import { Table, Pagination } from 'antd';

// Sample data
const dataSource = [];
for (let i = 1; i <= 50; i++) {
  dataSource.push({
    key: i,
    name: `User ${i}`,
    age: 20 + i,
    address: `Address ${i}`,
  });
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize,setPageSize]=useState(5) // Number of items per page

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;


  const showSizeChange = (page,size) => {
    setPageSize(size)
  }
  return (
    <div>
      <Table
        dataSource={dataSource.slice(startIndex, endIndex)}
        columns={columns}
        pagination={false} // Disable default pagination
      />
      <Pagination
        current={currentPage}
        total={dataSource.length}
        // pageSize={pageSize}
        showSizeChanger
        pageSizeOptions={['10', '20', '30', '50']} // Specify available page sizes
        onShowSizeChange={showSizeChange} // Handle page size change
        onChange={handlePageChange}
      // defaultPageSize={pageSize}
      />
    </div>
  );
};

export default App;

