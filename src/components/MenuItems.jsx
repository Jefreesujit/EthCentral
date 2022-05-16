import { useLocation } from "react-router";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

function MenuItems() {
  const { pathname } = useLocation();

  return (
    <Menu
      theme="light"
      mode="horizontal"
      style={{
        display: "flex",
        fontSize: "17px",
        fontWeight: "500",
        width: "100%",
        justifyContent: "center",
      }}
      defaultSelectedKeys={[pathname]}
    >
      <Menu.Item key="/tokens">
        <NavLink to="/tokens">Tokens</NavLink>
      </Menu.Item>
      <Menu.Item key="/wallet">
        <NavLink to="/wallet">Transfer Funds</NavLink>
      </Menu.Item>
      <Menu.Item key="/nfts">
        <NavLink to="/nfts">NFTs</NavLink>
      </Menu.Item>
      <Menu.Item key="/transactions">
        <NavLink to="/transactions">Transactions</NavLink>
      </Menu.Item>
      <Menu.Item key="/exchange">
        <NavLink to="/exchange">Exchange</NavLink>
      </Menu.Item>
      {/* <Menu.Item key="onramp">
        <NavLink to="/onramp">💵 Fiat</NavLink>
      </Menu.Item> */}
    </Menu>
  );
}

export default MenuItems;
