import { parse, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export function parseStringToDate(strDate, format) {
  return parse(strDate, format, new Date());
}

export function formatDate(date, formatStr) {
  return format(date, formatStr, {
    locale: ptBR,
  });
}
