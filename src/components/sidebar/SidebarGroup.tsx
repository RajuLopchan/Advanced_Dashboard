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
import baseTheme from '../../customtheme/Theme';
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
          sx: { fontWeight: active ? 'bold' : 'normal' },
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
      { label: 'Profile', children: ['Profile Overview', 'Teams', 'All Project'] },
      { label: 'Users', children: ['Reports', 'New User'] },
      { label: 'Account', children: ['Setting', 'Billing', 'Invoice', 'Security'] },
      { label: 'Projects', children: ['General', 'Timeline', 'New Project'] },
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

  const navigate = useNavigate();

  // Map of all routes for children and grandchildren
  const routeMap: Record<string, string> = {
    // Home sub-items
    Dashboard: '/dashboard',
    Analytics: '/analytics',

    // Pages children & grandchildren
    'Profile Overview': '/pages/profile/overview',
    Teams: '/pages/profile/teams',
    'All Project': '/pages/profile/allproject',
    Reports: '/pages/users/reports',
    'New User': '/pages/users/newuser',
    Setting: '/account/setting',
    Billing: '/account/billing',
    Invoice: '/account/invoice',
    Security: '/account/security',
    General: '/projects/general',
    Timeline: '/projects/timeline',
    'New Project': '/projects/newproject',
    'Pricing Page': '/pages/pricing',
    Charts: '/pages/charts',
    Notification: '/pages/notification',
    Chat: '/pages/chat',

    // Applications children
    Kanban: '/applications/kanban',
    Wizard: '/applications/wizard',
    'Data Table': '/applications/datatable',
    Calendar: '/applications/calendar',

    // E-commerce children
    Overview: '/ecommerce/overview',
    Products: '/ecommerce/products',
    Orders: '/ecommerce/orders',

    // Authentication children
    Login: '/auth/login',
    Register: '/auth/register',
    'Forgot Password': '/auth/forgot-password',
  };

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

  const handleChildClick = (groupTitle: string, submenuLabel: string | null, childLabel: string) => {
    setActiveGroup(groupTitle);
    setActiveSubmenu(submenuLabel);
    setActiveChild(childLabel);

    const path = routeMap[childLabel];
    if (path) {
      navigate(path);
    }
  };

  return (
    <>
      {/* Home group */}
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
          {['Dashboard', 'Analytics'].map((sub) => (
            <SidebarItem
              key={sub}
              label={sub}
              nested
              active={activeChild === sub && activeGroup === 'Home'}
              onClick={() => handleChildClick('Home', null, sub)}
            />
          ))}
        </List>
      </Collapse>

      {/* Other groups */}
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
              {children.map((sub) => {
                if (typeof sub === 'string') {
                  // simple submenu without grandchildren
                  return (
                    <SidebarItem
                      key={sub}
                      label={sub}
                      nested
                      active={activeChild === sub && activeGroup === title}
                      onClick={() => handleChildClick(title, null, sub)}
                    />
                  );
                } else if (typeof sub === 'object') {
                  // submenu with grandchildren
                  const isOpen = openSubmenus[title] === sub.label;
                  return (
                    <div key={sub.label}>
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
                          {sub.children.map((child) => (
                            <SidebarItem
                              key={child}
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
