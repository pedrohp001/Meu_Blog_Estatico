/**
 * Configuração do site.
 * 
 * Essas são chaves de configuração global do site que permitem o 
 * reaproveitamento rápido do código.
 * 
 * Você pode adicionar novas chaves aqui conforme sua necessidade.
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
   * Se `false`, faz logout direto ← Útil durante o desenvolvimento
   **/
  verPerfil: true,

  /**
   * Ano de lançamento do site.
   * Usado na licensa do site no rodapé.
   **/
  ano: 2025,

  /**
   * Licensa do site usada no rodapé.
   * `span#footerAno` receberá o ano conforme `site.ano` acima.
   **/
  licensa: `
    <i class="fa-regular fa-copyright fa-rotate-180 fa-fw"></i>
    <span>Copyleft <span id="footerAno"></span> Joca da Silva</span>
    `,

  /**
  * Lista de tags HTML permitidas nos comentários.
  * Todas as outras tags html serão removidas.
  **/
  tagsPermitidasComentario: ['em', 'strong', 'i', 'b', 'sup', 'sub', 'code']
}

