import { useState } from "react";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";

import { useTheme } from "@material-ui/core/styles";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import PlayCircleFilledOutlinedIcon from "@material-ui/icons/PlayCircleFilledOutlined";

import { tokens } from "../../theme";

import { BsDashLg } from "react-icons/bs";
import {
  RiSearchLine,
  RiFileListLine,
  RiDatabase2Line,
  RiArrowDropRightLine,
} from "react-icons/ri";
import { TbSocial } from "react-icons/tb";
import { CiSliderHorizontal } from "react-icons/ci";

import VisibilityRoundedIcon from "@material-ui/icons/VisibilityRounded";
import UpdateIcon from "@material-ui/icons/Update";
import { Box, Typography } from "@material-ui/core";

import profile from "../../assets/images/user.png";

const NavSideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [collapsed, setCollapsed] = useState(false);

  return (
    <Box
      sx={{
        background: colors.primary[400],
      }}
    >
      <Sidebar
        style={{ height: "100vh" }}
        collapsed={collapsed}
        backgroundColor="linear-gradient(178.1deg, rgb(60, 55, 106) 8.5%, rgb(23, 20, 69) 82.4%)"
      >
        <Menu>
          <Box
            display="flex"
            justifyContent="space-between"
            flexDirection="column"
          >
            <Box display="flex" flexDirection="column">
              <MenuItem
                onClick={() => setCollapsed(!collapsed)}
                icon={
                  <AccountCircleOutlinedIcon
                    style={{ color: colors.grey[100] }}
                  />
                }
                component={<Link to="/dashboard" />}
              >
                <Typography variant="h5">User</Typography>
              </MenuItem>
              <MenuItem
                icon={
                  <PlayCircleFilledOutlinedIcon
                    style={{ color: "#3354FB", fontSize: 24 }}
                  />
                }
              >
                <Typography variant="h5" color={colors.primary[400]}>
                  Play
                </Typography>
              </MenuItem>
              <MenuItem
                icon={
                  <BsDashLg
                    style={{ fontSize: 24, color: colors.primary[100] }}
                  />
                }
              >
                {" "}
              </MenuItem>
              <MenuItem
                icon={
                  <VisibilityRoundedIcon
                    style={{ fontSize: 24, color: colors.primary[100] }}
                  />
                }
              >
                <h4>Eye</h4>
              </MenuItem>
              <MenuItem icon={<RiSearchLine style={{ fontSize: 24 }} />}>
                <h4>Search</h4>
              </MenuItem>
              <MenuItem icon={<BsDashLg style={{ fontSize: 24 }} />}>
                {" "}
              </MenuItem>
              <MenuItem icon={<TbSocial style={{ fontSize: 24 }} />}></MenuItem>
              <MenuItem
                icon={<UpdateIcon style={{ fontSize: 24 }} />}
              ></MenuItem>
              <MenuItem
                icon={<RiFileListLine style={{ fontSize: 24 }} />}
              ></MenuItem>
              <MenuItem
                icon={<RiDatabase2Line style={{ fontSize: 24 }} />}
              ></MenuItem>
              <MenuItem icon={<BsDashLg style={{ fontSize: 24 }} />}>
                {" "}
              </MenuItem>
              <MenuItem
                icon={<RiArrowDropRightLine style={{ fontSize: 24 }} />}
              >
                {" "}
              </MenuItem>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center">
              <MenuItem
                icon={<CiSliderHorizontal style={{ fontSize: 24 }} />}
              ></MenuItem>
              <MenuItem>
                <img
                  alt="user"
                  src={profile}
                  width="26px"
                  height="26px"
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </MenuItem>
            </Box>
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default NavSideBar;
