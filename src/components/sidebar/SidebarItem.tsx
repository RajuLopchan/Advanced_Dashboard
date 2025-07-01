import { useState } from 'react';
import type { ReactNode } from 'react';

import {
  List,
  Collapse,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import {
  Assignment,
  Description,
  ShoppingCart,
  Verified,
  ExpandMore,
  ExpandLess,
} from '@mui/icons-material';
import baseTheme from '../customtheme/Theme';

type SidebarItemProps = {
  label: string;
  icon?: ReactNode;
  nested?: boolean;
  nestedLevel2?: boolean;
  expandable?: boolean;
  expanded?: boolean;
  onClick?: () => void;
  active?: boolean;
};

const SidebarItem = ({
  label,
  icon,
  expandable,
  expanded,
  onClick,
  active,
  nested,
  nestedLevel2,
}: SidebarItemProps) => (
  <ListItemButton
  onClick={onClick}
  selected={active}
  sx={{
    my: 0.5,
    borderRadius: 2,
    p: 0.8,
    pl: nestedLevel2 ? 8 : nested ? 5 : expandable ? 0.8 : 5,
    ...(active && {
      background: !nested && !nestedLevel2 ? baseTheme.gradients.primary : 'none !important',
      color: baseTheme.palette.primary.main,
      backgroundColor: !nested && !nestedLevel2 ? undefined : 'transparent !important',
    }),
    '&:hover': {
      backgroundColor: !nested && !nestedLevel2
        ? baseTheme.gradients.primary
        : 'transparent !important',
    },
    '& .MuiListItemIcon-root': {
      minWidth: 'auto',
      mr: 1.2,
      color: 'inherit',
    },
  }}
>

  {icon && <ListItemIcon>{icon}</ListItemIcon>}
  <ListItemText primary={label} />
  {expandable && (expanded ? <ExpandLess /> : <ExpandMore />)}
</ListItemButton>

);

const items = [
  {
    title: 'Pages',
    icon: <Description />,
    children: [
      {
        label: 'Profile',
        children: ['Profile Overview', 'Teams', 'All Project'],
      },
      {
        label: 'Users',
        children: ['Reports', 'New User'],
      },
      {
        label: 'Account',
        children: ['Setting', 'Billing', 'Invoice', 'Security'],
      },
      {
        label: 'Projects',
        children: ['General', 'Timeline', 'New Project'],
      },
      'Pricing Page',
      'Charts',
      'Notification',
      'Chat',
    ],
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
    children: ['Login', 'Register', 'Forgot Password'],
  },
];

const SidebarGroup = () => {
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});

  const handleClick = (title: string) => {
    setOpenGroup(prev => (prev === title ? null : title));
    setActiveItem(title);
  };

  const handleSubmenuClick = (label: string) => {
    setOpenSubmenus(prev => ({
      ...prev,
      [label]: !prev[label],
    }));
    setActiveItem(label);
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
        <List component="div">
          {['Dashboard', 'Analytics'].map((sub, index) => (
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
              {children.map((sub, index) => {
                if (typeof sub === 'string') {
                  return (
                    <SidebarItem
                      key={index}
                      label={sub}
                      nested
                      active={activeItem === sub}
                      onClick={() => setActiveItem(sub)}
                    />
                  );
                } else if (typeof sub === 'object') {
                  const isOpen = openSubmenus[sub.label] || false;
                  return (
                    <div key={index}>
                      <SidebarItem
                        label={sub.label}
                        nested
                        expandable
                        expanded={isOpen}
                        onClick={() => handleSubmenuClick(sub.label)}
                        active={activeItem === sub.label}
                      />
                      <Collapse in={isOpen}>
                        <List component="div">
                          {sub.children.map((child, cindex) => (
                            <SidebarItem
                              key={cindex}
                              label={child}
                              nested
                              nestedLevel2
                              active={activeItem === child}
                              onClick={() => setActiveItem(child)}
                            />
                          ))}
                        </List>
                      </Collapse>
                    </div>
                  );
                }
                return null;
              })}
            </List>
          </Collapse>
        </div>
      ))}
    </>
  );
};

export default SidebarGroup;