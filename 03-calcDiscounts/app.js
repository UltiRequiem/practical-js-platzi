const calcDescount = (price, descount) => (price * (100 - descount)) / 100;

const onClickButtonPriceDiscount = () => {
  const descountedPrice = calcDescount(
    document.getElementById("price").value,
    document.getElementById("discount").value,
  );

  document.getElementById(
    "result",
  ).innerText = `El precio con descuento son: $${descountedPrice}`;
};
