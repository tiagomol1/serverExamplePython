from socket import *

nomeServidor = 'localhost'
portaServidor = 12000

socketCliente = socket(AF_INET, SOCK_DGRAM)

mensagem = input("Mensagem : ")
mensagem = mensagem.encode()

socketCliente.sendto(mensagem, (nomeServidor, portaServidor))

mensagemAlterada, enderecoDeQuemEnviou = socketCliente.recvfrom(2048)

print("Mensagem recebida: ", mensagemAlterada)

socketCliente.close()