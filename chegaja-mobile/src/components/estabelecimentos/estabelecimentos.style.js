import {COLORS, FONT_SIZE, FONT} from "../../constants/theme"

export const styles = {
    sectionEstabelecimentos: {
        marginHorizontal: 5,
    },

    titulo: {
        fontSize: 16,
        marginLeft: 15,
        fontWeight: "500",
        marginVertical: 10,
        // padding: 15
    },

    estabelecimento: {
        width: 100,
        height: 100,
        marginHorizontal: 5,
        marginVertical: 5,
        // paddingRight: 20,
        borderRadius: 12, 
        alignItems: "center",
        justifyContent: "center",
    },

    logotipo: {
        width: 40,
        height: 40,
    },

    descricao: {
        fontSize: FONT_SIZE.sm,
        textAlign: "center",
        marginTop: 8,
        fontWeight: "500"
    },
}