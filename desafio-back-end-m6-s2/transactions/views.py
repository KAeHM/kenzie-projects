from rest_framework.views import Response, status, APIView
from .functions import cnab_parser
from .models import Transaction
from .serializers import TransactionSerializer
import ipdb


class CreateListCnab(APIView):
    

    def post(self, request):
        file_name = list(request.FILES.keys())[0]
        all_objects = cnab_parser(request.FILES[file_name])
        serializer = TransactionSerializer(data=all_objects, many=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()


        return Response(serializer.data ,status.HTTP_201_CREATED) 

    def get(self, request):
        obj = {}
        is_negative = [2, 3, 9]
        all_owners = Transaction.objects.values_list('store_name', 'value', 'transaction_type')

        for owner in all_owners:
            obj[owner[0]] = 0

        for owner in all_owners:
            obj[owner[0]] = obj[owner[0]] + owner[1] if owner[2] not in is_negative else obj[owner[0]] - owner[1]
        
        return Response(obj, status.HTTP_200_OK) 
