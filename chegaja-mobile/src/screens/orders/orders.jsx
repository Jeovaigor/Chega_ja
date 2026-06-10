import { FlatList, SafeAreaView, Text, View } from "react-native-web";
import Title from "../../components/title/title";
import { estabelecimentos, pedidos } from "../../constants/dados";
import { styles } from "./orders.style";
import Order from "../../components/order/order";

function Orders() {
    return(
        <>
            <Title titulo="Pedidos"/>
            <SafeAreaView style={styles.container}>
                <View>
                    <View style={styles.divider} />  {/* linha horizontal */}

                    <FlatList data={pedidos}
                        keyExtractor={(pedido) => pedido.id}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item}) => {
                            return <Order 
                                logotipo={item.logotipo}
                                nome={item.nome}
                                valor={item.valor}
                                status={item.status}
                                dataPedido={item.dataPedido}
                                ultimoPedido={item.ultimoPedido}
                            />
                        }} 

                        contentContainerStyle={styles.containerList}

                        ListEmptyComponent={() => {
                            return (
                                <View>
                                    <Image source={icons.empty}/>
                                    <Text style={styles.emptyText}>Nenhum favorito encontrado</Text>
                                </View>
                            );
                        }}  
                    
                    />

                </View>

            </SafeAreaView>
        </>
    );
}

export default Orders;