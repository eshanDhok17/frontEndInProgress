import FeaturedInfo from "../../component/featuredInfo/FeaturedInfo";
import Charts from "../../component/charts/Charts";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../component/widgetSm/WidgetSm";
import WidgetLg from "../../component/widgetLg/WidgetLg";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Charts data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
