from django.db import models
from django.core.validators import MinLengthValidator
import uuid


class Transaction(models.Model):

    TYPES = (
        (1, 'Debito'),
        (2, 'Boleto'),
        (3, 'Financiamento'),
        (4, 'Credito'),
        (5, 'Recebimento Emprestimo'),
        (6, 'Vendas'),
        (7, 'Recebimento TED'),
        (8, 'Recebimento DOC'),
        (9, 'Aluguel'),
    )

    id = models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True)
    transaction_type = models.IntegerField(choices=TYPES)
    value = models.IntegerField()
    cpf = models.TextField(max_length=11, validators=[MinLengthValidator(11)])
    card = models.TextField(max_length=12, validators=[MinLengthValidator(12)])
    transfer_date = models.DateField()
    transfer_hour = models.TimeField()
    store_owner = models.TextField(max_length=56)
    store_name = models.TextField(max_length=86)


