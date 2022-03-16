import React, { useEffect, useRef, useState } from "react";
import iconSearch from "../../assets/search.svg";
import icon7 from "../../assets/icon7.svg";
import Pagination from "../../Components/Paginations/Paginations";
import TableUI from "../../Components/TableUI";
import RenderUI from "../../HOC/RenderUI";
import { isNonEmptyArray } from "../../utils";
import { ListBilling } from "../../utils/schema";
import "./index.scss";
import Popup from "../../Components/Popup";
import FromFilter from "./FromFilter";
import DatePicker from "react-modern-calendar-datepicker";

const listHeader = [
  { name: "STT", key: "STT" },
  { name: "Booking code", key: "Code" },
  { name: "Số vé", key: "TicketNumber" },
  { name: "Tên sự kiện", key: "Name" },
  { name: "Tình trạng sử dụng", key: "status" },
  { name: "Ngày sử dụng", key: "Date" },
  { name: "Ngày xuất vé", key: "TicketDate" },
  { name: "Cổng check - in", key: "CheckIn" },
];

function Management() {
  const [defaultData, setDefaultData] = useState<any>([]);
  const [firstLoading, setFirstLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>([]);
  const [dataFilter, setDataFilter] = useState<any>({
    From: { day: 1, month: 3, year: 2022 },
    To: { day: 2, month: 3, year: 2022 },
    picked: "All",
    checked: "All",
  });
  const typingTimeoutRef = useRef<any>();
  const [isShowPopup, setIsShowPopup] = useState<boolean>(false);

  const statusSuccess = (
    <button className="statusSuccess">
      <span></span> Chưa sử dụng
    </button>
  );
  const statusFail = (
    <button className="statusFail">
      <span></span> Hết hạn
    </button>
  );

  useEffect(() => {
    setTimeout(() => {
      const listData: any =
        isNonEmptyArray(ListBilling.data) &&
        ListBilling.data.map((ele) => {
          return {
            ...ele,
            idStatus: ele?.status,
            status: ele?.status ? statusSuccess : statusFail,
          };
        });
      setDefaultData(listData);
      setData(listData);
      setFirstLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    if (firstLoading) return;
    const listData: any =
      isNonEmptyArray(ListBilling.data) &&
      defaultData
        .filter((ele: any) => {
          if (dataFilter.picked === "All") return ele;
          const check = dataFilter.picked === "Used" ? true : false;
          return ele.idStatus === check;
        })
        .filter((ele: any) => {
          if (dataFilter.checked === "All") return ele;
          return ele.IdCheckIn == dataFilter.checked;
        });
    setData(listData);
  }, [dataFilter]);

  const handleSearch = (e: any) => {
    const { value } = e.target;
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      if (!value) setData(defaultData);
      if (value) {
        const result = defaultData.filter(
          (ele: any) => ele.Name.indexOf(value) > -1
        );
        setData(result);
      }
    }, 500);
  };

  const handleClosePopup = () => {
    setIsShowPopup(false);
  };

  return (
    <RenderUI>
      <div className="Management">
        <div className="Management-wrapper">
          <div>
            <h1 className="Management-title">Danh sách vé</h1>
            <div className="Management-top">
              <div className="Management-search">
                <img src={iconSearch} alt="" />
                <input
                  type="text"
                  placeholder="Nhập tên hoặc mã khoản thu"
                  onChange={handleSearch}
                />
              </div>
              <div className="Management-filter">
                <button
                  className="Management-filter__Tickets"
                  onClick={() => setIsShowPopup(true)}
                >
                  <img src={icon7} alt="" />
                  Lọc vé
                </button>
                <button className="Management-filter__Tickets">
                  Xuất file (.csv)
                </button>
              </div>
            </div>
            <TableUI
              listHeader={listHeader}
              listBody={data}
              isDetail={false}
              isShowNon={false}
            />
          </div>
          <Pagination />
        </div>
        <Popup isShowPopup={isShowPopup} handleClosePopup={handleClosePopup}>
          <div className="Management-Filter">
            <FromFilter
              setIsShowPopup={setIsShowPopup}
              setDataFilter={setDataFilter}
              dataFilter={dataFilter}
            />
          </div>
        </Popup>
      </div>
    </RenderUI>
  );
}

export default Management;
