import NavbarComp from "./Components/NavbarComp";
import Footer from "./Components/Footer";
import './Cadastro.css';

function Cadastro() {
return (   
    <>
    <NavbarComp />
   <div className="Cadastrar">

   
            <div class="container" text-align="center">
                <h1 class="align-items-sm-center"> Cadastro</h1>
                <h2 class="subtitleCadastro">Informe seus dados, por favor</h2>
            
                <form class="mt-3">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <fieldset class="row gx-3">
                                <legend>Dados Pessoais</legend>
                                <div class="form-floating mb-3">
                                    <input class="form-control" type="text" id="txtNome" placeholder=" " autofocus />
                                    <label for="txtNome">Nome</label>
                                </div>
                                <div class="form-floating mb-3 col-md-6 col-xl-4">
                                    <input class="form-control" type="text" id="txtCPF" placeholder=" " />
                                    <label for="txtCPF">CPF</label>
                                </div>
                                <div class="form-floating mb-3 col-md-6 col-xl-4">
                                    <input class="form-control" type="date" id="txtDataNascimento" placeholder=" " />
                                    <label for="txtDataNascimento" class="d-inline d-sm-none d-md-inline d-lg-none">Data
                                        Nascimento</label>
                                    <label for="txtDataNascimento" class="d-none d-sm-inline d-md-none d-lg-inline">Data
                                        de Nascimento</label>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Contatos</legend>
                                <div class="form-floating mb-3 col-md-8">
                                    <input class="form-control" type="email" id="txtEmail" placeholder=" " />
                                    <label for="txtEmail">E-mail</label>
                                </div>
                                <div class="form-floating mb-3 col-md-6">
                                    <input class="form-control" placeholder=" " type="text" id="txtTelefone" />
                                    <label for="txtTelefone">Telefone</label>
                                </div>
                            </fieldset>
                        </div>
                        <div class="col-sm-12 col-md-6">
                            <fieldset class="row gx-3">
                                <legend>Endereço</legend>
                                <div class="form-floating mb-3 col-md-6 col-lg-4">
                                    <input class="form-control" type="text" id="txtCEP" placeholder=" " />
                                    <label for="txtCEP">CEP</label>
                                </div>
                                <div class="mb-3 col-md-6 col-lg-8 align-self-end">
                                    <textarea class="form-control text-muted bg-light"
                                        disabled>Digite o CEP para buscarmos o endereço.</textarea>
                                </div>
                                <div class="clearfix"></div>
                                <div class="form-floating mb-3 col-md-4">
                                    <input class="form-control" type="text" id="txtNumero" placeholder=" " />
                                    <label for="txtNumero">Número</label>
                                </div>
                                <div class="form-floating mb-3 col-md-8">
                                    <input class="form-control" type="text" id="txtComplemento" placeholder=" " />
                                    <label for="txtComplemento">Complemento</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input class="form-control" type="text" id="txtReferencia" placeholder=" " />
                                    <label for="txtReferencia">Referência</label>
                                </div>
                            </fieldset>
                            <fieldset class="row gx-3">
                                <legend>Senha de Acesso</legend>
                                <div class="form-floating mb-3 col-lg-6">
                                    <input class="form-control" type="password" id="txtSenha" placeholder=" " />
                                    <label for="txtSenha">Senha</label>
                                </div>
                                <div class="form-floating mb-3 col-lg-6">
                                    <input class="form-control" id="txtConfirmacaoSenha" placeholder=" " />
                                    <label class="form-label" for="txtConfirmacaoSenha">Confirmação da Senha</label>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                    <hr />
                    <div class="form-check mb-3" id="divDesejo">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Desejo receber informações sobre promoções.
                        </label>
                    </div>
                    <div class="mb-3 text-left" id="divConfirmar">
                        <a class="btn btn-lg btn-light btn-outline-danger" href="/">Cancelar</a>
                        <input type="button" value="Criar meu cadastro" class="btn btn-lg btn-danger"
                            onclick="window.location.href='/confirmarcadastro.html'" />
                    </div>

                </form>
            </div>
        




   </div>
   <Footer />
   </>
)}

export default Cadastro;