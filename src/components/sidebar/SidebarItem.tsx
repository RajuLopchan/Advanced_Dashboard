import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import type { ReactNode } from 'react';
import theme from '../customtheme/Theme';

type Props = {
  label: string;
  icon?: ReactNode;
  nested?: boolean;
  expandable?: boolean;
  expanded?: boolean;
  onClick?: () => void;
  active?: boolean;
};

const SidebarItem = ({ label, icon, expandable, expanded, onClick, active }: Props) => (
  <ListItemButton
    onClick={onClick}
    selected={active}
    sx={{
      my: 0.5,
      borderRadius: 3,
      pl: expandable ? 0.8 : 5,
      ...(active && {
        backgroundColor: theme.palette.primary.main,
        color:theme.palette.primary.main,
      }),
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

export default SidebarItem;
