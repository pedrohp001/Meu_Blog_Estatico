/**
 * Chaves de conexão ccom o Firebase.
 * ATENÇÃO! Sempre troque essas chaves pelas chaves do seu projeto.
 **/
const firebaseConfig = {
  apiKey: "AIzaSyBladGOpyg3xoPPYOp6a9vnJSpzLtahInY",
  authDomain: "meu-blog-estatico-e48c3.firebaseapp.com",
  projectId: "meu-blog-estatico-e48c3",
  storageBucket: "meu-blog-estatico-e48c3.firebasestorage.app",
  messagingSenderId: "936649434929",
  appId: "1:936649434929:web:16523d408bca26ec0c7210"
};

/**
 * Configuração do site;
 **/
const site = {

  /**
  * Nome do site usado na tag <title>...</title> e nas interações dinâmicas
  **/
  nome: "Meu Blog Estático",

  /**
   * Logotipo do site, usado na tag <header>...</title>
   */
  logo: "img/logo.png",

  /**
   * Controla a ação ao clicar no link do usuário logado no menu principal
   * Se `true`, exibe o perfil do usuário → perfil.html
   * Se `false`, faz logout direto
   **/
  verPerfil: true,

  /**
   * Ano de lançamento do site
   **/
  ano: 2025,

  /**
   * Licensa do site usada no rodapé
   **/
  licensa: `
    <i class="fa-regular fa-copyright fa-rotate-180 fa-fw"></i>
    <span>Copyleft <span id="footerAno"></span> Joca da Silva</span>
    `,

}

