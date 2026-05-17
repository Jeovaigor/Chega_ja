import {COLORS, FONT, FONT_SIZE} from "../../constants/theme"

export const styles = {
    container: {
        width: "100%",
        marginTop: 20,
        alignItems: "center"
    },

    btn: {
        width: 180,
        backgroundColor: COLORS.dark_purple,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center"
    },

    textos: {
        fontSize: FONT_SIZE.sm,
        fontFamily: FONT.fonte_primary,
        color: "white",
        padding: 8,
        textAlign: "center",
        fontWeight: 400
    },
}