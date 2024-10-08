from django.urls import path
from . import views



urlpatterns = [
    path("cnab/", views.CreateListCnab.as_view())
]