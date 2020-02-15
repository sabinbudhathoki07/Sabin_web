from django.shortcuts import render, redirect
from furniture.authenticate import Authenticate
from furniture.models import User, CustomerText, Employee
from furniture.forms import UserForm, CustomerMessageForm, EmployeeForm


def index(request):
    return render(request, 'index.html')


def Employeeform(request):
    return render(request, 'Employeeform.html')


def login(request):
    return render(request, 'login.html')


def entry(request):
    request.session['Email_id'] = request.POST["Email_id"]
    request.session['password'] = request.POST["password"]
    if (request.session['Email_id'] == "admin@gmail.com"):
        if (request.session['password'] == "admin"):
            return redirect('/dashboard')
    else:
        customers = User.objects.get(Email_id=request.session['Email_id'])
        id = customers.Id
        return redirect("/customerdash/'" + str(id) + "'")


def signup(request):
    if request.method == "POST":
        form = UserForm(request.POST, request.FILES)
        form.save()
        return redirect('login')
    form = UserForm()
    return render(request, 'signup.html', {'form': form})


def dashboard(request):
    customerform = User.objects.all()
    message = CustomerText.objects.all()
    employee = Employee.objects.all()
    return render(request, 'dashboard.html', {'customerform': customerform, 'message': message, 'employee': employee})


@Authenticate.valid_user
def customerdash(request, id):
    customerdash = User.objects.get(Id=id)
    return render(request, 'customerdashboard.html', {'customerdash': customerdash})


def product(request):
    return render(request, 'product.html')


def CustomerMessage(request):
    if request.method == "POST":
        C_form = CustomerMessageForm(request.POST, request.FILES)
        C_form.save()
        return redirect('index')
    C_form = CustomerMessageForm()
    return render(request, 'index.html')


def EmployeeAddition(request):
    if request.method == "POST":
        employee = EmployeeForm(request.POST, request.FILES)
        employee.save()
        return redirect('dashboard')
    employee = EmployeeForm()
    return render(request, 'dashboard.html')


def edit(request, id):
    comemployee = Employee.objects.get(employee_id=id)
    return render(request, 'edit.html', {'comemployee': comemployee})


def update(request, id):
    comemployee = Employee.objects.get(employee_id=id)
    employee = EmployeeForm(request.POST, request.FILES, instance=comemployee)
    employee.save()
    return redirect('dashboard')


def delete(request, id):
    Employee.objects.get(employee_id=id)
    employee = Employee.objects.get(employee_id=id)
    employee.delete()
    return redirect('dashboard')


def response(request, id):
    CustomerText.objects.get(id=id)


def useredit(request, id):
    customerform = User.objects.get(Id=id)
    return render(request, 'useredit.html', {'customerform': customerform})


def userupdate(request, id):
    customerform = User.objects.get(Id=id)
    user = UserForm(request.POST, request.FILES, instance=customerform)
    user.save()
    return redirect("/customerdash/'" + str(id) + "'")


def userdelete(request, id):
    User.objects.get(Id=id)
    employee = User.objects.get(Id=id)
    employee.delete()
    return redirect('dashboard')
