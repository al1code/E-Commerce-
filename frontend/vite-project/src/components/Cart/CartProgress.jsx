const CartProgress = () => {
  return (
    <div className="free-progress-bar">
      <p className="progress-bar-title">
        Ücretsiz kargo için <strong>500₺</strong>'lik ürün ekleyin!
      </p>
      <div className="progress-bar">
        <span className="progress"></span>
      </div>
    </div>
  );
};

export default CartProgress;
