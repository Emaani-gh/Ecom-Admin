import React from 'react'

const Users = () => {
  return (
    <div className='main'>
    <div className='main-header'>
        <h3>Users</h3>
        <div className='header-btn'>
            <button className='btn-add'>Add</button>
            <button className='btn-search'>search</button>
        </div>
    </div>

    <div >
        <table>
            <thead>
                <tr>
                    <th>No</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Mobile</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Option</th>
                </tr>
            </thead>

            <tbody>
            <tr>
                <td>1</td>
                <td>Seidu</td>
                <td>Abdul Salam</td>
                <td>0249061385</td>
                <td>Admin</td>
                <td>Active</td>
                <td className='tr-view-btn'>
                    <button className='view'>View</button>
                </td>
            </tr>

            <tr>
                <td>1</td>
                <td>Seidu</td>
                <td>Abdul Salam</td>
                <td>0249061385</td>
                <td>Admin</td>
                <td>Active</td>
                <td className='tr-view-btn'>
                    <button className='view'>View</button>
                </td>
            </tr>

             <tr>
                <td>1</td>
                <td>Seidu</td>
                <td>Abdul Salam</td>
                <td>0249061385</td>
                <td>Admin</td>
                <td>Active</td>
                <td className='tr-view-btn'>
                    <button className='view'>View</button>
                </td>
            </tr>

            <tr>
                <td>1</td>
                <td>Seidu</td>
                <td>Abdul Salam</td>
                <td>0249061385</td>
                <td>Admin</td>
                <td>Active</td>
                <td className='tr-view-btn'>
                    <button className='view'>View</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</div>
  )
}

export default Users