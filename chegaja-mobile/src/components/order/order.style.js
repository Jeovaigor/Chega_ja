import {COLORS, FONT, FONT_SIZE} from "../../constants/theme"

export const styles = {
    card: {
        borderWidth: 1.5,
        borderColor: "#6B2FD9",
        borderRadius: 12,
        backgroundColor: "#ffffff",
        paddingHorizontal: 14,
        paddingTop: 12,
    },

    cardTop: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        marginBottom: 10,
    },

    logoBox: {
        width: 52,
        height: 52,
        borderRadius: 8,
        backgroundColor: "#ece6f5",
        alignItems: "center",
        justifyContent: "center",
    },

    logoImage: {
        width: 52,
        height: 52,
        borderRadius: 8,
    },

    cardInfo: {
        flex: 1,
        gap: 2,
    },

    storeName: {
        fontSize: 15,
        fontWeight: "700",
        color: "#1a1a1a",
    },

    orderMeta: {
        fontSize: 12,
        color: "#888888",
    },

    cardFooter: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderTopWidth: 1,
        borderTopColor: "#ede8f7",
        paddingVertical: 8,
        marginTop: 2,
    },

    status: {
        fontSize: 13,
        fontWeight: "500",
        color: "#6B2FD9",
    },

    value: {
        fontSize: 13,
        fontWeight: "600",
        color: "#6B2FD9",
    },
}