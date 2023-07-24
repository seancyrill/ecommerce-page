export function promoCal(price: number, promo: number) {
    return price * (1 - promo/100)
  }