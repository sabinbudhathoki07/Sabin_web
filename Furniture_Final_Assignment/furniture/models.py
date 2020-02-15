from django.db import models



class User(models.Model):
    Id = models.AutoField(auto_created=True, primary_key=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    Email_id = models.EmailField(max_length=254)
    password = models.CharField(max_length=50)
    confirmPassword = models.CharField(max_length=50)
    image = models.ImageField(default='img.jpg')
    Gender_Male = 0
    Gender_Female = 1
    Gender_Other = 2
    GENDER_CHOICES = [(Gender_Male, 'Male'), (Gender_Female, 'Female'), (Gender_Other, 'other')]
    gender = models.IntegerField(choices=GENDER_CHOICES)


    class Meta:
        db_table: "furniture_user"




class CustomerText(models.Model):
    C_Id = models.AutoField(auto_created=True, primary_key=True)
    name = models.CharField(max_length=50)
    telefon = models.IntegerField()
    email = models.EmailField(max_length=30, unique=True)
    Describe = models.TextField(max_length=500)

    class Meta:
        db_table = "CustomerAsking"


class Employee(models.Model):
    employee_id = models.AutoField(auto_created=True, primary_key=True)
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=30)
    address = models.CharField(max_length=50)
    contact = models.CharField(max_length=20)
    email = models.EmailField(max_length=252, unique=True)

    class Meta:
        db_table = "employee"



