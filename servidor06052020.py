from socket import *

portaServidor = 12000

socketServidor = socket(AF_INET, SOCK_DGRAM)
socketServidor.bind(('', portaServidor))

print("Servidor escutando porta 12000...")

while 1:
    mensagem, deOndeVeio = socketServidor.recvfrom(2048)

    mensagemAlterada = mensagem.upper()

    socketServidor.sendto(mensagemAlterada, deOndeVeio)
