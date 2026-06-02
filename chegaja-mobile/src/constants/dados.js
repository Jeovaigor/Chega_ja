export const categorias = [
    {
        id: 1,
        descricao: "Mercado",
        icone: require("../assets/cat-mercado.png"),
        cor: "#C6FFA8"
    },
    {
        id: 2,
        descricao: "Fast Food",
        icone: require("../assets/cat-fastfood.png"),
        cor: "#FFAB87"
    },
    {
        id: 3,
        descricao: "Farmácia",
        icone: require("../assets/cat-farmacia.png"),
        cor: "#FFB5B5"
    },
    {
        id: 4,
        descricao: "Jantinha",
        icone: require("../assets/cat-churrasco.png"),
        cor: "#FFFFA3"
    },
];

export const banners = [
    {
        id: 1,
        descricao: "Pizzas",
        icone: require("../assets/banner1.png")
    },
    {
        id: 2,
        descricao: "Comida Saudável",
        icone: require("../assets/banner2.png")
    }
];

export const estabelecimentos = [
    {
        id: 1,
        nome: "Churrascaria e Pizzaria Boizão",
        endereco: "Alameda Santos, 954",
        logotipo: require("../assets/estabelecimento1.png")
    },
    {
        id: 2,
        nome: "The Keba’s Bar",
        endereco: "Rua Rui Barbosa, 512",
        logotipo: require("../assets/estabelecimento2.png")
    },
    // {
    //     id: 3,
    //     nome: "Sushi Prime",
    //     endereco: "Av. Brasil, 1200",
    //     logotipo: require("../assets/estabelecimento3.png")
    // },
    // {
    //     id: 4,
    //     nome: "Burger House",
    //     endereco: "Rua das Palmeiras, 78",
    //     logotipo: require("../assets/estabelecimento4.png")
    // }
];

export const recomendados = [
  {
    id: 1,
    nome: "Pizza Prime",
    descricao: "Pizza Grande + Refrigerante",
    valor: "R$ 49,90",
    logotipo: require("../assets/recomendado3.png"),
  },
  {
    id: 2,
    nome: "Burger House",
    descricao: "Combo Burger Duplo",
    valor: "R$ 32,90",
    logotipo: require("../assets/recomendado2.png"),
  },
//   {
//     id: 3,
//     nome: "Sushi Prime",
//     descricao: "Combo Sushi 40 peças",
//     valor: "R$ 69,90",
//     logotipo: require("../assets/recomendado3.png"),
//   },
//   {
//     id: 4,
//     nome: "Açaí Tropical",
//     descricao: "Açaí 700ml Completo",
//     valor: "R$ 24,90",
//     logotipo: require("../assets/recomendado4.png"),
//   },
];

export const recentes = [
  {
    id: 1,
    nome: "Pizza Prime",
    descricao: "Pedido realizado recentemente",
    endereco: "Av. Brasil, 1200",
    ultimoPedido: "2x Pizza Calabresa",
    valor: "R$ 49,90",
    logotipo: require("../assets/recente1.png"),
  },
  {
    id: 2,
    nome: "Burger House",
    descricao: "Pedido realizado recentemente",
    endereco: "Rua das Palmeiras, 78",
    ultimoPedido: "Combo Burger Duplo",
    valor: "R$ 32,90",
    logotipo: require("../assets/recente2.png"),
  },
//   {
//     id: 3,
//     nome: "Sushi Prime",
//     descricao: "Pedido realizado recentemente",
//     endereco: "Av. JK, 450",
//     ultimoPedido: "Combo Sushi 40 peças",
//     valor: "R$ 69,90",
//     logotipo: require("../assets/recente3.png"),
//   },
//   {
//     id: 4,
//     nome: "Açaí Tropical",
//     descricao: "Pedido realizado recentemente",
//     endereco: "Rua Central, 210",
//     ultimoPedido: "Açaí 700ml Completo",
//     valor: "R$ 24,90",
//     logotipo: require("../assets/recente4.png"),
//   },
];

export const pedidos = [
  {
    id: 1,
    nome: "Pizza Prime",
    descricao: "Pedido realizado recentemente",
    endereco: "Av. Brasil, 1200",
    ultimoPedido: "2x Pizza Calabresa",
    valor: "R$ 49,90",
    status: "Entregue",
    dataPedido: "2026-06-01T10:30:00",
    logotipo: require("../assets/recente1.png")
  },
  {
    id: 2,
    nome: "Burger House",
    descricao: "Pedido realizado recentemente",
    endereco: "Rua das Palmeiras, 78",
    ultimoPedido: "Combo Burger Duplo",
    valor: "R$ 32,90",
    status: "Em preparo",
    dataPedido: "2026-06-01T11:00:00",
    logotipo: require("../assets/recente2.png")
  }
];