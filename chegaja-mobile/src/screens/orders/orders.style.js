import {COLORS, FONT, FONT_SIZE} from "../../constants/theme"

export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.background_primary,
        flexDirection: "column",
        paddingHorizontal: 10,
        // paddingTop: 32,
    },

    divider: {
        height: 1,
        backgroundColor: "#ede8f7",
        marginTop: -10,
        marginBottom: 16,
    },

    containerList: {
        gap: 12,
        paddingBottom: 32,
    },

    emptyText: {
        fontSize: 15,
        color: "#888888",
        textAlign: "center",
        marginTop: 12,
    },
}