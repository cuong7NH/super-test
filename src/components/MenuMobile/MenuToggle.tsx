import * as React from "react";
// @ts-ignore
import { motion, SVGMotionProps } from 'framer-motion';
import styled from 'styled-components'
import { useAppSelector } from '../../app/hooks'
import { selectThemeProvider } from '../../providers/ThemeProvider/themeProviderSlice'
import { THEME_OPTIONS } from '../../constant'
import { darkTheme, lightTheme } from '../../theme'

const Path = (props: JSX.IntrinsicAttributes & SVGMotionProps<SVGPathElement> & React.RefAttributes<SVGPathElement>) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

// @ts-ignore
export const MenuToggle = ({ toggle }) => {
  const themeProvider = useAppSelector(selectThemeProvider)

  return(
    <MenuToggleWrapper onClick={toggle} themeProvider={themeProvider}>
      <svg width="18" height="18" viewBox="0 0 23 23"  className={'menu-bar'}>
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
          }}
        />
      </svg>
    </MenuToggleWrapper>
  );
}
type StyledProps = {
  themeProvider: {
    theme: string,
  }
};

const MenuToggleWrapper = styled.button<StyledProps>`
  
  .menu-bar {
    Path {
      stroke: ${props => props.themeProvider.theme === THEME_OPTIONS.LIGHT ? lightTheme.highlightColor : darkTheme.highlightColor};
    }
  }


`