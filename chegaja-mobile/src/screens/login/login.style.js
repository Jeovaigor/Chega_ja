import {COLORS, FONT, FONT_SIZE} from "../../constants/theme"

export const styles = {
    container: {
        flex: 1,
        padding: 40,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.background_primary
    },

    form: {
        width: "100%",
        marginBottom: 8
    },

    formGroup: {
        width: "100%",
        marginTop: 50,
        marginBottom: 50
    },

    footerText: {
        width: "100%",
        fontSize: FONT_SIZE.sm,
        color: COLORS.dark_purple,
        fontFamily: FONT.fonte_primary,
        textAlign: "center",
        marginTop: 10,
        textDecorationLine: "underline"
    }
}