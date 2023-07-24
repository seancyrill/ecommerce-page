import { formatCurrency } from "./CurrencyFormater";
import { promoCal } from "./PromoCal";

export default function discountAndFormat (price: number, promo: number) {
    return formatCurrency(promoCal(price, promo))
} 