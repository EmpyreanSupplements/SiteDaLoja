import "./Footer.css"

export function Footer() {
   return (
      <div>
      <div className="fot">
      <div className="secTitle">
                <h3 className="products">Empyrean Supplements</h3>
            </div>
            <section className="SessaoNos">
            <div className="cntr">
           <h3>Sobre nós:</h3>
           <p>Bem-vindo à sua loja! Como uma apaixonada entusiasta do fitness,
             nosssa empresa tem o prazer de ajudar você a encontrar os suplementos e acessórios perfeitos para apoiar seus objetivos!</p>
         </div>
         <div className="cntr">
            <h3>Produtos:</h3>
          <p className="pe">Suplementos</p><br></br>
           <p className="pe">Acessórios</p><br></br>
           <p className="pe">Moda esportiva</p>
         </div>
         <div className="cntr">
            <h3>Contate-nos:</h3>
           <a href="mailto:grupopp33@gmail.com">Email da empresa</a><br></br><br></br>
           <a href="https://github.com/EmpyreanSupplements">Github da empresa</a>
         </div>
         </section>
        </div>
    </div>
   )
}

export default Footer