// import { Card, CardBody, CardTitle, CardSubtitle, ListGroup, ListGroupItem, CardText, Button } from "reactstrap";
// import ThemeContext from "./ThemeContext";

// import React, { useEffect, useState, useContext } from "react";
// import { useParams, useHistory, Link } from "react-router-dom";
// import ValetApi from "./api/Api";

// const LocationActiveTransactions = () => {
//   const { locationId, status } = useParams();
//   const [transactions, setTransactions] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(
//     function fetchTransactionsAtMount() {
//       async function fetchTransactions() {
//         try {
//           const transactionRes = await ValetApi.getAllTransactionsByLocationAndStatus(locationId, status);
//           setTransactions(transactionRes.data.transactions);
//           setIsLoading(false);
//         } catch (err) {
//           console.log(err);
//         }
//       }
//       fetchTransactions();
//     },
//     [locationId, status]
//   );

//   if (isLoading) {
//     return (
//       <div>
//         <p>Loading Spinner</p>
//       </div>
//     );
//   } else
//     return (
//       <div>
//         {transactions.length > 0
//           ? transactions.map((t) => (
//               <ul>
//                 <li>
//                   <b>Location Info</b>
//                 </li>
//                 <li>Site: {t.sitename}</li>
//                 <li>Site ID: {t.locationId}</li>
//                 <li>
//                   <b>Transaction Info</b>
//                 </li>
//                 <li>Trans: {t.transactionId}</li>
//                 <li>Ticket:{t.ticketNum}</li>
//                 <li>Trans Time: {t.transactionTime}</li>
//                 <li>
//                   <b>Customer Vehicle Info</b>
//                 </li>
//                 <li>Mobile: {t.mobile}</li>
//                 <li>Vehicle ID: {t.vehicleId}</li>
//                 <li>Status: {t.vehicleStatus}</li>
//                 <li>In Time: {t.checkIn}</li>
//                 <li>Out Time: {t.checkOut}</li>
//                 <li>Color: {t.color}</li>
//                 <li>Make: {t.make}</li>
//                 <li>Damages: {t.damages}</li>
//                 <li>Notes: {t.notes}</li>
//                 <li>
//                   <b>Valet Info</b>
//                 </li>
//                 <li>Valet ID: {t.userId}</li>
//                 <li>First: {t.firstName}</li>
//                 <li>Last: {t.lastName}</li>
//                 <li>Phone: {t.phone}</li>
//                 <li>Email: {t.email}</li>
//                 <li>TotalParked: {t.totalParked > 0 ? t.totalParked : "None"}</li>
//                 <li>Admin: {t.isAdmin ? "Yes" : "No"}</li>
//               </ul>
//             ))
//           : "false"}
//       </div>
//     );
// };

// export default LocationActiveTransactions;
