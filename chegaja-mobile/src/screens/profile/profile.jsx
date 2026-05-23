import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './profile.style';
 
// ─── Ícones SVG como componentes leves (sem dependência externa) ──────────────
import Svg, { Path, Rect, Line, Circle, Polyline, Polygon } from 'react-native-svg';
 
const IconHeart = () => (
  <Svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <Path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </Svg>
);
 
const IconLocation = () => (
  <Svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <Path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
    <Circle cx={12} cy={10} r={3} />
  </Svg>
);
 
const IconStar = () => (
  <Svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <Polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </Svg>
);
 
const IconCard = () => (
  <Svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <Rect x={1} y={4} width={22} height={16} rx={2} ry={2} />
    <Line x1={1} y1={10} x2={23} y2={10} />
  </Svg>
);
 
const IconCoupon = () => (
  <Svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <Path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <Line x1={7} y1={7} x2={7.01} y2={7} strokeWidth={2.5} strokeLinecap="round" />
  </Svg>
);
 
const IconUser = () => (
  <Svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <Path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <Circle cx={12} cy={7} r={4} />
  </Svg>
);
 
const IconPhone = () => (
  <Svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <Rect x={5} y={2} width={14} height={20} rx={2} ry={2} />
    <Line x1={12} y1={18} x2={12.01} y2={18} strokeWidth={2.5} strokeLinecap="round" />
  </Svg>
);
 
// ─── Tab bar icons ─────────────────────────────────────────────────────────────
const IconHome = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <Path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <Polyline points="9 22 9 12 15 12 15 22" />
  </Svg>
);
 
const IconSearch = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round">
    <Circle cx={11} cy={11} r={8} />
    <Line x1={21} y1={21} x2={16.65} y2={16.65} />
  </Svg>
);
 
const IconList = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round">
    <Line x1={8}  y1={6}  x2={21} y2={6} />
    <Line x1={8}  y1={12} x2={21} y2={12} />
    <Line x1={8}  y1={18} x2={21} y2={18} />
    <Line x1={3}  y1={6}  x2={3.01} y2={6} />
    <Line x1={3}  y1={12} x2={3.01} y2={12} />
    <Line x1={3}  y1={18} x2={3.01} y2={18} />
  </Svg>
);
 
const IconPerson = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <Path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <Circle cx={12} cy={7} r={4} />
  </Svg>
);
 
// ─── Dados do menu ─────────────────────────────────────────────────────────────
const MENU_ITEMS = [
  { label: 'Lojas Favoritas',  screen: 'FavoriteStores', Icon: IconHeart   },
  { label: 'Endereços',        screen: 'Addresses',      Icon: IconLocation },
  { label: 'Avaliações',       screen: 'Reviews',        Icon: IconStar    },
  { label: 'Cartões',          screen: 'Cards',          Icon: IconCard    },
  { label: 'Cupons',           screen: 'Coupons',        Icon: IconCoupon  },
  { label: 'Editar perfil',    screen: 'EditProfile',    Icon: IconUser    },
  { label: 'Alterar telefone', screen: 'ChangePhone',    Icon: IconPhone   },
];
 
// ─── Componente MenuItem ───────────────────────────────────────────────────────
const MenuItem = ({ label, Icon, onPress, isLast }) => (
  <>
    <TouchableOpacity style={styles.menuRow} activeOpacity={0.6} onPress={onPress}>
      <View style={styles.menuIcon}>
        <Icon />
      </View>
      <Text style={styles.menuLabel}>{label}</Text>
      <Text style={styles.menuArrow}>{'>'}</Text>
    </TouchableOpacity>
    {!isLast && <View style={styles.divider} />}
  </>
);
 
// ─── Tela principal ────────────────────────────────────────────────────────────
export default function ProfileScreen() {
  const navigation = useNavigation();
 
  // Dados do usuário — substitua pelos dados reais da sua aplicação
  const user = {
    name:   '#Nome',
    phone:  '#Telefone',
    email:  '#Email',
    avatar: null, // URI da foto: 'https://...' ou require('./photo.png')
  };
 
  return (
    <SafeAreaView style={styles.safe}>
      {/* <StatusBar barStyle="dark-content" backgroundColor="#F2F2F2" /> */}
 
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Cabeçalho do perfil ── */}
        <View style={styles.profileHeader}>
          {user.avatar ? (
            <Image source={{ uri: user.avatar }} style={styles.avatar} />
          ) : (
            <View style={styles.avatarPlaceholder} />
          )}
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>{user.name}</Text>
            <Text style={styles.profileSub}>{user.phone}</Text>
            <Text style={styles.profileSub}>{user.email}</Text>
          </View>
        </View>
 
        {/* ── Menu ── */}
        <View style={styles.menuContainer}>
          {MENU_ITEMS.map((item, index) => (
            <MenuItem
              key={item.screen}
              label={item.label}
              Icon={item.Icon}
              isLast={index === MENU_ITEMS.length - 1}
              onPress={() => navigation.navigate(item.screen)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}