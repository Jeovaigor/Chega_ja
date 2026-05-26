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

    containerSearch: {
        width: "100%",
        marginTop: -10,
    },

    inputWrapper: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLORS.background_textbox,
        marginHorizontal: 15,
        borderRadius: 10,
    },

    input: {
        flex: 1,
        padding: 10,
        color: COLORS.text_third,
        fontSize: FONT_SIZE.sm,
        fontFamily: FONT.fonte_primary,
        outlineStyle: "none"
    },

    searchIcon: {
        width: 18,
        height: 18,
        marginRight: 10,  // ✅ espaço da borda direita
        tintColor: COLORS.dark_purple,
    },

}