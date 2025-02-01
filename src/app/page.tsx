import Todays from "./component/todays";
import Featured from "./component/featured";
import Categories from "./component/categories";
import Thismonth from "./component/thismonth";
import Ourproducts from "./component/ourproducts";
import Hero from "./component/hero";


export default function Home() {
  return (
    <div className="  mx-20">
        <Hero/>
        <Todays />
        <Categories />
        <Thismonth />
        <Ourproducts />
        <Featured />
      </div >
      );
}
