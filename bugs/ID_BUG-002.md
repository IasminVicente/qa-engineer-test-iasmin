# Registro de BUG

Arquivo: `/Bug/template-bug-report.md`

**Bug:** Tela de adicionar pessoa/participante não carrega ao acessar a URL diretamente

**Descrição:**

Ao tentar adicionar uma nova pessoa ou participante ao sistema , a tela de cadastro não é carregada e não há nenhum feedback visual ou mensagem de erro para o usuário. Isso gera incerteza sobre o funcionamento do sistema e impede a continuidade do fluxo de cadastro

**Cenário de Reprodução:**

1. Estar logado no sistema.
2. Acessar a tela de Adicione uma pessoa ou participante ao sistema
3. Aguardar o carregamento da página.

**Resultado Atual:**

A tela permanece em branco, não carregando corretamente. Não é exibida nenhuma mensagem de erro ou feedback para o usuário.

**Resultado Esperado:**

A tela Adicione uma pessoa ou participante ao sistema deve carregar corretamente, para que o usuário consiga seguir com o cadastro. 
Caso ocorra falha no carregamento, o sistema deve exibir uma mensagem de erro amigável informando que não foi possível abrir a tela.

**Evidência:**
![alt text](image-2.png)

**Hipótese Técnica:** Possível problema de roteamento da aplicação (rota /people/add não mapeada corretamente).

**Ambiente**: WEB

**Versão:** v3.1.1

**Sistema Operacional:** Windows

**Navegador:** Chrome
'