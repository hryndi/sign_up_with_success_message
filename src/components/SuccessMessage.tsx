import { styled as styledMui } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SuccessIcon from "../assets/icon-success.svg";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const Main = styledMui(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  color: theme.palette.primary.main,
  fontWeight: "400",
  gap: 25,

  padding: "1rem",
  height: "100svh",
  display: "flex",
  flexDirection: "column",

  maxWidth: "500px",

  "@media (min-width:500px)": {
    height: "auto",
    borderRadius: "30px",
    paddingBlock: "3rem",
    paddingInline: "4rem",
  },
}));

const ContentWrapp = styled.div`
  display: grid;
  place-content: center;
  gap: 1.5rem;
  height: 100%;
`;

const STypography = styledMui(Typography)({
  fontSize: "2.5rem",
  marginTop: "1rem",

  "@media (min-width:500px)": {
    marginTop: "1rem",
    fontSize: "3.5rem",
  },
});

const SButton = styledMui(Button)({
  height: "55px",
  marginTop: "1rem",
  borderRadius: "10px",
});

const SuccessMessage = ({ value }: { value: string }) => {
  const navigate = useNavigate();
  return (
    <Main component="main">
      <ContentWrapp>
        <img src={SuccessIcon} alt="" />
        <STypography fontWeight={"bold"} lineHeight={1}>
          Thanks for subscribing!
        </STypography>

        <Typography variant="body1" fontWeight={400}>
          A confirmation email has been sent to <span style={{ fontWeight: "bold" }}>{value}</span>. Please open it and
          click the button inside to confirm your subscriotion{" "}
        </Typography>
      </ContentWrapp>
      <SButton variant="contained" onClick={() => navigate("/social_links_profile/")}>
        Dismiss message
      </SButton>
    </Main>
  );
};

export default SuccessMessage;
