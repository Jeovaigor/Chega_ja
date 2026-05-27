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

    iconSearch: {
        width: 18,
        height: 18,
        marginRight: 10, 
        tintColor: COLORS.dark_purple,
    },

    containerButtons: {
        flexDirection: "row",
        marginTop: 15,
        alignItems: "center",
        paddingHorizontal: 15, // paddingHorizontal em vez de marginHorizontal
        gap: 10,
    },

    btn: {
        width: 90,
        height: 24,
        paddingHorizontal: 16,  // largura flexível ao invés de fixa
        paddingVertical: 6,
        minHeight: 32,          // mínimo aceitável para botões pequenos/decorativos
        borderRadius: 999,      // pill shape sempre consistente
        backgroundColor: COLORS.dark_purple,
        justifyContent: "center",
        alignItems: "center",
    },

    textos: {
        color: COLORS.background_primary,  // color saiu do btn (View) e veio pro Text
        fontSize: 12,
        fontWeight: "400",
    },

    btnFilter: {
        width: 36,
        height: 36,
        borderRadius: 18,           // metade do width/height para círculo perfeito
        borderWidth: 1.5,
        borderColor: COLORS.dark_purple,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "auto",         // mantém o ícone na direita
    },

    iconFilter: {
        width: 15,
        height: 15,
        tintColor: COLORS.dark_purple,  // herda a cor do tema se for ícone SVG/PNG
    },

    divider: {
        height: 1,
        backgroundColor: COLORS.background_secondary, // ou uma cor mais suave, ex: "#E0E0E0"
        marginTop: 15,
        // opacity: 0.15,  // deixa a linha discreta
        marginHorizontal: 15,
    },
}