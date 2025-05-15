import { createStyles } from "antd-style"; // or your preferred method

export const useStyles = createStyles(() => ({
    dashboardWrapper: {
        padding: 40,
        backgroundColor: "#f8f9fc",
    },

    headerText: {
        marginBottom: 24,
    },

    motivation: {
        fontSize: 16,
        color: "#555",
        maxWidth: 480,
    },

    statCard: {
        textAlign: "center",
        backgroundColor: "#ffffff",
        borderRadius: 8,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
        padding: 24,
    },

    icon: {
        fontSize: 36,
        color: "#7b75aa", // matches theme from your landing page
        marginBottom: 8,
    },

    imageContainer: {
        padding: 16,
        maxWidth: "100%",
    },

    heroImage: {
        borderRadius: 12,
        objectFit: "cover",
        width: "100%",
        height: "auto",
    },

    ctaBanner: {
        marginTop: 40,
        background: "#eaf4fc",
        borderLeft: "4px solid #7b75aa",
        padding: 24,
        borderRadius: 6,
        display: "flex",
        alignItems: "center",
        gap: 16,
        flexWrap: "wrap",
    },

    heartIcon: {
        fontSize: 28,
        color: "#e25581",
    },

    ctaText: {
        fontSize: 16,
        color: "#333",
        margin: 0,
        maxWidth: 600,
    },
}));
