import React from "react"
import classnames from "classnames"
import { Box, makeStyles, Typography } from "@material-ui/core"
import HeaderWrapper from "../components/header/headerWrapper"
import { colors } from "../theme/colors"
import Footer from "../components/footer"

const useStyles = makeStyles({
    wrapper: {
        width: "100%",
    },
    wrapperContent: {
        width: "100%",
        backgroundColor: colors.white,
        color: colors.black,
        textAlign: "left",
        margin: "0 auto",
        padding: "10.5rem 16.875rem 10rem 16.875rem",
        "@media (min-width:768px) and (max-width:1024px)": {
            padding: "10.5rem 2rem 2rem 2rem",
        },
        "@media (max-width:767px)": {
            padding: "4rem 1rem 4rem 1rem",
        },
    },
    mainTitle: {
        fontFamily: "Forno-Trial",
        fontWeight: "900",
        fontSize: "3.125rem",
        lineHeight: "3.625rem",
        marginBottom: "2.5rem",
        "@media (max-width:767px)": {
            lineHeight: "2.5rem",
            fontSize: "2.5rem",
            marginTop: "4rem",
            marginBottom: "2rem",
        },
    },
    update: {
        lineHeight: "2rem",
    },
    title: {
        marginTop: "5rem",
        fontSize: "2rem",
        fontWeight: 900,
        lineHeight: "2",
        padding: "0 0 1rem 0",
        "@media (max-width:767px)": {
            lineHeight: "1.25",
            marginTop: "2.5rem",
        },
    },
    footer: {
        width: "100%",
        marginTop: 0,
    },
    persInfo: {
        marginBottom: "3rem",
        "@media (max-width:767px)": {
            marginBottom: "1rem",
        },
    },
})

const Cookies = () => {
    const classes = useStyles()
    return (
        <>
            <Box className={classes.wrapper}>
                <HeaderWrapper isScrollDetect={false} mobileMenuIconColor={colors.white} />
                <Box className={classes.wrapperContent}>
                    <Typography className={classes.mainTitle}>Cookie and privacy policy</Typography>
                    <Typography className={classes.update}>Last updated: (add date) </Typography>
                    <Typography className={classes.update}>
                        My Company (change this) (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;) operates
                        http://www.mysite.com (change this) (the &quot;Site&quot;). This page informs you of our
                        policies regarding the collection, use and disclosure of
                    </Typography>
                    <Typography className={classnames(classes.update, classes.persInfo)}>
                        Personal Information we receive from users of the Site.
                    </Typography>
                    <Typography className={classes.update}>
                        We use your Personal Information only for providing and improving the Site. By using the Site,
                    </Typography>
                    <Typography className={classes.update}>
                        you agree to the collection and use of information in accordance with this policy.
                    </Typography>
                    <Typography className={classes.title}>Information Collection and Use</Typography>
                    <Typography className={classes.update}>
                        While using our Site, we may ask you to provide us with certain personally identifiable
                        information that can be used to contact or identify you. Personally identifiable information may
                        include, but is not limited to your name (&quot;Personal Information&quot;).
                    </Typography>
                    <Typography className={classes.title}>Log data</Typography>
                    <Typography className={classes.update}>
                        Like many site operators, we collect information that your browser sends whenever you visit our
                        Site (&quot;Log Data&quot;).
                    </Typography>
                    <br />
                    <Typography className={classes.update}>
                        This Log Data may include information such as your computer&apos;s Internet Protocol
                        (&quot;IP&quot;) address, browser type, browser version, the pages of our Site that you visit,
                        the time and date of your visit, the time spent on those pages and other statistics.
                    </Typography>
                    <br />
                    <Typography className={classes.update}>
                        In addition, we may use third party services such as Google Analytics that collect, monitor and
                        analyze this …
                    </Typography>
                    <br />
                    <Typography className={classes.update}>
                        The Log Data section is for businesses that use analytics or tracking services in websites or
                        apps, like Google Analytics. For the full disclosure section, create your own Privacy Policy.
                    </Typography>
                    <Typography className={classes.title}>Communications</Typography>
                    <Typography>
                        We may use your Personal Information to contact you with newsletters, marketing or promotional
                        materials and other information that ...
                    </Typography>
                    <br />
                    <Typography className={classes.update}>
                        The Communications section is for businesses that may contact users via email (email
                        newsletters) or other methods. For the full disclosure section, create your own Privacy Policy.
                    </Typography>
                    <Typography className={classes.title}>Cookies</Typography>
                    <Typography className={classes.update}>
                        Cookies are files with small amount of data, which may include an anonymous unique identifier.
                        Cookies are sent to your browser from a web site and stored on your computer&apos;s hard drive.
                        Like many sites, we use &quot;cookies&quot; to collect information. You can instruct your
                        browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not
                        accept cookies, you may not be able to use some portions of our Site.
                    </Typography>
                    <Typography className={classes.title}>Security</Typography>
                    <Typography className={classes.update}>
                        The security of your Personal Information is important to us, but remember that no method of
                        transmission over the Internet, or method of electronic storage, is 100% secure. While we strive
                        to use commercially acceptable means to protect your Personal Information, we cannot guarantee
                        its absolute security.
                    </Typography>
                    <Typography className={classes.title}>Changes to this Privacy Policy</Typography>
                    <Typography className={classes.update}>
                        This Privacy Policy is effective as of (add date) and will remain in effect except with respect
                        to any changes in its provisions in the future, which will be in effect immediately after being
                        posted on this page.
                    </Typography>
                    <br />
                    <Typography className={classes.update}>
                        We reserve the right to update or change our Privacy Policy at any time and you should check
                        this Privacy Policy periodically. Your continued use of the Service after we post any
                        modifications to the Privacy Policy on this page will constitute your acknowledgment of the
                        modifications and your consent to abide and be bound by the modified Privacy Policy.
                    </Typography>
                    <br />
                    <Typography className={classes.update}>
                        If we make any material changes to this Privacy Policy, we will notify you either through the
                        email address you have provided us, or by placing a prominent notice on our website.
                    </Typography>
                    <Typography className={classes.title}>Contact us</Typography>
                    <Typography className={classes.update}>
                        If you have any questions about this Privacy Policy, please contact us.
                    </Typography>
                </Box>
                <Footer externalclass={classes.footer} />
            </Box>
        </>
    )
}

Cookies.propTypes = {}

export default Cookies
