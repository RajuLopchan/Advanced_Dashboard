import { useState } from 'react';
import { List, Collapse } from '@mui/material';
import SidebarItem from './SidebarItem';
import HomeIcon from '@mui/icons-material/Home';
import { Assignment, Description, ShoppingCart, Verified } from '@mui/icons-material';

const items = [
  {
    title: 'Pages',
    icon: <Description />,
    children: [],
  },
  {
    title: 'Applications',
    icon: <Assignment />,
    children: ['Kanban', 'Wizard', 'Data Table', 'Calendar'],
  },
  {
    title: 'E-commerce',
    icon: <ShoppingCart />,
    children: ['Overview', 'Products', 'Orders'],
  },
  {
    title: 'Authentication',
    icon: <Verified />,
    children: [],
  },
];

const SidebarGroup = () => {
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleClick = (title: string) => {
    setOpenGroup(prev => (prev === title ? null : title));
    setActiveItem(title);
  };

  return (
    <>
      <SidebarItem
        label="Home"
        icon={<HomeIcon />}
        expandable
        expanded={openGroup === 'Home'}
        onClick={() => handleClick('Home')}
        active={activeItem === 'Home'}
      />
      <Collapse in={openGroup === 'Home'}>
        {/* Nested items if any */}
      </Collapse>

      {items.map(({ title, children, icon }) => (
        <div key={title}>
          <SidebarItem
            label={title}
            icon={icon}
            expandable
            expanded={openGroup === title}
            onClick={() => handleClick(title)}
            active={activeItem === title}
          />
          <Collapse in={openGroup === title}>
            <List component="div">
              {children.map((sub, index) => (
                <SidebarItem
                  key={index}
                  label={sub}
                  nested
                  active={activeItem === sub}
                  onClick={() => setActiveItem(sub)}
                />
              ))}
            </List>
          </Collapse>
        </div>
      ))}
    </>
  );
};

export default SidebarGroup;
