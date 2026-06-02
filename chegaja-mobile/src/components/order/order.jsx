import { Image, View, Text } from "react-native-web";
import { styles } from "./order.style";

function Order({ logotipo, nome, valor, status, dataPedido, ultimoPedido }) {
    
    const dataFormatada = new Date(dataPedido).toLocaleDateString("pt-BR");
    const horaFormatada = new Date(dataPedido).toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
    });

    return (
         <View style={styles.card}>
            <View style={styles.cardTop}>
                <View style={styles.logoBox}>
                    <Image source={logotipo} style={styles.logoImage} />
                </View>
                <View style={styles.cardInfo}>
                    <Text style={styles.storeName}>{nome}</Text>
                    <Text style={styles.orderMeta}>{ultimoPedido}</Text>
                    <Text style={styles.orderMeta}>{dataFormatada} · {horaFormatada}</Text>
                </View>
            </View>
            <View style={styles.cardFooter}>
                <Text style={styles.status}>{status}</Text>
                <Text style={styles.value}>{valor}</Text>
            </View>
        </View>
    );
}

export default Order;