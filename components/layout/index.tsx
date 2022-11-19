import { AppBar, Container, Fade, IconButton, LinearProgress, Toolbar, Tooltip, Typography } from "@mui/material";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import styles from "./styles.module.scss";
import theme from "../theme";
import { GitHub } from "@mui/icons-material";

interface IProps extends React.PropsWithChildren {
  noContainer?: boolean;
  headerTitle: string | React.ReactNode;
  headerLink?: string;
  headerBlurb?: string | React.ReactNode;
  headerImage: string;
  headerImagePosition?: string | number;
}

const Layout: React.FC<IProps> = ({
  noContainer,
  headerTitle,
  headerLink,
  headerBlurb,
  headerImage,
  headerImagePosition,
  children,
}) => {
  const isXsDown = useMediaQuery(theme.breakpoints.down("xs"));
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));

  const [date, setDate] = useState(moment().format(isSmDown ? "MM/DD/1923 HH:mm:ss" : "MMMM DD, 1923 • hh:mm:ss A"));
  const [isRouting, setIsRouting] = useState(false);

  const router = useRouter();

  const handleRoutingEnd = () => {
    setIsRouting(false);
  };
  const handleRoutingStart = () => {
    setIsRouting(true);
  };

  useEffect(() => {
    setDate(moment().format(isSmDown ? "MM/DD/1923 HH:mm:ss" : "MMMM DD, 1923 • hh:mm:ss A"));

    router.events.on("routeChangeStart", handleRoutingStart);
    router.events.on("routeChangeComplete", handleRoutingEnd);

    const dateInterval = setInterval(() => {
      setDate(moment().format(isSmDown ? "MM/DD/1923 HH:mm:ss" : "MMMM DD, 1923 • hh:mm:ss A"));
    }, 1000);

    return () => {
      router.events.off("routeChangeStart", handleRoutingStart);
      router.events.off("routeChangeComplete", handleRoutingEnd);
      clearInterval(dateInterval);
    };
  }, [isSmDown]);

  const openGitHub = () => {
    open("https://github.com/ScribbleNerd/history-20s-website-project", "_blank");
  };

  return (
    <>
      <AppBar>
        <Toolbar>
          <Link href="/" style={{ flexGrow: 1 }}>
            <Typography variant="h6" component="h1">
              {isXsDown ? "TMR" : "The Monday Record"}
            </Typography>
          </Link>
          <Typography variant="body1">{date}</Typography>
          <Tooltip title="Check out our code!">
            <IconButton onClick={openGitHub} sx={{ margin: "0 8px" }}>
              <GitHub sx={{ color: "#ffffff" }} />
            </IconButton>
          </Tooltip>
        </Toolbar>
        <Fade in={isRouting}>
          <LinearProgress className="routing-progress" />
        </Fade>
      </AppBar>
      <LinkOrDiv href={headerLink}>
        <div
          className={styles.header}
          style={{ backgroundImage: `url(${headerImage})`, backgroundPosition: headerImagePosition }}
        >
          <div className={styles.headerBody}>
            <Typography variant="h2">{headerTitle}</Typography>
            {headerBlurb && <Typography variant="body1">{headerBlurb}</Typography>}
          </div>
        </div>
      </LinkOrDiv>
      {noContainer ? <div>{children}</div> : <Container className={styles.container}>{children}</Container>}
    </>
  );
};

const LinkOrDiv: React.FC<React.PropsWithChildren<{ href?: string }>> = ({ href, children }) => {
  if (href) {
    return <Link href={href}>{children}</Link>;
  } else {
    return <div>{children}</div>;
  }
};

export default Layout;
