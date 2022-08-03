from django.shortcuts import render
from .models import Category,Dish,Orders
from .serializers import CategorySerializer,DishSerializer,OrdersSerializer
from rest_framework import viewsets

# Create your views here.
class CategoryView(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class DishView(viewsets.ModelViewSet):
    queryset = Dish.objects.all()
    serializer_class = DishSerializer

class OrdersView(viewsets.ModelViewSet):
    queryset = Orders.objects.all()
    serializer_class = OrdersSerializer