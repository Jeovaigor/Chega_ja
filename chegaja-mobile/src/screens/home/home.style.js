import {COLORS, FONT, FONT_SIZE} from "../../constants/theme"

export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.background_primary,
        // padding: 12
    },

    header: {
        height: 70,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        backgroundColor: COLORS.dark_purple,
    },

    logo: {
        width: 170,
        height: 30
    },

    menuHamburguer: {
        width: 30,
        height: 30
    },

    info: {
        height: 60,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        marginVertical: 10
        
    },

    textSaudacao: {
        fontSize: 16
    },

    localizacao: {
        width: 180,
        height: 45,
        flexDirection: "row",
        padding: 10,
        borderRadius: 6,
        backgroundColor: COLORS.light_purple
    },

    iconLocalizacao: {
        marginRight: 8
    },

    textLocalizacao: {
        fontSize: 16,
        color: COLORS.dark_purple,
        fontWeight: 500
    }
}