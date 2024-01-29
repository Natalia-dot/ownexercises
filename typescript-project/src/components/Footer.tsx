import { IconAnchor } from "./IconAnchor";
import { FooterProps } from "../props/props";
import { StyledFooter } from "./styles/Footer/StyFooter";


export const Footer = (props: FooterProps) => {
  
  return (
    <StyledFooter {...props}>
      <IconAnchor href="https://www.linkedin.com/in/natalia-durante-09000a293/"
        src="https://res.cloudinary.com/drbssyzr7/image/upload/v1705601868/Portfolio/linkedin_k0fpsi.png"
        alt="Natalia's linkedin page"
      />
            <IconAnchor href="https://github.com/Natalia-dot?tab=repositories" id="github"
        src="https://res.cloudinary.com/drbssyzr7/image/upload/v1706545069/Portfolio/githubblack_lvmmog_c_crop_w_440_h_440_ar_1_1_pkakii.png"
        alt="Natalia's github page"
      />
    </StyledFooter>
  );
};
