import styled, { css } from "styled-components";
import { Camera } from "@styled-icons/bootstrap";
import { XboxConsole } from "@styled-icons/fluentui-system-filled";
import { Cpu } from "@styled-icons/remix-line";
import { Monitor } from "@styled-icons/material-twotone";
import { GridSmall } from "@styled-icons/boxicons-regular";
import { FilterRight } from "@styled-icons/bootstrap";
import { Search, Menu } from "@styled-icons/boxicons-regular";
import { ShoppingCartOutline } from "@styled-icons/evaicons-outline";

const iconCss = css`
  width: 1.5rem;
  height: 1.5rem;
`;

export const IconFilter = styled(FilterRight)`${iconCss}`

export const MenuIcon = styled(Menu)`
  ${iconCss}
`;

export const ShopIcon = styled(ShoppingCartOutline)`
  ${iconCss}
`;

export const SearchIcon = styled(Search)`
  ${iconCss}
`;

export const IconCamera = styled(Camera)`
  ${iconCss}
  color: #2E54FF;
`;

export const IconConsole = styled(XboxConsole)`
  ${iconCss}
  color:  #FB637E;
`;

export const IconCPU = styled(Cpu)`
  ${iconCss}
  color: #439F7E;
`;

export const IconMonitor = styled(Monitor)`
  ${iconCss}
  color: #00249C;
`;

export const IconAll = styled(GridSmall)`
  ${iconCss}
  color: #461E0A;
`;
