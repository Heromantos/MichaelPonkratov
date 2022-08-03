from django.db import models



# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=50)
    imageUrl = models.CharField(max_length=500)

    def __str__(self):
        return self.name
    

class Dish(models.Model):
    name = models.CharField(max_length=50) 
    price = models.IntegerField() 
    description = models.TextField()  
    imageUrl = models.CharField( max_length=500)
    isGlutenFree = models.BooleanField()
    isVegeterian = models.BooleanField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.category
    def __str__(self):
        return self.name    

class Orders(models.Model):    
    time = models.DateTimeField(auto_now_add=True) 
    first_name = models.CharField(max_length=200,null=True)
    last_name = models.CharField(max_length=200,null=True)
    address = models.CharField(max_length=200,null=True)
    phone = models.CharField(max_length=200,null=True)
    dishes = models.ManyToManyField(Dish)  
    def __str__(self):
        return self.first_name
    
