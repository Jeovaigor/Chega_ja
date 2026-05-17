import {COLORS, FONT, FONT_SIZE} from "../../constants/theme"

export const styles = {
    container: {
        flex: 1,
        width: "100%",
        // maxWidth: 400,
        paddingHorizontal: 30,
        paddingVertical: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.background_primary,
    },

    form: {
        width: "100%",
        marginBottom: 20,
    },

    formGroup: {
        width: "100%",
        marginVertical: 40
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