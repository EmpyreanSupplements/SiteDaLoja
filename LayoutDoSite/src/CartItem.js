function CartItem({product}) {
  return (
    <li class="list-group-item py-3">
      <div class="row g-3">
        <div class="col-4 col-md-3 col-lg-2">
          <a href="#">
            <img src={product.produtoImg} class="img-thumbnail" />
          </a>
        </div>
        <div class="col-8 col-md-9 col-lg-7 col-xl-8 text-left align-self-center">
          <h4>
            <b>
              <a href="#" class="text-decoration-none text-danger">
                {product.produtoNome}
              </a>
            </b>
          </h4>
          <h5 class="descricaoTxt">
            {product.produtoDesc}
          </h5>
        </div>

        <div class="col-6 offset-6 col-sm-6 offset-sm-6 col-md-4 offset-md-8 col-lg-3 offset-lg-0 col-xl-2 align-self-center mt-3">
          <div class="input-group">
            <button class="btn btn-outline-dark btn-sm" type="button">
              <img src="plus-lg.svg" />
            </button>
            <input
              id="buttomPlus"
              type="text"
              class="form-control text-center border-dark"
              value="0"
            />
            <button class="btn btn-outline-dark btn-sm" type="button">
              <img src="dash.svg" />
            </button>
            <button
              class="btn btn-outline-danger border-dark btn-sm"
              type="button"
            >
              <i class="bi-trash">
                <img src="trash3.svg" />
              </i>
            </button>
          </div>
        </div>

        <div class="text-end mt-2">
          <span class="text-dark">Valor Item: R$ {product.produtoPreco} </span>
        </div>
      </div>
      <hr />
    </li>
  );
}

export default CartItem;