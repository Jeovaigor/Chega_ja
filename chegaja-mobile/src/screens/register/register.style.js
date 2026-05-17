import {COLORS, FONT, FONT_SIZE} from "../../constants/theme"

export const styles = {
    container: {
        flex: 1,
        maxWidth: 400,
        // padding: 40,
        paddingHorizontal: 24,
        paddingVertical: 20,
        alignItems: "center",
        justifyContent: "center"
    },

    form: {
        width: "100%",
        marginBottom: 20,
    },

    formHorizontal: {
        flexDirection: "row"
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
    },

    form1: {
        width: "70%",
        marginBottom: 20,
        paddingRight: 10
    },

    form2: {
        width: "30%",
        marginBottom: 20
    }
}