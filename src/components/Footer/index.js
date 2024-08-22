import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FooterContainer, FooterTitle, FooterList, FooterListItemText, FooterSocialIcons, FooterEmailContainer} from "../../styles/FooterStyles";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Email } from "@mui/icons-material";

export default function Footer() {
  return (
  
    <FooterContainer>
      <Grid container spacing={1} justifyContent="space-around">
        <Grid item md={3} lg={4}>
          <FooterTitle variant="body1">About us</FooterTitle>
          <Typography variant="caption2">
            We blend style and functionality with our premium bag collection. From luxurious leather to versatile travel options, each piece is crafted with meticulous attention to detail.
          </Typography>
        </Grid>
        <Grid item md={3} lg={2}>
          <FooterTitle variant="body1">Information</FooterTitle>
          <FooterList>
            <FooterListItemText>
              <Typography variant="caption2">About Us</Typography>
            </FooterListItemText>
            <FooterListItemText>
              <Typography variant="caption2">Order Tracking</Typography>
            </FooterListItemText>
            <FooterListItemText>
              <Typography variant="caption2">Privacy &amp; Policy</Typography>
            </FooterListItemText>
            <FooterListItemText>
              <Typography variant="caption2">Terms &amp; Conditions</Typography>
            </FooterListItemText>
          </FooterList>
        </Grid>

        <Grid item md={3} lg={2}>
          <FooterTitle variant="body1">My Account</FooterTitle>
       
          <FooterList>
  <FooterListItemText>
    <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Typography variant="caption2">LogIn</Typography>
    </Link>
  </FooterListItemText>
  <FooterListItemText>
    <Link to="/signup" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Typography variant="caption2">SignUp</Typography>
    </Link>
  </FooterListItemText>
  <FooterListItemText>
    <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Typography variant="caption2">Cart</Typography>
    </Link>
  </FooterListItemText>
  <FooterListItemText>
    <Link to="/favorites" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Typography variant="caption2">Favorites</Typography>
    </Link>
  </FooterListItemText>
</FooterList>

        </Grid>

        <Grid item md={3} lg={4}>
          <FooterTitle variant="body1">Mail Us</FooterTitle>
          <FooterEmailContainer>
            <Email sx={{ marginRight: 1 }} />
            <Typography>mybags@gmail.com</Typography>
          </FooterEmailContainer>
          <FooterSocialIcons>
            <FacebookIcon sx={{ mr: 3 }} />
            <TwitterIcon sx={{ mr: 3 }} />
            <InstagramIcon />
          </FooterSocialIcons>
        </Grid>
      </Grid>
    </FooterContainer>
   
  );
}
