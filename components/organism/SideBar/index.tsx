import Footer from "./Footer";
import MenuItem from "./MenuItem";
import Profile from "./Profile";

interface SidebarProps {
  activeMenu: "overview" | "transactions" | "settings";
}

export default function SideBar(props: SidebarProps) {
  const { activeMenu } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem title="Overview" active={activeMenu === "overview"} />
          <MenuItem
            title="Transactions"
            active={activeMenu === "transactions"}
            href="/member/transactions"
          />
          <MenuItem title="Messages" />
          <MenuItem title="Card" />
          <MenuItem title="Rewards" />
          <MenuItem
            title="Settings"
            active={activeMenu === "settings"}
            href="/member/edit-profile"
          />
          <MenuItem title="Log Out" href="/sign-in" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
