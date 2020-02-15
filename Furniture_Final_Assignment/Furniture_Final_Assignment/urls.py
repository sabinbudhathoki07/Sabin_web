from django.contrib import admin
from django.urls import path
from furniture import views
from django.conf import settings # new
from django.conf.urls.static import static # new


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name="index"),
    path('signup', views.signup, name='signup'),
    path('Employeeform', views.Employeeform, name='Employeeform'),
    path('login', views.login, name='login'),
    path('entry', views.entry, name="entry"),
    path('dashboard', views.dashboard, name='dashboard'),
    path("customerdash/'<int:id>'", views.customerdash, name='customerdash'),
    path('product', views.product, name="product"),
    path("CustomerMessage", views.CustomerMessage, name='CustomerMessage'),
    path('EmployeeAddition', views.EmployeeAddition, name='EmployeeAddition'),
    path("edit/<int:id>", views.edit, name='edit'),
    path('update/<int:id>', views.update, name='update'),
    path('delete/<int:id>', views.delete, name='delete'),
    path('updatesignup/<int:id>', views.update, name='updatesignup'),

    path('useredit/<int:id>', views.useredit, name='useredit'),
    path('userupdate/<int:id>', views.userupdate, name='update'),
    path('userdelete/<int:id>', views.userdelete, name='delete'),

]

