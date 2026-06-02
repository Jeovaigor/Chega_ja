import {COLORS, FONT, FONT_SIZE} from "../../constants/theme"

export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.background_primary,
        flexDirection: "column",
        // padding: 12
    },

    header: {
        height: 70,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
        // backgroundColor: COLORS.dark_purple,
    },

    titulo: {
        fontSize: FONT_SIZE.md,
        fontWeight: "600",
        color: COLORS.dark_purple,
    },

    divider: {
        height: 1,
        backgroundColor: COLORS.background_secondary, // ou uma cor mais suave, ex: "#E0E0E0"
        marginTop: 15,
        // opacity: 0.15,  // deixa a linha discreta
        marginHorizontal: 15,
    },
}