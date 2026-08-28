import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommandItem } from '../../blog.types';

const COPY_FEEDBACK_MS = 1600;

@Component({
  selector: 'app-comandos-linux-essenciais-terminal',
  imports: [RouterLink, NgTemplateOutlet],
  templateUrl: './comandos-linux-essenciais-terminal.html',
  styleUrl: './comandos-linux-essenciais-terminal.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComandosLinuxEssenciaisTerminal {
  protected readonly copiedCommand = signal<string | null>(null);
  private resetTimer?: ReturnType<typeof setTimeout>;

  protected async copyCommand(command: string): Promise<void> {
    try {
      await navigator.clipboard.writeText(command);
    } catch {
      return;
    }

    this.copiedCommand.set(command);
    clearTimeout(this.resetTimer);
    this.resetTimer = setTimeout(() => this.copiedCommand.set(null), COPY_FEEDBACK_MS);
  }

  protected readonly navegacaoCommands: readonly CommandItem[] = [
    { command: 'pwd', description: 'Mostra o caminho completo da pasta atual.' },
    { command: 'ls', description: 'Lista os arquivos e pastas da pasta atual.' },
    { command: 'ls -la', description: 'Lista tudo, incluindo arquivos ocultos e detalhes de permissões.' },
    { command: 'cd pasta/', description: 'Entra na pasta informada.' },
    { command: 'cd ..', description: 'Volta uma pasta na hierarquia.' },
    { command: 'cd ~', description: 'Vai para o diretório pessoal do usuário.' },
    { command: 'mkdir nome/', description: 'Cria uma nova pasta com o nome informado.' },
    { command: 'touch arq.txt', description: 'Cria um arquivo vazio ou atualiza o timestamp.' },
    { command: 'cp a.txt b.txt', description: 'Copia um arquivo para outro local ou nome.' },
    { command: 'mv a.txt b.txt', description: 'Move ou renomeia um arquivo.' },
    { command: 'ln -s alvo link', description: 'Cria um link simbólico apontando para o alvo.' },
    { command: 'rm a.txt', description: 'Remove um arquivo (cuidado: irreversível).' },
    { command: 'rm -r pasta/', description: 'Remove a pasta e todo o seu conteúdo (cuidado!).' },
  ];

  protected readonly aptCommands: readonly CommandItem[] = [
    { command: 'sudo apt update', description: 'Atualiza a lista local de pacotes disponíveis.' },
    { command: 'sudo apt upgrade', description: 'Atualiza todos os pacotes já instalados.' },
    { command: 'sudo apt install nome', description: 'Instala um novo pacote pelo nome.' },
    { command: 'sudo apt remove nome', description: 'Remove um pacote instalado.' },
    { command: 'sudo apt purge nome', description: 'Remove o pacote e as configurações associadas.' },
    { command: 'sudo apt autoremove', description: 'Remove dependências que não são mais utilizadas.' },
    { command: 'sudo dpkg -i arq.deb', description: 'Instala manualmente um arquivo .deb local.' },
    {
      command: 'sudo apt install ./arq.deb',
      description: 'Instala um .deb resolvendo dependências automaticamente.',
    },
  ];

  protected readonly buscaCommands: readonly CommandItem[] = [
    { command: 'cat arq.txt', description: 'Mostra o conteúdo completo do arquivo no terminal.' },
    { command: 'less arq.txt', description: 'Visualiza o arquivo com paginação e scroll.' },
    { command: 'head arq.txt', description: 'Mostra as 10 primeiras linhas do arquivo.' },
    { command: 'tail arq.txt', description: 'Mostra as 10 últimas linhas do arquivo.' },
    { command: 'tail -f arq.log', description: 'Acompanha um arquivo de log em tempo real.' },
    { command: 'grep palavra arq', description: 'Busca linhas que contêm a palavra no arquivo.' },
    { command: 'find . -name "*.txt"', description: 'Encontra arquivos que combinam com o padrão de nome.' },
  ];

  protected readonly sistemaCommands: readonly CommandItem[] = [
    { command: 'top', description: 'Mostra processos em tempo real e consumo de CPU/RAM.' },
    { command: 'htop', description: 'Versão mais visual e interativa do top (requer instalação).' },
    { command: 'ps aux', description: 'Lista todos os processos em execução com detalhes.' },
    { command: 'kill PID', description: 'Encerra um processo específico pelo identificador.' },
    { command: 'xkill', description: 'Ativa um modo para fechar janela travada com um clique.' },
    { command: 'df -h', description: 'Mostra o uso de disco em formato legível (GB, MB etc.).' },
    { command: 'du -sh pasta/', description: 'Mostra o tamanho total de uma pasta.' },
    { command: 'free -h', description: 'Exibe uso e disponibilidade de memória RAM.' },
    { command: 'uname -a', description: 'Mostra informações do sistema operacional e do kernel.' },
    { command: 'uptime', description: 'Exibe há quanto tempo o sistema está ligado e a carga média.' },
    { command: 'whoami', description: 'Mostra o nome do usuário atualmente logado.' },
  ];

  protected readonly systemdCommands: readonly CommandItem[] = [
    { command: 'systemctl status nome', description: 'Mostra o status atual de um serviço.' },
    { command: 'systemctl restart nome', description: 'Reinicia um serviço.' },
    { command: 'systemctl enable nome', description: 'Faz o serviço iniciar automaticamente no boot.' },
    {
      command: 'journalctl -xe',
      description: 'Mostra os logs mais recentes do sistema; útil para investigar falhas.',
    },
  ];

  protected readonly redeCommands: readonly CommandItem[] = [
    { command: 'ping host', description: 'Testa a conectividade e a latência até um host.' },
    { command: 'curl -I url', description: 'Faz uma requisição e mostra só os cabeçalhos da resposta.' },
    { command: 'wget url', description: 'Baixa um arquivo diretamente pela linha de comando.' },
    { command: 'ssh usuario@host', description: 'Abre uma sessão remota via SSH.' },
    { command: 'scp arq usuario@host:/caminho', description: 'Copia um arquivo para uma máquina remota via SSH.' },
  ];

  protected readonly compactacaoCommands: readonly CommandItem[] = [
    { command: 'tar -czvf pasta.tar.gz pasta/', description: 'Compacta uma pasta em um arquivo .tar.gz.' },
    { command: 'tar -xzvf pasta.tar.gz', description: 'Extrai o conteúdo de um .tar.gz.' },
    { command: 'zip -r pasta.zip pasta/', description: 'Compacta uma pasta em um arquivo .zip.' },
    { command: 'unzip pasta.zip', description: 'Extrai o conteúdo de um arquivo .zip.' },
  ];

  protected readonly permissoesCommands: readonly CommandItem[] = [
    { command: 'sudo comando', description: 'Executa um comando com privilégios de superusuário.' },
    { command: 'su - usuario', description: 'Troca de usuário abrindo uma nova sessão de login.' },
    { command: 'chmod +x arq.sh', description: 'Torna um script executável adicionando permissão de execução.' },
    {
      command: 'chmod 755 arq.sh',
      description: 'Define permissões explícitas: dono pode tudo, os demais leem e executam.',
    },
    { command: 'chown usuario:grupo arq', description: 'Altera o dono e o grupo de um arquivo.' },
  ];

  protected readonly produtividadeCommands: readonly CommandItem[] = [
    { command: 'history', description: 'Mostra o histórico de comandos já digitados.' },
    { command: 'clear', description: 'Limpa a tela do terminal.' },
    { command: "alias gs='git status'", description: 'Cria um atalho personalizado para um comando frequente.' },
    { command: 'nano arq.txt', description: 'Abre um editor de texto simples diretamente no terminal.' },
    { command: 'man comando', description: 'Abre o manual oficial de um comando.' },
    { command: 'exit', description: 'Encerra a sessão atual do terminal ou do SSH.' },
  ];
}
