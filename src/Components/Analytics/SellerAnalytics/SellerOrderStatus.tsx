import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { AppDispatch, RootState } from "../../../Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchSellerOrderStatus } from "../../../Redux/Analytic/SellerAnalytics/OrderStatusSlice";
import OrderTable from "./OrderTable";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
// import OrderTable from "./OrderTable";
=======



>>>>>>> origin/demo-fn-19-07

const SellerOrderStatus = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, data, error } = useSelector(
    (state: RootState) => state.SellerOrderStatus
  );
  const [statusCounts, setStatusCounts] = useState<{ [key: string]: number }>(
    {}
  );
  const [showSales, setShowSales] = useState(false);

<<<<<<< HEAD
  useEffect(() => {
    dispatch(fetchSellerOrderStatus());
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      const counts: { [key: string]: number } = {};
      data.forEach((order) => {
        counts[order.status] = (counts[order.status] || 0) + 1;
      });
      setStatusCounts(counts);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
=======
const dispatch: AppDispatch = useDispatch();
const { isLoading, data, error } = useSelector(
  (state: RootState) => state.SellerOrderStatus
);
const [statusCounts, setStatusCounts] = useState<{ [key: string]: number }>({});
const [filteredData, setFilteredData] = useState<any[]>([]);
const [currentStatus, setCurrentStatus] = useState<string | null>(null);

useEffect(() => {
  dispatch(fetchSellerOrderStatus());
}, [dispatch]);

useEffect(() => {
  if (data) {
    const counts: { [key: string]: number } = {};
    data.forEach((order) => {
      counts[order.status] = (counts[order.status] || 0) + 1;
    });
    setStatusCounts(counts);
>>>>>>> origin/demo-fn-19-07
  }

<<<<<<< HEAD
  if (error) {
    return <div>Error fetching orders</div>;
  }
=======
const handlePieClick = (status: string) => {
  setCurrentStatus(status);
  const filteredOrders = data.filter((order) => order.status === status);
  setFilteredData(filteredOrders);
};

if (isLoading) {
  return <div>Loading...</div>;
}
>>>>>>> origin/demo-fn-19-07

  const colors = ["#FFC632", "#17BF6B", "#ED3333"];

<<<<<<< HEAD
  const datas = Object.entries(statusCounts).map(([status, value], index) => ({
    name: status,
    value,
    color: colors[index % colors.length],
  }));

  const handelRedirect = ()=>{
    navigate('/vendor/order-details', {state:{datas:data}})

  }
  

  return (
    <div className="mt-2 font-poppins w-full ">
      <div className="flex flex-col w-full h-[280px]  border-2  rounded-xl shadow-md ">
=======
const colors = ["#FFC632", "#17BF6B", "#ED3333"];

const datas = Object.entries(statusCounts).map(([status, value], index) => ({
  name: status,
  value,
  color: colors[index % colors.length],
}));


  return (
    <div className="mt-80 font-poppins">
      {/* <OrderTable datas={filteredData.length > 0 ? filteredData : data} /> */}
      <div className="flex flex-col w-[400px] m-auto h-[280px]  border-2  rounded-xl shadow-md ">
>>>>>>> origin/demo-fn-19-07
        <div className="pl-5 h-[30%]">
          <h2 className="font-bold pt-3">Order status</h2>
          <p>Total Earnings of the Month</p>
        </div>
        <div className="flex h-[70%] items-center  justify-center pb-5  ">
          <ResponsiveContainer width="99%" height={300}>
            <PieChart>
              <Tooltip
                contentStyle={{ background: "white", borderRadius: "5px" }}
              />
              <Pie
                data={datas}
                innerRadius={"60"}
                outerRadius={"80"}
                paddingAngle={0}
                dataKey="value"
                onClick={handelRedirect}
                // onClick={() => setShowSales(!showSales)}
                // onClick={() => navigate("/orderStatus")}
              >
                {datas.map((item) => (
                  <Cell key={item.name} fill={item.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-col items-start gap-3 mr-16">
            <span className="flex justify-center items-center">
              <span className=" bg-[#17BF6B] w-4 h-4 inline-block rounded-full " />

              <span className="pl-2">Delivered</span>
            </span>
            <span className="flex justify-center items-center">
              <span className=" bg-[#FFC632] w-4 h-4 inline-block rounded-full " />
              <span className="pl-2">Pending</span>
            </span>
            <span className="flex justify-center items-center">
              <span className=" bg-[#ED3333] w-4 h-4 inline-block rounded-full " />
              <span className="pl-2 ">cancelled</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerOrderStatus;
