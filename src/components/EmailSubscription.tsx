import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled as styledMui } from "@mui/material/styles";
import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IllustrationImgMobi from "../assets/illustration-sign-up-mobile.svg";
import IllustrationImgDesk from "../assets/illustration-sign-up-desktop.svg";
import { useTheme } from "@mui/material/styles";
import BulletImg from "../assets/icon-list.svg";
import { ChangeEvent, useRef, useState } from "react";

const Main = styledMui(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  color: theme.palette.primary.main,
  fontWeight: "400",

  "@media (min-width:600px)": {
    padding: "1.4rem",
    borderRadius: "30px",
  },
}));

const SGridContainer = styledMui(Grid)({
  flexDirection: "column",
  maxWidth: "375px",
  "@media (min-width:600px)": {
    gap: 22,
    flexDirection: "row-reverse",
    maxWidth: "none",
  },
});

const InputField = styledMui(TextField)({
  marginBlock: "25px",
});

const Ul = styled.ul`
  margin-bottom: 0.9rem;
  list-style-image: url(${BulletImg});
  padding-left: 1.7rem;
  /* margin-block: 1rem; */
  color: ${(theme) => theme.color};
`;
const Li = styled.li`
  padding-left: 10px;
  padding-top: 11px;

  span {
    position: relative;
    top: -5px;
  }
`;

const SButton = styledMui(Button)({
  marginBottom: "1.5rem",
  height: "3.5rem",
  borderRadius: "6px",
});

const EmailSubscription = () => {
  const [errorr, setError] = useState(false);
  const [value, setValue] = useState("");
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.includes("@")) {
      setError(false);
    } else {
      setError(true);
    }
    console.log(errorr);
  };

  const theme = useTheme();
  return (
    <Main component="main">
      <SGridContainer container>
        <Grid item>
          <picture>
            <source media="(min-width:600px)" srcSet={IllustrationImgDesk} />
            <img src={IllustrationImgMobi} alt="illustration image" />
          </picture>
        </Grid>
        <Grid sx={{ padding: { xs: 3, md: 5 }, paddingBlock: { xs: 5 } }} item marginBlock={"auto"} maxWidth={"460px"}>
          <Box component="div" color={theme.palette.primary.main} fontWeight={400} display={"grid"}>
            <Typography
              variant="h2"
              sx={{
                fontSize: {
                  xs: "2.5rem",
                  md: "3.5rem",
                },
              }}
              fontWeight={600}
            >
              Stay updated!
            </Typography>
            <Typography variant="subtitle1" paddingBlock={2}>
              Join 60.000+ product managers receiving monthly updates on:
            </Typography>

            <Ul color={theme.palette.primary.main}>
              <Li>
                <span>Product discovery and building what matters</span>
              </Li>
              <Li>
                <span>Measuring to ensure updates are a succes</span>
              </Li>
              <Li>
                <span>And much more!</span>
              </Li>
            </Ul>
            <Box component="form" onSubmit={(e) => submitHandler(e)} display={"grid"} noValidate>
              <InputField
                id="outlined-password-input"
                required
                error={errorr}
                label="Email"
                type="email"
                autoComplete="email"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                helperText={errorr && "Please, input correct email"}
              />
              <SButton variant="contained" type="submit">
                Subscribe to montly newsletter
              </SButton>
            </Box>
          </Box>
        </Grid>
      </SGridContainer>
    </Main>
  );
};

export default EmailSubscription;