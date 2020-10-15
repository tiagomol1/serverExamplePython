from socket import *

portaServidor = 12000

socketServidor = socket(AF_INET, SOCK_DGRAM)
socketServidor.bind(('', portaServidor))

print("Servidor escutando porta 12000...")

pacotes = [
        {
            "codigo": 1,
            "situacao": "Coleta pendente",
            "dataSolicitacao": "05/05/2020",
            "dataPrevistaEntrega": "08/06/2020",
            "dataEntrega": ""
        },
        {
            "codigo": 2,
            "situacao": "Entregue",
            "dataSolicitacao": "02/05/2020",
            "dataPrevistaEntrega": "16/05/2020",
            "dataEntrega": "16/05/2020"
        },
        {
            "codigo": 3,
            "situacao": "A caminho",
            "dataSolicitacao": "02/05/2020",
            "dataPrevistaEntrega": "30/05/2020",
            "dataEntrega": ""
        },
    ]

while 1:
    mensagem, cliente = socketServidor.recvfrom(2048)
    mensagem = mensagem.decode()

    for pacote in pacotes:

        if str(mensagem) == str(pacote["codigo"]):
            retorno = str(pacote["situacao"])
            retorno = retorno.encode()
            socketServidor.sendto(retorno, cliente)

    retorno = "Pacote nao encontrado."
    retorno = retorno.encode()
    socketServidor.sendto(retorno, cliente)