import datetime


def cnab_parser(file):
    array = []
    with open('newArchive.txt', 'wb+') as destination:
        for chunk in file.chunks():
            destination.write(chunk)

    with open('newArchive.txt') as destination:
        for line in destination:
            transaction_type = line[0]
            transfer_date = line[1:9]
            value = line[9:19]
            cpf = line[19:30]
            card = line[30:42]
            transfer_hour = line[42:48]
            store_owner = line[48:62]
            store_name = line[62:80]

            formated_date = datetime.datetime(int(transfer_date[0:4]), int(transfer_date[4:6]), int(transfer_date[6:8])).strftime("%Y-%m-%d")
            formated_hour = datetime.time(int(transfer_hour[0:2]), int(transfer_hour[2:4]), int(transfer_hour[4:6])).strftime("%H:%M:%S")

            newObj = {
            'transaction_type': int(transaction_type), 'transfer_date': formated_date, 'value': int(value), 
            "cpf": cpf, "card": card, "transfer_hour": formated_hour, "store_name": store_name, 
            "store_owner": store_owner
            }
            array.append(newObj)
    return array