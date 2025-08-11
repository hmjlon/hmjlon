export const makeClassName = (
  setting: string,
  _className?: string,
  numberOfLines?: number
) =>
  [
    setting,
    numberOfLines ? `line-clamp-${numberOfLines}` : "",
    _className,
  ].join(" ");
//"p-4" "text-3xl" 3
//className = "p-4" "text-3xl"line-clamp-3"
