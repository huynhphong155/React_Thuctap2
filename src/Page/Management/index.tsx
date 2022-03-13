import React, { useEffect, useRef, useState } from "react";
import iconSearch from "../../assets/search.svg";
import icon7 from "../../assets/icon7.svg";
import Pagination from "../../Components/Paginations/Paginations";
import TableUI from "../../Components/TableUI";
import RenderUI from "../../HOC/RenderUI";
import { isNonEmptyArray } from "../../utils";
import { ListBilling } from "../../utils/schema";
import "./index.scss";

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
  const [data, setData] = useState<any>([]);
  const typingTimeoutRef = useRef<any>();

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
            status: ele?.status ? statusSuccess : statusFail,
          };
        });
      setDefaultData(listData);
      setData(listData);
    }, 500);
  }, []);

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
                <button className="Management-filter__Tickets">
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
              isShowNon
            />
          </div>
          <Pagination />
        </div>
      </div>
    </RenderUI>
  );
}

export default Management;
