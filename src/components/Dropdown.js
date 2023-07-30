import { Button, Dropdown } from "antd";
import Link from "next/link";
import React from "react";
const items = [
  {
    key: "1",
    label: <Link href="/categories/cpu_processor">Cpu Processor</Link>,
  },
  {
    key: "2",
    label: <Link href="/categories/motherboard">Motherboard</Link>,
  },
  {
    key: "3",
    label: <Link href="/categories/ram">Ram</Link>,
  },
  {
    key: "4",
    label: <Link href="/categories/power_supply_unit">Power Supply Unit</Link>,
  },
  {
    key: "5",
    label: <Link href="/categories/storage_device">Storage Device</Link>,
  },
  {
    key: "6",
    label: <Link href="/categories/monitor">Monitor</Link>,
  },
  {
    key: "7",
    label: <Link href="/categories/">others</Link>,
  },
];
const DropdownMenu = () => {
  return (
    <Dropdown
      menu={{
        items,
      }}
      placement="bottom"
    >
      <Button>Categories</Button>
    </Dropdown>
  );
};

export default DropdownMenu;
