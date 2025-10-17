export default function CartHeader() {
  return (
    <div className="flex items-center w-full text-we-gray text-[14px] font-[700] ">
      <h1 className="w-full max-w-[280px] text-left">Produto</h1>
      <h1 className="w-full max-w-[348px] text-left">QTD</h1>
      <h1 className="w-full max-w-[348px] text-left">SUBTOTAL</h1>
      <div className="w-full max-w-[24px] h-[24px] min-w-[24px] min-h-[24px]" />
    </div>
  );
}
