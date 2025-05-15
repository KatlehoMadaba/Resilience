
import { createStyles } from "antd-style";
export const useStyles = createStyles(({ token }) => ({
    dashboardWrapper: {
        padding: token.paddingXL,
        background: `linear-gradient(180deg, ${token.colorBgLayout}, #ffffff)`,
        minHeight: "100vh",
        fontFamily: token.fontFamily,
    },

    headerText: {
        marginBottom: token.marginXL,
    },

    motivation: {
        fontSize: token.fontSizeLG,
        color: token.colorTextSecondary,
        maxWidth: 500,
        lineHeight: 1.7,
    },

    statCard: {
        textAlign: "center",
        background: `linear-gradient(135deg, #ffffff, #f6f4fb)`,
        borderRadius: token.borderRadiusLG,
        boxShadow: token.boxShadowSecondary,
        padding: token.paddingLG,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        ":hover": {
            transform: "scale(1.03)",
            boxShadow: "0 12px 28px rgba(123, 117, 170, 0.25)",
        },
    },

    icon: {
        fontSize: 38,
        color: token.colorPrimary,
        marginBottom: token.marginSM,
    },

    imageContainer: {
        padding: token.padding,
        width: "100%",
    },

    heroImage: {
        borderRadius: token.borderRadiusLG,
        objectFit: "cover",
        width: "100%",
        height: "auto",
        boxShadow: token.boxShadow,
    },

    ctaBanner: {
        marginTop: token.marginXXL,
        background: token.colorInfoBg,
        borderLeft: `5px solid ${token.colorPrimary}`,
        padding: token.paddingLG,
        borderRadius: token.borderRadiusLG,
        display: "flex",
        alignItems: "center",
        gap: token.margin,
        flexWrap: "wrap",
    },

    heartIcon: {
        fontSize: 28,
        color: "#e25581", // You could also use `token.colorSuccess`
    },

    ctaText: {
        fontSize: token.fontSizeLG,
        color: token.colorText,
        margin: 0,
        maxWidth: 600,
        lineHeight: 1.7,
    },
}));
