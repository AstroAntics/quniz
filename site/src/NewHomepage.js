import FrontPageCallToAction from "./components/FrontPageCallToAction";
import ResponsiveAppBar from "./components/Navbar";

export default function NewHomePage() {
  return (
    <div>
      <ResponsiveAppBar />
      <FrontPageCallToAction />
    </div>
  );
}
