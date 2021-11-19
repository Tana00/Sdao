import { ReactComponent as HowItWorksIcon } from "../static/svgs/howItWorks.svg";
import { ReactComponent as SwapIcon } from "../static/svgs/swap.svg";
import { ReactComponent as ProvideLiquidityIcon } from "../static/svgs/provide_liquidity.svg";
import { ReactComponent as YieldFarmIcon } from "../static/svgs/yield_farm.svg";
import { ReactComponent as StakeUnbondedIcon } from "../static/svgs/stake.svg";
import { ReactComponent as LaunchPadIcon } from "../static/svgs/launchpad.svg";
import { ReactComponent as DynaSetsIcon } from "../static/svgs/dynasets.svg";

//  App Paths Config
export const APP_PATHS = {
  HOW_IT_WORKS: "/",
  SWAP: "/swap",
  PROVIDE_LIQUIDITY: "/pools",
  YIELD_FARM: "/farms",
  STAKE_UNBONDED: "/staking/unbonded",
  STAKE_BONDED: "/staking/bonded",
  LAUNCHPAD: "https://launchpad.singularitydao.ai/",
};

export const customButtonTypes = {
  primary: {
    variant: "contained",
    color: "primary",
  },
  secondary: {
    variant: "contained",
    color: "secondary",
  },
  outlined: {
    variant: "outlined",
  },
  text: {
    variant: "text",
  },
};

export const navigationTypes = {
  desktop: {
    variant: "permanent",
    anchor: "left",
    open: true,
  },
  mobile: {
    variant: "temporary",
    anchor: "left",
    open: true,
  },
};

// Navigation Menu
export const navigationMenu = [
  {
    label: "How it works",
    icon: HowItWorksIcon,
    path: APP_PATHS.HOW_IT_WORKS,
    disabled: false,
    badge: false,
  },
  {
    label: "Swap",
    icon: SwapIcon,
    path: APP_PATHS.SWAP,
    disabled: false,
    badge: false,
  },
  {
    label: "Provide Liquidity",
    icon: ProvideLiquidityIcon,
    path: APP_PATHS.PROVIDE_LIQUIDITY,
    disabled: false,
    badge: false,
  },
  {
    label: "Yield Farm",
    icon: YieldFarmIcon,
    path: APP_PATHS.YIELD_FARM,
    disabled: false,
    badge: false,
  },
  {
    label: "Stake (Bonded)",
    icon: StakeUnbondedIcon,
    path: APP_PATHS.STAKE_BONDED,
    disabled: false,
    badge: false,
  },
  {
    label: "Stake (Unbonded)",
    path: APP_PATHS.STAKE_UNBONDED,
    icon: StakeUnbondedIcon,
    disabled: false,
    badge: false,
  },
  {
    label: "Launchpad",
    icon: LaunchPadIcon,
    badge: false,
    path: APP_PATHS.LAUNCHPAD,
    disabled: false,
  },
  {
    label: "DynaSets",
    icon: DynaSetsIcon,
    badge: true,
    disabled: true,
  },
];
