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

// 🚨 Added import for navigation
import { useNavigate } from 'react-router-dom';

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

      color: '#000',

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
    <ListItemText
      primary={label}
      slotProps={{
        primary: {
          sx: {
            fontWeight: active ? 'bold' : 'normal',
          },
        },
      }}
    />
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
        children: ['General', 'Timeline', 'New Project'], // ✅ Ensure 'New Project' matches routing condition
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
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, string | null>>({});

  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [activeChild, setActiveChild] = useState<string | null>(null);

  // 🚨 Initialize navigate hook
  const navigate = useNavigate();

  const handleGroupClick = (title: string) => {
    setOpenGroup(prev => (prev === title ? null : title));
    setActiveGroup(title);
    setActiveSubmenu(null);
    setActiveChild(null);
  };

  const handleSubmenuClick = (groupTitle: string, submenuLabel: string) => {
    setOpenSubmenus(prev => ({
      ...prev,
      [groupTitle]: prev[groupTitle] === submenuLabel ? null : submenuLabel,
    }));
    setActiveGroup(groupTitle);
    setActiveSubmenu(submenuLabel);
    setActiveChild(null);
  };

  const handleChildClick = (groupTitle: string, submenuLabel: string, childLabel: string) => {
    setActiveGroup(groupTitle);
    setActiveSubmenu(submenuLabel);
    setActiveChild(childLabel);

    // 🚨 Added navigation for 'New Project'
    if (childLabel === 'New Project') {
      navigate('/projects/newproject');
    }
  };

  return (
    <>
      {/* Home Group */}
      <SidebarItem
        label="Home"
        icon={<HomeIcon />}
        expandable
        expanded={openGroup === 'Home'}
        onClick={() => handleGroupClick('Home')}
        active={activeGroup === 'Home'}
      />
      <Collapse in={openGroup === 'Home'}>
        <List component="div">
          {['Dashboard', 'Analytics'].map((sub, index) => (
            <SidebarItem
              key={index}
              label={sub}
              nested
              active={activeChild === sub && activeGroup === 'Home'}
              onClick={() => {
                setActiveGroup('Home');
                setActiveSubmenu(null);
                setActiveChild(sub);

                // 🚨 Navigate to '/dashboard' route when Dashboard is clicked
                if (sub === 'Dashboard') {
                  navigate('/dashboard');
                }
              }}
            />
          ))}
        </List>
      </Collapse>

      {/* Other Groups */}
      {items.map(({ title, children, icon }) => (
        <div key={title}>
          <SidebarItem
            label={title}
            icon={icon}
            expandable
            expanded={openGroup === title}
            onClick={() => handleGroupClick(title)}
            active={activeGroup === title}
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
                      active={activeChild === sub && activeGroup === title}
                      onClick={() => {
                        setActiveGroup(title);
                        setActiveSubmenu(null);
                        setActiveChild(sub);
                      }}
                    />
                  );
                } else if (typeof sub === 'object') {
                  const isOpen = openSubmenus[title] === sub.label;
                  return (
                    <div key={index}>
                      <SidebarItem
                        label={sub.label}
                        nested
                        expandable
                        expanded={isOpen}
                        onClick={() => handleSubmenuClick(title, sub.label)}
                        active={activeSubmenu === sub.label && activeGroup === title}
                      />
                      <Collapse in={isOpen}>
                        <List component="div">
                          {sub.children.map((child, cindex) => (
                            <SidebarItem
                              key={cindex}
                              label={child}
                              nested
                              nestedLevel2
                              active={
                                activeChild === child &&
                                activeSubmenu === sub.label &&
                                activeGroup === title
                              }
                              onClick={() => handleChildClick(title, sub.label, child)}
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
