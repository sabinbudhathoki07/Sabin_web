from django import forms
from furniture.models import User, CustomerText, Employee


class UserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = "__all__"


class CustomerMessageForm(forms.ModelForm):
    class Meta:
        model = CustomerText
        fields = "__all__"


class loginform(forms.ModelForm):
    email = forms.EmailField(widget=forms.EmailField)
    password = forms.PasswordInput()

    class Meta:
        model = User
        fields = "__all__"


class EmployeeForm(forms.ModelForm):
    class Meta:
        model = Employee
        fields = "__all__"
