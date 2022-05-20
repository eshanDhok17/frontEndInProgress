import React from "react";
import featuredInfo from "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Rs. 2650</span>
          <span className="featuredMoneyRate">
            -11.4<ArrowDownward className="featuredIcon-n"/>
          </span>
        </div>
        <span className="featuredSub">compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Rs. 4650</span>
          <span className="featuredMoneyRate">
            +1.4<ArrowUpward className="featuredIcon-p"/>
          </span>
        </div>
        <span className="featuredSub">compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Rs. 21650</span>
          <span className="featuredMoneyRate">
            +21.4<ArrowUpward className="featuredIcon-p"/>
          </span>
        </div>
        <span className="featuredSub">compared to last month</span>
      </div>
    </div>
  );
}
