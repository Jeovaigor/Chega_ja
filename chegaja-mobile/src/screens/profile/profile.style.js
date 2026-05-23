import {COLORS, FONT, FONT_SIZE} from "../../constants/theme.js"

export const styles = {
  safe: {
    flex: 1,
    backgroundColor: COLORS.background_primary,
  },

  scroll: {
    flex: 1,
  },

  scrollContent: {
    paddingBottom: 24,
  },
 
  // Perfil
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 18,
    marginTop: 20,
    backgroundColor: COLORS.background_primary,
  },

  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    marginRight: 14,
  },

  avatarPlaceholder: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: COLORS.background_secondary, // #D9D9D9
    marginRight: 14,
  },

  profileInfo: {
    flex: 1,
  },

  profileName: {
    color: COLORS.text_primary,       // #000
    fontSize: FONT_SIZE.sm,           // 14
    fontFamily: FONT.fonte_primary,   // Inter_400Regular
    fontWeight: '700',
    marginBottom: 1,
  },
  
  profileSub: {
    color: COLORS.text_third,         // #848484
    fontSize: FONT_SIZE.xsm,         // 11
    fontFamily: FONT.fonte_primary,
    lineHeight: 17,
  },
 
  // Menu
  menuContainer: {
    paddingHorizontal: 16,
    paddingTop: 8,
    gap: 4,                             // espaço entre cada card
  },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.background_secondary, // #D9D9D9
    borderRadius: 10,
    paddingHorizontal: 16,
    height: 56,
  },
  menuIcon: {
    width: 30,
    alignItems: 'center',
    marginRight: 14,
  },
  menuLabel: {
    flex: 1,
    color: COLORS.text_primary,       // #000
    fontSize: FONT_SIZE.sm,           // 14
    fontFamily: FONT.fonte_primary,
  },
  menuArrow: {
    color: COLORS.text_third,         // #848484
    fontSize: FONT_SIZE.sm,
  },
 
}