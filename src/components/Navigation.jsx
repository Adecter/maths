import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Outlet, Link } from "react-router-dom";
import {FormattedMessage, FormattedDate, FormattedNumber, FormattedPlural, FormattedTime} from 'react-intl';
import LangBar from "./LangBar";
import {Context} from "./Wrapper";

const Nav = styled.nav`

position: "absolute";
width:100%;
height:100px;

  padding: 0 20px;
  
  min-height: 9vh;
  background: var(--first-color);
  z-index: 10000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 960px) {
    position: fixed;
    z-index: 10000;
    width: 100%;
  }
 
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  z-index: 10000;
  
  li {
    margin: 0px 20px;
    
  }

  @media (max-width: 960px) {
    display: none;
  }
`;

const Item = styled.li`

`;

const StyledLink = styled(Link)`
  
  
  text-decoration: none;
  font-family: var(--body-font);
  color: var(--third-color);
  font-size: var(--h2-font-size);
  font-weight: --font-semibold;
  transition: all 0.3s;
  
  ::after {
    content: '';
    width: 0px;
    height: 2px;
    display: block;
    background: var(--third-color);
    opacity: 0.9;
    transition: 300ms;
  }
  
  :hover::after {
    width: 100%;
  }

  @media (max-width: 960px) {
    color: var(--third-color);
  }
`;

const Icon = styled.div`
  display: flex;
  gap: 20px;

  @media (min-width: 960px) {
    display: none;
  }
`;

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 960px) {
    display: none;
  }
`;

const TelIcon = styled.div`
  background: none;
  
  cursor: pointer;
  border: none;
  outline: none;
  svg{

    fill:${props => (props.home ? "#000000" : "#F2F5FA")};
    width:35px;
    height: 35px;
  }
  @media (min-width: 960px) {
    display: none;

  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: var(--third-color);
  transition: width 0.4s ease-in-out;
  
  :nth-child(2) {
    width: ${props => (props.open ? "40%" : "70%")};
  }
  :nth-child(3) {
    width: ${props => (props.open ? "40%" : "70")};
  }
`;

const Overlay = styled.div`
  position: fixed;
  // margin-top:100px;
  top:0;
  left:0;
  height: 100vh; 
  clip-path: ${props => (props.open ? "circle(132.1% at 94% 7%)" : "circle(0% at 100% 0%)")};
  -webkit-clip-path: ${props => (props.open ? "circle(132.1% at 94% 7%)" : "circle(0% at 100% 0%)")};
  z-index: ${props => (props.open ? "100" : "0")};
  width: 100vw;
  background: var(--first-color);
  transition: height 0.4s ease-in-out,  clip-path 0.4s ease-in-out, -webkit-clip-path 0.4s ease-in-out;

  @media (min-width: 960px) {
    display: none;
  }
`;
// ${props => (props.open ? "91vh" : 0)};
const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%);
  display: ${props => (props.open ? "static" : "none")};

  li {
    opacity: ${props => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`;

const Navigation = (props) => {
  const [toggle, toggleNav] = useState(false);

  const context = useContext(Context);

  useEffect(() => {

      document.body.style.overflow = toggle ? 'hidden' : 'scroll'

  }, [toggle])

  return (
    <>
    
      <Nav open={toggle} >
        <Link to='/' >
        <svg width="150" height="150" viewBox="0, 0, 400,400" stroke="none">
          <defs>  
              <linearGradient id="logo-gradient" x1="50%" y1="0%" x2="50%" y2="100%" > 
                  
                  <stop offset="0%" stopColor="#4066A5">
                      <animate attributeName="stop-color" values="#4066A5; #F2F5FA; #4066A5" dur="4s" repeatCount="indefinite"></animate>
                  </stop>

                  <stop offset="100%" stopColor="#F2F5FA">
                      <animate attributeName="stop-color" values="#F2F5FA; #4066A5; #F2F5FA" dur="4s" repeatCount="indefinite"></animate>
                  </stop>

              </linearGradient> 

          </defs>
          
          <g>
            <path fill="url('#logo-gradient')" d="M142.400 95.982 C 133.816 96.858,132.467 98.237,130.744 107.900 C 128.893 118.279,128.023 117.334,140.042 118.002 C 152.472 118.694,151.112 119.729,152.907 108.214 C 155.206 93.474,156.156 94.579,142.400 95.982 M15.789 126.904 C 17.916 129.626,18.363 131.159,19.489 139.600 C 27.105 196.698,24.542 192.240,49.993 192.665 C 83.139 193.218,80.508 195.721,85.636 158.743 C 90.502 123.645,90.742 124.601,76.936 124.129 L 68.105 123.827 67.642 126.513 C 66.192 134.936,61.610 168.084,61.603 170.200 C 61.594 172.956,58.923 174.005,52.600 173.737 L 46.400 173.474 46.398 170.937 C 46.395 167.766,41.929 136.941,40.728 131.797 C 39.257 125.505,37.083 124.501,24.106 124.122 L 13.370 123.808 15.789 126.904 M128.000 124.894 C 128.000 127.640,122.198 168.821,121.504 171.000 C 120.568 173.938,121.206 173.815,108.000 173.614 C 99.834 173.490,99.531 173.420,97.106 171.089 C 94.959 169.025,94.541 168.879,94.097 170.036 C 93.694 171.087,93.337 171.178,92.462 170.452 C 91.182 169.389,90.928 170.224,89.600 179.846 C 87.884 192.275,88.135 192.400,114.836 192.400 C 144.030 192.400,140.793 196.724,147.180 149.200 C 148.539 139.080,149.861 129.270,150.117 127.400 L 150.582 124.000 139.291 124.000 C 131.504 124.000,128.000 124.277,128.000 124.894 M157.250 126.497 C 158.620 129.146,158.291 133.074,154.776 156.000 C 150.704 182.562,150.403 187.638,152.729 190.511 L 154.258 192.400 185.870 192.400 C 226.718 192.400,222.201 195.685,226.884 162.578 C 232.191 125.054,232.171 124.933,220.525 124.207 C 210.989 123.612,209.909 123.997,209.380 128.189 C 209.143 130.065,207.865 139.160,206.540 148.400 C 205.216 157.640,203.892 167.063,203.599 169.340 C 202.952 174.368,204.007 174.066,188.200 173.750 L 175.200 173.490 175.200 170.944 C 175.200 169.544,176.280 161.019,177.600 152.000 C 181.754 123.616,182.001 124.116,163.779 124.035 L 155.959 124.000 157.250 126.497 M245.462 124.541 C 240.785 125.314,238.427 129.639,236.806 140.417 C 234.256 157.371,232.660 169.471,231.820 178.220 L 230.876 188.040 233.056 190.220 L 235.235 192.400 257.344 192.593 C 282.214 192.810,280.331 192.475,279.640 196.562 C 278.678 202.257,279.877 201.957,256.231 202.415 C 229.256 202.937,227.785 203.741,226.245 218.800 L 226.000 221.200 258.400 221.200 C 302.572 221.200,298.073 224.025,302.362 193.600 C 311.693 127.408,311.443 130.102,308.575 126.767 L 306.540 124.400 277.070 124.294 C 260.862 124.235,246.638 124.347,245.462 124.541 M319.137 125.400 C 318.979 128.911,319.338 137.365,319.711 138.900 C 320.528 142.269,323.163 142.685,345.200 142.926 L 366.000 143.152 366.000 145.776 L 366.000 148.400 343.459 148.800 C 314.436 149.315,315.544 148.671,312.808 166.613 C 309.984 185.137,309.930 187.365,312.242 190.052 L 314.261 192.400 345.366 192.400 C 385.760 192.400,382.092 194.817,386.037 165.600 C 386.721 160.540,387.982 151.493,388.840 145.496 C 391.291 128.366,390.983 126.282,385.791 124.839 C 379.987 123.228,319.212 123.739,319.137 125.400 M286.139 143.022 C 287.409 143.830,283.677 171.066,282.076 172.667 C 281.124 173.619,255.596 174.263,254.691 173.357 C 254.431 173.098,258.294 145.451,258.761 144.222 C 259.024 143.531,262.487 143.172,270.566 142.998 C 276.855 142.863,282.720 142.679,283.600 142.588 C 284.480 142.498,285.622 142.693,286.139 143.022 M363.049 169.351 C 363.353 171.482,360.356 174.708,358.673 174.062 C 358.011 173.808,352.279 173.600,345.935 173.600 C 333.496 173.600,332.781 173.292,335.128 168.947 C 336.414 166.566,362.707 166.946,363.049 169.351 M205.245 200.038 C 199.805 201.004,198.624 203.396,196.344 218.076 L 195.835 221.351 206.518 221.829 C 212.393 222.092,217.442 222.058,217.737 221.754 C 218.298 221.175,220.800 204.233,220.800 201.013 C 220.800 199.031,213.497 198.574,205.245 200.038 M205.409 227.824 C 195.618 228.039,195.203 228.117,194.828 229.824 C 194.284 232.304,191.604 250.794,188.799 271.424 C 186.339 289.524,185.953 290.954,182.553 294.600 L 180.501 296.800 188.611 296.800 C 203.815 296.800,206.935 295.225,208.739 286.643 C 210.969 276.034,217.251 228.040,216.438 227.824 C 215.977 227.701,211.014 227.701,205.409 227.824 M113.600 233.848 C 113.600 246.604,113.537 246.574,140.397 246.746 C 162.894 246.890,163.084 246.931,160.822 251.158 C 159.971 252.750,159.303 252.800,138.967 252.800 C 109.359 252.800,110.121 252.398,107.588 269.349 C 103.205 298.667,100.455 296.400,140.400 296.400 C 172.980 296.400,174.138 296.238,176.470 291.362 C 178.038 288.085,184.724 243.431,184.772 235.924 C 184.822 228.006,186.895 228.437,147.517 228.167 L 113.600 227.935 113.600 233.848 M231.405 228.894 C 226.489 230.314,225.374 234.514,220.744 269.087 C 218.105 288.789,217.766 290.183,214.605 294.327 L 212.520 297.061 222.922 296.563 C 237.541 295.864,239.796 294.306,241.101 284.000 C 243.640 263.944,245.903 249.711,246.765 248.372 C 247.769 246.811,248.519 246.748,264.815 246.867 C 295.759 247.092,297.000 246.558,298.862 232.200 L 299.406 228.000 266.703 228.072 C 248.716 228.112,232.832 228.482,231.405 228.894 M157.600 273.702 C 157.600 277.367,156.403 277.658,142.294 277.420 L 129.200 277.200 129.410 275.200 C 129.525 274.100,129.750 272.840,129.910 272.400 C 130.089 271.909,135.496 271.600,143.901 271.600 L 157.600 271.600 157.600 273.702 "></path>
          </g>
        </svg>
        </Link>
        <Menu>
          <Item >
              <StyledLink to='/'>
                Home
              </StyledLink>
          </Item>
          <Item>
              <StyledLink to='/about' >
                About
              </StyledLink>
          </Item>
          <Item>
            <StyledLink to='/news' >
              News
            </StyledLink>
          </Item>
          <Item>
            <StyledLink to='/teachers'>
              Teachers
            </StyledLink>
          </Item>
          <Item>
            <StyledLink to='/contacts' >
              Contacts
            </StyledLink>
          </Item>
          <Item>
            <LangBar/>
          </Item>
        </Menu>
        <Icon>
          <TelIcon>
          <select value = {context.locale} onChange={context.selectLanguage}>
          <option value= 'en'>EN</option>
          <option value= 'lv'>LV</option>
          <option value= 'ru'>RU</option>

        </select>
          </TelIcon>
          <NavIcon onClick={() => toggleNav(!toggle) }>
            <Line  open={toggle} />
            <Line  open={toggle} />
            <Line  open={toggle} />
          </NavIcon>
        </Icon>
        
      </Nav>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
        <Item>
              <StyledLink to='/' onClick={() => {toggleNav(!toggle)}}>
                Home
              </StyledLink>
          </Item>
          <Item>
              <StyledLink to='/about' onClick={() => {toggleNav(!toggle)}}>
                About
              </StyledLink>
          </Item>
          <Item>
            <StyledLink to='/news' onClick={() => {toggleNav(!toggle)}}>
              News
            </StyledLink>
          </Item>
          <Item>
            <StyledLink to='/teachers' onClick={() => {toggleNav(!toggle)}}>
              Teachers
            </StyledLink>
          </Item>
          <Item>
            <StyledLink to='/Contacts' onClick={() => {toggleNav(!toggle)}}>
              Contacts
            </StyledLink>
          </Item>
        </OverlayMenu>
      </Overlay>
      <Outlet />
    </>
  );
};

export default Navigation;