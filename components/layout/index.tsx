import { AppBar, Container, Fade, LinearProgress, Toolbar, Typography } from "@mui/material";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";

interface IProps extends React.PropsWithChildren {
  headerTitle: string | React.ReactNode;
  headerLink?: string;
  headerBlurb?: string | React.ReactNode;
  headerImage: string;
}

const Layout: React.FC<IProps> = ({ headerTitle, headerLink, headerBlurb, headerImage, children }) => {
  const [dateFormat, setDateFormat] = useState("MMMM DD, 1923 • hh:mm:ss A");
  const [date, setDate] = useState(moment().format(dateFormat));

  const [isRouting, setIsRouting] = useState(false);

  const router = useRouter();

  const handleRoutingEnd = () => {
    setIsRouting(false);
  };
  const handleRoutingStart = () => {
    setIsRouting(true);
  };

  useEffect(() => {
    setDate(moment().format(dateFormat));

    router.events.on("routeChangeStart", handleRoutingStart);
    router.events.on("routeChangeComplete", handleRoutingEnd);

    const dateInterval = setInterval(() => {
      setDate(moment().format(dateFormat));
    }, 1000);

    console.log(window.innerWidth);
    if (window.innerWidth >= 500) {
      setDateFormat("MMMM DD, 1923 • hh:mm:ss A");
    } else {
      setDateFormat("MM/DD/1923 HH:mm:ss");
    }

    return () => {
      router.events.off("routeChangeStart", handleRoutingStart);
      router.events.off("routeChangeComplete", handleRoutingEnd);
      clearInterval(dateInterval);
    };
  }, [typeof window === "undefined" ? {} : window, typeof window === "undefined" ? 0 : window?.innerWidth, dateFormat]);

  return (
    <>
      <AppBar>
        <Toolbar>
          <Link href="/" style={{ flexGrow: 1 }}>
            <Typography variant="h6" component="h1">
              The Monday Record
            </Typography>
          </Link>
          <Typography variant="body1">{date}</Typography>
        </Toolbar>
        <Fade in={isRouting}>
          <LinearProgress className="routing-progress" />
        </Fade>
      </AppBar>
      <LinkOrDiv href={headerLink}>
        <div className={styles.header} style={{ backgroundImage: `url(${headerImage})` }}>
          <div className={styles.headerBody}>
            <Typography variant="h2">{headerTitle}</Typography>
            {headerBlurb && <Typography variant="body1">{headerBlurb}</Typography>}
          </div>
        </div>
      </LinkOrDiv>
      <Container className={styles.container}>{children}</Container>
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
