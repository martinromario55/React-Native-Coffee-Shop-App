import {
  Image,
  ImageProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import CustomIcons from './CustomIcons';

interface CartItemProps {
  id: string;
  name: string;
  imagelink_square: ImageProps;
  special_ingredient: string;
  roasted: string;
  prices: any;
  type: string;
  incrementCartItemQuantityHandler: any;
  decrementCartItemQuantityHandler: any;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  imagelink_square,
  special_ingredient,
  roasted,
  prices,
  type,
  incrementCartItemQuantityHandler,
  decrementCartItemQuantityHandler,
}) => {
  //   console.log('roasted', roasted);
  // console.log('prices', prices.length);
  return (
    <View>
      {prices.length != 1 ? (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
          style={styles.CartItemLinearGradient}>
          <View style={styles.CartItemRow}>
            <Image source={imagelink_square} style={styles.CartItemImage} />
            <View style={styles.CartItemInfo}>
              <View>
                <Text style={styles.CartItemTitle}>{name}</Text>
                <Text style={styles.CartItemSubtitle}>
                  {special_ingredient}
                </Text>
              </View>
              <View style={styles.CartItemRoastedContainer}>
                <Text style={styles.CartItemRoastedText}>{roasted}</Text>
              </View>
            </View>
          </View>
          {prices.map((data: any, index: any) => (
            <View
              key={index.toString()}
              style={styles.CartItemSizeRowContainer}>
              <View style={styles.CartitemSizeValueContainer}>
                <View style={styles.SizeBox}>
                  <Text
                    style={[
                      styles.SizeText,
                      {
                        fontSize:
                          type == 'Bean' ? FONTSIZE.size_12 : FONTSIZE.size_16,
                      },
                    ]}>
                    {data.size}
                  </Text>
                </View>
                <Text style={styles.SizeCurrency}>
                  {data.currency}{' '}
                  <Text style={styles.SizePrice}>{data.price}</Text>
                </Text>
              </View>
              <View style={styles.CartitemSizeValueContainer}>
                <TouchableOpacity
                  style={styles.CartItemIcon}
                  onPress={() => {
                    decrementCartItemQuantityHandler(id, data.size);
                  }}>
                  <CustomIcons
                    name="minus"
                    color={COLORS.primaryWhiteHex}
                    size={FONTSIZE.size_10}
                  />
                </TouchableOpacity>
                <View style={styles.CartItemQuantityConatiner}>
                  <Text style={styles.CartItemQuantityText}>
                    {data.quantity}
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.CartItemIcon}
                  onPress={() => {
                    incrementCartItemQuantityHandler(id, data.size);
                  }}>
                  <CustomIcons
                    name="add"
                    color={COLORS.primaryWhiteHex}
                    size={FONTSIZE.size_10}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </LinearGradient>
      ) : (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
          style={styles.CartItemSingleLinearGradient}>
          <View>
            <Image
              source={imagelink_square}
              style={styles.CartItemsSingleImage}
            />
          </View>
          <View style={styles.CartItemSingleInfoContainer}>
            <View>
              <Text style={styles.CartItemTitle}>{name}</Text>
              <Text style={styles.CartItemSubtitle}>{special_ingredient}</Text>
            </View>
            <View style={styles.CartItemSingleSizeValueContainer}>
              <View style={styles.SizeBox}>
                <Text
                  style={[
                    styles.SizeText,
                    {
                      fontSize:
                        type == 'Bean' ? FONTSIZE.size_12 : FONTSIZE.size_16,
                    },
                  ]}>
                  {prices[0].size}
                </Text>
              </View>
              <Text style={styles.SizeCurrency}>
                {prices[0].currency}{' '}
                <Text style={styles.SizePrice}>{prices[0].price}</Text>
              </Text>
            </View>
            <View style={styles.CartItemSingleQuantityContainer}>
              <TouchableOpacity
                style={styles.CartItemIcon}
                onPress={() => {
                  decrementCartItemQuantityHandler(id, prices[0].size);
                }}>
                <CustomIcons
                  name="minus"
                  color={COLORS.primaryWhiteHex}
                  size={FONTSIZE.size_10}
                />
              </TouchableOpacity>
              <View style={styles.CartItemQuantityConatiner}>
                <Text style={styles.CartItemQuantityText}>
                  {prices[0].quantity}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.CartItemIcon}
                onPress={() => {
                  incrementCartItemQuantityHandler(id, prices[0].size);
                }}>
                <CustomIcons
                  name="add"
                  color={COLORS.primaryWhiteHex}
                  size={FONTSIZE.size_10}
                />
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      )}
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  CartItemLinearGradient: {
    flex: 1,
    gap: SPACING.space_12,
    padding: SPACING.space_12,
    borderRadius: BORDERRADIUS.radius_25,
  },
  CartItemRow: {
    flex: 1,
    flexDirection: 'row',
    gap: SPACING.space_12,
  },
  CartItemImage: {
    height: 130,
    width: 130,
    borderRadius: BORDERRADIUS.radius_25,
  },
  CartItemInfo: {
    flex: 1,
    paddingVertical: SPACING.space_4,
    justifyContent: 'space-between',
  },
  CartItemTitle: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: SPACING.space_18,
    color: COLORS.primaryWhiteHex,
  },
  CartItemSubtitle: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: SPACING.space_12,
    color: COLORS.primaryLightGreyHex,
  },
  CartItemRoastedContainer: {
    height: 50,
    width: 50 * 2 + SPACING.space_20,
    borderRadius: BORDERRADIUS.radius_15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryDarkGreyHex,
  },
  CartItemRoastedText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: SPACING.space_10,
    color: COLORS.primaryWhiteHex,
  },
  CartItemSizeRowContainer: {
    flex: 1,
    alignItems: 'center',
    gap: SPACING.space_20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  CartitemSizeValueContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  SizeBox: {
    backgroundColor: COLORS.primaryBlackHex,
    height: 40,
    width: 80,
    borderRadius: BORDERRADIUS.radius_10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SizeText: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.secondaryLightGreyHex,
  },
  SizeCurrency: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryOrangeHex,
  },
  SizePrice: {
    color: COLORS.primaryWhiteHex,
  },
  CartItemIcon: {
    backgroundColor: COLORS.primaryOrangeHex,
    padding: SPACING.space_12,
    borderRadius: BORDERRADIUS.radius_10,
  },
  CartItemQuantityConatiner: {
    backgroundColor: COLORS.primaryBlackHex,
    width: 60,
    borderRadius: BORDERRADIUS.radius_10,
    borderWidth: 2,
    borderColor: COLORS.primaryOrangeHex,
    alignItems: 'center',
    paddingVertical: SPACING.space_4,
  },
  CartItemQuantityText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
  },
  CartItemSingleLinearGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SPACING.space_12,
    gap: SPACING.space_12,
    borderRadius: BORDERRADIUS.radius_25,
  },
  CartItemsSingleImage: {
    height: 150,
    width: 150,
    borderRadius: BORDERRADIUS.radius_20,
  },

  CartItemSingleInfoContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'space-around',
  },
  CartItemSingleSizeValueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  CartItemSingleQuantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
