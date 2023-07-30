import { Button, Dropdown } from "antd";
import Link from "next/link";
import React from "react";
const items = [
  {
    key: "1",
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="/cpu_processor">
        Cpu Processor
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="/motherboard">
        Motherboard
      </Link>
    ),
  },
  {
    key: "3",
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="/ram">
        Ram
      </Link>
    ),
  },
  {
    key: "4",
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="/power_supply_unit">
        Power Supply Unit
      </Link>
    ),
  },
  {
    key: "5",
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="/storage_device">
        Storage Device
      </Link>
    ),
  },
  {
    key: "6",
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="/monitor">
        Monitor
      </Link>
    ),
  },
  {
    key: "7",
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="/others">
        others
      </Link>
    ),
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
