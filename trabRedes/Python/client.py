from socket import *

nomeServidor = 'localhost'
portaServidor = 12000

socketCliente = socket(AF_INET, SOCK_DGRAM)

status = True

while status == True:
    mensagem = input("Digite o código do Pacote que você quer consultar: ")
    mensagem = mensagem.encode()
    
    socketCliente.sendto(mensagem, (nomeServidor, portaServidor))
    
    retorno, enderecoDeQuemEnviou = socketCliente.recvfrom(2048)
    
    print("Mensagem recebida: ", retorno)

    sessaoOn = input("Permanecer conectado? (S)sim | (N)não \n")


    if sessaoOn == "n" or  sessaoOn == "N" :
        status = False
    
socketCliente.close()
