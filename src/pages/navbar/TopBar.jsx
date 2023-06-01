import { useContext } from "react";
import { useTheme } from "@material-ui/core/styles";
import { IconButton, Box, Select } from "@material-ui/core";

import {
  RiLayoutLeft2Line,
  RiLayoutRight2Line,
  RiLayoutBottom2Line,
  RiMoonLine,
  RiSunLine,
  RiGitCommitLine,
} from "react-icons/ri";

import { ColorModeContext } from "../../theme";

import OmicButton from "../../components/Button";

const TopBar = () => {
  const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box display="flex" alignItems="center">
        <Box mr={2}>
          <Select
            native
            value={""}
            onChange={() => {}}
            inputProps={{
              name: "project",
              id: "project-select",
            }}
          >
            <option value=""> Project name</option>
            <option value="project1">Project 1</option>
            <option value="project2">Project 2</option>
          </Select>
        </Box>
        <Box mr={2} border="1px solid #ced4da" borderRadius={4}>
          <Select
            native
            value={""}
            onChange={() => {}}
            inputProps={{
              name: "development",
              id: "development-select",
            }}
          >
            <option value="" aria-label="None">
              Development
            </option>
            <option value="dev1">Dev 1</option>
            <option value="dev2">Dev 2</option>
          </Select>
        </Box>
        <OmicButton
          size="small"
          variant="contained"
          startIcon={<RiGitCommitLine />}
        >
          Commit (2 files)
        </OmicButton>
      </Box>
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? <RiMoonLine /> : <RiSunLine />}
        </IconButton>
        <IconButton>
          <RiLayoutLeft2Line />
        </IconButton>
        <IconButton>
          <RiLayoutBottom2Line />
        </IconButton>
        <IconButton>
          <RiLayoutRight2Line />
        </IconButton>
      </Box>
    </Box>
  );
};
export default TopBar;
